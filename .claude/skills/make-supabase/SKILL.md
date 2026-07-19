---
name: make-supabase
description: >-
  Build a presentation deck (index.html + meta.json) from a DRAFT.md in the
  supabase design system, then deploy it. Use this skill whenever the user runs
  /make-supabase, or asks to build / make a deck, 발표자료, 프레젠테이션, or
  슬라이드 in the supabase theme ("Supabase style", emerald-green-on-white) from
  a presentations/ folder or a DRAFT.md / markdown draft - even if they don't
  name the skill explicitly. Same build workflow as make-labmeeting, but applies
  design-guide/design-supabase.md instead of minimal-navy.
---

# make-supabase

Turns a `DRAFT.md` (or a given markdown draft) into a finished deck
(`index.html` + `meta.json`) in the **supabase** design system, then deploys it.

Invocation: `/make-supabase @<folder>` or `/make-supabase @<file.md>`.

## Parameters

| Parameter | Value |
|---|---|
| `<THEME>` | `supabase` |
| `<GUIDE>` | `design-guide/design-supabase.md` |
| `<EVENT>` | not pinned - resolve per the core's *Event resolution* |

## Workflow

**Read `.claude/deck-build-core.md` and follow it end to end**, substituting the
parameters above wherever it says `<THEME>`, `<GUIDE>`, or `<EVENT>`. That file
is the single source of truth for input resolution, success criteria, content
fidelity, `@claude` build directives, `※` annotation placement, `meta.json`, the
visual pass, deploy, and guardrails.

## About this theme

Supabase is engineered for clarity: a pure-white canvas, near-black ink
(`#171717`), and a single emerald primary (`#3ecf8e`) as the only chromatic
event - everything else is a calibrated grey ladder. Display type sits at weight
500 with tight negative tracking; no gradient, no full-bleed photography, no
dark-canvas track. Figures/screenshots sit in 12px-rounded containers with 1px
hairlines. `<GUIDE>` is the authority.
