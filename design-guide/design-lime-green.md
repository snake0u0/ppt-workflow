# GCOO E-Bike 3D Modeling — Presentation Design System

> Target: a **16:9 HTML deck** for the *GCOO 전기자전거 3D 모델링* term project (course: 3D 프린팅과 디자인 사고), later exported to **PDF**. Font: **Paperlogy**. The product is a green GCOO e-bike, and its body green anchors the accent color.

## Overview

This is a **flat, color-blocked** system — no decorative gradients. Backgrounds are solid color fields, the way the image reference blocks each slide into a single flat color. There are two working canvases: **paper** (a warm flat cream) for content slides, and a **flat charcoal "dark"** canvas for the 목차 and the render-showcase slides. The deck alternates these two as light/dark blocks to create rhythm. Two slides carry full-bleed media instead of a flat fill — the **cover** (background video) and the **closing** (background photo) — each with a functional scrim for legibility.

The GCOO **lime green** is a **flat accent**: number chips, dot markers, the active page badge, the emphasized table column, a highlight card. It is never a full-slide fill and never a gradient.

Slides are **flat, full-bleed rectangles**: no rounded slide frame, no drop shadow, no "floating card on a stage." Each slide fills the entire 16:9 frame so it maps 1:1 to a PDF page. Depth comes only from the **flat dark/light contrast between slides** and the **composited 3D renders** sitting in cards.

Typography is **Paperlogy** (Korean + Latin, 100–900), set **large** for projection. The 3D renders are the focal visuals; on the **video slide the video is the hero — large and centered**.

**Key Characteristics:**
- **Flat color blocks, no gradients.** Solid cream (light) and solid charcoal (dark) fields; the only gradients are scrims over the cover video / closing photo.
- **Light/dark rhythm.** Content slides are light cream; 목차 and the render-showcase slides (완성품 ×2 — 완성 모델 · 다각도 — and 완성품 영상) are flat charcoal, so the dark-background 3D renders blend in.
- **Lime = flat accent.** GCOO-green for number chips, dots, badges, the highlighted table column, one highlight card — never a canvas, never a gradient.
- **Large type.** Heavy display (800/900), enlarged body for projection; Korean + Latin unified in Paperlogy.
- **Full-bleed flat rectangles.** No rounded frame, no shadow on the slide; one slide = one 16:9 PDF page.
- **Video is the hero** on its slide — centered, large.
- **Uniform margins, ruler-straight alignment** across all slides.

## Colors

### Brand & Accent (flat accent, never a canvas)
- **Lime** (`{colors.primary}` — `#c0e36b`): The GCOO-green accent base.
- **Lime Bright** (`{colors.primary-bright}` — `#b4e84a`): Number chips, dots, active page badge, diamond ticks.
- **Lime Soft** (`{colors.primary-soft}` — `#d9efa3`): Pale lime for faint fills / hover.
- **Lime Deep** (`{colors.primary-deep}` — `#83ab37`): Emphasis text on light (e.g. the role column), borders of lime elements.
- **Olive** (`{colors.olive}` — `#6f7d3e`): Muted green for secondary marks on light.

### Surface
- **Cream** (`{colors.cream}` — `#eef0e6`): The flat **paper** canvas (content slides) and the title color.
- **Cream Soft** (`{colors.cream-soft}` — `#f5f6ef`): Nested card / pill surface on paper.
- **White** (`{colors.white}` — `#ffffff`): Plates for white-background product shots.
- **Charcoal** (`{colors.charcoal}` — `#2a2e2f`): The flat **dark** canvas (목차 + 완성품 ×2 + 완성품 영상).
- **Charcoal Soft** (`{colors.charcoal-soft}` — `#33383a`): Lifted element on dark.
- **Slate** (`{colors.slate}` — `#39414e`): Render-card background — matches the 3D-render export background so contain-letterboxing is seamless. Reads as a panel on both cream and charcoal.
- **Glass** (`{colors.glass}` — `rgba(255,255,255,0.08)`): Translucent card on the dark canvas (목차 list).

### Text
- **Ink** (`{colors.ink}` — `#1e2120`): Default near-black on the paper canvas.
- **Ink Mute** (`{colors.ink-mute}` — `#565b51`): Secondary copy on paper.
- **Ink Faint** (`{colors.ink-faint}` — `#838a7b`): Captions, footnotes on paper.
- **On Dark** (`{colors.on-dark}` — `#f1f3ec`): Body text on the dark canvas.
- **On Dark Mute** (`{colors.on-dark-mute}` — `#a6ac9f`): Secondary copy on dark.
- **On Lime** (`{colors.on-lime}` — `#1e2120`): Text on any lime element — near-black, **never white**.

### Lines
- **Hairline** (`{colors.hairline}` — `rgba(30,33,32,0.14)`): 1px borders / table rules on paper.
- **Hairline Dark** (`{colors.hairline-dark}` — `rgba(241,243,236,0.16)`): 1px borders on the dark canvas.

### Scrims (the only gradients)
Decorative gradients are removed. The single permitted gradient is a **functional scrim** behind text that sits on full-bleed media:
- **Cover video** — left+bottom darkening so the title stays legible:
  ```css
  background:
    linear-gradient(74deg, rgba(8,10,8,.86) 0%, rgba(8,10,8,.42) 40%, rgba(8,10,8,0) 70%),
    linear-gradient(0deg, rgba(8,10,8,.60) 0%, rgba(8,10,8,0) 42%);
  ```
- **Closing photo** — left darkening so the headline stays legible:
  ```css
  background:
    linear-gradient(90deg, rgba(14,16,14,.82) 0%, rgba(14,16,14,.46) 42%, rgba(14,16,14,.06) 100%),
    url('assets/gpt-gcoo-2.png') center/cover;
  ```

## Typography

### Font Family
The entire system is **Paperlogy** (local `Paperlogy/Paperlogy-*.ttf`, weights 300–900 used), self-hosted via `@font-face`. Fallback: `'Pretendard', 'Apple SD Gothic Neo', system-ui, sans-serif`.

### Hierarchy
Set large for projection. Sizes for the **1280×720 design frame**; expressed in `cqw` so they scale with the slide. `1cqw = 12.8px`.

| Token | Size (px @1280) | cqw | Weight | Use |
|---|---|---|---|---|
| `{typography.display-xxl}` | 72 | 5.6 | 900 | Cover / closing headline |
| `{typography.display-xl}` | 55 | 4.3 | 900 | 목차 title |
| `{typography.display-lg}` | 40 | 3.1 | 800 | Slide title |
| `{typography.display-md}` | 31 | 2.4 | 800 | Member name / card title |
| `{typography.heading}` | 22 | 1.7 | 800 | Function head, table value |
| `{typography.lead}` | 18.5 | 1.45 | 400 | Lead paragraph |
| `{typography.body}` | 16.6 | 1.3 | 400 | Default body |
| `{typography.caption}` | 14 | 1.1 | 400/600 | Caption, figure label |
| `{typography.micro}` | 13.4 | 1.05 | 700 | Eyebrow, page badge, table header |

### Principles
- **Heavy, tight display.** 800/900 with slight negative tracking.
- **Mid-weight body, enlarged.** Regular 400 for paragraphs, 600/700 for labels; legible at projection distance.
- **One display weight per headline block.**
- **Uppercase only for short Latin labels** (`GCOO`, page numerals); Korean never all-caps.

## Layout

### Spacing System
- **Base unit** 8px. Tokens: `{spacing.xxs}` 2 · `{spacing.xs}` 4 · `{spacing.sm}` 8 · `{spacing.md}` 12 · `{spacing.lg}` 16 · `{spacing.xl}` 24 · `{spacing.xxl}` 32 · `{spacing.huge}` 56.
- **Slide margin (gutter)**: `{spacing.huge}` ≈ 48–56px, identical on every slide so edges align frame-to-frame.
- **Card padding** 20–28px. **Grid gap** 16–24px.

### 16:9 Slide Canvas (flat, full-bleed)
- Flat rectangle filling the whole 16:9 frame: **no `border-radius`, no `box-shadow`** on the slide.
- Design frame **1280×720**. On screen `width: min(100vw, 177.78vh)`, `aspect-ratio: 16/9`, centered.
- `container-type: size` → all internal sizing in `cqw`/`cqh`.
- **Structure**: `header` (brand + page badge) → `body` (12-col grid) → optional `footer`; header baseline and body top-edge constant across slides.

### Grid & Alignment
- 12-column conceptual grid. Common splits 6/6, 5/7, 7/5, repeat(2–5,1fr) galleries, full-width tables.
- **Everything aligns to the gutter**; nothing floats off-grid.

### Paging
- One slide per viewport, scroll-snap. **Navigation is instant** — no smooth-scroll animation (`scroll-behavior: auto`, `scrollIntoView()` without `behavior:'smooth'`). Arrows / Space / PgUp-Dn jump directly.

## Canvas Assignment

| Canvas | Fill | Slides |
|---|---|---|
| **Cover** | Full-bleed video + scrim | 01 표지 |
| **Dark** (`{colors.charcoal}` flat) | Solid charcoal | 02 목차 · 04–05 완성품(완성 모델·다각도) · 14 완성품 영상 |
| **Paper** (`{colors.cream}` flat) | Solid cream | 03 주제 · 06 팀원 · 07–13 부품 별 요소 설명 |
| **Closing** | Full-bleed photo + scrim | 15 감사합니다 |

Deck is **15 slides** total. The two 완성품 slides sit back-to-back (assembly model, then multi-angle views); there is no separate 부록 section.

Rule of thumb: **render-showcase slides go dark** (the slate-background 3D renders blend into charcoal, like the reference's dark sections); **text/explanation slides stay light cream** for readability. This light/dark alternation is the deck's rhythm — not gradients.

## Slide Archetypes

1. **Cover** — full-bleed video, scrim, headline + `팀원` row bottom-left.
2. **목차 (dark)** — big title + 5 numbered items (2×2 grid with a full-width last row) that **stretch to fill** the slide; lime number chips.
3. **Split content (paper)** — text column + render plate (6/6 or 5/7). No tag pills.
4. **Showcase gallery (dark)** — title (+ optional lead), then a 2×2 / repeat(n) gallery of renders that blend on charcoal (완성품 — 완성 모델 & 다각도 뷰).
5. **Roster (paper)** — a row of short member photos + a **table** (이름 · 제작 부품 · 역할), role column in lime-deep. No pills.
6. **Part detail (paper)** — function list (left) + render gallery (right); icon-free, diamond-tick heads.
7. **Video hero (dark)** — the video centered and large; title above, caption below.
8. **Closing** — full-bleed photo, scrim, headline + footer.

## Components

### Slide Frame & Header
- **`slide-frame`** — flat full-bleed rectangle, solid background, padding `{spacing.huge}`, `container-type: size`. **No radius, no shadow.**
- **`slide-header`** — brand lockup (GCOO mark + `GCOO · 3D Modeling`) left; **`page-badge`** right.
- **`page-badge`** — small square numeral; charcoal/on-dark on paper, lime/ink on dark.

### Imagery & Media
- **Never crop.** Every image and video uses `object-fit: contain` (or a box matched to the asset ratio) — never `cover`, never stretch. The one exception is the **cover background video**, which may fill/crop since it is decorative background.
- **Render gallery (`gcard`)** — uniform card, `{colors.slate}` background matched to the render export so contain-bars vanish; `{rounded.md}`, a figure label strip at the bottom. White variant (`gcard.light`) for white-background product shots. Cards align to the grid with even gaps.
- **Render plate (`plate`)** — single-image container; white for product shots, `{colors.slate}` for renders; `{rounded.xl}`.
- **Video hero (`video-hero`)** — centered, ~76% slide width, `contain`, title above + caption below.

### Cards, Table, Atoms
- **`team-card`** — short member photo (slate) + name; used as the roster's photo row.
- **`roster-table`** — full-width table; header rule in `{colors.ink}`, row rules in `{colors.hairline}`, value text large, **role column in `{colors.primary-deep}`**. Replaces part/role pills.
- **`toc-item`** — dark-canvas list row: lime `number-chip` + large label; rows stretch to fill the slide.
- **`fn`** — function description: lime diamond tick + bold head + muted body.
- **`pill`** — used only for the cover team names; semi-transparent on the video.
- **`highlight-card`** — optional single lime emphasis card (`{colors.primary}` flat, ink text).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, optional 1px hairline | The slide; default cards |
| 1 | `0 1px 3px rgba(0,0,0,0.10)` | Product plate lift on paper |
| 2 | `0 10px 30px rgba(0,0,0,0.16)` | Video plate |

The **slide is flat**. Depth = light/dark contrast between slides + the render cards. No gradient glows.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 8px | Page badge, chips |
| `{rounded.md}` | 12px | Render gallery cards, list rows |
| `{rounded.lg}` | 16px | Feature cards, video plate |
| `{rounded.xl}` | 20px | Large product plate |
| `{rounded.full}` | 9999px | Dots, number chips, pills |

Cards are rounded; **the slide background is a hard rectangle** (0px).

## Do's and Don'ts

### Do
- Use **flat solid backgrounds** — cream for content, charcoal for 목차 + render-showcase slides.
- Alternate **light / dark** to give the deck rhythm (the reference's color-blocking, done with flat fills).
- Recolor every element from the canvas's text/card variables when a slide flips light↔dark.
- Keep lime a **flat accent** — chips, dots, badges, the role column, one highlight card.
- Keep **all images/video uncropped** (`contain`); only the cover background video may fill-crop.
- Match render-card backgrounds to the image (`{colors.slate}` vs white) so contain-bars vanish.
- Set display in Paperlogy 800/900, body enlarged for projection.

### Don't
- **Don't use decorative gradients** anywhere — the only gradients are the cover/closing legibility scrims.
- Don't make every slide the same flat color — alternate light/dark for rhythm.
- Don't give the slide a rounded frame or drop shadow ("floating card" look) — breaks PDF pages and reads AI-generic.
- Don't paint a whole slide lime, and don't use white text on lime.
- Don't crop/`cover`/stretch content images or the hero video; don't let a content image sit off-grid.
- Don't animate paging — slides jump instantly.

## Responsive & Print

| Context | Behavior |
|---|---|
| Any 16:9 viewport | Slide `min(100vw, 177.78vh)`; all `cqw` sizing scales 1:1 (720p → 4K) |
| Letterbox (non-16:9) | Slide centers; even bars; never stretches |
| Paging | `↑/↓ · PgUp/PgDn · Space` jump **instantly** (no smooth scroll) |
| **Print / PDF** | `@page { size: 1280px 720px; margin: 0 }`; `.slide { width:1280px; height:720px }`; one slide per page; `print-color-adjust: exact` so the flat fills and lime render edge-to-edge. |

## Iteration Guide

1. Pick the canvas from the table above — **paper** for text slides, **dark** for 목차 + render-showcase slides; never invent a third flat color.
2. Keep the gutter and header constant — only the body changes per slide.
3. All sizing in `cqw`/`cqh`; never hard-code px inside a slide.
4. Lime stays a flat accent — at most one lime emphasis element per slide.
5. Never crop media; match render-card backgrounds to the image; align every card to the grid with even margins.
6. The load-bearing rules: **flat fills (no gradients) + light/dark rhythm + lime-as-flat-accent + full-bleed flat slides + uncropped media + video-as-hero + instant paging.**
