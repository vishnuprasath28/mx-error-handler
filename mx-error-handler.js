#!/usr/bin/env node
"use strict";

/**
 * mx-error-handler — CLI entry point
 *
 * Subcommands:
 *   audit   Report-only scan of error handling state across microflows.
 *           Exits 1 if broken (unwired Custom / CE0011) handlers are found.
 *   patch   Apply the selected --error-handling strategy to activities that
 *           currently use the default Rollback (or are broken / unwired).
 *
 * If no subcommand is given, "patch" is assumed for backwards compatibility.
 */

const [major] = process.versions.node.split(".").map(Number);
if (major < 18) {
  console.error(
    `\x1b[31m[ERROR]\x1b[0m  mx-error-handler requires Node.js >= 18.\n` +
    `         Current version: ${process.version}\n` +
    `         Please upgrade: https://nodejs.org/`
  );
  process.exit(1);
}

const fs       = require("fs");
const path     = require("path");
const log      = require("./logger");
const patcher  = require("./patcher");
const auditor  = require("./audit");

const bold  = (s) => `\x1b[1m${s}\x1b[0m`;
const cyan  = (s) => `\x1b[36m${s}\x1b[0m`;
const red   = (s) => `\x1b[31m${s}\x1b[0m`;
const dim   = (s) => `\x1b[2m${s}\x1b[0m`;

const ERROR_HANDLING_CHOICES = ["custom-with-rollback", "custom-without-rollback", "continue"];

function printHelp() {
  console.log(`
${bold("mx-error-handler")} — scan or patch error handling in Mendix microflows.

${bold("Usage:")}
  node mx-error-handler.js <audit|patch> [options]

${bold("Subcommands:")}
  ${cyan("audit")}   Report-only. Exits 1 if broken handlers (CE0011) are found.
  ${cyan("patch")}   Apply error handling to activities using the default Rollback.

${bold("Required:")}
  ${cyan("--project")} <path>           Path to the .mpr file.
  ${cyan("--module")}  <name>   ${dim("OR")}     Process a single module.
  ${cyan("--all-modules")}              Process every user module.

${bold("Patch-only options:")}
  ${cyan("--error-handling")} <type>    ${ERROR_HANDLING_CHOICES.map((c, i) => i === 0 ? `${c}  (default)` : c).join(" | ")}
  ${cyan("--log-template")} <name|expr> Named template from mx-error-handler.json, or a raw MDL expression.
  ${cyan("--handler")} <qname>          Call this microflow in the handler body (e.g. Common.MF_HandleError).
  ${cyan("--dry-run")}                  Preview changes — write nothing.

${bold("Safety options (advanced — defaults are safe):")}
  ${cyan("--no-backup")}                Skip the snapshot. Faster but verification is also skipped
                             — corruption cannot be auto-reverted. Not recommended.
  ${cyan("--keep-backup")}              Keep the snapshot folder even when the run succeeds.
  ${cyan("--force")}                    Patch microflows that contain known mxcli-roundtrip-risky
                             constructs (SHOW PAGE with parameter mappings, etc.). Not recommended.

${bold("Examples:")}
  node mx-error-handler.js audit --all-modules --project ./App.mpr
  node mx-error-handler.js patch --all-modules --project ./App.mpr
  node mx-error-handler.js patch --module MyFirstModule --log-template apiflowLogTemplate --project ./App.mpr
`);
}

function parseArgs(argv) {
  const args = { subcommand: null };
  const raw  = argv.slice(2);

  if (raw.length > 0 && !raw[0].startsWith("-")) {
    args.subcommand = raw.shift();
  }

  for (let i = 0; i < raw.length; i++) {
    switch (raw[i]) {
      case "--help":              args.help          = true;           break;
      case "--dry-run":           args.dryRun        = true;           break;
      case "--all-modules":       args.allModules    = true;           break;
      case "--module":            args.module        = raw[++i];       break;
      case "--project":           args.project       = raw[++i];       break;
      case "--handler":           args.handler       = raw[++i];       break;
      case "--log-template":      args.logTemplate   = raw[++i];       break;
      case "--error-handling":    args.errorHandling = raw[++i];       break;
      case "--no-backup":         args.noBackup      = true;           break;
      case "--keep-backup":       args.keepBackup    = true;           break;
      case "--force":             args.force         = true;           break;
      default:
        console.error(red(`Unknown option: ${raw[i]}`));
        console.error(`Run with --help to see usage.`);
        process.exit(1);
    }
  }
  return args;
}

function validateInputs(args) {
  const errors = [];

  // Subcommand
  if (args.subcommand && !["audit", "patch"].includes(args.subcommand)) {
    errors.push(`Unknown subcommand "${args.subcommand}". Expected: audit | patch.`);
  }

  // Target
  if (args.module && args.allModules) {
    errors.push(`--module and --all-modules are mutually exclusive.`);
  }
  if (!args.module && !args.allModules) {
    errors.push(`Specify a target: --module <name> or --all-modules.`);
  }
  if (args.module && /[^a-zA-Z0-9_]/.test(args.module)) {
    errors.push(`--module "${args.module}" contains invalid characters.`);
  }

  // Project
  if (!args.project) {
    errors.push(`--project is required. Provide the path to the .mpr file.`);
  } else {
    const resolved = path.resolve(args.project);
    if (!fs.existsSync(resolved) || !resolved.endsWith(".mpr")) {
      errors.push(`--project "${args.project}" is not a valid .mpr file.`);
    }
  }

  // Error handling
  if (args.errorHandling && !ERROR_HANDLING_CHOICES.includes(args.errorHandling)) {
    errors.push(
      `--error-handling "${args.errorHandling}" is not valid. ` +
      `Choose: ${ERROR_HANDLING_CHOICES.join(", ")}.`
    );
  }

  // Handler name format
  if (args.handler && !args.handler.includes(".")) {
    errors.push(`--handler "${args.handler}" must be qualified like "Common.MF_HandleError".`);
  }

  // Subcommand-specific rejections
  const isAudit = args.subcommand === "audit";
  if (isAudit) {
    if (args.errorHandling) errors.push(`--error-handling does not apply to 'audit'.`);
    if (args.handler)       errors.push(`--handler does not apply to 'audit'.`);
    if (args.logTemplate)   errors.push(`--log-template does not apply to 'audit'.`);
    if (args.dryRun)        errors.push(`--dry-run does not apply to 'audit' (audit never writes).`);
    if (args.noBackup)      errors.push(`--no-backup does not apply to 'audit'.`);
    if (args.keepBackup)    errors.push(`--keep-backup does not apply to 'audit'.`);
    if (args.force)         errors.push(`--force does not apply to 'audit'.`);
  }
  if (args.errorHandling === "continue" && args.logTemplate) {
    errors.push(`--log-template has no effect with --error-handling continue (no log message is emitted).`);
  }
  if (args.noBackup && args.keepBackup) {
    errors.push(`--no-backup and --keep-backup are mutually exclusive.`);
  }

  return errors;
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help || process.argv.length === 2) { printHelp(); process.exit(0); }

  const validationErrors = validateInputs(args);
  if (validationErrors.length > 0) {
    console.error(red("\nInput errors:"));
    validationErrors.forEach((e) => console.error(`  ${red("✖")}  ${e}`));
    console.error(`\nRun with ${cyan("--help")} to see usage.\n`);
    process.exit(1);
  }

  const sub = args.subcommand ?? "patch";
  const common = {
    projectPath:   args.project,
    moduleName:    args.module ?? null,
    allModules:    !!args.allModules,
  };

  try {
    if (sub === "audit") {
      const exitCode = await auditor.audit(common);
      process.exit(exitCode);
    } else {
      await patcher.patch({
        ...common,
        errorHandling: args.errorHandling ?? "custom-with-rollback",
        handlerName:   args.handler ?? null,
        logTemplate:   args.logTemplate ?? null,
        dryRun:        !!args.dryRun,
        noBackup:      !!args.noBackup,
        keepBackup:    !!args.keepBackup,
        force:         !!args.force,
      });
    }
  } catch (err) {
    log.fatal(`Unexpected error during ${sub}.`, err);
  }
}

main();
