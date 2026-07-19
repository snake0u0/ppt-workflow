---
name: make-inventory
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the
  inventoy (warehouse / SCM) design system, then deploy it. Use this skill
  whenever the user runs /make-inventory, or asks to build / make a deck,
  발표자료, 프레젠테이션, or 슬라이드 in the inventory / inventoy / warehouse /
  SCM theme from a presentations/ folder or a DRAFT.md / markdown draft - even
  if they don't name the skill explicitly. Same build workflow as
  make-labmeeting, but applies design-guide/design-inventoy.md instead of
  minimal-navy.
---

# make-inventory

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **inventoy** (warehouse / SCM) design
system, then deploys it.

Invocation: `/make-inventory @<folder>` or `/make-inventory @<file.md>`.

> **Note on the name:** the theme id and its guide are spelled `inventoy` (a
> typo baked into the repo), while this skill is `/make-inventory`. That is
> deliberate - write `"theme": "inventoy"` to `meta.json`, because that is the
> id `scripts/gen-themes.mjs` emits as `/shared/themes/inventoy.css`. Don't
> "fix" the spelling to `inventory` in the theme value; it would break the
> stylesheet link.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `inventoy` (not `inventory` - see the note above) |
| `<GUIDE>` | `design-guide/design-inventoy.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Inventoy wears its subject - a literal warehouse: warm mustard gold (`#E4D17B`),
cream paper (`#EFEBDC`), white data panels, and deep olive-brown ink
(`#403C29`), every hue reading as cardboard or kraft paper. The governing
geometry is the **diagonal**: photos are masked on a slant and small gold
triangles pin into slide corners - nothing splits on a clean vertical or
horizontal. Type runs two registers: an ultra-heavy black display gothic title
beside a muted taupe subtitle at a lighter weight. `<GUIDE>` is the authority.
