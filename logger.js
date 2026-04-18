"use strict";

const fs   = require("fs");
const path = require("path");

// ── ANSI colours ──────────────────────────────────────────────
const C = {
  reset:  "\x1b[0m",
  bold:   "\x1b[1m",
  dim:    "\x1b[2m",
  cyan:   "\x1b[36m",
  green:  "\x1b[32m",
  yellow: "\x1b[33m",
  red:    "\x1b[31m",
  magenta:"\x1b[35m",
  white:  "\x1b[37m",
};

// ── Log file setup ────────────────────────────────────────────
const LOG_DIR  = path.join(process.cwd(), "mx-logs");
const LOG_FILE = path.join(LOG_DIR, `run-${timestamp()}.log`);
let   _stream  = null;

// ── Active-progress hook ──────────────────────────────────────
// When a Progress widget is active, all console output is routed through
// its write() so the live bar is torn down, the line prints permanently,
// and the bar redraws below. Callers do `logger.setProgress(widget)` and
// `logger.setProgress(null)` around their live phase.
let _progress = null;
function setProgress(p) { _progress = p; }
function out(text)  { if (_progress && _progress._active) _progress.write(text); else console.log(text); }
function err(text)  { if (_progress && _progress._active) _progress.write(text); else console.error(text); }

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
}

function iso() {
  return new Date().toISOString();
}

function ensureStream() {
  if (_stream) return;
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
  _stream = fs.createWriteStream(LOG_FILE, { flags: "a" });
  _stream.write(`${"=".repeat(60)}\n`);
  _stream.write(`Session : ${iso()}\n`);
  _stream.write(`Command : ${process.argv.slice(2).join(" ")}\n`);
  _stream.write(`${"=".repeat(60)}\n`);
}

function toFile(level, msg, meta) {
  ensureStream();
  const entry = { ts: iso(), level, msg, ...(meta ? { meta } : {}) };
  _stream.write(JSON.stringify(entry) + "\n");
}

// ── Public API ────────────────────────────────────────────────
const logger = {

  logFile() { return LOG_FILE; },

  setProgress,

  section(title) {
    const bar = "─".repeat(52);
    out(`\n${C.bold}${C.cyan}${bar}${C.reset}`);
    out(`${C.bold}${C.cyan}  ${title}${C.reset}`);
    out(`${C.bold}${C.cyan}${bar}${C.reset}`);
    toFile("SECTION", title);
  },

  info(msg, meta) {
    out(`${C.cyan}[INFO]${C.reset}  ${msg}`);
    toFile("INFO", msg, meta);
  },

  success(msg, meta) {
    out(`${C.green}[OK]${C.reset}    ${msg}`);
    toFile("OK", msg, meta);
  },

  warn(msg, meta) {
    out(`${C.yellow}[WARN]${C.reset}  ${msg}`);
    toFile("WARN", msg, meta);
  },

  error(msg, meta) {
    err(`${C.red}[ERR]${C.reset}   ${msg}`);
    toFile("ERROR", msg, meta);
  },

  patched(microflow, activity, type) {
    out(
      `  ${C.green}✔${C.reset}  ${C.white}${microflow}${C.reset}` +
      `  ${C.dim}→${C.reset}  ${C.magenta}${activity}${C.reset}` +
      `  ${C.dim}(${type})${C.reset}`
    );
    toFile("PATCHED", `${microflow} → ${activity}`, { type });
  },

  skipped(microflow, activity, type, reason) {
    out(
      `  ${C.dim}–  ${microflow}  →  ${activity}  (${type}) — ${reason}${C.reset}`
    );
    toFile("SKIPPED", `${microflow} → ${activity}`, { type, reason });
  },

  fatal(msg, e) {
    err(`\n${C.red}${C.bold}[FATAL]  ${msg}${C.reset}`);
    if (e) err(`${C.dim}${e.stack || e}${C.reset}`);
    toFile("FATAL", msg, { stack: e?.stack });
    process.exit(1);
  },

  summary(patched, skipped, errors, module) {
    const bar = "─".repeat(52);
    out(`\n${C.bold}${bar}${C.reset}`);
    out(`${C.bold}  Summary — module: ${module}${C.reset}`);
    out(`${bar}`);
    out(`  ${C.green}Patched${C.reset}   ${patched}`);
    out(`  ${C.dim}Skipped   ${skipped}${C.reset}`);
    out(`  ${C.red}Errors    ${errors}${C.reset}`);
    out(`  Log file  ${LOG_FILE}`);
    out(`${C.bold}${bar}${C.reset}\n`);
    toFile("SUMMARY", "run complete", { patched, skipped, errors, module });
  },
};

module.exports = logger;
