---
name: make-nintendo
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the
  nintendo Y2K console-chrome design system, then deploy it. Use this skill
  whenever the user runs /make-nintendo, or asks to build / make a deck,
  발표자료, 프레젠테이션, or 슬라이드 in the nintendo theme ("Nintendo style",
  "닌텐도 테마", Y2K / retro-console / Game Boy chrome, periwinkle metal-plate
  look) from a presentations/ folder or a DRAFT.md / markdown draft - even if
  they don't name the skill explicitly. Same build workflow as make-labmeeting,
  but applies design-guide/design-nintendo.md instead of minimal-navy.
---

# make-nintendo

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **nintendo** design system, then deploys it.

Invocation: `/make-nintendo @<folder>` or `/make-nintendo @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `nintendo` |
| `<GUIDE>` | `design-guide/design-nintendo.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Nintendo is Nintendo.com circa 2001 - the web as console hardware. Every slide
is a machine faceplate: brushed-periwinkle metal plates (`#7a8aba`) with hard
bevel edges (bright top highlight, `#3d4f97` chrome-indigo shadow line), a
near-black carbon command layer (`#21242e`) with halftone-dot texture for
headers/footers, and warm color rationed strictly to wayfinding - nav-gold
(`#e48600`) header words, amber (`#ecab37`) badges, signal orange (`#f68d1f`)
forward cues only. Corners are sharp or chamfered at 45°, never uniformly
rounded; depth is hard bevels, never soft blurred shadows. Display wordmarks
are heavy white type with a thick outline + hard drop shadow (box-art style).
Dense, packed plates are the intended texture - don't air it out. Type is
Arial-first with Pretendard chained for Korean; scale the site's tiny web sizes
up for 1280×720 projection while keeping the uppercase-tracked label voice.
The guide's *Slide Deck Adaptation* section maps web chrome onto slide chrome.
`<GUIDE>` is the authority.
