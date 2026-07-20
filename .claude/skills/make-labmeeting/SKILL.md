---
name: make-labmeeting
description: >-
  Build a lab-meeting presentation deck (index.html + meta.json) from a
  DRAFT.md, apply the minimal-navy design system, and deploy it. Use this skill
  whenever the user runs /make-labmeeting, or asks to turn a presentations/
  folder or a DRAFT.md / markdown draft into a 랩미팅 발표자료 / 프레젠테이션 /
  슬라이드, build an index.html deck from a draft, or "make and deploy" a
  lab-meeting deck - even if they don't name the skill explicitly. This is the
  standard shortcut for the recurring lab-meeting build workflow in this repo.
  For a deck in a different design system, use the matching /make-<theme> skill
  (make-ferrari, make-white-navy, make-supabase, make-lime-green,
  make-inventory, make-nintendo, make-dell) instead.
---

# make-labmeeting

Turns a `DRAFT.md` (or a given markdown draft) into a finished lab-meeting deck
(`index.html` + `meta.json`) in the **minimal-navy** house style, then deploys
it. It exists so the user does not have to restate the same requirements every
time.

Invocation: `/make-labmeeting @<folder>` or `/make-labmeeting @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `minimal-navy` |
| `<GUIDE>` | `design-guide/design-minimal-navy.md` |
| `<EVENT>` | `labmeeting` (pinned - this skill is the lab-meeting workflow) |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Minimal-navy is the plain, academic house style for 랩미팅 decks: flat white
canvas, brand navy (`#024489`) as chrome only, Pretendard carrying hierarchy by
weight, and figures sitting bare on white. Restraint is the point - if a slide
starts to look "designed," strip something out. `<GUIDE>` is the authority.
