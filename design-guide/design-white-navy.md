## Overview

The White-Navy design language is engineered for professional technical presentations. Slides sit on a `{colors.canvas}` (pure white) base that transitions into `{colors.canvas-soft}` (`#DEDEDE` — soft gray) via a per-slide subtle gradient. Text is rendered in `{colors.ink}` (`#132450` — deep navy). Across the entire system the only consistent chromatic event is the **accent orange** (`{colors.accent}` — `#FF6601`) — used as the filled CTA, keyword highlight, numbered markers, and short rule accents. Everything else is a calibrated ladder from `#DEDEDE` hairline-gray to `#132450` navy, with Pretendard typography doing most of the visual work.

Typography runs **Pretendard** at weight Black/ExtraBold for hero titles, Bold for headings, and Regular for body. The display tier uses tight tracking at the hero level. Code blocks use **D2Coding** with Consolas/monospace fallback — the developer DNA is visible in every snippet.

The classic variant carries a thin left navy sidebar (≈44px) with three white dot markers and an optional page label — an optional signature motif. The minimal variant drops it for full-width margins. Either way, content sits in a generous safe zone.

This is a guide, not a rulebook. The pieces below describe how the system tends to look and the defaults that work well; adapt them to the deck in front of you. The few things genuinely worth holding onto: orange stays an accent (not a fill), navy-white-gray carries the rest, and Pretendard does most of the work.

**Character:**
- A single accent orange (`{colors.accent}` `#FF6601`) as the main chromatic event; everything else navy-white-gray.
- A subtle white-to-gray gradient per slide, or a flat white canvas in the minimal variant.
- Pretendard at nine weights; code blocks in D2Coding / Consolas.
- An optional thin navy left sidebar with a white dot trio (classic variant).
- Diagrams and card grids are preferred over dense prose; tidy bullet lists are fine.
- Tight 6px / 8px card radii, kept consistent within a deck.
- A numbered section label, commonly upper-left on content slides.

## Colors

> **Source:** Navy & Orange PPT style system (`ppt-navy-orange-revise.skill`).

### Brand & Accent
- **Accent Orange** (`{colors.accent}` — `#FF6601`): The signature emphasis color. Keyword highlight, numbered circle fill, short horizontal rule, CTA. Never used as a card background or more than 5–10% of slide area.
- **Accent Orange Deep** (`{colors.accent-deep}` — `#E55A00`): Pressed/shadow variant of the accent orange.
- **Accent Orange Light** (`{colors.accent-light}` — `#FF7A1F`): Lighter hover-state variant.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): Default slide background; gradient start point.
- **Canvas Soft** (`{colors.canvas-soft}` — `#DEDEDE`): Gradient end point; section dividers; supporting shapes.
- **Canvas Soft 2** (`{colors.canvas-soft-2}` — `#E8E8E8`): Fine gradient mid-tone.
- **Canvas Soft 3** (`{colors.canvas-soft-3}` — `#F2F2F2`): Near-white surface for nested card backgrounds.
- **Canvas Soft 4** (`{colors.canvas-soft-4}` — `#C8C8C8`): Stronger gray for hairlines and borders.
- **Canvas Night** (`{colors.canvas-night}` — `#0F1E42`): Deepest navy for code block backgrounds and KEY IDEA fills.
- **Canvas Night Soft** (`{colors.canvas-night-soft}` — `#1A2D5C`): Mid-depth navy for sidebar fill and secondary dark shapes.
- **Canvas Night Accent** (`{colors.canvas-night-accent}` — `#1E3565`): Lightest dark-navy variant for nested chrome.

### Text
- **Ink** (`{colors.ink}` — `#132450`): Default headline and body text. Deep navy, never pure black.
- **On Dark** (`{colors.on-dark}` — `#FFFFFF`): Text on canvas-night fills (sidebar, KEY IDEA box, code block).
- **Ink Mute** (`{colors.ink-mute}` — `#C8C8C8`): Page number and fine metadata on light surfaces.
- **On Accent** (`{colors.on-accent}` — `#FFFFFF`): Text inside orange-filled markers and pills.

## Typography

### Font Family

The display and body tier is **Pretendard** — a modern geometric humanist sans with nine weights (Thin → Black). Fallback chain: `'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif`.

Code blocks use **D2Coding** — an open-source Korean monospace optimized for technical content. Fallback chain: `Consolas, 'Courier New', monospace`.

### Hierarchy

| Token | Weight | Size | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | Black / ExtraBold | 168–172px | 0.92 | 0 | Slide hero title (title slide) |
| `{typography.display-xl}` | Bold | 44px | 1.15 | 0 | Slide section title |
| `{typography.display-lg}` | SemiBold | 22–23px | 1.15 | 0 | Card title, workflow step name |
| `{typography.body-lg}` | SemiBold / Medium | 18–22px | 1.4 | 0 | Body emphasis, summary line, strong keyword |
| `{typography.body-md}` | Regular | 14–16px | 1.6 | 0 | Default card body copy, subtitle |
| `{typography.label}` | SemiBold | 13–15px | 1.3 | 0 | Section header label, KEY IDEA label, sidebar tag |
| `{typography.caption}` | Light | 10px | 1.45 | 0 | Page number, footnote, fine print |
| `{typography.code}` | Regular | 13px | 1.65 | 0 | Code block content (D2Coding) |

### Principles
- **Leave `charSpacing` near 0.** Pretendard's metrics are already optimized. For tracked labels, insert literal spaces instead (e.g. `"V E R S I O N  C O N T R O L"`).
- **Let weight carry hierarchy.** A readable scale across a slide reads better than one flat weight. The minimal variant simply pitches that scale lighter (SemiBold heads, Regular body).
- **Mono for code.** D2Coding with Consolas fallback.

### Note on Fonts
Pretendard and D2Coding are open-source. In this project the viewer auto-injects the fonts (`/shared/fonts.css`), so decks don't need to bundle or `@font-face` them. The fallback chain (`Apple SD Gothic Neo` / `Malgun Gothic`) covers environments where they aren't available.

## Layout

### Spacing (defaults, not constraints)
- **Canvas**: 1280 × 720px (16:9; 13.333 × 7.5 in at 96 DPI).
- **Base rhythm**: an 8px grid is a comfortable default.
- **Margins**: classic variant clears the sidebar (content ≈ x 62px); minimal variant uses generous full-width margins (≈ 56px top/bottom, 76px sides). Right margin ≈ 48px either way.
- **Vertical flow**: section label → title → optional subtitle → content → KEY IDEA → page number, top to bottom, with breathing room between layers. Exact coordinates are up to the slide.
- **Cards**: ~18–22px internal padding, ≥ 14–16px gaps, 1.6 body line-height.

### Grid
- 2-column and 3/4-card grids are the common workhorses; gallery grids go up to ~6 cells (see Image Gallery). Keep equal column widths and gaps within a row.
- Title slide: roughly a 55% text block + 45% image slot.

### Whitespace
The white canvas is the design — lean on generous margins and gaps. When a slide feels crowded, trim content before shrinking the margins.

### Avoiding Overlap
Keep elements from colliding and keep cards in a row aligned (shared height). That's the whole rule — eyeball it or check during QA; no pixel accounting required.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, no shadow, 1px gray hairline (`{colors.canvas-soft-4}`) | Default cards |
| 1 | `box-shadow: 0 2px 6px rgba(0,0,0,0.07)` | Slightly elevated card on white |
| 2 | `box-shadow: 0 4px 14px rgba(0,0,0,0.10)` | Floating KEY IDEA panel, featured card |
| 3 | Navy full-fill (no shadow needed — depth via color contrast) | Sidebar, KEY IDEA box, chapter cover left panel |

### Decorative Depth
The brand's depth signal is **color contrast**, not drop shadows. The navy sidebar and navy KEY IDEA box read as foreground anchors against the white gradient canvas. Shadows are secondary and subtle.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Sidebar fill, chapter cover panel (hard edge) |
| `{rounded.sm}` | 0.05 in (≈4–6px) | Cards, code blocks, arrow shapes |
| `{rounded.md}` | 0.08 in (≈8px) | Numbered circle labels, highlight boxes |
| `{rounded.full}` | 9999px | Orange marker circles, avatar pills |

Pick one card radius and keep it consistent within a deck — mixing radii reads as sloppy.

### Gradient Background
A full-bleed white-to-gray gradient is the signature canvas, and it's worth keeping: one end `{colors.canvas}` (#FFFFFF), the other `{colors.canvas-soft}` (#DEDEDE) or `{colors.canvas-soft-2}` (#E8E8E8). Vary the direction across slides (top-left → bottom-right, top → bottom, etc.) so consecutive slides don't look identical — it gives the deck a quiet sense of motion. Let it span the whole slide rather than dropping a gray blob in a corner.

### Image & Video Handling
- **Content images** (inside a card/slot/gallery): keep the original aspect ratio — `object-fit: contain` (or pptxgenjs `sizing.type: "contain"`). Letterbox space on the short axis is fine. Avoid stretching to arbitrary width/height.
- **Background fills** (full-bleed): `object-fit: cover` is fine, cropping included; nudge the focal point with offsets when a subject would otherwise be cut. Mention it if a crop hides something meaningful.

## Components

### Title Slide

**`slide-title`** — the deck's opening slide.
- Background: `{colors.canvas}` → `{colors.canvas-soft}` gradient.
- Left sidebar: `{colors.canvas-night-soft}` fill, width 0.35–0.5 in, three white dot markers top-left, orange dot + section label bottom-left.
- Left content block (≈55% of width): stacked top to bottom —
  1. **Lecture label** — short orange horizontal rule (0.3 in) + `LECTURE 01 · SECTION NAME` in `{colors.ink}`, `{typography.label}`.
  2. **Orange subtitle** — `WHAT IS GIT?` in `{colors.accent}`, `{typography.display-lg}`.
  3. **Hero title** — single large word in `{colors.ink}`, `{typography.display-hero}`.
  4. **Summary line** — one Korean sentence in `{colors.ink}`, `{typography.body-lg}`; emphasis words in `{colors.accent}` Bold.
- Right slot (≈45% of width): reserved for user-supplied illustration; left empty by default.
- Bottom-right: page number `01 / 39` in `{colors.ink-mute}`, `{typography.caption}`.

### Chapter Cover

**`slide-chapter`** — major section opener.
- Left panel: `{colors.canvas-night-soft}` full-fill, `CHAPTER 02` label (small navy box + white text), large title below.
- Right: white canvas with a giant faint gray chapter number watermark (60–80pt, `{colors.canvas-soft}`).
- Short orange horizontal rule between label and title.

### Content Card

**`card-light`** — standard content container on white.
- Background `{colors.canvas}`, padding ≥ 0.30 in, rounded `{rounded.sm}`, 1px `{colors.canvas-soft-4}` border, Level 1 shadow.

**`card-dark`** — emphasized or featured content.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape. Used for KEY IDEA panels and code-heavy explanations.

**`card-highlight`** — KEY IDEA box (optional).
- A navy full-fill (`{colors.canvas-night}` / `{colors.on-dark}`) or a light bar (`{colors.canvas-soft-3}` + accent left border) at the slide bottom for the single takeaway. **Optional, and easy to overdo:** a one-line summary on *every* slide reads as filler. Omit it by default; add it only when a slide genuinely needs a punch line.

### Code Block

**`code-block`** — code snippet container.
- Background `{colors.canvas-night}`, text `{colors.on-dark}` in `{typography.code}`. Padding 0.30 in, rounded `{rounded.sm}`. Prompt character `$` in `{colors.accent}`. Highlighted tokens in `{colors.accent}`.

### Numbered Marker

**`marker-num`** — step or list index.
- Plain `1)` / `2)` text in `{colors.accent}`, SemiBold, set just left of the item title. Circled-number glyphs (`①`) and filled-circle badges were dropped — they read heavy and inconsistent. Use `1)` / `2)` text.

### Section Label

**`label-track`** — upper-left tracking label present on every content slide.
- Format: a small `{colors.accent}` dot + a spaced uppercase English label in muted gray (e.g. `M E T H O D`), `{typography.label}`, rendered by inserting spaces between characters. (A navy numbered circle is the heavier classic variant.)

### Left Sidebar

**`sidebar-nav`** — the system's signature left rail.
- A thin navy band down the left edge (≈ 28–44px). A refined take keeps it slim: `{colors.canvas-night-soft}` (or `{colors.ink}`) fill, three small white dot markers near the top (lead dot in `{colors.accent}`), and a quiet vertical page/section label near the bottom.
- It anchors the layout and reads as the brand. Keep it slim and let the gradient canvas breathe to its right; a heavy, wide bar is what to avoid, not the bar itself.

### Lighter Treatment

A calmer, more editorial reading of the same system — reach for it when a deck feels heavy. It's about weight, not stripping structure: the gradient canvas and the slim sidebar stay.
- **Lighter type.** Headings at SemiBold (600) rather than Bold/Black; body at Regular (400); inline emphasis at SemiBold (600). Slightly smaller sizes + more line-height do most of the work.
- **`1)` numbering.** Number cards, steps, and lists with plain `1)` text in accent — not filled circles or `①` glyphs.
- **Drop the summary box.** Skip the bottom KEY IDEA box by default; let the content and the closing slide carry the takeaways. Keep genuine footnotes (term glosses, sources) as small `{colors.ink-mute}` notes.
- **Quiet chapter / closing.** A large faint `{colors.canvas-soft}` ghost number with a navy title is a lighter alternative to the navy panel.
- **Hyphens, not em dashes.** Use a short hyphen `-` as the inline separator in titles and body (e.g. `결론 - 적용 조건`), never `—`.
- **Rigorous titles.** Prefer standard section nouns (`연구 배경`, `방법`, `결과`, `결론`, `고찰`) over conversational phrasings (`왜 ~를 찾는가`).

### Comparison Card Pair

**`card-compare`** — two-column contrast layout.
- One column: navy full-fill card (`card-dark`) as the primary position.
- Other column: white card (`card-light`) as the secondary.
- Color contrast encodes the hierarchy without requiring labels.

### Workflow Strip

**`workflow-strip`** — horizontal step sequence.
- Each step: a `1)` index (`{marker-num}`) → step text. Steps stack vertically or share a baseline.

### Comparison Table

**`table-compare`** — data comparison table.
- Header row: `{colors.canvas-night}` fill, `{colors.on-dark}` text, `{typography.label}`.
- Body rows: `{colors.canvas}` fill, `{colors.canvas-soft-4}` 1px row borders.
- Check/cross markers: `{colors.accent}` for positive, `{colors.canvas-soft-4}` for negative.

### Closing Slide

**`slide-end`** — minimal final slide.
- Single large thank-you text centered, next-lecture teaser line below. No additional chrome.

## A Few Things Worth Holding Onto

These are the habits that keep the system recognizable. Everything else is open to judgment.

- Keep orange an accent — highlights, markers, short rules — not a card or section fill. A little goes a long way.
- Keep the gradient canvas, and vary its direction so neighboring slides differ.
- Keep card radii consistent within a deck.
- Prefer diagrams, card grids, and galleries over walls of prose.
- Keep content images at their true aspect ratio; crop only full-bleed background fills.
- Eyeball for overlaps and ragged card rows, and give Korean text room — it wraps wider than Latin. A quick visual pass (PDF or screenshots) catches most issues.

## Slide-Level Responsive Behavior

### Slide Type Scaling

| Slide Type | Wide (13.3 × 7.5 in) | Narrow export / Web embed |
|---|---|---|
| Title | Hero text 96pt, right slot full | Hero text 60pt, right slot shrinks |
| Chapter cover | Left panel 45% | Left panel 35% |
| 4-card grid | 4 across | 2 × 2 |
| Comparison table | Full row | Scroll or split to two slides |

### Content Density (rules of thumb)
- Text-heavy slides read better at ~5 lines or fewer; past that, reach for a diagram or cards.
- Text cards sit comfortably at 2–4 across, or a 2×2 grid. Beyond that, a second slide usually reads better.
- **No cap on images.** Group related figures on one slide when they belong together (e.g., a method's database/sampling/prompt figures, or before/after pairs) using a uniform gallery grid (~2–6 cells, equal size and gaps). One well-composed multi-image slide beats scattering tightly-related figures.
- Leave a code block room to breathe under the title and KEY IDEA.

### Touch / Export Targets
- Minimum button/marker diameter: 0.35 in (≈ 34px at 96 DPI).
- All slide elements within the 13.333 × 7.5 in canvas — no bleed.
- PDF export: `@page { size: 33.87cm 19.05cm; margin: 0 }`.

### Image Behavior
User-supplied images are always inserted with `sizing: { type: "contain" }` inside a pre-defined container slot. Aspect ratios are never altered. Mobile/web crops focus on the center of the image if the slot is smaller than the original.

**Use every supplied asset.** If a deck ships with figures, place all of them — don't silently drop figures to keep a slide sparse. When several figures relate to one point, group them in a single gallery slide rather than omitting some.

### Image Gallery

**`gallery`** — multiple content images on one slide.
- A CSS grid of equal-size cells (2–6), each a thin-hairline framed card (`{colors.canvas-soft-4}` 1px border, `{rounded.sm}`) with the image `contain`-fit and an optional caption (`{typography.caption}`, `{colors.ink-mute}`) on a top-bordered footer.
- All cells share identical width, height, and gap (≥ 14px). Captions are one line; no caption wraps to two.
- A gallery may be the slide's whole content block, or sit beside a short text column (text 35–45%, gallery the rest).

## Iteration Guide

A loose order of operations, not a checklist to clear:
1. Work one slide type at a time, reusing the component names and tokens above.
2. Place the vertical flow (label → title → content → KEY IDEA) with comfortable spacing; let the content decide the exact positions.
3. Default body copy to `{typography.body-md}`; code to `{typography.code}` (D2Coding).
4. Keep orange scarce and the gradient direction varied across slides.
5. Decide each asset is content (contain) or background (cover) before placing it.
6. Do a quick visual pass when done — PDF or screenshots — watching for overflow, ragged rows, and Korean text wrapping.
