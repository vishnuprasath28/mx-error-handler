"use strict";

/**
 * prompts.js — tiny zero-dependency arrow-key picker.
 *
 * Usage:
 *   const choice = await selectOption("Select output format:", [
 *     { label: "Console — print table to terminal", value: "console" },
 *     { label: "Excel   — save CSV to project folder", value: "csv" },
 *   ]);
 *
 * Returns the selected `value`, or null if stdin isn't a TTY (e.g. CI).
 * Throws a "cancelled" error on Ctrl+C or Escape.
 */

const readline = require("readline");

const ESC   = "\x1b[";
const RESET = "\x1b[0m";
const CYAN  = "\x1b[36m";
const DIM   = "\x1b[2m";
const BOLD  = "\x1b[1m";

function clearLines(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write(`\r${ESC}2K`);       // clear current line
    if (i < n - 1) process.stdout.write(`${ESC}1A`); // move up except last
  }
}

function selectOption(question, options) {
  // Non-TTY (CI, piped stdin) → no prompt, caller supplies default.
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    let selected = 0;
    let renderedLines = 0;

    const render = (firstTime = false) => {
      if (!firstTime) clearLines(renderedLines);
      const lines = [];
      lines.push(`${BOLD}${question}${RESET} ${DIM}(↑↓ arrows, Enter to select, Esc to cancel)${RESET}`);
      lines.push("");
      for (let i = 0; i < options.length; i++) {
        const prefix = i === selected ? `${CYAN}❯${RESET} ` : "  ";
        const text   = i === selected ? `${CYAN}${options[i].label}${RESET}` : options[i].label;
        lines.push(prefix + text);
      }
      process.stdout.write(lines.join("\n"));
      renderedLines = lines.length;
    };

    const cleanup = () => {
      process.stdin.removeListener("keypress", onKey);
      try { process.stdin.setRawMode(false); } catch (_) { /* ignore */ }
      process.stdin.pause();
      process.stdout.write("\n");
    };

    const onKey = (str, key) => {
      if (!key) return;
      if (key.ctrl && key.name === "c") { cleanup(); reject(new Error("cancelled")); return; }
      if (key.name === "escape")        { cleanup(); reject(new Error("cancelled")); return; }
      if (key.name === "up") {
        selected = (selected - 1 + options.length) % options.length;
        render();
      } else if (key.name === "down") {
        selected = (selected + 1) % options.length;
        render();
      } else if (key.name === "return") {
        cleanup();
        resolve(options[selected].value);
      }
    };

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("keypress", onKey);
    render(true);
  });
}

module.exports = { selectOption };
