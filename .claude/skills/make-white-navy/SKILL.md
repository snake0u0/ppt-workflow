---
name: make-white-navy
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the
  white-navy design system, then deploy it. Use this skill whenever the user
  runs /make-white-navy, or asks to build / make a deck, 발표자료, 프레젠테이션,
  or 슬라이드 in the white-navy theme ("navy orange" style) from a
  presentations/ folder or a DRAFT.md / markdown draft - even if they don't name
  the skill explicitly. Same build workflow as make-labmeeting, but applies
  design-guide/design-white-navy.md instead of minimal-navy.
---

# make-white-navy

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **white-navy** design system, then deploys
it.

Invocation: `/make-white-navy @<folder>` or `/make-white-navy @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `white-navy` |
| `<GUIDE>` | `design-guide/design-white-navy.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

White-navy is the professional-technical style: a white-to-soft-gray gradient
canvas, deep navy ink (`#132450`), and a single accent orange (`#FF6601`) used
as keyword highlight / numbered marker / short rule - never as a card fill or
more than ~5-10% of a slide. Pretendard (Black/Bold for display) with D2Coding
code blocks. The classic variant carries a thin navy left sidebar with a white
dot trio; the minimal variant drops it. `<GUIDE>` is the authority.
