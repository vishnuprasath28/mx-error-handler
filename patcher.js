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

const log = require("./logger");
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
  checkRoundtripRisk,
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

async function patch({
  projectPath, moduleName, allModules,
  errorHandling, handlerName, logTemplate,
  dryRun, noBackup, keepBackup, force,
}) {
  log.section("Opening Mendix Model");
  log.info(`Project : ${projectPath}`);
  log.info(`Target  : ${allModules ? "all user modules" : moduleName}`);
  log.info(`Strategy: ${errorHandling}`);
  log.info(`Handler : ${handlerName ?? "(none)"}`);
  log.info(`Mode    : ${dryRun ? "DRY RUN" : "LIVE"}`);
  if (noBackup)   log.warn(`Safety  : --no-backup — risky patches will not be auto-revertible`);
  if (keepBackup) log.info(`Safety  : --keep-backup — snapshot will be preserved on success`);
  if (force)      log.warn(`Safety  : --force — risky-pattern check disabled`);

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

    for (const mf of mfs) {
      let mdl;
      try { mdl = describeMicroflow(projectPath, mf.qualifiedName); }
      catch (e) { log.error(`describe failed for ${mf.qualifiedName}: ${e.message}`); continue; }

      const risk = force ? null : checkRoundtripRisk(mdl);

      const ctx = {
        strategy:      errorHandling,
        microflowName: mf.name,
        moduleName:    mod,
        logNode:       mod,
        handlerName,
        template,
      };
      const { mdl: newMdl, patchCount } = transformMdl(mdl, ctx);

      candidates.push({ mod, mf, mdl, newMdl, patchCount, risk, ctx });
    }
  }

  const eligible    = candidates.filter(c => !c.risk && c.patchCount > 0);
  const skippedRisk = candidates.filter(c =>  c.risk);
  const skippedDone = candidates.filter(c => !c.risk && c.patchCount === 0);

  // Report skipped microflows up front
  for (const c of skippedRisk) {
    log.skipped(`${c.mod}.${c.mf.name}`, "risky construct", "skipped (use --force to override)", c.risk);
  }
  for (const c of skippedDone) {
    log.skipped(`${c.mod}.${c.mf.name}`, "no bare ON ERROR", "already complete or intentional", "");
  }

  if (eligible.length === 0) {
    log.info("Nothing to patch.");
    log.summary(0, skippedRisk.length + skippedDone.length, 0, allModules ? "(all user modules)" : moduleName);
    return;
  }

  log.success(`${eligible.length} microflow(s) eligible to patch, ${skippedRisk.length} skipped as risky, ${skippedDone.length} already done.`);

  if (dryRun) {
    log.section("Dry-run Report");
    for (const c of eligible) {
      log.patched(`${c.mod}.${c.mf.name}`, `${c.patchCount} clause${c.patchCount === 1 ? "" : "s"}`, errorHandling);
    }
    log.warn("DRY RUN — no changes were written.");
    log.summary(eligible.length, skippedRisk.length + skippedDone.length, 0,
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
  let patched = 0;
  let errors  = 0;
  let aborted = false;

  try {
    for (const c of eligible) {
      const label = `${c.mod}.${c.mf.name}`;

      // Apply
      try {
        execMdl(projectPath, c.newMdl);
      } catch (e) {
        log.error(`exec failed for ${label}: ${e.message}`);
        throw new SafetyAbort(`mxcli exec failed on ${label}`);
      }

      // Verify (skip if user asked to)
      if (!noBackup) {
        let afterMdl;
        try { afterMdl = describeMicroflow(projectPath, c.mf.qualifiedName); }
        catch (e) {
          log.error(`post-patch describe failed for ${label}: ${e.message}`);
          throw new SafetyAbort(`could not verify ${label} after patch`);
        }
        const verdict = verifyPatch(c.mdl, afterMdl);
        if (!verdict.ok) {
          log.error(`verification FAILED for ${label}: ${verdict.reason}`);
          throw new SafetyAbort(`verification failed on ${label}`);
        }
      }

      log.patched(label, `${c.patchCount} clause${c.patchCount === 1 ? "" : "s"}`, errorHandling);
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
  }

  // ── CLEANUP ──
  if (snapshot && !aborted) {
    if (keepBackup) {
      log.info(`Snapshot preserved at: ${snapshot}`);
    } else {
      try { deleteSnapshot(snapshot); }
      catch (e) { log.warn(`Could not delete snapshot ${snapshot}: ${e.message}`); }
    }
  }

  if (!aborted && patched > 0) {
    log.success("Patches applied. Open in Studio Pro to review.");
  }

  log.summary(
    patched,
    skippedRisk.length + skippedDone.length,
    errors,
    allModules ? "(all user modules)" : moduleName,
  );
}

module.exports = { patch, transformMdl, buildHandlerBlock };
