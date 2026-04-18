"use strict";

/**
 * Unit tests for the pure-function paths in mx-error-handler.
 *
 *   node --test            # run everything
 *   node --test tests/     # same
 *
 * These are CLI logic tests only — no mxcli, no filesystem mutation, no
 * real .mpr needed. The parts that actually shell out to mxcli are
 * covered by running the tool against a real project and inspecting the
 * run log.
 */

const test   = require("node:test");
const assert = require("node:assert/strict");

const { classifyMdl } = require("../audit");
const {
  transformMdl,
  buildHandlerBlock,
  isMxcliParseError,
} = require("../patcher");
const {
  stripErrorHandlers,
  fingerprint,
  verifyPatch,
  checkRoundtripRisk,
} = require("../safety");

// ─────────────────────────────────────────────────────────────
// isMxcliParseError — the reason we're bumping to 0.3.2.
// The strings below are copy-pasted from real run logs so this test
// regresses if someone changes the regex without thinking.
// ─────────────────────────────────────────────────────────────
test("isMxcliParseError: true for the exact mxcli parse error string", () => {
  const msg = "mxcli exited 1: Parse error: line 20:0 token recognition error at: '' TYPE Information;\n\n'\n\n  This may be caused by an unescaped apostrophe in a string literal.";
  assert.equal(isMxcliParseError(msg), true);
});

test("isMxcliParseError: true for 'token recognition error' alone", () => {
  assert.equal(isMxcliParseError("token recognition error at: '' "), true);
});

test("isMxcliParseError: case-insensitive", () => {
  assert.equal(isMxcliParseError("PARSE ERROR in MDL"), true);
  assert.equal(isMxcliParseError("Token Recognition failure"), true);
});

test("isMxcliParseError: false for unrelated mxcli errors", () => {
  assert.equal(isMxcliParseError("mxcli exited 1: Module not found"), false);
  assert.equal(isMxcliParseError("ENOENT: no such file or directory"),  false);
  assert.equal(isMxcliParseError(""),                                    false);
  assert.equal(isMxcliParseError(null),                                  false);
  assert.equal(isMxcliParseError(undefined),                             false);
});

// ─────────────────────────────────────────────────────────────
// classifyMdl — the 5 buckets
// ─────────────────────────────────────────────────────────────
test("classifyMdl: counts every ON ERROR form independently", () => {
  const mdl = `
    ACTION Java_1 { ON ERROR ROLLBACK; }
    ACTION Java_2 { ON ERROR; }
    ACTION Java_3 { ON ERROR { LOG ERROR NODE 'X' ('msg'); }; }
    ACTION Java_4 { ON ERROR WITHOUT ROLLBACK { LOG ERROR NODE 'X' ('msg'); }; }
    ACTION Java_5 { ON ERROR CONTINUE; }
  `;
  const c = classifyMdl(mdl);
  assert.equal(c.rollback,        1, "rollback");
  assert.equal(c.unwired,         1, "unwired (CE0011)");
  assert.equal(c.customWithRb,    1, "custom with rollback");
  assert.equal(c.customWithoutRb, 1, "custom without rollback");
  assert.equal(c.continue_,       1, "continue");
});

test("classifyMdl: handles empty/no-handler MDL", () => {
  const c = classifyMdl("ACTION Java_X { param foo = bar; }");
  assert.deepEqual(c, { rollback: 0, continue_: 0, unwired: 0, customWithRb: 0, customWithoutRb: 0 });
});

// ─────────────────────────────────────────────────────────────
// stripErrorHandlers / fingerprint / verifyPatch
// ─────────────────────────────────────────────────────────────
test("stripErrorHandlers: removes all forms, including nested-brace bodies", () => {
  const mdl = `
    STUFF_BEFORE;
    ON ERROR { CALL X (); LOG ERROR NODE 'N' ('m'); };
    STUFF_MIDDLE;
    ON ERROR WITHOUT ROLLBACK { IF { inner } ; };
    STUFF_INNER;
    ON ERROR ROLLBACK;
    STUFF_END;
  `;
  const stripped = stripErrorHandlers(mdl);
  assert.match(stripped, /STUFF_BEFORE/);
  assert.match(stripped, /STUFF_MIDDLE/);
  assert.match(stripped, /STUFF_INNER/);
  assert.match(stripped, /STUFF_END/);
  assert.doesNotMatch(stripped, /ON ERROR/);
  assert.doesNotMatch(stripped, /LOG ERROR NODE/);
});

test("fingerprint: identical MDLs fingerprint identically", () => {
  const a = "ACTION { param = 1; ON ERROR ROLLBACK; }";
  const b = "ACTION {\n    param = 1;\n    ON ERROR ROLLBACK;\n}";
  assert.equal(fingerprint(a), fingerprint(b));
});

test("fingerprint: different-ON-ERROR-only produces identical fingerprints", () => {
  const a = "ACTION { doStuff; ON ERROR ROLLBACK; }";
  const b = "ACTION { doStuff; ON ERROR { LOG ERROR NODE 'X' ('m'); }; }";
  assert.equal(fingerprint(a), fingerprint(b),
    "two MDLs that only differ inside ON ERROR should fingerprint the same");
});

test("verifyPatch: allows ON ERROR changes, flags anything else", () => {
  const before = "ACTION { doStuff; ON ERROR ROLLBACK; }";
  const okAfter   = "ACTION { doStuff; ON ERROR { LOG ERROR NODE 'X' ('m'); }; }";
  const badAfter  = "ACTION { differentStuff; ON ERROR ROLLBACK; }";

  assert.deepEqual(verifyPatch(before, okAfter),  { ok: true });
  const bad = verifyPatch(before, badAfter);
  assert.equal(bad.ok, false);
  assert.ok(bad.reason,    "bad verdict should have a reason");
});

// ─────────────────────────────────────────────────────────────
// transformMdl — the patch itself
// ─────────────────────────────────────────────────────────────
const baseCtx = {
  strategy:      "custom-with-rollback",
  microflowName: "MF_Test",
  moduleName:    "Orders",
  logNode:       "Orders",
  handlerName:   null,
  template:      "'{microflow} failed - ' + $latestError/Message",
};

test("transformMdl: patches every bare ON ERROR ROLLBACK", () => {
  const mdl  = "A { ON ERROR ROLLBACK; } B { ON ERROR ROLLBACK; }";
  const { mdl: out, patchCount } = transformMdl(mdl, baseCtx);
  assert.equal(patchCount, 2);
  assert.doesNotMatch(out, /ON ERROR ROLLBACK\s*;/);
  assert.match(out, /LOG ERROR NODE 'Orders'/);
});

test("transformMdl: patches the bare unwired form (CE0011)", () => {
  const mdl  = "A { ON ERROR; }";
  const { patchCount } = transformMdl(mdl, baseCtx);
  assert.equal(patchCount, 1);
});

test("transformMdl: does NOT touch already-custom handlers", () => {
  const mdl  = "A { ON ERROR { LOG ERROR NODE 'X' ('keep me'); }; }";
  const { mdl: out, patchCount } = transformMdl(mdl, baseCtx);
  assert.equal(patchCount, 0);
  assert.match(out, /keep me/);
});

test("transformMdl: is idempotent — second run patches nothing", () => {
  const mdl  = "A { ON ERROR ROLLBACK; }";
  const first  = transformMdl(mdl, baseCtx);
  const second = transformMdl(first.mdl, baseCtx);
  assert.equal(first.patchCount,  1);
  assert.equal(second.patchCount, 0, "re-running patch on already-patched MDL must be a no-op");
});

test("transformMdl: continue strategy emits a bare CONTINUE (no log)", () => {
  const mdl  = "A { ON ERROR ROLLBACK; }";
  const { mdl: out } = transformMdl(mdl, { ...baseCtx, strategy: "continue" });
  assert.match(out, /ON ERROR CONTINUE;/);
  assert.doesNotMatch(out, /LOG ERROR/);
});

test("transformMdl: without-rollback strategy emits the WITHOUT ROLLBACK form", () => {
  const mdl  = "A { ON ERROR ROLLBACK; }";
  const { mdl: out } = transformMdl(mdl, { ...baseCtx, strategy: "custom-without-rollback" });
  assert.match(out, /ON ERROR WITHOUT ROLLBACK\s*\{/);
});

// ─────────────────────────────────────────────────────────────
// buildHandlerBlock — placeholder + handler-microflow injection
// ─────────────────────────────────────────────────────────────
test("buildHandlerBlock: substitutes {microflow} and {module}", () => {
  const block = buildHandlerBlock({
    strategy:      "custom-with-rollback",
    microflowName: "MF_X",
    moduleName:    "Orders",
    logNode:       "Orders",
    handlerName:   null,
    template:      "'{module}.{microflow} failed: ' + $latestError/Message",
  });
  assert.match(block, /Orders\.MF_X failed/);
  assert.doesNotMatch(block, /\{microflow\}|\{module\}/);
});

test("buildHandlerBlock: injects CALL MICROFLOW when handlerName given", () => {
  const block = buildHandlerBlock({
    strategy:      "custom-with-rollback",
    microflowName: "MF_X",
    moduleName:    "Orders",
    logNode:       "Orders",
    handlerName:   "Common.MF_Handle",
    template:      "'x'",
  });
  assert.match(block, /CALL MICROFLOW Common\.MF_Handle/);
  assert.match(block, /LOG ERROR NODE 'Orders'/);
});

// ─────────────────────────────────────────────────────────────
// Risk-scan (Layer 2 — still present in safety.js for future reuse)
// ─────────────────────────────────────────────────────────────
test("checkRoundtripRisk: flags SHOW PAGE with $-parameter", () => {
  const mdl = `SHOW PAGE Orders.OrderDetail ($Param = $Order)`;
  assert.ok(checkRoundtripRisk(mdl));
});

test("checkRoundtripRisk: returns null for safe MDL", () => {
  const mdl = `ACTION Java_1 { param x = $Input; ON ERROR ROLLBACK; }`;
  assert.equal(checkRoundtripRisk(mdl), null);
});
