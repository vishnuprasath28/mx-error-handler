"use strict";

/**
 * progress.js — two-line live progress widget.
 *
 *   [████████████░░░░░░░░░░░░░░] 42/120 (35%) · Auditing microflows
 *     Orders / SUB_CreateLineItem
 *
 * Redraws in place on a TTY. On a non-TTY (CI, pipe, log file) it emits a
 * periodic "[progress] X/Y · label" heartbeat line instead so output stays
 * readable without ANSI noise.
 *
 * Use `widget.write(text)` to print a permanent line that stays visible
 * above the bar — the widget tears down, prints, and re-anchors below.
 */

const IS_TTY      = Boolean(process.stdout.isTTY);
const HIDE_CURSOR = "\x1b[?25l";
const SHOW_CURSOR = "\x1b[?25h";
const CLEAR_LINE  = "\x1b[2K";
const UP          = (n) => `\x1b[${n}A`;

const BAR_MIN  = 10;
const BAR_MAX  = 40;
const FRAME_MS = 33;           // ~30 fps cap for redraw throttling
const HEARTBEAT_MS = 2000;     // non-TTY log cadence

function makeBar(current, total, width) {
  const safeTotal = Math.max(1, total);
  const ratio     = Math.min(1, Math.max(0, current / safeTotal));
  const filled    = Math.round(ratio * width);
  return "[" + "\u2588".repeat(filled) + "\u2591".repeat(width - filled) + "]";
}

function truncate(s, max) {
  if (!s) return "";
  if (s.length <= max) return s;
  return s.slice(0, Math.max(0, max - 1)) + "\u2026";
}

class Progress {
  constructor({ total = 0, title = "" } = {}) {
    this.total       = total;
    this.current     = 0;
    this.title       = title;
    this.label       = "";
    this._active     = false;
    this._lastDrawMs = 0;
  }

  // ── lifecycle ────────────────────────────────────────────
  start() {
    if (this._active) return;
    if (IS_TTY) {
      process.stdout.write(HIDE_CURSOR);
      // Reserve the two widget lines by printing blanks; cursor ends one
      // line below the widget — that's the anchor we drive from.
      process.stdout.write("\n\n");
    } else {
      const head = this.title ? `${this.title}: ` : "";
      process.stdout.write(`[progress] ${head}0/${this.total}\n`);
    }
    this._active = true;
    this._render(true);
  }

  stop() {
    if (!this._active) return;
    if (IS_TTY) {
      // From anchor, move up and blank both widget lines, then leave the
      // cursor where the widget's top was so subsequent output continues
      // from that point.
      process.stdout.write(`${UP(2)}${CLEAR_LINE}\n${CLEAR_LINE}\n${UP(2)}`);
      process.stdout.write(SHOW_CURSOR);
    }
    this._active = false;
  }

  // ── state updates ────────────────────────────────────────
  tick(update = {}) {
    if (update.current != null)      this.current = update.current;
    else                             this.current += (update.delta != null ? update.delta : 1);
    if (update.label != null)        this.label = update.label;
    if (update.total != null)        this.total = update.total;
    this._render();
  }

  setLabel(label) { this.label = label; this._render(); }
  setTotal(total) { this.total = total; this._render(); }

  // Print `text` (plus trailing newline) as a permanent line that stays
  // visible above the widget. Used for errors/warnings that shouldn't
  // vanish on the next tick.
  write(text) {
    if (!this._active) {
      process.stdout.write(text.endsWith("\n") ? text : text + "\n");
      return;
    }
    if (IS_TTY) {
      // Tear down the 2-line widget. Cursor is at anchor (one below widget).
      process.stdout.write(`${UP(2)}${CLEAR_LINE}\n${CLEAR_LINE}\n${UP(2)}`);
      // Cursor now at top of where the widget was. Emit the line.
      process.stdout.write(text.endsWith("\n") ? text : text + "\n");
      // Re-reserve two lines below the emitted text.
      process.stdout.write("\n\n");
      this._render(true);
    } else {
      process.stdout.write(text.endsWith("\n") ? text : text + "\n");
    }
  }

  // ── rendering ────────────────────────────────────────────
  _render(force = false) {
    if (!this._active) return;
    const now = Date.now();
    if (IS_TTY) {
      if (!force && now - this._lastDrawMs < FRAME_MS) return;
      this._lastDrawMs = now;

      const cols  = (process.stdout.columns || 100);
      const barW  = Math.max(BAR_MIN, Math.min(BAR_MAX, cols - 30));
      const bar   = makeBar(this.current, this.total, barW);
      const pct   = this.total > 0 ? Math.round((this.current / this.total) * 100) : 0;
      const title = this.title ? ` \u00b7 ${this.title}` : "";
      const l1    = truncate(`${bar} ${this.current}/${this.total} (${pct}%)${title}`, cols - 1);
      const l2    = truncate(`  ${this.label}`, cols - 1);

      // From anchor: up 2, clear+write l1, \n → next line, clear+write l2, \n → back to anchor.
      process.stdout.write(`${UP(2)}\r${CLEAR_LINE}${l1}\n\r${CLEAR_LINE}${l2}\n`);
    } else {
      if (!force && now - this._lastDrawMs < HEARTBEAT_MS) return;
      this._lastDrawMs = now;
      const pct = this.total > 0 ? Math.round((this.current / this.total) * 100) : 0;
      const head = this.title ? `${this.title}: ` : "";
      const tail = this.label ? ` \u00b7 ${this.label}` : "";
      process.stdout.write(`[progress] ${head}${this.current}/${this.total} (${pct}%)${tail}\n`);
    }
  }
}

// Ensure cursor is restored even if the process dies mid-run.
let _restoreHooked = false;
function hookRestoreCursor() {
  if (_restoreHooked) return;
  _restoreHooked = true;
  const restore = () => { if (IS_TTY) try { process.stdout.write(SHOW_CURSOR); } catch (_) {} };
  process.on("exit",  restore);
  process.on("SIGINT",  () => { restore(); process.exit(130); });
  process.on("SIGTERM", () => { restore(); process.exit(143); });
}
hookRestoreCursor();

module.exports = { Progress };
