---
name: make-bmw
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the bmw
  M motorsport design system, then deploy it. Use this skill whenever the user
  runs /make-bmw, or asks to build / make a deck, 발표자료, 프레젠테이션, or
  슬라이드 in the bmw theme ("BMW style", "BMW M", "비엠더블유 테마", black
  motorsport look, M tricolor stripe, dark editorial) from a presentations/
  folder or a DRAFT.md / markdown draft - even if they don't name the skill
  explicitly. Same build workflow as make-labmeeting, but applies
  design-guide/design-bmw.md instead of minimal-navy.
---

# make-bmw

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **bmw** design system, then deploys it.

Invocation: `/make-bmw @<folder>` or `/make-bmw @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `bmw` |
| `<GUIDE>` | `design-guide/design-bmw.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

BMW is BMW M's motorsport marketing surface - a true-black canvas (#000) with
white display type and the editorial signature of **heavy 700 display against
Light 300 body** (#bbbbbb). The M tricolor stripe (#0066b1 → #1c69d4 →
#e22718) is rationed to brand-identity moments only: a small 4px chip above
each slide title and the cover's full-width stripe - never a fill, never
behind text, never on buttons. Everything is sharp 0px corners (only circular
icon controls may be round), depth is 1px hairlines (#3c3c3c) and one-step
surface lifts (#0d0d0d / #1a1a1a) - no shadows, no gradients. Uppercase Latin
labels carry 1.5px "machined" tracking; Korean skips tracking and leans on
weight (Inter + Pretendard chain, both bundled). Figures sit as hard
hairline-bordered rectangles on black and run large - bigger photography
before bigger type. Footnotes render muted (#7e7e7e) over a bottom hairline.
The guide's *Slide Deck Adaptation* section maps the M chrome onto 1280×720
slides. `<GUIDE>` is the authority.
