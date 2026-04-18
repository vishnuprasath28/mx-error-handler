"use strict";

/**
 * cleanup.js — delete snapshot folders after the user has confirmed the
 * project is working.
 *
 * Lists every `_mxerrhandler_snapshot_*` folder next to the project and
 * asks for confirmation before deleting. Supports `--yes` to skip the
 * prompt (for CI).
 */

const log = require("./logger");
const { listSnapshots, deleteSnapshot, formatBytes } = require("./safety");
const { selectOption } = require("./prompts");

async function cleanup({ projectPath, yes }) {
  log.section("Snapshot cleanup");
  log.info(`Project: ${projectPath}`);

  const snapshots = listSnapshots(projectPath);

  if (snapshots.length === 0) {
    log.info("No snapshots found. Nothing to clean up.");
    return 0;
  }

  console.log();
  console.log(`Found ${snapshots.length} snapshot${snapshots.length === 1 ? "" : "s"}:`);
  let total = 0;
  for (const s of snapshots) {
    console.log(`  ${s.name}   ${formatBytes(s.sizeBytes).padStart(9)}   (created ${s.created.toISOString()})`);
    total += s.sizeBytes;
  }
  console.log(`  ──────────`);
  console.log(`  total: ${formatBytes(total)}`);
  console.log();

  let choice = yes ? "delete-all" : null;
  if (!choice) {
    try {
      choice = await selectOption("What should I do?", [
        { label: `Delete ALL ${snapshots.length} snapshot(s)  (${formatBytes(total)} freed)`, value: "delete-all" },
        { label: "Keep only the most recent one",                                             value: "keep-latest" },
        { label: "Cancel — don't delete anything",                                            value: "cancel" },
      ]);
    } catch (_) {
      console.log("Cancelled.");
      return 0;
    }
  }
  if (choice === null) {
    // Non-TTY without --yes — refuse to do anything destructive silently.
    log.warn("No TTY and --yes was not passed. Refusing to delete without confirmation.");
    return 0;
  }
  if (choice === "cancel") {
    log.info("Cancelled. Nothing was deleted.");
    return 0;
  }

  let toDelete = snapshots;
  if (choice === "keep-latest") toDelete = snapshots.slice(1);  // already sorted newest-first

  if (toDelete.length === 0) {
    log.info("Only one snapshot exists and you chose to keep it. Nothing to delete.");
    return 0;
  }

  let freed = 0;
  let errors = 0;
  for (const s of toDelete) {
    try {
      deleteSnapshot(s.path);
      log.success(`Deleted: ${s.name}`);
      freed += s.sizeBytes;
    } catch (e) {
      log.error(`Could not delete ${s.name}: ${e.message}`);
      errors++;
    }
  }
  log.info(`Freed ${formatBytes(freed)}${errors > 0 ? ` (${errors} error${errors === 1 ? "" : "s"})` : ""}.`);
  return errors === 0 ? 0 : 1;
}

module.exports = { cleanup };
