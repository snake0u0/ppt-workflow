## Overview

The Ferrari language is cinematic-editorial — closer to a luxury-magazine spread than a typical slide deck. The base canvas is **near-black** (`{colors.canvas}` — `#181818`, never pure black) carrying white display type; a flat white band (`{colors.canvas-light}` — `#ffffff`) is the rare exception, reserved for a single dense-data slide (a spec table, a comparison grid) where legibility wins over mood. The single brand voltage is **Rosso Corsa** (`{colors.primary}` — `#da291c`) — used scarcely, on the section-header bar, a stat/result highlight, a one-off statement slide, or the closing accent. It is never a running-content fill.

Type runs a single sans family at modest weights — display 500, never bold; component titles/labels may go Bold (700) where a label genuinely needs to pop against the photography. Body copy sits at a muted warm gray (`{colors.body}` — `#969696`), not white — white is reserved for headings and real emphasis, so the page has one register for "mood" (gray body) and one for "signal" (white ink, red accent).

The system's strongest visual signature is **full-bleed cinematic photography** on the cover — a car/product/trackside photo filling the entire canvas edge-to-edge, with the title floating over a darkened scrim at the bottom. Every other slide keeps the near-black canvas as its floor and lets figures sit on it the way a photograph sits on a gallery wall. Spacing follows an explicit named 8px-based ladder — `xxxs` 4 / `xxs` 8 / `xs` 16 / `sm` 24 / `md` 32 / `lg` 48 / `xl` 64 / `xxl` 96 / `super` 128 — rather than ad-hoc pixel values.

This is a guide, not a rulebook. It describes how the Ferrari-styled decks tend to look and the defaults that work. The few things worth holding onto: **Rosso Corsa stays scarce**, the canvas stays near-black (never pure black, never a return to a white-default deck), display type never bolds, and corners stay sharp. If a slide starts to look "warm" or "friendly," strip something out — this system reads as precision, not comfort.

**Character:**
- One accent: `{colors.primary}` (Rosso Corsa `#da291c`) for the section bar, stat/result highlights, and the rare statement slide. Used scarcely.
- Near-black canvas (`#181818`) — never pure black. A flat white band is the rare exception for a dense-data slide.
- Single sans family at modest weights; display stays 500, never bold. Component titles/labels may be Bold.
- Body copy is a muted warm gray (`#969696`), not white — white is reserved for headings and real emphasis.
- Sharp `{rounded.none}` (0px) corners everywhere, on every box and card — the one exception is a small rounded-full badge/tag.
- Full-bleed cinematic photography is the cover's chrome — no navy bar, no logo-and-rule cover treatment.
- Explicit named 8px spacing ladder (`xxxs` through `super`) instead of ad-hoc px values.
- Hairlines + photographic depth, plus two documented gradients (a Rosso Corsa gradient, a dark atmospheric scrim) — no drop-shadow tiers.

## Colors

### Brand & Accent
- **Rosso Corsa** (`{colors.primary}` — `#da291c`): The iconic racing red. Section-header bar, stat/result highlight, statement-slide fill, closing accent. Used scarcely — never a body-text color, never a bullet marker, never a card background.
- **Rosso Corsa Active** (`{colors.primary-active}` — `#b01e0a`): Emphasis/pressed-equivalent variant — a deeper red for a "current/selected" row in a table or schedule.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text set on a Rosso Corsa fill.

### Surface
- **Canvas** (`{colors.canvas}` — `#181818`): The slide floor. Near-black, never pure black, a touch warm. Default for every slide unless the content calls for the light band.
- **Canvas Elevated** (`{colors.canvas-elevated}` — `#303030`): Card/box fill on the dark canvas — equation/code call-outs, stat-callout backgrounds, badge fills, table row banding.
- **Canvas Light** (`{colors.canvas-light}` — `#ffffff`): The rare white band, reserved for a slide whose content is dense data (a spec sheet, a comparison table) that reads better on paper-white than on photography-dark.
- **Surface Strong Light** (`{colors.surface-strong-light}` — `#ebebeb`): Divider/badge tint on a `canvas-light` slide.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): Headings, section titles, figure emphasis, strong/keyword text on the dark canvas.
- **Body** (`{colors.body}` — `#969696`): Default bullet/body copy on the dark canvas — a muted warm gray, deliberately not white.
- **Body On Light** (`{colors.body-on-light}` — `#181818`): Default text on a `canvas-light` band.
- **Muted** (`{colors.muted}` — `#666666`): Captions, page numbers, `※` annotations, the affiliation line on the cover.
- **Muted Soft** (`{colors.muted-soft}` — `#8f8f8f`): Secondary/de-emphasized labels — a table sub-value, a disabled-looking reference.

### Functional
- **Info** (`{colors.semantic-info}` — `#4c98b9`): The reference/hyperlink color on the dark canvas — a soft cyan-blue, underlined, used only for real links. The only color outside Rosso Corsa/ink/gray, and only on actual hyperlinks.
- **Hairline** (`{colors.hairline}` — `#303030`): 1px divider on the dark canvas — same hex as `canvas-elevated`.
- **Hairline On Light** (`{colors.hairline-on-light}` — `#d2d2d2`): 1px divider on a `canvas-light` band.

## Typography

### Font Family

FerrariSans is licensed and not bundled here. The documented substitute is **Inter** at weight 500 with letter-spacing ≈ −1%, which this repo already ships (`/shared/fonts.css`) — no font files to add. Fallback chain: `'Inter', 'Pretendard', system-ui, sans-serif`.

**Inter carries no Hangul, so Pretendard must stay in the chain.** These decks are usually Korean: Inter renders the Latin and the numerals, and Pretendard picks up every 한글 glyph. Dropping Pretendard doesn't throw an error — it silently falls through to whatever `system-ui` resolves to, so the Korean drifts to a different face than the Latin beside it. Keep both, in that order.

Code and equation call-outs read well in a mono: **D2Coding** with `Consolas, 'Courier New', monospace` fallback, same convention as the sibling systems — keep it `{colors.ink}` white on the `canvas-elevated` box, never red.

### Hierarchy

| Token | Weight | Size | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.cover-title}` | 500 | 64–80px | 1.05 | −1.6px | Cover slide title, floating over the photo |
| `{typography.section-head}` | 500 | 32–36px | 1.2 | −0.36px | Numbered section header — stays 500, never bold |
| `{typography.subhead}` | 700 | 18px | 1.3 | 0 | In-slide sub-heading / component-title label |
| `{typography.body}` | 400 | 15–17px | 1.5 | 0 | Default bullet / body copy, set in `{colors.body}` |
| `{typography.body-sub}` | 400 | 13–14px | 1.5 | 0 | Nested sub-bullet, secondary detail |
| `{typography.caption}` | 400 | 12px | 1.4 | 0 | Figure caption, page number |
| `{typography.kicker}` | 600 | 11px | 1.4 | 1.1px, uppercase | Cover kicker label, badge/tag text |
| `{typography.number-display}` | 700 | 64–80px | 1.0 | −1.6px | Stat callout, race-position-style result highlight |
| `{typography.code}` | 400 | 13px | 1.6 | 0 | Code / equation box (D2Coding) |

### Principles
- **Display weight stays at 500 — never bold.** The cover title and numbered section headers carry weight, not boldness; the photography and the red bar do the heavy lifting.
- **Component titles/labels may go Bold (700).** A sub-heading label, a stat-callout number, and a table header are the deliberate exception — they need to read at a glance against dark photography.
- **Kicker labels are uppercase with ~1.1px tracking.** Reserved for the cover kicker and badge/tag text — not for every heading.
- **Negative letter-spacing on display sizes only** (−0.36px to −1.6px); body and caption stay at 0.
- **Body copy is gray, not white.** Reserve pure white ink for headings and real emphasis — a slide where every line is white loses the mood/signal contrast that makes this system read as cinematic rather than just "dark mode."

### Note on Fonts
Inter is open-source and already bundled by this repo's font pipeline (`/shared/fonts.css`) — no `@font-face` needed. Set weight 500 for display roles and apply the −1% letter-spacing the substitute note calls for; don't reach for FerrariSans itself.

## Layout

### Spacing (the named ladder)
- **Canvas**: 1280 × 720px (16:9), same as every deck in this repo.
- **Token ladder**: `{spacing.xxxs}` 4px · `{spacing.xxs}` 8px · `{spacing.xs}` 16px · `{spacing.sm}` 24px · `{spacing.md}` 32px · `{spacing.lg}` 48px · `{spacing.xl}` 64px · `{spacing.xxl}` 96px · `{spacing.super}` 128px. Use the named token, not an ad-hoc px value.
- **Margins**: `{spacing.xl}` (64px) on the sides, `{spacing.lg}`–`{spacing.xxl}` (48–96px) top/bottom on a normal content slide. The cover slide is the exception — zero padding, photo runs full-bleed, with `{spacing.super}` (128px) reserved for the depth of the bottom scrim/title band.
- **Vertical flow (content slide)**: numbered section header (upper-left, Rosso Corsa bar + white 500-weight title) → body block, centered as a unit in the remaining space (see the shared centering rule below) → optional page number bottom-right.
- **Two-column split**: a text column (~40–50%) beside a figure (~50–60%) is the workhorse, same proportions as the sibling systems. Multiple figures share a row, separated by thin hairline rules (not red — see Dividers below).
- **Center the body block, don't pin it to the top.** Below the section header, treat all body content (text groups, figures, stat callouts, equation/code boxes — everything until the bottom margin/footnote) as one block and vertically center it in the remaining space, rather than stacking flush under the header and stranding leftover room at the bottom. Wrap it in a single flex container (`flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; justify-content: center;`) between the header and any bottom-pinned footnote.
- **Group vs. item spacing**: `{spacing.sm}` (24px) between distinct paragraph/label groups; `{spacing.xxs}`–`{spacing.xs}` (8–16px) between items inside one bullet list. Space separates ideas — it shouldn't loosen a single list into scattered lines.

### Whitespace
Lean on it, the same as the sibling systems — but here the "whitespace" is often photography rather than blank canvas. A single full-bleed image and a short caption is a complete cover; a dark slide with one stat callout and four bullets is a complete content slide. Don't fill the near-black canvas with decoration to make it feel "designed."

### Avoiding Overlap
Keep the bottom-of-photo title band from colliding with the affiliation/date line on the cover, and align figures in a row on a shared baseline. Eyeball it during a visual pass, same as the sibling systems.

## Elevation & Depth

Photographic depth + a brightness step (`canvas` → `canvas-elevated` → `canvas-light`) carries elevation. No drop-shadow tiers.

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat `{colors.canvas}` (`#181818`), no border, no shadow | The slide floor — body text, bare figures |
| 1 | `{colors.canvas-elevated}` (`#303030`) fill | Equation/code boxes, stat-callout backgrounds, badge/tag fills, table row banding |
| — | 1px `{colors.hairline}` or thin Rosso Corsa rule | Dividers, table borders, the section-header bar |
| — | Rosso Corsa fill (`{colors.primary}`) | Section-header bar, statement-slide background, closing accent, table header row |
| — | Full-bleed photography | Cover slide only |

Do **not** add drop shadows or rounded elevated panels. Depth here is photography and the near-black-to-elevated brightness step, not a shadow ladder.

## Shapes

### Border Radius
Corners are **square** (`0`) by default — every box, card, and table cell is hard-edged, the brand's signature precision. The one exception is a badge/tag, which is fully rounded (`{rounded.full}`) — pill geometry is reserved for that single component and nothing else.

### Gradients & Photographic Depth
Unlike a flat-canvas system, Ferrari licenses two specific gradients as decorative depth — use only these, and only where documented:
- **Rosso Corsa gradient** (`linear-gradient(180deg, #a00c01, #da291c 64%)`): inside a statement-slide fill or a closing-accent band, never on running content.
- **Dark scrim gradient** (`linear-gradient(180deg, transparent, #030303 85%)`): the legibility scrim behind the cover title, so white type stays readable over a bright photograph. This is the one gradient every Ferrari cover slide needs.

Don't invent a third gradient, and don't use either one as a generic decorative background on a content slide.

### Dividers & Rules
- **Section rule (cover)**: none — the cover uses the dark scrim, not a rule under the title.
- **Section bar (content slides)**: a short, thick Rosso Corsa vertical bar (~5–6px wide) beside the numbered header, the one place red chrome repeats slide-to-slide.
- **Column/row divider**: a thin 1px `{colors.hairline}` rule between figures in a row or rows in a table — hairline by default; reserve a Rosso Corsa divider for the one figure/row actually being called out as the best/highlighted result.
- **Hairline**: `{colors.hairline}` (`#303030`) on dark canvas, `{colors.hairline-on-light}` (`#d2d2d2`) on the rare light band.

### Image & Figure Handling
- **Only place images the content draft references with `![]()`.** Same rule as every system in this repo — the draft's markdown image links are the sole authority on which figures appear and where. An asset sitting in `assets/` is not a placement signal.
- **The cover photo is the one documented exception, and it still follows the same rule**: if the draft supplies a cover image via `![]()` on the title slide, use it full-bleed with the dark scrim. If the draft supplies no cover image, fall back to the flat `{colors.canvas}` — don't invent or source a "cinematic" photo the draft never referenced.
- **Figures sit bare on the near-black canvas** — no frame, no border, no white card behind them. Keep the original aspect ratio (`object-fit: contain`); never stretch a plot to fill a slot.
- **Don't auto-label every figure.** Caption only when the draft's own text describes that image; otherwise leave it uncaptioned, same as the sibling systems' rule.
- **Figure row dividers are hairline by default**, per Dividers above — red is reserved for the one figure actually being singled out.

## Components

### Cover Slide

**`slide-cover`** — full-bleed cinematic photo hero; the system's signature move and its biggest departure from a flat-canvas cover.
- **Photo**: fills the entire 1280×720 canvas edge-to-edge, zero padding, `object-fit: cover`. Only used if the draft references a cover image; otherwise the slide is flat `{colors.canvas}`.
- **Scrim**: the dark scrim gradient (`linear-gradient(180deg, transparent, #030303 85%)`) over the bottom third, so the title stays legible against the photo.
- **Kicker**: a short uppercase `{typography.kicker}` label (e.g. `LAB MEETING`) in `{colors.on-primary}` beside a small Rosso Corsa tick/rule — a slim accent, not a filled bar, honoring "Rosso Corsa stays scarce" even on the cover.
- **Title**: the deck name in `{typography.cover-title}` (500 weight, white), sitting low in the frame over the scrim.
- **Date / affiliation**: `{colors.muted}` `{typography.caption}`, pinned near the bottom edge, inside the scrim so it stays readable over the photo.
- **No-photo fallback**: flat `{colors.canvas}`, kicker + title + date/affiliation centered the same way a flat-canvas cover would be — never invent imagery to avoid this fallback.

### Numbered Section Header

**`section-head`** — the header on every content slide.
- A short, thick **Rosso Corsa vertical bar** (~5–6px wide) immediately left of the title.
- The title as `N. Title` in `{colors.ink}` (white) `{typography.section-head}` — **weight 500, never bold**. Hierarchy comes from size and the red bar, not boldness — this is the one place this system most visibly departs from a "bold-the-header" convention.
- Sits upper-left in the content margin. No eyebrow beyond the red bar itself.
- When one numbered topic spans several slides, carry the literal per-slide heading text from the draft (`4. Method — Biased Crossover`) rather than inventing a counter, same rule as the sibling systems.

### Table of Contents

**`toc`** — the `목차`/contents page, right after the cover.
- A plain numbered list, one entry per top-level section, each with a Rosso Corsa bold numeral (the one place a numeral, not running text, carries red) and the section title in white beside it.
- Keep it minimal and light-weight (400/500), not another headline — the TOC should read as a quiet index against the dark canvas.
- Generous ~20–22px gaps between entries, looser than regular body-bullet spacing.
- Only pair it with a figure if the draft supplies one for the TOC slide; otherwise a vertically-centered numbered list on flat `{colors.canvas}` is complete on its own.

### Bullet List

**`bullets`** — the primary body element.
- Small filled markers in `{colors.body}` gray (not red) at ~5px, item text in `{colors.body}` `{typography.body}`, `{spacing.xxs}`–`{spacing.xs}` (8–16px) vertical gap.
- Nested sub-bullets indent once, drop to `{typography.body-sub}`, smaller/hollow marker. Two levels is plenty.
- Emphasis words are `{colors.ink}` white, SemiBold/Bold inline — not red.

### Sub-heading Block

**`subhead`** — labelled groups within a slide.
- A `{colors.ink}` white, `{typography.subhead}` (700) label, then its bullets indented beneath. `{spacing.sm}` (24px) extra space above each label separates the groups — no boxes, no rules needed.

### Numbered Steps

**`steps`** — an ordered process.
- `1)` `2)` `3)` markers in `{colors.ink}` white SemiBold, step text in `{colors.body}` gray. Plain parenthesis numerals, not filled circles.

### Annotation / Footnote (주석)

**`annotation`** is a quiet aside for `※`-marked lines — same universal placement rule as every system in this repo (grouped tight under a figure when the draft's `※` line immediately follows its `![]()`, otherwise collected into a bottom-edge footnote behind a thin hairline rule).
- Type: ~11–12px in `{colors.muted}` (`#666666`), line-height ~1.5, hanging indent, `※` glyph kept verbatim. No box, no border, no red — the quietest element on the slide.
- The footnote's hairline rule is `{colors.hairline}` (`#303030`) on the dark canvas, `{colors.hairline-on-light}` on the rare light band.

### Figure / Figure Row

**`figure`** — one or more images bare on the near-black canvas.
- Single figure: placed in the free area (commonly the right ~55%), `contain`-fit, captioned only if the draft supplies a descriptive line for it.
- Figure row: 2–4 images at equal height sharing a baseline, separated by a thin hairline rule by default; reserve a Rosso Corsa divider for the one figure being singled out as the key/best result.
- Reproduce the source figure as-is; photography and plots both read fine directly on the dark canvas.

### Equation Call-out

**`eq-box`** — a boxed governing equation or definition.
- Square corners, `{colors.canvas-elevated}` (`#303030`) interior, comfortable padding, a thin `{colors.hairline}` border (dashed or solid — solid reads slightly more "precision-engineered" on dark, dashed is fine too).
- Equation set in mono/math (`{typography.code}` or KaTeX) in `{colors.ink}` white. Never red.

### Code Call-out

**`codebox`** — a boxed source-code listing.
- Same shell as `eq-box`: square corners, `{colors.canvas-elevated}` interior, thin `{colors.hairline}` border, comfortable padding (~14px 20px).
- Text set in `{typography.code}` (13px/1.6, D2Coding) in `{colors.ink}` white — the standard readable size, not shrunk to force-fit.
- **When the code is taller than the box, let the box scroll instead of shrinking the font.** Size the box to match its neighbor on the slide, set `overflow: auto`, and keep the font at its normal size. Accept that a print/PDF export clips whatever doesn't fit — don't compress type to dodge that tradeoff.
- Long lines may overflow horizontally too (`white-space: pre`, no wrap by default); add a `.wrap` variant only for naturally line-oriented content like a JSON blob.

### Reference List

**`refs`** — a sources block.
- A `Reference` sub-heading in `{colors.ink}`, then items as `Source name – ` + an underlined `{colors.semantic-info}` (`#4c98b9`) hyperlink — the one non-red, non-gray color, and only on real links.

### Comparison Table

**`table`** — a plain data table, used sparingly, and the most likely place to reach for the rare `canvas-light` band if the data is dense.
- Header row: `{colors.primary}` Rosso Corsa fill, `{colors.on-primary}` white text, `{typography.subhead}` (700) weight — the table header is a deliberate, contained use of red, like a livery accent.
- Body rows: `{colors.canvas}` or alternating `{colors.canvas-elevated}` banding, `{colors.hairline}` 1px row separators. Square corners throughout.
- On the rare `canvas-light` variant: header stays Rosso Corsa/white, body text switches to `{colors.body-on-light}`, dividers switch to `{colors.hairline-on-light}`.

### Stat / Number Callout

**`stat-cell`** — a technical spec or key-result callout, this system's most distinctive addition.
- Value set in `{typography.number-display}` (64–80px, 700, white `{colors.ink}`), label beneath in `{typography.kicker}` (uppercase, `{colors.muted}`).
- **Highlighted variant**: the same geometry with the value in `{colors.primary}` Rosso Corsa instead of white — reserved for the single best/headline result on a slide (an accuracy number, a winning configuration), never for every stat on the page.

### Badge / Tag

**`badge`** — a small uppercase pill, the system's one rounded-full exception.
- Background `{colors.canvas-elevated}`, text `{colors.ink}` white, `{typography.kicker}` (11px/600/1.1px tracking, uppercase), `{rounded.full}`, padding ~4px × 12px.
- Used sparingly next to a subhead or figure caption to tag a category or status — not a default decoration on every slide.

### Closing Slide

**`slide-end`** — minimal final slide. Optional — only build one if the draft's own outline ends with a closing/`감사합니다` section.
- A centered `감사합니다` (or one-line takeaway) in `{typography.section-head}` (500, white) on flat `{colors.canvas}`, with a short Rosso Corsa rule beneath it — the same restrained kicker-style treatment as the cover, not a full red band.

## A Few Things Worth Holding Onto

- **Rosso Corsa stays scarce.** Section bar, stat highlight, table header, statement-slide fill, closing rule — nowhere else. A slide where red shows up more than once or twice has over-used it.
- **Near-black, never pure black, and only rarely white.** `{colors.canvas}` (`#181818`) is the floor; `{colors.canvas-light}` is a deliberate, rare exception for dense data, not a fallback whenever a slide "needs contrast."
- **Display type never bolds.** Weight stays 500 on covers and section headers; component titles/labels are the one place Bold (700) is allowed.
- **Body copy is gray, not white.** White is for headings and real emphasis — losing that contrast turns "cinematic" into plain dark-mode.
- **Sharp corners everywhere, one pill exception.** Every box is `{rounded.none}`; only the badge/tag is `{rounded.full}`.
- **Photography and the two documented gradients are the only depth.** No drop shadows, no elevated panels beyond the single `canvas-elevated` brightness step.

## Slide-Level Responsive Behavior

### Content Density (rules of thumb)
- Text slides read best at ~5–7 bullet lines or fewer; past that, lean on a figure or a stat callout instead of adding more prose.
- A text column + one figure, or a text column + one stat callout, is the default content slide.
- Leave a figure room to be read — don't crowd a caption against the next element.

### Export
- All elements within the 1280 × 720 canvas — no bleed except the cover photo itself.
- PDF export target: `@page { size: 33.87cm 19.05cm; margin: 0 }`.
- A scrollable code/equation box clips whatever doesn't fit on the printed page — accept that tradeoff rather than shrinking type (see Code Call-out above).

### Use Every Referenced Asset
Place every figure the draft **references with `![]()`** — don't silently drop one to keep a slide sparse; group tightly-related plots into one figure row instead. An unreferenced file in `assets/` — including a candidate cover photo — stays unused until the draft actually links it.

## Iteration Guide

A loose order of operations, not a checklist to clear:
1. Build the cover first — photo (if the draft supplies one) or flat canvas, scrim, kicker, title, date/affiliation — it sets the cinematic tone.
2. For each content slide, drop the numbered `section-head` upper-left (weight 500, red bar), then center the body block in the remaining space.
3. Default body to `{typography.body}` gray; sub-heads to `{typography.subhead}` white Bold; captions/annotations to `{colors.muted}`.
4. Keep Rosso Corsa scarce — bar, stat highlight, table header, statement/closing accent. Nothing else red.
5. Place figures bare on the near-black canvas at true aspect ratio; separate rows with hairline rules by default. Leave them uncaptioned unless the draft has a descriptive line for that image.
6. Do a visual pass (PDF or screenshots) for scrim legibility over the cover photo, overlap, and ragged figure rows — then delete anything that looks decorative rather than cinematic.
