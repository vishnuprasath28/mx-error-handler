"use strict";

/**
 * audit.js — report-only scan of error-handling state.
 *
 * Writes an Excel-compatible CSV report into the project folder (next to
 * App.mpr), prints a short console summary, and exits 1 if any unwired
 * Custom handlers (CE0011) are present so CI can fail the build.
 *
 * Buckets:
 *   rollback         ON ERROR ROLLBACK;                 (default, unchanged)
 *   unwired          ON ERROR;                          (Custom without body — CE0011)
 *   customWithRb     ON ERROR { ... };                  (complete, Custom with rollback)
 *   customWithoutRb  ON ERROR WITHOUT ROLLBACK { ... }; (complete, keep DB changes)
 *   continue_        ON ERROR CONTINUE;                 (intentional swallow)
 */

const fs   = require("fs");
const path = require("path");
const log  = require("./logger");
const {
  listUserModules,
  listModuleMicroflows,
  describeMicroflow,
} = require("./mxcli-util");

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
  if (c.unwired > 0) return "broken";
  if (c.customWithRb + c.customWithoutRb + c.continue_ + c.rollback === 0) return "none";
  if (c.rollback > 0) return "rollback";
  return "ok";
}

// CSV cell escaping per RFC 4180.
function csvCell(v) {
  const s = String(v ?? "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function csvRow(cells) {
  return cells.map(csvCell).join(",") + "\r\n";
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
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

  const rows   = [];
  const totals = { rollback: 0, unwired: 0, customWithRb: 0, customWithoutRb: 0, continue_: 0 };
  let totalMicroflows  = 0;
  let brokenMicroflows = 0;
  const modulesWithIssues = new Set();

  for (const mod of modules) {
    let mfs;
    try { mfs = listModuleMicroflows(projectPath, mod); }
    catch (e) { log.error(`listing microflows for ${mod}: ${e.message}`); continue; }

    for (const mf of mfs) {
      totalMicroflows++;
      let mdl;
      try { mdl = describeMicroflow(projectPath, mf.qualifiedName); }
      catch (e) { log.error(`describing ${mf.qualifiedName}: ${e.message}`); continue; }

      const c      = classifyMdl(mdl);
      const status = microflowStatus(c);

      Object.keys(totals).forEach(k => { totals[k] += c[k]; });
      if (status === "broken")   { brokenMicroflows++; modulesWithIssues.add(mod); }
      if (status === "rollback")                       modulesWithIssues.add(mod);

      rows.push({
        module:          mod,
        microflow:       mf.name,
        qualified:       mf.qualifiedName,
        rollback:        c.rollback,
        unwired:         c.unwired,
        customWithRb:    c.customWithRb,
        customWithoutRb: c.customWithoutRb,
        continue_:       c.continue_,
        status,
      });
    }
  }

  // ── Build CSV ─────────────────────────────────────────────
  let csv = "";
  csv += csvRow([
    "Module", "Microflow", "Qualified Name",
    "Rollback", "Unwired (CE0011)",
    "Custom (with rollback)", "Custom (without rollback)",
    "Continue", "Status",
  ]);
  for (const r of rows) {
    csv += csvRow([
      r.module, r.microflow, r.qualified,
      r.rollback, r.unwired,
      r.customWithRb, r.customWithoutRb,
      r.continue_, r.status,
    ]);
  }
  csv += "\r\n";
  csv += csvRow(["Summary"]);
  csv += csvRow(["Microflows scanned",                 totalMicroflows]);
  csv += csvRow(["Modules with issues",                modulesWithIssues.size]);
  csv += csvRow(["Unwired (CE0011)",                   totals.unwired]);
  csv += csvRow(["Default rollback",                   totals.rollback]);
  csv += csvRow(["Custom with rollback (complete)",    totals.customWithRb]);
  csv += csvRow(["Custom without rollback (complete)", totals.customWithoutRb]);
  csv += csvRow(["Continue (swallow)",                 totals.continue_]);

  // ── Write CSV next to App.mpr ─────────────────────────────
  const projectDir = path.dirname(path.resolve(projectPath));
  const fileName   = `mx-error-handler-audit-${timestamp()}.csv`;
  const outPath    = path.join(projectDir, fileName);
  fs.writeFileSync(outPath, csv, "utf8");

  // ── Console summary ───────────────────────────────────────
  console.log();
  log.success(`Report saved: ${outPath}`);
  console.log(`  Microflows scanned : ${totalMicroflows}`);
  console.log(`  Modules with issues: ${modulesWithIssues.size}`);
  console.log(`  ✖ unwired (CE0011) : ${totals.unwired}`);
  console.log(`  ⚠ default rollback : ${totals.rollback}`);
  console.log(`  ✓ complete         : ${totals.customWithRb + totals.customWithoutRb}`);
  console.log(`  ↷ continue         : ${totals.continue_}`);
  console.log();

  if (totals.unwired > 0) {
    log.warn(`${totals.unwired} unwired Custom handler(s) will fail Mendix consistency (CE0011).`);
    log.warn(`Run: mx-error-handler patch ${allModules ? "--all-modules" : `--module ${moduleName}`} --project "${projectPath}"`);
    return 1;
  }
  if (totals.rollback > 0) {
    log.info(`${totals.rollback} activity/ies still use default Rollback. Consider patching if unintended.`);
  }
  return 0;
}

module.exports = { audit, classifyMdl };
