"use strict";

/**
 * safety.js — never let a patch corrupt the project.
 *
 * Three layers of defense:
 *
 *   1. SNAPSHOT      Before any write, copy App.mpr + mprcontents/ to a
 *                    timestamped folder. Patching becomes reversible by
 *                    a simple file copy — no SQLite editing required.
 *
 *   2. RISK SCAN     Before attempting to patch a microflow, scan its MDL
 *                    for known patterns that mxcli's MDL roundtrip drops
 *                    (e.g. SHOW PAGE with parameter mappings). Skip those
 *                    microflows entirely; never attempt the patch.
 *
 *   3. VERIFICATION  After every patch, re-describe the microflow and
 *                    structurally compare it to the pre-patch MDL. If
 *                    *anything* changed beyond the ON ERROR clause being
 *                    rewritten, the patch is unsafe and the project is
 *                    restored from the snapshot.
 *
 * Layer 2 catches known failure modes fast. Layer 3 catches everything
 * else, including failure modes we haven't discovered yet. Layer 1
 * makes both layers actionable instead of fatal.
 */

const fs   = require("fs");
const path = require("path");

// ── 1. SNAPSHOT ────────────────────────────────────────────────────────

/**
 * Recursively copy a directory tree. We don't use fs.cpSync because it
 * was only added in Node 16.7 and behaves differently across versions;
 * a manual recursion is predictable and works on every Node 18+ build.
 */
function copyDirSync(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDirSync(s, d);
    else fs.copyFileSync(s, d);
  }
}

function snapshotName() {
  const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  return `_mxerrhandler_snapshot_${ts}`;
}

/**
 * Create a snapshot of the project's mutable state.
 * Returns the absolute path to the snapshot folder.
 *
 * What we snapshot:
 *   - App.mpr           (the SQLite index that mxcli updates)
 *   - mprcontents/      (the .mxunit files that mxcli rewrites)
 *
 * What we don't:
 *   - deployment/       (re-derivable from the model)
 *   - node_modules/     (irrelevant)
 *   - mx-error-handler.json + ErrorHandler/ (the tool itself, never modified)
 */
function createSnapshot(projectPath) {
  const projectDir   = path.dirname(path.resolve(projectPath));
  const snapshotPath = path.join(projectDir, snapshotName());
  fs.mkdirSync(snapshotPath, { recursive: true });

  // App.mpr
  fs.copyFileSync(projectPath, path.join(snapshotPath, path.basename(projectPath)));

  // mprcontents/
  const mprcontents = path.join(projectDir, "mprcontents");
  if (fs.existsSync(mprcontents)) {
    copyDirSync(mprcontents, path.join(snapshotPath, "mprcontents"));
  }

  return snapshotPath;
}

/**
 * Restore from a snapshot. Overwrites App.mpr and replaces mprcontents/
 * entirely (any new files added during the run are deleted, any modified
 * files are reverted).
 */
function restoreSnapshot(projectPath, snapshotPath) {
  const projectDir = path.dirname(path.resolve(projectPath));
  const mprFile    = path.basename(projectPath);

  // App.mpr
  const snapMpr = path.join(snapshotPath, mprFile);
  if (!fs.existsSync(snapMpr)) {
    throw new Error(`snapshot is missing ${mprFile} — refusing to restore from corrupt snapshot`);
  }
  fs.copyFileSync(snapMpr, projectPath);

  // mprcontents/
  const liveMprcontents = path.join(projectDir, "mprcontents");
  const snapMprcontents = path.join(snapshotPath, "mprcontents");
  if (fs.existsSync(snapMprcontents)) {
    if (fs.existsSync(liveMprcontents)) {
      fs.rmSync(liveMprcontents, { recursive: true, force: true });
    }
    copyDirSync(snapMprcontents, liveMprcontents);
  }
}

function deleteSnapshot(snapshotPath) {
  fs.rmSync(snapshotPath, { recursive: true, force: true });
}

// ── 2. RISK SCAN ───────────────────────────────────────────────────────

/**
 * Patterns that survive `mxcli describe` but get DROPPED or BROKEN by
 * the subsequent `CREATE OR REPLACE MICROFLOW` rebuild. Microflows
 * matching any of these are skipped — better an unpatched microflow
 * than a corrupted one.
 *
 * Known cases (add as more are discovered):
 *
 *   SHOW PAGE Module.Page ($Param = $var)
 *     mxcli rebuilds the page parameter mapping but loses the source
 *     variable reference, producing
 *     `PageParameterMapping.Variable = null` which Studio Pro refuses
 *     to load (System.InvalidOperationException at open time).
 */
const ROUNDTRIP_RISK_PATTERNS = [
  {
    pattern: /SHOW\s+PAGE\s+\S+\s*\([^)]*\$/i,
    reason:  "SHOW PAGE with parameter mapping — mxcli loses the source variable on rebuild",
  },
  {
    pattern: /CALL\s+MICROFLOW\s+\S+\s*\([^)]*=\s*\$/i,
    reason:  "CALL MICROFLOW with variable parameter mapping — mxcli may lose the source variable on rebuild",
  },
  {
    pattern: /CALL\s+REST\s+SERVICE\s+/i,
    reason:  "CALL REST SERVICE — mxcli MDL representation is incomplete for REST calls",
  },
];

/**
 * Returns null if the microflow is safe to patch, otherwise an object
 * describing why it should be skipped.
 */
function checkRoundtripRisk(mdl) {
  for (const r of ROUNDTRIP_RISK_PATTERNS) {
    if (r.pattern.test(mdl)) return r.reason;
  }
  return null;
}

// ── 3. VERIFICATION ────────────────────────────────────────────────────

/**
 * Strip every `ON ERROR ...;` clause from MDL — both the bare forms
 * (`ON ERROR;`, `ON ERROR ROLLBACK;`, `ON ERROR CONTINUE;`) and the
 * block forms (`ON ERROR { ... };`, `ON ERROR WITHOUT ROLLBACK { ... };`).
 *
 * Block forms use a balanced-brace walker so nested `{ ... }` inside
 * the handler body doesn't terminate the strip prematurely.
 */
function stripErrorHandlers(mdl) {
  let out = "";
  let i   = 0;
  const blockStartRe = /ON\s+ERROR(?:\s+WITHOUT\s+ROLLBACK)?\s*\{/i;

  while (i < mdl.length) {
    const m = blockStartRe.exec(mdl.slice(i));
    if (!m) { out += mdl.slice(i); break; }
    const startIdx = i + m.index;
    out += mdl.slice(i, startIdx);

    // Walk balanced braces from the `{` we just matched
    let p     = startIdx + m[0].length;
    let depth = 1;
    while (p < mdl.length && depth > 0) {
      const c = mdl[p];
      if (c === "{") depth++;
      else if (c === "}") depth--;
      p++;
    }
    // Skip whitespace and the trailing `;` after `}`
    while (p < mdl.length && /\s/.test(mdl[p])) p++;
    if (mdl[p] === ";") p++;

    i = p;
  }

  // Now remove the bare forms
  return out.replace(
    /ON\s+ERROR(?:\s+ROLLBACK|\s+CONTINUE|\s+WITHOUT\s+ROLLBACK)?\s*;/gi,
    "",
  );
}

/**
 * Reduce MDL to a structural fingerprint:
 *   - error handlers stripped
 *   - whitespace normalized to single spaces
 *
 * Two MDL strings with identical fingerprints differ ONLY in their error
 * handlers. Anything else changing means mxcli mutated the microflow
 * during the rebuild — we don't trust that, even if it parses.
 */
function fingerprint(mdl) {
  return stripErrorHandlers(mdl)
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Compare pre-patch and post-patch MDL.
 * { ok: true } means the only differences are inside ON ERROR clauses.
 * { ok: false, reason, ... } means the structure changed elsewhere —
 * caller MUST restore from snapshot.
 */
function verifyPatch(beforeMdl, afterMdl) {
  const before = fingerprint(beforeMdl);
  const after  = fingerprint(afterMdl);
  if (before === after) return { ok: true };

  return {
    ok: false,
    reason: "structural difference detected outside the ON ERROR clauses (mxcli appears to have lost or mutated data on rebuild)",
    beforeLen: before.length,
    afterLen:  after.length,
  };
}

module.exports = {
  // snapshot
  createSnapshot,
  restoreSnapshot,
  deleteSnapshot,
  // risk scan
  checkRoundtripRisk,
  ROUNDTRIP_RISK_PATTERNS,
  // verification
  stripErrorHandlers,
  fingerprint,
  verifyPatch,
};
