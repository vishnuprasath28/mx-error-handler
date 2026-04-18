# mx-error-handler

A small command-line tool that sets up error handling on risky activities (Java actions, REST calls, sub-microflow calls, etc.) in your Mendix microflows. Instead of clicking through every microflow in Studio Pro, you run one command and the tool adds a proper error handler with a log message to every activity that still uses the default Rollback.

---

## One-minute overview

| | Does it change anything? | What it gives you |
|---|---|---|
| `audit` | **No** | An Excel-compatible CSV report saved next to `App.mpr`, listing every microflow's error-handling state. Exits 1 on broken handlers (CE0011) — perfect for CI. |
| `patch` | **Yes** | Adds error handlers (Custom with rollback + `LOG ERROR` message) to activities that use the default Rollback. Snapshot + verification + auto-restore guarantees the project is never left in a broken state. |

Think of `audit` as `git status` and `patch` as `git commit` — `audit` tells you what's wrong, `patch` fixes it.

---

## Install

```bash
npm install -g @vishnuprasath28/mx-error-handler
```

After install, you can run `mx-error-handler` from any directory.

### Prerequisites

1. **Node.js 18 or later** — check with `node --version`.
2. **mxcli installed** — the tool shells out to mxcli to read and modify the `.mpr` safely. Default Windows path `C:\MxCLI\mxcli.exe`; on macOS/Linux the `mxcli` binary must be on `PATH`. Override with `MXCLI=/custom/path/mxcli` env var.
3. **Close Studio Pro** before running `patch`. Two programs can't write to the same `.mpr` at once.

### Developing locally (without publishing)

```bash
git clone https://github.com/vishnuprasath28/mx-error-handler.git
cd mx-error-handler
npm install        # nothing to install — no external deps — but runs the lifecycle
npm link           # exposes `mx-error-handler` globally from your checkout
```

---

## Quick start — 3 commands you'll actually use

Run these from inside your Mendix project folder (where `App.mpr` lives):

**See the state of your project:**
```bash
mx-error-handler audit --all-modules --project ./App.mpr
```
By default writes a CSV report next to `App.mpr` AND prints the table in the terminal. Pick one with `--output console` or `--output csv`. `patch` accepts the same flag and writes its own per-microflow report.

**Preview what `patch` would do without writing anything:**
```bash
mx-error-handler patch --all-modules --dry-run --project ./App.mpr
```

**Actually apply the patch:**
```bash
mx-error-handler patch --all-modules --project ./App.mpr
```
Before any write, the tool snapshots `App.mpr` + `mprcontents/`. After every patched microflow it re-checks that nothing else changed. Any failure → automatic full restore. See [Safety guarantees](#safety-guarantees) below.

---

## Picking which modules to process

You must pick one target for every run:

| Flag | Meaning |
|---|---|
| `--module <name>` | Just that one module (e.g. `--module Orders`). |
| `--all-modules` | Every user module. Marketplace modules (Administration, Atlas_Core, etc.) are skipped automatically. |

---

## Error handling strategies (`--error-handling`)

Only used by `patch`. Picks how the error handler block is written:

| Value | What it does | When to use |
|---|---|---|
| `custom-with-rollback` (default) | Adds `ON ERROR { LOG ERROR... };` — database changes from the failing activity get rolled back, then your log message runs. | Most cases. Safest default. |
| `custom-without-rollback` | Adds `ON ERROR WITHOUT ROLLBACK { LOG ERROR... };` — database changes are kept, then your log message runs. | Long-running flows where you want to keep partial progress even if one step fails. |
| `continue` | Adds `ON ERROR CONTINUE;` — no log, just swallow the error. | Legacy modules where you want the flow to ignore errors silently. No log is emitted, so `--log-template` is meaningless here. |

Example:
```bash
mx-error-handler patch --module Orders --error-handling custom-without-rollback --project ./App.mpr
```

---

## Custom log messages — `mx-error-handler.json`

Every patched activity gets a `LOG ERROR` line. By default it looks like:

```
<MicroflowName> failed - type: <$latestError/ErrorType>, message: <$latestError/Message>
```

If your team wants a different format, drop a config file next to `App.mpr`:

```
YourMendixProject/
├── App.mpr
├── mx-error-handler.json    ← create this
└── mprcontents/
```

### What the config looks like

```json
{
  "templates": {
    "compact":  "'{microflow}: ' + $latestError/Message",
    "verbose":  "'[ERR] {module}.{microflow} - type: ' + $latestError/ErrorType + ' | msg: ' + $latestError/Message",
    "apiflow":  "'API error in {microflow} at ' + toString([%CurrentDateTime%]) + ' - type: ' + $latestError/ErrorType + ', msg: ' + $latestError/Message"
  },

  "defaultLogTemplate": "verbose",

  "moduleLogTemplates": {
    "Integrations": "apiflow"
  }
}
```

**What each section means:**

- **`templates`** — Named log messages. The value is a raw MDL expression that produces a string.
- **`defaultLogTemplate`** — The template used when a module has no specific setting. Value is a template name from `templates` (or a raw expression).
- **`moduleLogTemplates`** — Override per module. Here, the `Integrations` module uses `apiflow`, everything else uses `verbose`.

### What you can use inside a template

| Allowed | Why |
|---|---|
| `'some text'` and `+` to concatenate | Standard MDL string concat. |
| `{microflow}` | Tool replaces with the microflow name. |
| `{module}` | Tool replaces with the module name. |
| `$latestError/ErrorType` | The error category (e.g. `Mendix.Core.Error`). Available in every error handler. |
| `$latestError/Message` | The error message text. Available in every error handler. |
| `toString([%CurrentDateTime%])` | Mendix built-in — timestamp when the error hit. |
| `$CurrentUser/Name` | Logged-in user. |

**Not allowed:**

| Forbidden | Why |
|---|---|
| `$OrderID`, `$Customer/Name`, etc. | The tool doesn't know which variables exist in each microflow — these only exist inside specific flows. Use `--handler` for that (see below). |

### Template priority order (first match wins)

1. `--log-template` flag on the command line.
2. `moduleLogTemplates[<ThisModule>]` in the config.
3. `defaultLogTemplate` in the config.
4. Built-in default (`'<microflow> failed - type: ... msg: ...'`).

### Using `--log-template` on the CLI

You can override the config for a single run:

```bash
# By name — must match a key under "templates" in the config
mx-error-handler patch --all-modules --log-template apiflow --project ./App.mpr

# By raw expression — must contain $, ', or + (the tool detects it's not a name)
mx-error-handler patch --module Orders \
  --log-template "'HOTFIX: ' + \$latestError/Message" \
  --project ./App.mpr
```

If you pass a name that isn't defined, the tool errors out immediately instead of emitting broken MDL:
```
[ERR] Orders: Template reference "apifow" from --log-template is not defined.
       Known templates: compact, verbose, apiflow.
```

---

## Calling a shared handler microflow (`--handler`)

If you already have a central error-handler microflow (for example `Common.MF_HandleError`), tell the tool to call it from every handler body:

```bash
mx-error-handler patch --all-modules --handler Common.MF_HandleError --project ./App.mpr
```

The generated handler becomes:
```
ON ERROR {
  CALL MICROFLOW Common.MF_HandleError();
  LOG ERROR NODE '<module>' (<template>);
};
```

You decide what `Common.MF_HandleError` does — send an email, raise a ticket, call an external API, etc. The tool doesn't care, it just calls it.

---

## What's safe — the tool never clobbers your work

The tool only touches **bare** error clauses:

| Current state | Action |
|---|---|
| `ON ERROR ROLLBACK;` (the Mendix default) | Patched. |
| `ON ERROR;` (broken Custom — CE0011) | Patched. |
| `ON ERROR { ... };` (hand-tuned handler) | **Skipped.** |
| `ON ERROR WITHOUT ROLLBACK { ... };` | **Skipped.** |
| `ON ERROR CONTINUE;` (you chose to swallow) | **Skipped.** |

Every microflow that needs patching is attempted. The verification layer (see below) re-describes each one after patching and checks that nothing changed beyond the error handler. If mxcli happened to drop data on the rebuild, that microflow is automatically reverted from the snapshot — the successful ones stay.

Run the tool twice in a row — the second run does nothing new. Safe to wire into CI or a pre-commit hook.

---

## Safety guarantees

Three independent layers protect your project. **A `patch` run either fully succeeds or leaves the project bit-for-bit identical to where it started — there is no in-between.**

### Layer 1 — Snapshot before any write
Before patching, the tool copies `App.mpr` + the entire `mprcontents/` folder into `_mxerrhandler_snapshot_<timestamp>/` next to your project. Restore is a plain file copy (no SQLite editing, no state-tracking). Snapshot is auto-deleted on success and **kept on failure** so you can inspect or manually restore.

### Layer 2 — (removed in v0.5.0)
Earlier versions had a pre-flight skip for "risky" constructs. That's been removed. Everything gets attempted; Layer 3 is the real safety net.

### Layer 3 — Per-microflow verification
After every `mxcli exec`, the tool re-describes the microflow and compares its structural fingerprint (error handlers stripped, whitespace normalized) to the pre-patch fingerprint. Any difference outside the `ON ERROR` clauses is treated as corruption — the run aborts and the snapshot is restored automatically.

### Override flags (advanced — defaults are safe)

| Flag | Effect |
|---|---|
| `--no-backup` | Skip snapshot + verification. Faster but a failure cannot be auto-reverted. Not recommended. |
| `--keep-backup` | Preserve the snapshot folder even on success (useful for diffing the change set). |

---

## Common errors and what they mean

| Error you see | What it means | Fix |
|---|---|---|
| `CE0011 — outgoing sequence flow set as error handler` (Studio Pro) | The activity has Custom error handling but no handler flow wired. | Run `patch` — it completes the handler. |
| `CE0117 — Error(s) in expression` (Studio Pro) | A log message contains invalid MDL — usually because `--log-template` was passed a name that isn't defined, and the tool wrote the raw text. | Run `audit` to find the broken flows, fix the template name / expression in the config, run `patch` again. (Current versions of the tool catch this before writing, so this should no longer happen.) |
| `Template reference "X" is not defined` | You passed `--log-template X` but `X` isn't a key under `templates` in your config. | Check the "Known templates" list in the error message. Fix the spelling or add it to the config. |
| `mxcli exited N` errors | The MDL being sent to mxcli is invalid. Usually a typo in a template expression (missing `'`, stray character). | Fix the template in the config, re-run. |

---

## Full `--help` reference

```
mx-error-handler <audit|patch> [options]

Subcommands:
  audit   Report-only. Exits 1 if broken handlers (CE0011) are found.
  patch   Apply error handling to activities using the default Rollback.

Required:
  --project <path>           Path to the .mpr file.
  --module <name>  OR        Process a single module.
  --all-modules              Process every user module.

Reporting:
  --output <console|csv|both> Pick report format. Default: both.

Patch-only options:
  --error-handling <type>    custom-with-rollback (default) | custom-without-rollback | continue
  --log-template <name|expr> Named template from mx-error-handler.json, or a raw MDL expression.
  --handler <qname>          Call this microflow in the handler body.
  --dry-run                  Preview changes — write nothing.

Safety options (advanced — defaults are safe):
  --no-backup                Skip snapshot + verification. Not recommended.
  --keep-backup              Preserve the snapshot folder on success.
```

---

## Typical workflow

```bash
# 1. See what's currently wrong
mx-error-handler audit --all-modules --project ./App.mpr

# 2. Preview what patch would do
mx-error-handler patch --all-modules --dry-run --project ./App.mpr

# 3. Apply
mx-error-handler patch --all-modules --project ./App.mpr

# 4. Confirm it's all green
mx-error-handler audit --all-modules --project ./App.mpr
```

Every run also writes a log file to `./mx-logs/run-<timestamp>.log` with a full record of what was done.
