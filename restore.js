"use strict";

/**
 * restore.js — restore a project from a snapshot folder.
 *
 * Used after `patch` when Studio Pro reveals a problem our in-process
 * verification didn't catch (the scenario where mxcli's MDL describe
 * reports data that the underlying BSON no longer actually contains).
 */

const fs   = require("fs");
const path = require("path");
const log  = require("./logger");
const { Progress } = require("./progress");
const { restoreSnapshot, countFilesSync } = require("./safety");

function validateSnapshot(snapshotPath, projectPath) {
  if (!fs.existsSync(snapshotPath)) {
    throw new Error(`Snapshot folder not found: ${snapshotPath}`);
  }
  const mprFile = path.basename(projectPath);
  const snapMpr = path.join(snapshotPath, mprFile);
  if (!fs.existsSync(snapMpr)) {
    throw new Error(`Snapshot is missing ${mprFile} — this may not be a valid snapshot folder.`);
  }
  const snapMprcontents = path.join(snapshotPath, "mprcontents");
  if (!fs.existsSync(snapMprcontents)) {
    throw new Error(`Snapshot is missing mprcontents/ — this may not be a valid snapshot folder.`);
  }
}

async function restore({ projectPath, snapshotPath }) {
  log.section("Restore from snapshot");
  log.info(`Project : ${projectPath}`);
  log.info(`Snapshot: ${snapshotPath}`);

  try { validateSnapshot(snapshotPath, projectPath); }
  catch (e) { log.fatal(e.message); }

  // Total = 1 (App.mpr) + every file under mprcontents/.
  const snapMprcontents = path.join(snapshotPath, "mprcontents");
  const totalFiles = 1 + countFilesSync(snapMprcontents);
  const progress   = new Progress({ total: totalFiles, title: "Restoring snapshot" });
  log.setProgress(progress);
  progress.start();

  let copied = 0;
  try {
    restoreSnapshot(projectPath, snapshotPath, ({ phase, current, total, label }) => {
      if (phase === "mpr" && current === 1) {
        copied++;
        progress.tick({ current: copied, label });
      } else if (phase === "mprcontents") {
        copied++;
        progress.tick({ current: copied, label: `mprcontents/${label}` });
      } else if (phase === "clear") {
        progress.setLabel(label);
      }
    });
    progress.stop();
    log.setProgress(null);
    log.success("Project restored to its pre-patch state.");
    log.info("");
    log.info("Next steps:");
    log.info("  1. Open App.mpr in Studio Pro to confirm the project loads cleanly again.");
    log.info("  2. When confirmed, you can keep or delete the snapshot as you prefer:");
    log.info(`     • delete this specific one : rm -rf "${snapshotPath}"`);
    log.info(`     • clean up all snapshots   : mx-error-handler cleanup --project "${projectPath}"`);
    return 0;
  } catch (e) {
    progress.stop();
    log.setProgress(null);
    log.fatal(`Restore failed: ${e.message}`);
  }
}

module.exports = { restore };
