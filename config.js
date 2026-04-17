"use strict";

/**
 * config.js — load and resolve log templates.
 *
 * Config file lives next to the .mpr as `mx-error-handler.json`:
 *
 * {
 *   "templates": {
 *     "verbose":  "'[VERBOSE] {module}.{microflow}: ' + $latestError/Message",
 *     "apiflow":  "'API error in {microflow}: ' + $latestError/Message",
 *     "compact":  "'{microflow}: ' + $latestError/Message"
 *   },
 *   "defaultLogTemplate": "compact",
 *   "moduleLogTemplates": {
 *     "Integrations": "apiflow",
 *     "MyFirstModule": "'Raw MDL also works here - ' + $latestError/Message"
 *   }
 * }
 *
 * A value can be either a **template name** (an identifier defined in the
 * `templates` section) or a **raw MDL expression** (any string containing
 * `$`, `'`, `"`, or `+`). Passing a name that isn't defined is a hard error,
 * so typos surface immediately instead of producing CE0117 at runtime.
 *
 * Placeholders `{microflow}` and `{module}` are substituted before the
 * template reaches mxcli.
 */

const fs   = require("fs");
const path = require("path");

const CONFIG_FILENAME = "mx-error-handler.json";

function loadConfig(projectPath) {
  const configPath = path.join(path.dirname(path.resolve(projectPath)), CONFIG_FILENAME);
  if (!fs.existsSync(configPath)) return { _path: null, templates: {} };

  let raw;
  try { raw = fs.readFileSync(configPath, "utf8"); }
  catch (e) { throw new Error(`Could not read ${configPath}: ${e.message}`); }

  // An empty or whitespace-only file is treated as "no config" rather than
  // a fatal error — the user likely created it as a placeholder.
  if (raw.trim() === "") return { _path: null, templates: {} };

  let parsed;
  try { parsed = JSON.parse(raw); }
  catch (e) { throw new Error(`Invalid JSON in ${configPath}: ${e.message}`); }

  if (typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`${configPath} must be a JSON object.`);
  }

  // templates: optional object of name→string
  if (parsed.templates !== undefined) {
    if (typeof parsed.templates !== "object" || Array.isArray(parsed.templates)) {
      throw new Error(`${configPath}: "templates" must be a JSON object.`);
    }
    for (const [k, v] of Object.entries(parsed.templates)) {
      if (typeof v !== "string") {
        throw new Error(`${configPath}: templates["${k}"] must be a string (MDL expression).`);
      }
      if (!isValidTemplateName(k)) {
        throw new Error(`${configPath}: "${k}" is not a valid template name (use letters, digits, underscores; must start with a letter).`);
      }
    }
  } else {
    parsed.templates = {};
  }

  if (parsed.defaultLogTemplate !== undefined && typeof parsed.defaultLogTemplate !== "string") {
    throw new Error(`${configPath}: defaultLogTemplate must be a string.`);
  }
  if (parsed.moduleLogTemplates !== undefined) {
    if (typeof parsed.moduleLogTemplates !== "object" || Array.isArray(parsed.moduleLogTemplates)) {
      throw new Error(`${configPath}: moduleLogTemplates must be a JSON object.`);
    }
    for (const [k, v] of Object.entries(parsed.moduleLogTemplates)) {
      if (typeof v !== "string") {
        throw new Error(`${configPath}: moduleLogTemplates["${k}"] must be a string (name or MDL expression).`);
      }
    }
  }

  // Warn about unrecognized top-level keys so typos like `microflowLogTemplates`
  // (instead of `moduleLogTemplates`) are caught at load time.
  const KNOWN = new Set(["templates", "defaultLogTemplate", "moduleLogTemplates", "_path"]);
  const unknown = Object.keys(parsed).filter(k => !KNOWN.has(k) && !k.startsWith("_"));
  if (unknown.length > 0) {
    console.warn(
      `\x1b[33m[WARN]\x1b[0m  ${configPath}: ignoring unknown key(s): ${unknown.join(", ")}.`
    );
    console.warn(`          Recognized keys: templates, defaultLogTemplate, moduleLogTemplates.`);
  }

  parsed._path = configPath;
  return parsed;
}

function isValidTemplateName(s) {
  return /^[A-Za-z][A-Za-z0-9_]*$/.test(s);
}

/**
 * A value is an *expression* if it contains any character that cannot appear
 * in a bare identifier — `$`, single or double quote, `+`, whitespace, `/`.
 * Anything else is treated as a template *name* and must be defined under
 * `templates`.
 */
function looksLikeExpression(s) {
  return /[\s$'"+/]/.test(s);
}

/**
 * Given a raw value from the CLI or config, return the actual MDL expression.
 * Expressions pass through unchanged; names are looked up in `templates`.
 * Unknown names throw — the caller decides how to report.
 */
function resolveValue(value, templates, source) {
  if (!value) return null;
  if (looksLikeExpression(value)) return value;
  if (templates && Object.prototype.hasOwnProperty.call(templates, value)) {
    return templates[value];
  }
  const known = templates && Object.keys(templates).length > 0
    ? `Known templates: ${Object.keys(templates).join(", ")}.`
    : `(No "templates" section in config — define one or pass a raw MDL expression.)`;
  throw new Error(`Template reference "${value}" from ${source} is not defined. ${known}`);
}

/**
 * Pick the right template for a given module. Priority:
 *   1. cliTemplate         — via --log-template (name or expression)
 *   2. moduleLogTemplates  — config entry matching the module name (name or expression)
 *   3. defaultLogTemplate  — project-wide default (name or expression)
 *   4. null                — caller falls back to the built-in
 */
function resolveTemplate({ config, cliTemplate, moduleName }) {
  const templates = config.templates || {};

  if (cliTemplate) {
    const mdl = resolveValue(cliTemplate, templates, "--log-template");
    return { template: mdl, source: looksLikeExpression(cliTemplate) ? "cli (expression)" : `cli (name: ${cliTemplate})` };
  }
  if (config.moduleLogTemplates && config.moduleLogTemplates[moduleName]) {
    const raw = config.moduleLogTemplates[moduleName];
    const mdl = resolveValue(raw, templates, `moduleLogTemplates[${moduleName}]`);
    return { template: mdl, source: looksLikeExpression(raw) ? `config:moduleLogTemplates[${moduleName}] (expression)` : `config:moduleLogTemplates[${moduleName}] (name: ${raw})` };
  }
  if (config.defaultLogTemplate) {
    const mdl = resolveValue(config.defaultLogTemplate, templates, "defaultLogTemplate");
    return { template: mdl, source: looksLikeExpression(config.defaultLogTemplate) ? "config:defaultLogTemplate (expression)" : `config:defaultLogTemplate (name: ${config.defaultLogTemplate})` };
  }
  return { template: null, source: "built-in" };
}

function substitutePlaceholders(template, { microflow, module }) {
  const esc = (s) => String(s).replace(/'/g, "''");
  return template
    .replace(/\{microflow\}/g, esc(microflow))
    .replace(/\{module\}/g, esc(module));
}

module.exports = {
  loadConfig,
  resolveTemplate,
  resolveValue,
  substitutePlaceholders,
  looksLikeExpression,
  CONFIG_FILENAME,
};
