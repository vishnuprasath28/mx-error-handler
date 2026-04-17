"use strict";

/**
 * audit.js — report-only scan of error-handling state across microflows.
 *
 * Classifies every `ON ERROR` clause inside each microflow of the target
 * module(s) into one of five buckets:
 *
 *   rollback         ON ERROR ROLLBACK;                 (default, still unchanged)
 *   unwired          ON ERROR;                          (Custom without body — CE0011)
 *   customWithRb     ON ERROR { ... };                  (complete, Custom with rollback)
 *   customWithoutRb  ON ERROR WITHOUT ROLLBACK { ... }; (complete, keep DB changes)
 *   continue_        ON ERROR CONTINUE;                 (intentional swallow)
 *
 * Exit code:
 *   0  No `unwired` handlers anywhere.
 *   1  At least one `unwired` handler found (CE0011 — will fail runtime checks).
 */

const log = require("./logger");
const {
  listUserModules,
  listModuleMicroflows,
  describeMicroflow,
} = require("./mxcli-util");

/** Classify every ON ERROR clause in the given MDL text. */
function classifyMdl(mdl) {
  const counts = { rollback: 0, continue_: 0, unwired: 0, customWithRb: 0, customWithoutRb: 0 };
  const re = /ON\s+ERROR(\s+WITHOUT\s+ROLLBACK|\s+ROLLBACK|\s+CONTINUE)?\s*(\{|;)/g;
  let m;
  while ((m = re.exec(mdl)) !== null) {
    const mod  = (m[1] || "").trim().toUpperCase();
    const term = m[2];
    if (mod === "WITHOUT ROLLBACK" && term === "{") counts.customWithoutRb++;
    else if (mod === "ROLLBACK" && term === ";")    counts.rollback++;
    else if (mod === "CONTINUE" && term === ";")    counts.continue_++;
    else if (mod === "" && term === "{")            counts.customWithRb++;
    else if (mod === "" && term === ";")            counts.unwired++;
  }
  return counts;
}

function microflowStatus(c) {
  if (c.unwired > 0) return "broken";                                      // CE0011
  if (c.customWithRb + c.customWithoutRb + c.continue_ + c.rollback === 0)
    return "none";                                                          // no ON ERROR clauses
  if (c.rollback > 0) return "rollback";                                    // default, possibly intentional
  return "ok";
}

function paintStatus(status) {
  const C = { reset: "\x1b[0m", red: "\x1b[31m", yellow: "\x1b[33m", green: "\x1b[32m", dim: "\x1b[2m" };
  switch (status) {
    case "broken":   return `${C.red}✖ broken${C.reset}`;
    case "rollback": return `${C.yellow}⚠ rollback${C.reset}`;
    case "ok":       return `${C.green}✓ ok${C.reset}`;
    case "none":     return `${C.dim}– none${C.reset}`;
  }
  return status;
}

function pad(s, w) {
  const visible = s.replace(/\x1b\[[0-9;]*m/g, "");
  return s + " ".repeat(Math.max(0, w - visible.length));
}

async function audit({ projectPath, moduleName, allModules }) {
  log.section("Error-handling audit");
  log.info(`Project : ${projectPath}`);
  log.info(`Target  : ${allModules ? "all user modules" : moduleName}`);

  const modules = allModules
    ? listUserModules(projectPath).map(m => m.name)
    : [moduleName];

  if (modules.length === 0) {
    log.warn("No user modules found.");
    return 0;
  }

  // Header
  const COL = { mod: 22, mf: 34, counts: 10, status: 14 };
  const header =
    pad("Module", COL.mod) +
    pad("Microflow", COL.mf) +
    pad("Rollback", COL.counts) +
    pad("Unwired", COL.counts) +
    pad("CustWRb", COL.counts) +
    pad("CustNoRb", COL.counts) +
    pad("Continue", COL.counts) +
    pad("Status", COL.status);
  console.log("\n" + header);
  console.log("─".repeat(header.length));

  const totals = { rollback: 0, unwired: 0, customWithRb: 0, customWithoutRb: 0, continue_: 0 };
  let totalMicroflows = 0;
  let brokenMicroflows = 0;
  let modulesWithIssues = new Set();

  for (const mod of modules) {
    let mfs;
    try { mfs = listModuleMicroflows(projectPath, mod); }
    catch (e) { log.error(`listing microflows for ${mod}: ${e.message}`); continue; }

    for (const mf of mfs) {
      totalMicroflows++;
      let mdl;
      try { mdl = describeMicroflow(projectPath, mf.qualifiedName); }
      catch (e) { log.error(`describing ${mf.qualifiedName}: ${e.message}`); continue; }

      const c = classifyMdl(mdl);
      Object.keys(totals).forEach(k => { totals[k] += c[k]; });

      const status = microflowStatus(c);
      if (status === "broken")   { brokenMicroflows++; modulesWithIssues.add(mod); }
      if (status === "rollback")                       modulesWithIssues.add(mod);

      // Only list microflows that have any ON ERROR clauses — skip pure "none" to reduce noise
      if (status === "none") continue;

      console.log(
        pad(mod, COL.mod) +
        pad(mf.name, COL.mf) +
        pad(String(c.rollback), COL.counts) +
        pad(String(c.unwired), COL.counts) +
        pad(String(c.customWithRb), COL.counts) +
        pad(String(c.customWithoutRb), COL.counts) +
        pad(String(c.continue_), COL.counts) +
        pad(paintStatus(status), COL.status)
      );
    }
  }

  // Summary
  const totalClauses = Object.values(totals).reduce((a, b) => a + b, 0);
  console.log("\n" + "─".repeat(48));
  console.log(`  Microflows scanned : ${totalMicroflows}`);
  console.log(`  Modules with issues: ${modulesWithIssues.size}`);
  console.log(`  ON ERROR clauses   : ${totalClauses}`);
  console.log(`    ✖ unwired         (CE0011)           : ${totals.unwired}`);
  console.log(`    ⚠ default rollback                    : ${totals.rollback}`);
  console.log(`    ✓ custom + rollback (complete)        : ${totals.customWithRb}`);
  console.log(`    ✓ custom without rollback (complete)  : ${totals.customWithoutRb}`);
  console.log(`    ↷ continue (swallow)                  : ${totals.continue_}`);
  console.log("─".repeat(48) + "\n");

  if (totals.unwired > 0) {
    log.warn(`${totals.unwired} unwired Custom handler(s) will fail Mendix consistency (CE0011).`);
    log.warn(`Run: node mx-error-handler.js patch ${allModules ? "--all-modules" : `--module ${moduleName}`} --project "${projectPath}"`);
    return 1;
  }
  if (totals.rollback > 0) {
    log.info(`${totals.rollback} activity/ies still use default Rollback. Consider patching if unintended.`);
  }
  return 0;
}

module.exports = { audit, classifyMdl };
