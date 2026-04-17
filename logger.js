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

  section(title) {
    const bar = "─".repeat(52);
    console.log(`\n${C.bold}${C.cyan}${bar}${C.reset}`);
    console.log(`${C.bold}${C.cyan}  ${title}${C.reset}`);
    console.log(`${C.bold}${C.cyan}${bar}${C.reset}`);
    toFile("SECTION", title);
  },

  info(msg, meta) {
    console.log(`${C.cyan}[INFO]${C.reset}  ${msg}`);
    toFile("INFO", msg, meta);
  },

  success(msg, meta) {
    console.log(`${C.green}[OK]${C.reset}    ${msg}`);
    toFile("OK", msg, meta);
  },

  warn(msg, meta) {
    console.log(`${C.yellow}[WARN]${C.reset}  ${msg}`);
    toFile("WARN", msg, meta);
  },

  error(msg, meta) {
    console.error(`${C.red}[ERR]${C.reset}   ${msg}`);
    toFile("ERROR", msg, meta);
  },

  patched(microflow, activity, type) {
    console.log(
      `  ${C.green}✔${C.reset}  ${C.white}${microflow}${C.reset}` +
      `  ${C.dim}→${C.reset}  ${C.magenta}${activity}${C.reset}` +
      `  ${C.dim}(${type})${C.reset}`
    );
    toFile("PATCHED", `${microflow} → ${activity}`, { type });
  },

  skipped(microflow, activity, type, reason) {
    console.log(
      `  ${C.dim}–  ${microflow}  →  ${activity}  (${type}) — ${reason}${C.reset}`
    );
    toFile("SKIPPED", `${microflow} → ${activity}`, { type, reason });
  },

  fatal(msg, err) {
    console.error(`\n${C.red}${C.bold}[FATAL]  ${msg}${C.reset}`);
    if (err) console.error(`${C.dim}${err.stack || err}${C.reset}`);
    toFile("FATAL", msg, { stack: err?.stack });
    process.exit(1);
  },

  summary(patched, skipped, errors, module) {
    const bar = "─".repeat(52);
    console.log(`\n${C.bold}${bar}${C.reset}`);
    console.log(`${C.bold}  Summary — module: ${module}${C.reset}`);
    console.log(`${bar}`);
    console.log(`  ${C.green}Patched${C.reset}   ${patched}`);
    console.log(`  ${C.dim}Skipped   ${skipped}${C.reset}`);
    console.log(`  ${C.red}Errors    ${errors}${C.reset}`);
    console.log(`  Log file  ${LOG_FILE}`);
    console.log(`${C.bold}${bar}${C.reset}\n`);
    toFile("SUMMARY", "run complete", { patched, skipped, errors, module });
  },
};

module.exports = logger;
