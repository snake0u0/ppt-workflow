---
name: make-lime-green
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the
  lime-green design system, then deploy it. Use this skill whenever the user
  runs /make-lime-green, or asks to build / make a deck, 발표자료, 프레젠테이션,
  or 슬라이드 in the lime-green theme (flat color-blocked cream/charcoal with a
  lime accent) from a presentations/ folder or a DRAFT.md / markdown draft -
  even if they don't name the skill explicitly. Same build workflow as
  make-labmeeting, but applies design-guide/design-lime-green.md instead of
  minimal-navy.
---

# make-lime-green

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **lime-green** design system, then deploys
it.

Invocation: `/make-lime-green @<folder>` or `/make-lime-green @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `lime-green` |
| `<GUIDE>` | `design-guide/design-lime-green.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Lime-green is flat and color-blocked - no decorative gradients. Two working
canvases alternate for rhythm: a warm flat cream (paper) for content slides and
a flat charcoal for 목차 / showcase slides. The GCOO lime green is a flat accent
only (number chips, dot markers, active page badge, one emphasized column) -
never a full-slide fill, never a gradient. Font is Paperlogy. Full-bleed media
appears only where the guide documents it (cover, closing), each with a
legibility scrim. `<GUIDE>` is the authority.
