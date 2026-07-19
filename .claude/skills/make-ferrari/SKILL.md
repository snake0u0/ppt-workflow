---
name: make-ferrari
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the
  Ferrari cinematic-editorial design system, then deploy it. Use this skill
  whenever the user runs /make-ferrari, or asks to build / make a deck,
  발표자료, 프레젠테이션, or 슬라이드 in the ferrari theme or "Ferrari style"
  from a presentations/ folder or a DRAFT.md / markdown draft - even if they
  don't name the skill explicitly. Same build workflow as make-labmeeting, but
  applies design-guide/design-ferrari.md instead of minimal-navy.
---

# make-ferrari

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **ferrari** design system, then deploys it.

Invocation: `/make-ferrari @<folder>` or `/make-ferrari @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `ferrari` |
| `<GUIDE>` | `design-guide/design-ferrari.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Ferrari is cinematic-editorial: a near-black canvas (`#181818`, never pure
black), Rosso Corsa (`#da291c`) used *scarcely* as the only accent, sharp 0px
corners everywhere, display type at weight 500 (never bold), and body copy in
muted gray (`#969696`) rather than white. The cover is a full-bleed photograph
with a dark scrim - but only if the draft references a cover image with `![]()`;
otherwise fall back to the flat canvas rather than inventing imagery. `<GUIDE>`
is the authority.
