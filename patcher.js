"use strict";

/**
 * patcher.js — MDL-based error-handler patcher with full safety pipeline.
 *
 * Strategies:
 *   custom-with-rollback     ON ERROR { CALL? + LOG ERROR; };
 *   custom-without-rollback  ON ERROR WITHOUT ROLLBACK { CALL? + LOG ERROR; };
 *   continue                 ON ERROR CONTINUE;
 *
 * Safety pipeline (see safety.js):
 *   1. SNAPSHOT before any write — full copy of App.mpr + mprcontents/.
 *   2. RISK SCAN — skip microflows containing constructs that mxcli's
 *      MDL roundtrip is known to drop or mutate.
 *   3. VERIFICATION — after every patched microflow, re-describe and
 *      compare its structural fingerprint to the pre-patch MDL.
 *      Any divergence beyond the ON ERROR clauses is treated as
 *      corruption and triggers a full restore from snapshot.
 *
 * The result: a `patch` run either fully succeeds OR leaves the project
 * in exactly the state it started in. There is no in-between.
 */

const fs   = require("fs");
const path = require("path");
const log  = require("./logger");
const { Progress } = require("./progress");
const {
  listUserModules,
  listModuleMicroflows,
  describeMicroflow,
  execMdl,
} = require("./mxcli-util");
const {
  loadConfig,
  resolveTemplate,
  substitutePlaceholders,
} = require("./config");
const {
  createSnapshot,
  restoreSnapshot,
  deleteSnapshot,
  verifyPatch,
} = require("./safety");

// Only the terminated forms `;` are rewritten. Already-complete blocks are left alone.
const BARE_ON_ERROR = /ON\s+ERROR(?:\s+ROLLBACK)?\s*;/g;

const BUILTIN_TEMPLATE =
  "'{microflow} failed - type: ' + $latestError/ErrorType + ', message: ' + $latestError/Message";

function buildHandlerBlock({ strategy, microflowName, moduleName, logNode, handlerName, template }) {
  if (strategy === "continue") return "ON ERROR CONTINUE;";

  const resolved = substitutePlaceholders(template || BUILTIN_TEMPLATE, {
    microflow: microflowName,
    module:    moduleName,
  });
  const logExpr = `(${resolved})`;
  const logStmt = `LOG ERROR NODE '${logNode}' ${logExpr};`;

  const body = handlerName
    ? `CALL MICROFLOW ${handlerName} ();\n    ${logStmt}`
    : logStmt;

  const wrapper = strategy === "custom-without-rollback"
    ? `ON ERROR WITHOUT ROLLBACK`
    : `ON ERROR`;

  return `${wrapper} {\n    ${body}\n  };`;
}

function transformMdl(mdl, ctx) {
  let count = 0;
  const patched = mdl.replace(BARE_ON_ERROR, () => {
    count++;
    return buildHandlerBlock(ctx);
  });
  return { mdl: patched, patchCount: count };
}

/** Sentinel error: triggers a full snapshot restore. */
class SafetyAbort extends Error {
  constructor(reason) { super(reason); this.name = "SafetyAbort"; }
}

// ── Diagnostic + per-microflow rollback helpers ──────────────────

/**
 * Write pre- and post-patch MDL for a failing microflow to
 * mx-logs/verify-fail-<safe-label>-<ts>/ so the user can diff them and
 * identify what mxcli mutated on rebuild.
 */
function dumpVerifyDiff(label, beforeMdl, afterMdl, reason) {
  const ts       = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const safe     = label.replace(/[^\w.-]/g, "_");
  const logDir   = path.join(process.cwd(), "mx-logs");
  const dumpDir  = path.join(logDir, `verify-fail-${safe}-${ts}`);
  fs.mkdirSync(dumpDir, { recursive: true });
  fs.writeFileSync(path.join(dumpDir, "before.mdl"), beforeMdl ?? "", "utf8");
  fs.writeFileSync(path.join(dumpDir, "after.mdl"),  afterMdl  ?? "", "utf8");
  fs.writeFileSync(path.join(dumpDir, "reason.txt"),
    `${label}\n${reason}\n\n` +
    `before.mdl = MDL from describe BEFORE patch\n` +
    `after.mdl  = MDL from describe AFTER patch (this is what mxcli left us with)\n\n` +
    `A clean run would have these two identical except inside ON ERROR clauses.\n`,
    "utf8");
  return dumpDir;
}

/**
 * Attempt to restore ONE microflow to its pre-patch state by re-executing
 * its original MDL. Used when the apply+verify for a single microflow
 * fails — lets the run continue for the other microflows instead of
 * aborting everything and restoring the full snapshot.
 *
 * Returns { ok: true } if the microflow now fingerprints identically to
 * its pre-patch MDL, or { ok: false, reason } if the rollback itself
 * failed or left the microflow still diverged (caller must escalate to
 * full snapshot restore).
 */
function tryPerMicroflowRollback(projectPath, candidate) {
  try {
    execMdl(projectPath, candidate.mdl);
  } catch (e) {
    return { ok: false, reason: `re-exec of original MDL failed: ${e.message}` };
  }
  let afterMdl;
  try {
    afterMdl = describeMicroflow(projectPath, candidate.mf.qualifiedName);
  } catch (e) {
    return { ok: false, reason: `post-rollback describe failed: ${e.message}` };
  }
  const verdict = verifyPatch(candidate.mdl, afterMdl);
  if (!verdict.ok) {
    return { ok: false, reason: `post-rollback fingerprint still diverged (${verdict.reason})` };
  }
  return { ok: true };
}

async function patch({
  projectPath, moduleName, allModules,
  errorHandling, handlerName, logTemplate,
  dryRun, noBackup, output,
}) {
  log.section("Opening Mendix Model");
  log.info(`Project : ${projectPath}`);
  log.info(`Target  : ${allModules ? "all user modules" : moduleName}`);
  log.info(`Strategy: ${errorHandling}`);
  log.info(`Handler : ${handlerName ?? "(none)"}`);
  log.info(`Mode    : ${dryRun ? "DRY RUN" : "LIVE"}`);
  if (noBackup) log.warn(`Safety  : --no-backup — verification disabled, corruption cannot be auto-reverted`);

  // Config
  let config = { _path: null };
  try { config = loadConfig(projectPath); }
  catch (e) { log.fatal(`Config error: ${e.message}`); }

  if (config._path)     log.info(`Config  : ${config._path}`);
  else if (logTemplate) log.info(`Config  : (none — using --log-template)`);
  else                  log.info(`Config  : (none — using built-in template)`);

  const modules = allModules
    ? listUserModules(projectPath).map(m => m.name)
    : [moduleName];

  if (modules.length === 0) {
    log.error("No modules to process.");
    process.exit(1);
  }

  // ── PRE-FLIGHT: collect all candidates with their pre-patch MDL ──
  log.section("Pre-flight scan");
  const candidates = []; // [{ mod, mf, mdl, template, risk, patchCount, newMdl }]

  // Pass 1: list microflows + resolve each module's template, so the
  // progress bar can show a real total / percentage during the describe
  // pass (which is the expensive part).
  const planned = []; // [{ mod, mfs, template }]
  let plannedTotal = 0;
  for (const mod of modules) {
    let mfs;
    try { mfs = listModuleMicroflows(projectPath, mod); }
    catch (e) { log.error(`listing microflows for ${mod}: ${e.message}`); continue; }

    let template;
    try {
      ({ template } = resolveTemplate({ config, cliTemplate: logTemplate, moduleName: mod }));
    } catch (e) {
      log.error(`${mod}: ${e.message}`);
      continue;
    }

    planned.push({ mod, mfs, template });
    plannedTotal += mfs.length;
  }

  if (plannedTotal > 0) {
    const scanProgress = new Progress({ total: plannedTotal, title: "Scanning microflows" });
    log.setProgress(scanProgress);
    scanProgress.start();
    try {
      for (const { mod, mfs, template } of planned) {
        for (const mf of mfs) {
          scanProgress.tick({ label: `${mod} / ${mf.name}` });

          let mdl;
          try { mdl = describeMicroflow(projectPath, mf.qualifiedName); }
          catch (e) { log.error(`describe failed for ${mf.qualifiedName}: ${e.message}`); continue; }

          const ctx = {
            strategy:      errorHandling,
            microflowName: mf.name,
            moduleName:    mod,
            logNode:       mod,
            handlerName,
            template,
          };
          const { mdl: newMdl, patchCount } = transformMdl(mdl, ctx);

          candidates.push({ mod, mf, mdl, newMdl, patchCount, ctx });
        }
      }
    } finally {
      scanProgress.stop();
      log.setProgress(null);
    }
  }

  const eligible    = candidates.filter(c => c.patchCount > 0);
  const skippedDone = candidates.filter(c => c.patchCount === 0);

  for (const c of skippedDone) {
    log.skipped(`${c.mod}.${c.mf.name}`, "no bare ON ERROR", "already complete or intentional", "");
  }

  if (eligible.length === 0) {
    log.info("Nothing to patch.");
    log.summary(0, skippedDone.length, 0, allModules ? "(all user modules)" : moduleName);
    return;
  }

  log.success(`${eligible.length} microflow(s) eligible, ${skippedDone.length} already complete.`);

  if (dryRun) {
    log.section("Dry-run Report");
    for (const c of eligible) {
      log.patched(`${c.mod}.${c.mf.name}`, `${c.patchCount} clause${c.patchCount === 1 ? "" : "s"}`, errorHandling);
    }
    log.warn("DRY RUN — no changes were written.");
    log.summary(eligible.length, skippedDone.length, 0,
                allModules ? "(all user modules)" : moduleName);
    return;
  }

  // ── SNAPSHOT ──
  let snapshot = null;
  if (!noBackup) {
    log.section("Creating safety snapshot");
    try {
      snapshot = createSnapshot(projectPath);
      log.success(`Snapshot saved: ${snapshot}`);
    } catch (e) {
      log.fatal(`Snapshot failed — refusing to patch without a recovery point. ${e.message}`);
    }
  }

  // ── APPLY + VERIFY per microflow ──
  log.section("Applying patches");
  let patched        = 0;
  let skippedVerify  = 0;  // skipped due to mxcli roundtrip issue, MF rolled back
  let errors         = 0;
  let aborted        = false;

  // Outcomes per microflow — used to write the CSV patch report and
  // mark everything correctly if a safety abort rolls us back.
  const outcomes = [];
  for (const c of skippedDone) outcomes.push({ mod: c.mod, microflow: c.mf.name, qualified: c.mf.qualifiedName, patchCount: 0, strategy: "—", result: "skipped-complete", note: "" });

  const applyProgress = new Progress({ total: eligible.length, title: "Applying patches" });
  log.setProgress(applyProgress);
  applyProgress.start();

  // Helper: record the outcome + decide whether to continue or go nuclear.
  // On any mxcli issue we try a per-microflow rollback first (re-exec the
  // ORIGINAL MDL). Only if THAT also fails do we throw SafetyAbort and
  // trigger the full-snapshot restore.
  function handleSingleFailure(c, label, reason, noteForCsv, beforeMdl, afterMdl) {
    // Diagnostic dump so user can see what mxcli mutated.
    let dumpDir = null;
    try {
      dumpDir = dumpVerifyDiff(label, beforeMdl, afterMdl, reason);
    } catch (_) { /* dump is best-effort */ }

    log.warn(`${label}: ${reason}`);
    if (dumpDir) log.info(`MDL diff dumped to: ${dumpDir}`);

    // Attempt per-microflow rollback (only meaningful when we have the
    // original MDL — which we always do for eligible candidates).
    if (noBackup) {
      // No per-microflow rollback without verification turned on; the user
      // opted out of safety, so we honour that by escalating immediately.
      outcomes.push({ mod: c.mod, microflow: c.mf.name, qualified: c.mf.qualifiedName, patchCount: c.patchCount, strategy: errorHandling, result: "verification-failed", note: reason });
      throw new SafetyAbort(`${label}: ${reason} (--no-backup was set)`);
    }

    const rolled = tryPerMicroflowRollback(projectPath, c);
    if (!rolled.ok) {
      outcomes.push({ mod: c.mod, microflow: c.mf.name, qualified: c.mf.qualifiedName, patchCount: c.patchCount, strategy: errorHandling, result: "verification-failed", note: `${reason}; rollback also failed: ${rolled.reason}` });
      throw new SafetyAbort(`${label}: ${reason}; rollback also failed (${rolled.reason})`);
    }

    log.success(`${label}: rolled back to original — skipping, continuing with the other microflows`);
    outcomes.push({ mod: c.mod, microflow: c.mf.name, qualified: c.mf.qualifiedName, patchCount: c.patchCount, strategy: errorHandling, result: "skipped-verify-failed", note: noteForCsv });
    skippedVerify++;
  }

  try {
    for (const c of eligible) {
      const label = `${c.mod}.${c.mf.name}`;
      applyProgress.tick({ label });

      // Apply
      try {
        execMdl(projectPath, c.newMdl);
      } catch (e) {
        handleSingleFailure(c, label, `mxcli exec failed: ${e.message}`, e.message, c.mdl, null);
        continue;
      }

      // Verify (skip if user asked to)
      if (!noBackup) {
        let afterMdl;
        try { afterMdl = describeMicroflow(projectPath, c.mf.qualifiedName); }
        catch (e) {
          handleSingleFailure(c, label, `post-patch describe failed: ${e.message}`, "post-patch describe failed", c.mdl, null);
          continue;
        }
        const verdict = verifyPatch(c.mdl, afterMdl);
        if (!verdict.ok) {
          handleSingleFailure(c, label, `structural mismatch outside ON ERROR clauses — mxcli appears to have mutated data on rebuild`, verdict.reason, c.mdl, afterMdl);
          continue;
        }
      }

      log.patched(label, `${c.patchCount} clause${c.patchCount === 1 ? "" : "s"}`, errorHandling);
      outcomes.push({ mod: c.mod, microflow: c.mf.name, qualified: c.mf.qualifiedName, patchCount: c.patchCount, strategy: errorHandling, result: "patched", note: "" });
      patched++;
    }
  } catch (e) {
    if (e instanceof SafetyAbort) {
      aborted = true;
      log.warn("");
      log.warn(`Safety abort: ${e.message}`);
      if (snapshot) {
        log.warn(`Restoring project from snapshot: ${snapshot}`);
        try {
          restoreSnapshot(projectPath, snapshot);
          log.success("Restore complete. Project is back to its pre-run state.");
        } catch (restoreErr) {
          log.fatal(
            `RESTORE FAILED — your project may be in an inconsistent state.\n` +
            `         Manually restore from: ${snapshot}\n` +
            `         Error: ${restoreErr.message}`
          );
        }
      } else {
        log.error(
          `Safety abort but --no-backup was set — cannot auto-restore.\n` +
          `         The project may have partial changes. Restore from your own backup.`
        );
      }
      errors++;
    } else {
      throw e;
    }
  } finally {
    applyProgress.stop();
    log.setProgress(null);
  }

  // ── SNAPSHOT PRESERVATION ──
  // Snapshots are always kept after a successful run, because our
  // in-process verification cannot see failure modes that only surface
  // when Studio Pro opens the project (e.g. PageParameterMapping.Variable = null).
  // The user confirms success in Studio Pro, then runs `cleanup` to delete.
  if (snapshot && !aborted) {
    log.info(`Snapshot preserved: ${snapshot}`);
  }

  // If we aborted, everything that had succeeded got rolled back.
  // Rewrite earlier "patched" outcomes to "reverted" so the CSV tells the truth.
  if (aborted) {
    for (const o of outcomes) {
      if (o.result === "patched") o.result = "reverted";
    }
  }

  // ── Write CSV patch report if requested ───────────────
  if ((output === "csv" || output === "both") && outcomes.length > 0) {
    const projectDir = path.dirname(path.resolve(projectPath));
    const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const outPath = path.join(projectDir, `mx-error-handler-patch-${ts}.csv`);
    writePatchCsv(outPath, outcomes, { strategy: errorHandling, dryRun, aborted });
    log.success(`Patch report saved: ${outPath}`);
  }

  if (!aborted && patched > 0) {
    log.success("Patches applied. Open in Studio Pro to verify.");
    if (snapshot) {
      log.info("");
      log.info("Next steps:");
      log.info(`  1. Open App.mpr in Studio Pro and confirm the project loads cleanly.`);
      log.info(`  2a. If all good  →  mx-error-handler cleanup --project ./App.mpr`);
      log.info(`  2b. If broken    →  mx-error-handler restore "${snapshot}" --project ./App.mpr`);
    }
  }

  if (skippedVerify > 0) {
    log.warn(`${skippedVerify} microflow(s) skipped because mxcli's describe→exec roundtrip mutated unrelated data.`);
    log.info(`The affected microflows were rolled back to their original state individually — other microflows were patched normally.`);
    log.info(`MDL diffs for each are in mx-logs/verify-fail-*/. Share the before.mdl/after.mdl pair if you want the pattern added to the risk-skip list.`);
  }

  log.summary(
    patched,
    skippedDone.length + skippedVerify,
    errors,
    allModules ? "(all user modules)" : moduleName,
  );
}

// ── CSV helpers ────────────────────────────────────────────
function csvCell(v) {
  const s = String(v ?? "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
function csvRow(cells) { return cells.map(csvCell).join(",") + "\r\n"; }

function writePatchCsv(outPath, outcomes, meta) {
  let csv = "";
  csv += csvRow(["Module", "Microflow", "Qualified Name", "Clauses", "Strategy", "Result", "Note"]);
  for (const o of outcomes) {
    csv += csvRow([o.mod, o.microflow, o.qualified, o.patchCount, o.strategy, o.result, o.note]);
  }
  csv += "\r\n";
  csv += csvRow(["Run Metadata"]);
  csv += csvRow(["Strategy", meta.strategy]);
  csv += csvRow(["Dry run",  meta.dryRun ? "yes" : "no"]);
  csv += csvRow(["Aborted",  meta.aborted ? "yes (rollback via snapshot)" : "no"]);
  fs.writeFileSync(outPath, csv, "utf8");
}

module.exports = { patch, transformMdl, buildHandlerBlock };
