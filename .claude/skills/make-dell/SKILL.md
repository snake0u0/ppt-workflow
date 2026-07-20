---
name: make-dell
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the dell
  1996 catalog-web design system, then deploy it. Use this skill whenever the
  user runs /make-dell, or asks to build / make a deck, 발표자료, 프레젠테이션,
  or 슬라이드 in the dell theme ("Dell style", "델 테마", 1996 / mid-90s retro
  web, catalog ribbon-card look, black page frame + Times serif body) from a
  presentations/ folder or a DRAFT.md / markdown draft - even if they don't
  name the skill explicitly. Same build workflow as make-labmeeting, but
  applies design-guide/design-dell.md instead of minimal-navy.
---

# make-dell

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **dell** design system, then deploys it.

Invocation: `/make-dell @<folder>` or `/make-dell @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `dell` |
| `<GUIDE>` | `design-guide/design-dell.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Dell is Dell.com circa December 1996 - catalog-era enterprise web. Every slide
sits inside a literal ~8px black `page-frame` on true white paper. The header
is a black `top-banner` strip (white Helvetica-bold title, red section number
at right - the "1-800" slot). Content groups are **ribbon cards**: a white
title bar with a 1px black underline over a flat tinted body in one of eight
catalog colors (sage #b3bd95, salmon #d77a7a, peach #e6915d, lime #c0d4a7,
sky #9ab6c8, steel #a5b8c0, periwinkle #8c9ae0, olive #8e8a25) - assign one
tint per numbered section and keep it. Body copy is **serif** (Times + the
bundled NotoSerifKR for Korean) - the era's signature; display type is Arial
Black / Pretendard 900. Dell red (#e91d2a) appears only on the cover's CTA
panel and the header's section number; yellow is for sticker accents (date tab,
NEW! bursts). Depth is hard 1px borders and hard 2-3px offset shadows - no
blur, no gradients, no rounded corners (only a round seal may be circular).
Links are classic underlined #0000ee blue. The guide's *Slide Deck Adaptation*
section maps the catalog chrome onto 1280×720 slides. `<GUIDE>` is the
authority.
