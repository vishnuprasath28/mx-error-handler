"use strict";

/**
 * mxcli-util.js — thin wrapper around the mxcli binary.
 *
 * Resolves the mxcli executable, runs it, and exposes the handful of
 * read/write operations both audit and patcher need:
 *   - listUserModules:       all user modules (skip Marketplace)
 *   - listModuleMicroflows:  microflows inside a module
 *   - describeMicroflow:     MDL text for a microflow
 *   - execMdl:               run an MDL script against a .mpr
 */

const { spawnSync } = require("child_process");
const fs            = require("fs");
const os            = require("os");
const path          = require("path");

function resolveMxcli() {
  if (process.env.MXCLI && fs.existsSync(process.env.MXCLI)) return process.env.MXCLI;
  const winDefault = "C:\\MxCLI\\mxcli.exe";
  if (fs.existsSync(winDefault)) return winDefault;
  return "mxcli";
}
const MXCLI = resolveMxcli();

function mxcli(args, opts = {}) {
  const res = spawnSync(MXCLI, args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...opts });
  if (res.error) throw new Error(`mxcli failed to launch: ${res.error.message}`);
  if (res.status !== 0) {
    const tail = (res.stderr || res.stdout || "").split("\n").slice(-8).join("\n");
    throw new Error(`mxcli exited ${res.status}: ${tail.trim()}`);
  }
  return res.stdout;
}

function stripBanner(s) {
  return s.replace(/^WARNING: This is a vibe-coded PoC.*\n/gm, "");
}

function parseMarkdownTable(text) {
  const rows = [];
  let headers = null;
  for (const line of text.split(/\r?\n/)) {
    if (!line.startsWith("|")) continue;
    if (/^\|\s*-+/.test(line.trim())) continue;
    const cells = line.split("|").map(c => c.trim()).filter((_, i, a) => i > 0 && i < a.length - 1);
    if (!cells.length) continue;
    if (!headers) { headers = cells; continue; }
    const row = {};
    headers.forEach((h, i) => { row[h] = cells[i] ?? ""; });
    rows.push(row);
  }
  return rows;
}

/**
 * Returns [{name, source}] for every module in the project.
 * `source` is the Marketplace version string (e.g. "Marketplace v4.3.2") or ""
 * for user modules.
 */
function listAllModules(projectPath) {
  const raw = stripBanner(mxcli(["-p", projectPath, "show", "modules"]));
  return parseMarkdownTable(raw).map(r => ({ name: r.Module, source: r.Source || "" }));
}

/** Same as listAllModules but filters out Marketplace modules. */
function listUserModules(projectPath) {
  return listAllModules(projectPath).filter(m => m.source === "");
}

/** Returns [{qualifiedName, name, module}] for every microflow in the given module. */
function listModuleMicroflows(projectPath, moduleName) {
  const raw = stripBanner(mxcli(["-p", projectPath, "show", "microflows", moduleName]));
  return parseMarkdownTable(raw)
    .filter(r => r.Module === moduleName)
    .map(r => ({
      qualifiedName: r["Qualified Name"],
      name:          r.Name,
      module:        r.Module,
    }));
}

function describeMicroflow(projectPath, qualifiedName) {
  return stripBanner(mxcli(["-p", projectPath, "describe", "microflow", qualifiedName])).trim();
}

/**
 * Write `mdl` to a temp file, prepend the CONNECT statement, run `mxcli exec`,
 * then clean up the temp file.
 */
function execMdl(projectPath, mdl) {
  const tmp = path.join(os.tmpdir(), `mxerr-${Date.now()}-${process.pid}.mdl`);
  const script = `CONNECT LOCAL '${projectPath.replace(/\\/g, "/")}';\n\n${mdl}\n`;
  fs.writeFileSync(tmp, script, "utf8");
  try {
    return stripBanner(mxcli(["exec", tmp]));
  } finally {
    try { fs.unlinkSync(tmp); } catch (_) { /* ignore */ }
  }
}

module.exports = {
  MXCLI,
  listAllModules,
  listUserModules,
  listModuleMicroflows,
  describeMicroflow,
  execMdl,
};
