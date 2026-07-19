# Warehouse / SCM Deck — Design System

A design language for a 16:9 presentation on supply-chain (SCM) order-quantity forecasting. This document is the source of truth for generating the deck as **HTML slides**: it ships copy-paste CSS tokens, a scale-to-fit 16:9 canvas, slide archetypes, and component recipes.

## Overview

The deck wears its subject. The theme is a literal **warehouse**: warm mustard gold (`--color-main` `#E4D17B`), cream paper (`--color-sub1` `#EFEBDC`), white data panels (`--color-sub2` `#FFFFFF`), and deep olive-brown ink (`--color-last` `#403C29`) — every hue reads as cardboard, kraft paper, or factory floor. No high-chroma color appears anywhere except two tiny data accents. Photographs of stacked boxes and shelving recur as full-bleed imagery on the cover, the divider, and the closing slide.

The governing geometry is the **diagonal**. Photos are masked on a slant so they wedge into the flat color field, and small gold triangles are pinned into slide corners. Nothing is split on a clean vertical or horizontal — every seam is angled, which is what gives an otherwise calm palette its motion.

Type speaks in **two registers**. Titles are set in an ultra-heavy black display gothic — "공급망 최적화", "CONTENTS", "Thank you" land like painted signage. Beside each title sits a subtitle in a muted taupe at a lighter weight, dialing the energy back down. Heavy black title + faded olive subtitle is the masthead formula on every content slide.

Body content lives almost entirely inside **dashed-border pale-yellow callout boxes**. The default content layout is two columns: a white screenshot panel (table / chart / code) on the left, the dashed callout on the right, with an optional full-width summary callout spanning the bottom. Key phrases get a single **apricot highlighter** stroke.

**Key Characteristics:**
- Four-color natural palette — gold / cream / white / olive-ink — kept in a kraft-paper register; no saturated color as a system color.
- The diagonal is the signature: slant-masked photos (`clip-path`) and gold corner wedges, never vertical/horizontal seams.
- Real warehouse photography (full-bleed) carries the cover, divider, and closing — photos, not illustrations, set the mood.
- Masthead formula: ultra-black display title in olive-ink + muted-taupe subtitle at lighter weight.
- Content = two columns: white asset panel (left) + dashed pale-yellow callout (right), often with a full-width summary callout below.
- One apricot highlighter stroke marks the single key phrase per slide.
- Charts are monochrome khaki; emphasis is by **marker shape** (circle = stable part, diamond = volatile part) plus a lone crimson point — never by adding colors.
- A small outlined hexagon icon in the lower-right is the recurring decorative signature.

## Design Tokens

Drop this `:root` into your stylesheet. Core names (`--color-main/sub1/sub2/last`) are canonical; everything else derives from or accents them.

```css
:root {
  /* ---- Core palette (canonical) ---- */
  --color-main: #E4D17B;   /* gold  — cover bg, accent band, corner wedge, contents numbers */
  --color-sub1: #EFEBDC;   /* cream — content-slide background */
  --color-sub2: #FFFFFF;   /* white — asset panels, tables, chart cards */
  --color-last: #403C29;   /* olive — primary ink, dark divider surface */

  /* ---- Derived surfaces (tints of main) ---- */
  --color-callout:    #F7F0CC;  /* pale-yellow callout fill */
  --color-table-head: #F0E4A8;  /* table header row */

  /* ---- Sparse accents (use rarely) ---- */
  --color-highlight: #F4CB97;   /* apricot highlighter — 1 phrase/slide */
  --color-marker:    #A14B2D;   /* crimson — data-point marker only */

  /* ---- Data-viz ---- */
  --color-chart:      #BFAE6E;            /* khaki line/area */
  --color-chart-fill: rgba(191,174,110,.35);

  /* ---- Semantic text ---- */
  --text-ink:    var(--color-last);
  --text-subtle: rgba(64, 60, 41, .52);   /* muted taupe subtitle over cream */
  --on-gold:     var(--color-last);        /* text on gold — dark, never white */
  --on-dark:     var(--color-sub1);        /* text on the olive divider — cream */

  /* ---- Type ---- */
  --font-display: 'Paperlogy', system-ui, sans-serif;   /* one family, used at 900 (Black) */
  --font-body:    'Paperlogy', system-ui, sans-serif;   /* same family, used at 400–500 */
  --font-mono:    ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;

  --fs-cover: 84px;  --lh-cover: 1.04;   /* cover title */
  --fs-h1:    40px;                      /* section header */
  --fs-sub:   30px;                      /* subtitle */
  --fs-h2:    28px;                      /* contents item / callout heading */
  --fs-eyebrow: 15px;                    /* eyebrow label */
  --fs-body:  18px;  --lh-body: 1.5;
  --fs-small: 14px;                      /* table / caption / footnote */
  --fs-code:  13px;

  /* ---- Spacing (8px base) ---- */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px; --sp-4: 16px;
  --sp-6: 24px; --sp-8: 32px; --sp-12: 48px; --sp-16: 64px;
  --pad-slide: 60px;

  /* ---- Radius & elevation ---- */
  --r-panel: 8px; --r-callout: 20px; --r-pill: 999px;
  --shadow-panel: 0 6px 20px rgba(64, 60, 41, .12);
}
```

Font loading — Paperlogy (페이퍼로지) is bundled locally in `./Paperlogy/` (9 weights, Thin→Black). It is a **local** font, not a CDN/Google font: declare it with `@font-face` and keep the deck HTML in this folder so the relative paths resolve. One family serves both display (900) and body (400–500):

```css
@font-face { font-family:'Paperlogy'; src:url('./Paperlogy/Paperlogy-4Regular.ttf') format('truetype'); font-weight:400; font-display:swap; }
@font-face { font-family:'Paperlogy'; src:url('./Paperlogy/Paperlogy-5Medium.ttf')  format('truetype'); font-weight:500; font-display:swap; }
@font-face { font-family:'Paperlogy'; src:url('./Paperlogy/Paperlogy-7Bold.ttf')    format('truetype'); font-weight:700; font-display:swap; }
@font-face { font-family:'Paperlogy'; src:url('./Paperlogy/Paperlogy-9Black.ttf')   format('truetype'); font-weight:900; font-display:swap; }
/* Full Thin→Black range (100–800) is in ./Paperlogy/ — add lines in the same pattern as needed. */
```
The files are `.ttf` (~680KB each); for lighter pages, convert the cuts you use to `.woff2`.

## Colors

### Core (the only four you compose with)
- **Gold** (`--color-main` `#E4D17B`): the signature surface — cover background, closing band, corner wedges, contents numbers. The loudest element on any slide; use it as a *field* or an *accent shape*, not as body text or large flat content panels.
- **Cream** (`--color-sub1` `#EFEBDC`): default content-slide background. Warm, low-glare paper.
- **White** (`--color-sub2` `#FFFFFF`): reserved for data — screenshot frames, tables, chart cards. White instantly reads as "evidence" against the cream.
- **Olive-Ink** (`--color-last` `#403C29`): all primary text, and the dark surface of the CONTENTS divider. The same token does double duty as ink and as the one dark background.

### Derived surfaces
- **Callout Fill** (`--color-callout` `#F7F0CC`): pale yellow inside dashed/solid callout boxes — gold tinted toward white.
- **Table Header** (`--color-table-head` `#F0E4A8`): header row of spec tables.

### Sparse accents (rare by rule)
- **Apricot Highlight** (`--color-highlight` `#F4CB97`): highlighter stroke under one key phrase per slide. Distinctly *orange*, not gold — that's why it reads as emphasis.
- **Crimson Marker** (`--color-marker` `#A14B2D`): brick-red, used only to flag one data point (the "volatile" part). Never a button, never text.

### Data-viz
- **Khaki** (`--color-chart` `#BFAE6E`) + **Khaki Fill** (`rgba(191,174,110,.35)`): all lines, areas, and bars are this single tone. Differentiation is by marker shape, not hue: **circle** = stable series (Part 60), **diamond** = volatile series (Part 37), with a single `--color-marker` point for the extreme.

### Text
- **Ink** (`--text-ink` = olive): default text on cream/white.
- **Subtle** (`--text-subtle` `rgba(64,60,41,.52)`): muted taupe for subtitles. **Large display only** — its contrast is intentionally low and fails for small body text.
- **On Gold** (`--on-gold` = olive): text on the gold field is dark, never white.
- **On Dark** (`--on-dark` = cream): text on the olive divider is cream.

## Typography

### Families
The deck runs on a **single typeface — Paperlogy (페이퍼로지)** — across its full 9-weight range (Thin→Black), bundled locally in `./Paperlogy/`. One family, differentiated by weight:
- **Display** — Paperlogy **Black (900)**: carries every title ("공급망 최적화", "CONTENTS", "01. 주제 선정", "Thank you"). Paperlogy is a geometric, lightly-rounded sans, so titles read confident and modern rather than blocky — set them large to keep the signage presence.
- **Body** — Paperlogy **Regular (400)** / **Medium (500)**: subtitles, callouts, tables. Korean and Latin share one family, so there is no fallback switching between scripts.
- **Mono** — system mono for code blocks (Paperlogy is proportional).

### Scale (at the 1280×720 canvas)

| Token | Size | Weight | Use |
|---|---|---|---|
| `--fs-cover` | 84px / 1.04 | Paperlogy 900 | Cover title |
| `--fs-h1` | 40px | Paperlogy 900 | Section header ("02. 데이터셋 설명") |
| `--fs-sub` | 30px | Paperlogy 400 | Subtitle beside header ("변수 설명") — `--text-subtle` |
| `--fs-h2` | 28px | Paperlogy 700 | Contents item, callout heading |
| `--fs-eyebrow` | 15px | Paperlogy 500 | Eyebrow label above header |
| `--fs-body` | 18px / 1.5 | Paperlogy 400 | Callout body |
| `--fs-small` | 14px | Paperlogy 400 | Table cells, captions, footnotes |
| `--fs-code` | 13px | mono 400 | Code blocks |

### Principles
- **Heavy title, faint subtitle.** The masthead's identity is the weight gap: display-black olive title + lighter muted-taupe subtitle. Never set the subtitle at the title's weight or color.
- **Gold text only on dark.** Use gold for type (`--color-main`) only on the olive divider. On cream, titles are `--text-ink`.
- **One highlight.** Limit the apricot stroke to a single phrase per slide.
- **Tighten display.** Set display (Paperlogy 900) at line-height ~1.04 with slight negative tracking (~-0.01em) so the geometric letterforms read as dense signage; let it run large.

## Slide Canvas & Layout

### 16:9 canvas (scale-to-fit)
Design every slide at a fixed **1280×720** logical canvas, then scale the whole slide to the viewport. This keeps decks pixel-predictable.

```css
.stage { position: fixed; inset: 0; display: grid; place-items: center; background: #1b1a14; }

.slide {
  width: 1280px; height: 720px;
  position: relative; overflow: hidden;
  background: var(--color-sub1); color: var(--text-ink);
  font: 400 var(--fs-body)/var(--lh-body) var(--font-body);
  padding: var(--pad-slide);
  transform-origin: center;
}
```

```js
// Fill the viewport while preserving 16:9.
const fit = () => {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  document.querySelectorAll('.slide').forEach(el => (el.style.transform = `scale(${s})`));
};
addEventListener('resize', fit); fit();
```

(Export to PDF at 1280×720 — or 1920×1080, i.e. ×1.5 — for a print-perfect deck.)

### Spacing & grid
- 8px base scale (`--sp-*`); slide padding `--pad-slide` 60px.
- **Two-column content:** left asset column ~52%, right callout column ~44%, `--sp-8` gutter.
- **Full-width summary callout** spans the bottom edge-to-edge within padding.

### Header zone
Pinned top-left of every content slide: eyebrow label → display title (with number) → muted subtitle inline to its right. Upper-right is the secondary-info slot (e.g. data source).

## Slide Archetypes

**1 — Cover** (`--color-main` field). Eyebrow + giant display title + author list on the left; slant-masked warehouse photo on the right.

**2 — Section Divider** (`--color-last` field). "CONTENTS" / section number in `--color-main`, body in `--on-dark`; slant photo on the right. The only dark slide type.

**3 — Content (default)** (cream). Header zone, then two columns: white asset panel (left) + dashed callout (right). Corner wedges + hex icon.

**4 — Data / Chart** (cream). Same header; left white card holds the chart/table; right callout interprets it. Charts monochrome khaki, emphasis by marker shape.

**5 — Closing** (photo full-bleed + gold band). Display "Thank you" on the band, hex icon above.

```
┌─ Content archetype (1280×720) ───────────────────────────┐
│ ◣gold      eyebrow                                        │
│            01. SECTION TITLE   subtitle (taupe)           │
│  ┌──────────────────┐   ┌- - - - - - - - - - - - ┐        │
│  │  white asset      │   ┊  • callout body        ┊        │
│  │  panel (table/    │   ┊  • dashed pale-yellow   ┊        │
│  │  chart/code)      │   ┊    box                  ┊        │
│  └──────────────────┘   └- - - - - - - - - - - - ┘        │
│  ┌- - - - full-width summary callout - - - - - - ┐  ⬡    │
│  └- - - - - - - - - - - - - - - - - - - - - - - - ┘ gold◢ │
└──────────────────────────────────────────────────────────┘
```

## Components & Signature Recipes

### Section header
```html
<header class="s-head">
  <p class="eyebrow">공급망 최적화</p>
  <h1>02. 데이터셋 설명 <span class="sub">변수 설명</span></h1>
</header>
```
```css
.eyebrow { font: 500 var(--fs-eyebrow)/1 var(--font-body); letter-spacing: .02em; }
.s-head h1 { font-family: var(--font-display); font-weight: 900; font-size: var(--fs-h1); line-height: 1.1; letter-spacing: -.01em; }
.s-head .sub { font: 400 var(--fs-sub)/1 var(--font-body); color: var(--text-subtle); margin-left: .4em; }
```

### Contents list (divider TOC)
Used on the Section-Divider slide. Numbered items are laid out as a **fixed 4×2 grid** (column-first flow: 1–4 down the left column, 5–8 down the right). Two alignment rules keep it even no matter which items carry a subtitle:
- **Horizontal** — the number sits in a fixed-width box, **right-aligned** with tabular figures, so the number→text gap is identical for every item ("1" is narrower than the other digits and would otherwise drift).
- **Vertical** — rows are a **fixed equal height** and items are **top-aligned** (`align-self: start`), so every number lands on the same grid and the row pitch is uniform whether or not an item has a subtitle. Items with a subtitle (1, 4) fill the slot; items without one leave their lower half empty rather than collapsing and bunching the column up — which is what makes a mixed column align with a plain one.
```html
<div class="toc">
  <div class="toc__item"><span class="toc__num">1</span>
    <div class="toc__body"><span class="toc__t">지난 발표 요약</span>
      <span class="toc__sub">주제 설명 · 데이터, 전처리</span></div></div>
  <!-- items 2–8 flow column-first into the 4×2 grid -->
</div>
```
```css
.toc {
  display: grid; grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 58px);   /* fixed equal rows -> uniform pitch */
  grid-auto-flow: column;                /* 1–4 down left col, then 5–8 right */
  column-gap: var(--sp-12);
}
.toc__item { display: flex; gap: var(--sp-4); align-items: baseline; align-self: start; }
.toc__num {                              /* right-aligned + equal-width digits */
  flex: none; width: 1.25em; text-align: right; font-variant-numeric: tabular-nums;
  font-family: var(--font-display); font-weight: 900; font-size: var(--fs-h2);
  color: var(--color-main); line-height: 1;
}
.toc__t   { display: block; font-weight: 600; font-size: 20px; color: var(--on-dark); line-height: 1.2; }
.toc__sub { display: block; font-size: var(--fs-small); color: rgba(239,235,220,.55); margin-top: 3px; }
```

### Callout (dashed = default, solid = summary)
```css
.callout {
  background: var(--color-callout);
  border: 2px dashed var(--color-last);
  border-radius: var(--r-callout);
  padding: 28px 32px;
}
.callout--solid { border-style: solid; border-color: transparent; } /* bottom summary */
.callout ul { padding-left: 1.1em; }
.callout li { margin: .35em 0; }
```

### Highlighter mark
```css
.mark { background: linear-gradient(transparent 58%, var(--color-highlight) 58%); padding: 0 2px; }
```

### Diagonal photo (cover / divider)
```css
.photo-diagonal {
  position: absolute; inset: 0 0 0 auto; width: 42%;
  background: url("warehouse.jpg") center / cover;
  clip-path: polygon(26% 0, 100% 0, 100% 100%, 0 100%); /* slanted inner edge */
}
```

### Corner wedges (content slides)
```css
.wedge { position: absolute; width: 130px; height: 130px; background: var(--color-main); }
.wedge--tl { top: 0; left: 0;     clip-path: polygon(0 0, 100% 0, 0 100%); }
.wedge--br { bottom: 0; right: 0;  clip-path: polygon(100% 100%, 100% 0, 0 100%); }
```

### Hex icon (lower-right signature)
```html
<svg class="hex" width="34" height="38" viewBox="0 0 34 38" aria-hidden="true">
  <path d="M17 2 32 10.5V27.5L17 36 2 27.5V10.5Z" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>
```
```css
.hex { position: absolute; right: 28px; bottom: 24px; color: var(--color-last); }
```

### Asset panel & spec table
```css
.panel { background: var(--color-sub2); border-radius: var(--r-panel); box-shadow: var(--shadow-panel); overflow: hidden; }
.spec th { background: var(--color-table-head); }
.spec td, .spec th { border: 1px solid rgba(64,60,41,.12); padding: 8px 12px; font-size: var(--fs-small); text-align: center; }
```

### Data markers (charts)
- Circle, `--color-main` fill → stable series. Diamond, `--color-marker` fill → volatile series. One series tone (`--color-chart`); never recolor series to distinguish them.

## Depth & Motion

- **Depth** comes from slant-masked photos and the panel shadow (`--shadow-panel`) — not from heavy drop shadows or gradients. White panels float a few px above the cream; gold wedges sit flat on top.
- **Motion** (HTML decks): keep it quiet. Slide transitions 250–300ms `ease` (fade + 12px translate). Dividers may use a diagonal wipe to echo the clip-path motif. Always wrap motion in `@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }`.

## Accessibility

- Olive-ink on cream and olive-ink on gold both clear WCAG AA for body and AAA for large text — safe defaults.
- White panels carry all dense data (tables, code) for maximum legibility.
- `--text-subtle` is low-contrast **by design** — restrict it to large subtitles; never small text.
- Don't rely on the crimson marker alone to convey meaning; pair it with the marker *shape* (already the system rule).

## Do's and Don'ts

### Do
- Compose only from the four core tokens; reach for accents (highlight, crimson) at most once per slide.
- Keep the masthead formula: display-black olive title + muted-taupe subtitle.
- Cut every photo/field seam on a diagonal; pin gold wedges in corners.
- Put data on white panels, prose in pale-yellow dashed callouts.
- Differentiate chart series by marker shape, not color.
- Stamp the hex icon lower-right for continuity.

### Don't
- Don't introduce saturated blue/green/red as system colors — crimson is a single data marker.
- Don't set the subtitle at the title's weight or color, or use `--text-subtle` for small text.
- Don't cut photo edges vertical/horizontal — the diagonal is the brand.
- Don't apply white text on gold — text on gold is olive-ink.
- Don't run more than one highlighter stroke per slide.
- Don't multicolor charts — one khaki tone, shape-coded emphasis.

## Build Guide

1. Scaffold `index.html` with the `@font-face` block, the `:root` tokens, and the `.stage`/`.slide` canvas + `fit()` script.
2. Build one slide per archetype first (Cover, Divider, Content, Data, Closing); reuse them as templates.
3. Reference tokens and component classes by name (`.callout`, `--color-main`) — never hard-code hex in slides.
4. Default body to `--fs-body`; tables/captions to `--fs-small`.
5. Keep gold to fields/wedges/contents-numbers; keep one highlight per slide.
6. The warehouse photos and diagonal seams are the identity — removing them, or squaring the seams, breaks the theme.
