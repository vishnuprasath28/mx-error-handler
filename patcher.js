"use strict";

/**
 * patcher.js — MDL-based error-handler patcher.
 *
 * For each eligible activity inside the target module(s), rewrites the
 * enclosing microflow via mxcli's MDL (`CREATE OR REPLACE MICROFLOW`),
 * replacing the default `ON ERROR ROLLBACK;` clause with one of:
 *
 *   custom-with-rollback     ON ERROR { CALL? + LOG ERROR; };
 *   custom-without-rollback  ON ERROR WITHOUT ROLLBACK { CALL? + LOG ERROR; };
 *   continue                 ON ERROR CONTINUE;
 *
 * See mxcli-util.js for the read/write primitives.
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
  CONFIG_FILENAME,
} = require("./config");

// Only the terminated forms `;` are rewritten. Any `ON ERROR { ... }` block is
// already complete and left untouched.
const BARE_ON_ERROR = /ON\s+ERROR(?:\s+ROLLBACK)?\s*;/g;

/** Built-in fallback when no template is configured. */
const BUILTIN_TEMPLATE =
  "'{microflow} failed - type: ' + $latestError/ErrorType + ', message: ' + $latestError/Message";

/** Build the MDL handler body for the selected strategy. */
function buildHandlerBlock({ strategy, microflowName, moduleName, logNode, handlerName, template }) {
  if (strategy === "continue") return "ON ERROR CONTINUE;";

  // Resolve template → full MDL expression. Wrap in parens so the emitted
  // LOG ERROR line always has a clearly-bounded argument, regardless of whether
  // the user wrote their template with or without outer parens.
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

/**
 * Rewrite every bare ON ERROR clause in `mdl` using the chosen strategy.
 * Already-complete blocks (`ON ERROR { ... }` or `ON ERROR WITHOUT ROLLBACK { ... }`)
 * and explicit `ON ERROR CONTINUE;` are left alone unless strategy is `continue`.
 */
function transformMdl(mdl, ctx) {
  let count = 0;
  const patched = mdl.replace(BARE_ON_ERROR, () => {
    count++;
    return buildHandlerBlock(ctx);
  });
  return { mdl: patched, patchCount: count };
}

async function patch({ projectPath, moduleName, allModules, errorHandling, handlerName, logTemplate, dryRun }) {
  log.section("Opening Mendix Model");
  log.info(`Project : ${projectPath}`);
  log.info(`Target  : ${allModules ? "all user modules" : moduleName}`);
  log.info(`Strategy: ${errorHandling}`);
  log.info(`Handler : ${handlerName ?? "(none)"}`);
  log.info(`Mode    : ${dryRun ? "DRY RUN" : "LIVE"}`);

  // Load project-level config (mx-error-handler.json next to App.mpr). Missing
  // file is fine — we simply have no config-provided templates.
  let config = { _path: null };
  try { config = loadConfig(projectPath); }
  catch (e) { log.fatal(`Config error: ${e.message}`); }

  if (config._path) log.info(`Config  : ${config._path}`);
  else if (logTemplate) log.info(`Config  : (none — using --log-template)`);
  else                  log.info(`Config  : (none — using built-in template)`);

  const modules = allModules
    ? listUserModules(projectPath).map(m => m.name)
    : [moduleName];

  if (modules.length === 0) {
    log.error("No modules to process.");
    process.exit(1);
  }

  log.section(dryRun ? "Dry-run Report" : "Applying Patches");

  let patched = 0;
  let skipped = 0;
  let errors  = 0;

  for (const mod of modules) {
    let mfs;
    try { mfs = listModuleMicroflows(projectPath, mod); }
    catch (e) { log.error(`listing microflows for ${mod}: ${e.message}`); errors++; continue; }

    let template, source;
    try {
      ({ template, source } = resolveTemplate({
        config,
        cliTemplate: logTemplate,
        moduleName:  mod,
      }));
    } catch (e) {
      log.error(`${mod}: ${e.message}`);
      errors += mfs.length;
      continue;
    }
    if (mfs.length > 0) log.info(`${mod}: template from ${source}`);

    for (const mf of mfs) {
      let mdl;
      try { mdl = describeMicroflow(projectPath, mf.qualifiedName); }
      catch (e) { log.error(`describe failed for ${mf.qualifiedName}: ${e.message}`); errors++; continue; }

      const ctx = {
        strategy:      errorHandling,
        microflowName: mf.name,
        moduleName:    mod,
        logNode:       mod,
        handlerName,
        template,
      };
      const { mdl: newMdl, patchCount } = transformMdl(mdl, ctx);

      if (patchCount === 0) {
        skipped++;
        continue;
      }

      const label = `${mod}.${mf.name}`;
      if (dryRun) {
        log.patched(label, `${patchCount} clause${patchCount === 1 ? "" : "s"}`, errorHandling);
        patched++;
        continue;
      }

      try {
        execMdl(projectPath, newMdl);
        log.patched(label, `${patchCount} clause${patchCount === 1 ? "" : "s"}`, errorHandling);
        patched++;
      } catch (err) {
        log.error(`exec failed for ${label}: ${err.message}`);
        errors++;
      }
    }
  }

  if (dryRun) log.warn("DRY RUN — no changes were written.");
  else if (patched > 0) log.success("Patches applied. Open in Studio Pro to review.");
  log.summary(patched, skipped, errors, allModules ? "(all user modules)" : moduleName);
}

module.exports = { patch, transformMdl, buildHandlerBlock };
