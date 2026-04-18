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
const restorer = require("./restore");
const cleaner  = require("./cleanup");
const { selectOption } = require("./prompts");

const bold  = (s) => `\x1b[1m${s}\x1b[0m`;
const cyan  = (s) => `\x1b[36m${s}\x1b[0m`;
const red   = (s) => `\x1b[31m${s}\x1b[0m`;
const dim   = (s) => `\x1b[2m${s}\x1b[0m`;

const ERROR_HANDLING_CHOICES = ["custom-with-rollback", "custom-without-rollback", "continue"];
const OUTPUT_CHOICES          = ["console", "csv", "both"];

function printHelp() {
  console.log(`
${bold("mx-error-handler")} — scan or patch error handling in Mendix microflows.

${bold("Usage:")}
  node mx-error-handler.js <audit|patch> [options]

${bold("Subcommands:")}
  ${cyan("audit")}     Report-only. Exits 1 if broken handlers (CE0011) are found.
  ${cyan("patch")}     Apply error handling to activities using the default Rollback.
                Always creates a safety snapshot; you clean it up with 'cleanup'
                after confirming the project loads in Studio Pro.
  ${cyan("restore")}   Roll back to a snapshot folder when Studio Pro reveals a patch broke something.
                Usage: ${cyan("mx-error-handler restore <snapshot-path> --project ./App.mpr")}
  ${cyan("cleanup")}   List and delete old snapshot folders (interactive, or --yes for CI).

${bold("Required:")}
  ${cyan("--project")} <path>           Path to the .mpr file.
  ${cyan("--module")}  <name>   ${dim("OR")}     Process a single module.
  ${cyan("--all-modules")}              Process every user module.

${bold("Reporting:")}
  ${cyan("--output")} <console|csv|both>   Pick report format.  (default: both)
                               console — print table to terminal
                               csv     — write Excel-compatible CSV next to App.mpr
                               both    — do both

${bold("Patch-only options:")}
  ${cyan("--error-handling")} <type>    ${ERROR_HANDLING_CHOICES.map((c, i) => i === 0 ? `${c}  (default)` : c).join(" | ")}
  ${cyan("--log-template")} <name|expr> Named template from mx-error-handler.json, or a raw MDL expression.
  ${cyan("--handler")} <qname>          Call this microflow in the handler body (e.g. Common.MF_HandleError).
  ${cyan("--dry-run")}                  Preview changes — write nothing.

${bold("Safety options (advanced — defaults are safe):")}
  ${cyan("--no-backup")}                Skip the snapshot + verification. Corruption cannot be auto-reverted. Not recommended.
  ${cyan("--yes")}                      For 'cleanup': skip the confirmation prompt.

${bold("Typical workflow:")}
  1. ${cyan("mx-error-handler audit --all-modules --project ./App.mpr")}   ${dim("# see what needs patching")}
  2. ${cyan("mx-error-handler patch --all-modules --project ./App.mpr")}   ${dim("# applies + keeps a snapshot")}
  3. Open App.mpr in Studio Pro and check it loads cleanly.
  4a. All good  → ${cyan("mx-error-handler cleanup --project ./App.mpr")}
  4b. Broken     → ${cyan("mx-error-handler restore <snapshot-path> --project ./App.mpr")}
`);
}

function parseArgs(argv) {
  const args = { subcommand: null, positional: [] };
  const raw  = argv.slice(2);

  if (raw.length > 0 && !raw[0].startsWith("-")) {
    args.subcommand = raw.shift();
  }

  for (let i = 0; i < raw.length; i++) {
    const tok = raw[i];
    switch (tok) {
      case "--help":              args.help          = true;           break;
      case "--dry-run":           args.dryRun        = true;           break;
      case "--all-modules":       args.allModules    = true;           break;
      case "--module":            args.module        = raw[++i];       break;
      case "--project":           args.project       = raw[++i];       break;
      case "--handler":           args.handler       = raw[++i];       break;
      case "--log-template":      args.logTemplate   = raw[++i];       break;
      case "--error-handling":    args.errorHandling = raw[++i];       break;
      case "--no-backup":         args.noBackup      = true;           break;
      case "--output":            args.output        = raw[++i];       break;
      case "--yes":               args.yes           = true;           break;
      default:
        if (!tok.startsWith("-")) {
          args.positional.push(tok);
          break;
        }
        console.error(red(`Unknown option: ${tok}`));
        console.error(`Run with --help to see usage.`);
        process.exit(1);
    }
  }
  return args;
}

function validateInputs(args) {
  const errors = [];
  const VALID_SUBS = ["audit", "patch", "restore", "cleanup"];

  // Subcommand
  if (args.subcommand && !VALID_SUBS.includes(args.subcommand)) {
    errors.push(`Unknown subcommand "${args.subcommand}". Expected: ${VALID_SUBS.join(" | ")}.`);
  }

  const sub = args.subcommand ?? "patch";

  // Project required for every subcommand
  if (!args.project) {
    errors.push(`--project is required. Provide the path to the .mpr file.`);
  } else {
    const resolved = path.resolve(args.project);
    if (!fs.existsSync(resolved) || !resolved.endsWith(".mpr")) {
      errors.push(`--project "${args.project}" is not a valid .mpr file.`);
    }
  }

  // Target required for audit & patch, rejected for restore & cleanup
  if (sub === "audit" || sub === "patch") {
    if (args.module && args.allModules) {
      errors.push(`--module and --all-modules are mutually exclusive.`);
    }
    if (!args.module && !args.allModules) {
      errors.push(`Specify a target: --module <name> or --all-modules.`);
    }
    if (args.module && /[^a-zA-Z0-9_]/.test(args.module)) {
      errors.push(`--module "${args.module}" contains invalid characters.`);
    }
  }
  if ((sub === "restore" || sub === "cleanup") && (args.module || args.allModules)) {
    errors.push(`--module / --all-modules do not apply to '${sub}'.`);
  }

  // restore needs one positional — the snapshot path
  if (sub === "restore") {
    if (args.positional.length !== 1) {
      errors.push(`'restore' requires exactly one positional argument: the snapshot folder path.`);
    } else {
      const snap = path.resolve(args.positional[0]);
      if (!fs.existsSync(snap)) errors.push(`Snapshot path "${args.positional[0]}" does not exist.`);
    }
  } else if (args.positional.length > 0) {
    errors.push(`Unexpected positional argument(s): ${args.positional.join(", ")}.`);
  }

  // Error handling
  if (args.errorHandling && !ERROR_HANDLING_CHOICES.includes(args.errorHandling)) {
    errors.push(
      `--error-handling "${args.errorHandling}" is not valid. ` +
      `Choose: ${ERROR_HANDLING_CHOICES.join(", ")}.`
    );
  }
  if (args.handler && !args.handler.includes(".")) {
    errors.push(`--handler "${args.handler}" must be qualified like "Common.MF_HandleError".`);
  }
  if (args.output && !OUTPUT_CHOICES.includes(args.output)) {
    errors.push(`--output "${args.output}" is not valid. Choose: ${OUTPUT_CHOICES.join(", ")}.`);
  }

  // Subcommand-specific flag rejections
  const patchOnly = ["errorHandling", "handler", "logTemplate", "dryRun", "noBackup"];
  if (sub !== "patch") {
    for (const k of patchOnly) {
      if (args[k]) errors.push(`--${k.replace(/[A-Z]/g, m => "-" + m.toLowerCase())} does not apply to '${sub}'.`);
    }
  }
  if (args.errorHandling === "continue" && args.logTemplate) {
    errors.push(`--log-template has no effect with --error-handling continue (no log message is emitted).`);
  }
  if (args.yes && sub !== "cleanup") {
    errors.push(`--yes only applies to 'cleanup'.`);
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
    if (sub === "restore") {
      const exitCode = await restorer.restore({
        projectPath:  args.project,
        snapshotPath: path.resolve(args.positional[0]),
      });
      process.exit(exitCode ?? 0);
    }
    if (sub === "cleanup") {
      const exitCode = await cleaner.cleanup({
        projectPath: args.project,
        yes:         !!args.yes,
      });
      process.exit(exitCode ?? 0);
    }

    // audit / patch: ask about --output if not specified (TTY only).
    let output = args.output;
    if (!output) {
      try {
        const picked = await selectOption("Select output format:", [
          { label: "Console — print table to terminal",    value: "console" },
          { label: "Excel   — save CSV to project folder", value: "csv" },
        ]);
        output = picked ?? "both";
      } catch (_) {
        console.log("\nCancelled.");
        process.exit(0);
      }
    }

    if (sub === "audit") {
      const exitCode = await auditor.audit({ ...common, output });
      process.exit(exitCode);
    } else {
      await patcher.patch({
        ...common,
        errorHandling: args.errorHandling ?? "custom-with-rollback",
        handlerName:   args.handler ?? null,
        logTemplate:   args.logTemplate ?? null,
        dryRun:        !!args.dryRun,
        noBackup:      !!args.noBackup,
        output,
      });
    }
  } catch (err) {
    log.fatal(`Unexpected error during ${sub}.`, err);
  }
}

main();
