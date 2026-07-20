## Overview

The Minimal-Navy language is the house style for **lab-meeting (랩미팅) 발표자료** — plain, academic slides that look like a careful graduate student made them in an afternoon, not like a template. It is derived from academic lab-meeting decks: a **flat pure-white** canvas (`{colors.canvas}` — `#FFFFFF`), a single brand color — **brand navy** (`{colors.navy}` — `#024489`) — and text in near-black navy (`{colors.ink}` — `#16213A`). There is no gradient, no card chrome, no accent orange, no sidebar. Restraint is the whole point.

Type is **Pretendard** across the deck — weight, not color or ornament, carries the hierarchy. Titles and section headers are Bold; body is Regular; metadata is muted gray. The navy shows up only in a few deliberate places: the cover's "Lab Meeting" bar, a short vertical bar beside each numbered section header, thin rules, and the brand wordmark. Everything else is black text and white space.

The signature move is a **numbered section header** — a short navy vertical bar + `1. Darcy Flow`, `2. Paper Review - Introduction`, `4. Model Architecture` — sitting over a wide-open white slide with the figures placed plainly, unframed, on the page. Figures are the content; the design gets out of their way.

This is a guide, not a rulebook. It describes how the lab-meeting decks tend to look and the defaults that work. The few things worth holding onto: **navy stays a chrome accent, never a fill for content**; the canvas stays flat white (no gradient); figures sit unframed on white; and Pretendard weight does the hierarchy. If a slide starts to look "designed," strip something out.

**Character:**
- One brand color — brand navy (`{colors.navy}` `#024489`); everything else is black text on white.
- A flat white canvas. No gradient, no card backgrounds, no drop shadows.
- Pretendard at every weight; hierarchy from weight and size, not color.
- Numbered section headers (`1. …`) with a short navy vertical bar, upper-left.
- Figures placed bare on white — no frames, no rounded cards. Figures in a row are separated by white space alone (a comfortable gap) — no rules or lines between them.
- The brand wordmark top-right on the cover only; content slides carry no logo.
- Blue underlined links (`{colors.link}` `#1155CC`) for references — the only non-navy color, and only when it's a real hyperlink.

## Colors

The palette is intentionally tiny. If you find yourself reaching for a fifth or sixth hue, the slide is over-designed — pull back.

### Brand
- **Navy** (`{colors.navy}` — `#024489`): The single brand color, sampled from the brand wordmark and the decks' "Lab Meeting" bar. Used for the cover bar fill, the section-header vertical bar, thin rules, and table header fills. It is *chrome*, not a content fill — never wash a whole card or panel in it.
- **Navy Deep** (`{colors.navy-deep}` — `#013666`): Optional darker navy for a large cover title or a pressed state. Use sparingly.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): The slide. Flat, pure white, edge to edge. No gradient.
- **Surface** (`{colors.surface}` — `#F4F6FA`): A barely-there cool gray for the rare filled box (an alternating table row, a subtle call-out). Use it at most once or twice in a deck; white is the default.
- **Line** (`{colors.line}` — `#D7DCE5`): Hairline gray for the thinnest dividers and table borders where navy would be too loud.

### Text
- **Ink** (`{colors.ink}` — `#16213A`): Headings, section titles, and strong/keyword text. A near-black deep navy — never pure `#000`.
- **Body** (`{colors.body}` — `#2C3444`): Default body copy and bullet text. A dark slate, a touch lighter than Ink.
- **Ink Mute** (`{colors.ink-mute}` — `#6B7280`): Page numbers, dates, department/author line, figure captions, footnotes.
- **On Navy** (`{colors.on-navy}` — `#FFFFFF`): Text on the navy bar and navy table headers.

### Functional
- **Link** (`{colors.link}` — `#1155CC`): Underlined hyperlink blue for reference URLs. The only color outside the navy/ink/gray family, and it appears *only* on actual links.

## Typography

### Font Family

Everything is **Pretendard** — a modern humanist sans with nine weights (Thin → Black). It carries titles, headings, and body alike; hierarchy comes from weight and size, not from switching families. Fallback chain: `'Apple SD Gothic Neo', 'Malgun Gothic', system-ui, sans-serif`.

Code and shape/tensor annotations (e.g. `(500, 1, 17, 16)`) and boxed governing-equation call-outs read well in a mono: **D2Coding** with `Consolas, 'Courier New', monospace` fallback. Inline math is fine set in Pretendard or a math font (KaTeX/MathJax) — keep it dark ink, not navy.

### Hierarchy

| Token | Weight | Size | Line Height | Use |
|---|---|---|---|---|
| `{typography.cover-title}` | Bold | 40–52px | 1.2 | Cover slide title (deck name) |
| `{typography.section-head}` | Bold | 30–34px | 1.2 | Numbered section header (`1. Darcy Flow`) |
| `{typography.subhead}` | SemiBold | 18–20px | 1.3 | In-slide sub-heading (`연구배경`, `연구목적`) |
| `{typography.body}` | Regular | 17–19px | 1.6 | Default bullet / body copy |
| `{typography.body-sub}` | Regular | 15–16px | 1.55 | Nested sub-bullet, secondary detail |
| `{typography.caption}` | Regular / Medium | 12–13px | 1.45 | Figure caption, page number, metadata |
| `{typography.cover-bar}` | Regular | 19–21px | 1.2 | "Lab Meeting" text in the cover bar |
| `{typography.code}` | Regular | 13px | 1.6 | Code / equation box (D2Coding) |

### Principles
- **Weight carries hierarchy.** Bold section headers, SemiBold sub-heads, Regular body. Don't add color to signal importance — bold the word in Ink instead.
- **Keep `letter-spacing` near 0.** Pretendard is already well-fit for Korean and Latin. Don't track headings out.
- **Bold, don't recolor, for emphasis.** In-body keywords are `{colors.ink}` **SemiBold/Bold**, not navy and not orange.
- **Give Korean room.** Korean wraps wider than Latin; leave generous line-height (1.6 body) and don't pack lines edge to edge.

### Note on Fonts
Pretendard is open-source and the viewer auto-injects it (`/shared/fonts.css`), so decks don't need to bundle or `@font-face` it. The fallback chain (`Apple SD Gothic Neo` / `Malgun Gothic`) covers environments where it isn't available.

## Layout

### Spacing (defaults, not constraints)
- **Canvas**: 1280 × 720px (16:9).
- **Base rhythm**: an 8px grid is a comfortable default.
- **Margins**: generous and even — roughly 64–72px on the sides, 52–60px top/bottom. The white margin *is* the design; when a slide feels tight, cut content before shrinking the margin.
- **Vertical flow (content slide)**: numbered section header (upper-left) → body column and/or figure(s) → optional page number bottom-right. No eyebrow label, no summary box.
- **Start the body at the top — don't vertically center it.** Below the section header, the slide's body content (text groups, figures, figure rows, equation call-outs) flows from the top down, starting right under the header, and any leftover room stays as white space at the bottom. This is the author's preference: content reads top-to-bottom in a fixed, predictable position across slides, rather than floating to a different vertical spot depending on how full each slide is. Implementation-wise, the body wrapper between the header and any bottom-pinned footnote uses `flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; justify-content: flex-start;` — footnotes still pin to the bottom edge (`margin-top: auto`), and only figures that are a slide's sole content may stretch to fill the remaining height. **Exception: the TOC slide stays vertically centered** — a short index list pinned to the top reads as unfinished, so the `목차` list keeps `justify-content: center`.
- **Leave a generous gap between the section header and the first body element** — roughly **44–50px** (author preference, widened twice from an initial ~22px; anything tighter reads as the body "crowding" the title once content starts at the top). The header's bottom margin is where this gap lives; don't reclaim it when a slide gets full.
- **Two-column split**: a text column (~40–50%) beside a figure (~50–60%) is the workhorse. Multiple figures share a row, separated by white space (a ~16–24px gap) only — no rules between them.
- **Group vs. item spacing**: leave a *generous* gap *between* distinct paragraph/label groups on a slide — a `연구배경` block versus the next block, a subhead group versus a following paragraph — roughly **32–36px**. Any marker that opens a new content block — a `▣` label, a `1)`/`2)` numbered item heading a new topic — starts a new group and gets this full gap above it (author preference; a new block starting close under the previous text reads as run-on). But keep items *within* a single bullet list tight (**~8–12px** between `<li>`s — the author tightened this from an earlier 12–16px; same goes for consecutive `(1)`/`(2)` self-numbered lines). Space is what separates one idea from the next; it should not loosen a single list into scattered lines. When a slide has several labeled groups stacked vertically, this wider inter-group spacing is what makes it read as calm rather than crammed.

### Whitespace
Lean on it. These slides breathe — a single figure and four bullets on an otherwise empty white slide is correct, not underdone. Emptiness reads as academic confidence.

### Avoiding Overlap
Keep figures and text from colliding, and align figures in a row on a shared baseline / equal height. Eyeball it during a visual pass — no pixel accounting needed.

## Elevation & Depth

There is essentially none. This system is deliberately flat.

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on white, no border, no shadow | Figures, text — the default for everything |
| — | 1px `{colors.line}` hairline or thin navy rule | Dividers, table borders, the rule under the cover title |
| — | Navy fill (`{colors.navy}`) | Cover "Lab Meeting" bar, table header row only |

Do **not** add drop shadows, rounded card containers, or elevated panels. Depth here is the white space itself. If a figure needs separation from adjacent content, use white space alone — no rule, no box (author preference; earlier versions drew a thin navy vertical rule between side-by-side figures, and it read as clutter).

## Shapes

### Border Radius
Corners are **square** (`0`) by default — the cover bar, dividers, and rules are all hard-edged, matching the decks. If a boxed element genuinely needs softening (rare), keep it to ≤4px and apply it consistently.

### No Gradient
The canvas is flat `{colors.canvas}` white. This is the main departure from the sibling White-Navy system, and it's load-bearing for the "authentic, not templated" feel — do not add a white-to-gray gradient here.

### Dividers & Rules
- **Section rule** (cover): a single thin navy rule (~2px, `{colors.navy}`) under the cover title, roughly the title's width.
- **No divider between figures**: figures placed side by side are separated by white space (gap) only. Do **not** draw a navy vertical rule between them — the author removed these; a figure row is grouped by alignment and equal height, not by lines.
- **Hairline**: `{colors.line}` 1px for table rows or the faintest separators.

### Image & Figure Handling
- **Only place images the content draft references with `![]()`.** The draft's markdown image links are the *sole* authority on which figures appear and where. A file merely sitting in the `assets/` folder is **not** a signal to place it — if the draft doesn't reference it, it does not go on any slide, even when it looks content-relevant and even when leaving it out means an asset goes unused. Never add an image the draft didn't ask for (a reused cover, an "illustrative" diagram, a decorative figure). Place each referenced image on the slide whose draft section contains its `![]()`, in the order the draft lists them.
- **Figures sit bare on the white canvas** — no frame, no border, no rounded card, no shadow. This is the defining rule of the system.
- Keep the original aspect ratio: `object-fit: contain`. Never stretch a plot to fill a slot.
- **Don't auto-label every figure.** It's tempting to give each image a manufactured academic tag — `Figure 1. Overview`, `Algorithm 2. VRPAgent-GA`, `Prompt 3. Crossover prompt`, `Table 1. Performance` — mechanically derived from a source filename or a markdown image's alt text (`![fig1]`, `![alg2]`, `![table1]`). Once every figure on every slide carries one of these, it reads as clutter, not scholarship — remove it. A figure sits caption-free by default.
- **Caption only when the content draft itself says something about that image.** If the draft's own text includes a real descriptive line for a specific figure (the author's own sentence, not a label you're inventing), reproduce that verbatim below the figure, centered, in `{colors.ink-mute}` `{typography.caption}` — no invented `Figure N.` / `Table N.` prefix in front of it. If the draft is silent about an image, leave it uncaptioned; the freed space goes to the image itself, not to a manufactured label.
- When several figures belong to one point, place them in a row at equal height, separated by white space only (no rules); caption only the ones the draft actually describes.
- Full-bleed background images are not part of this system — figures are always content, always `contain`.
- **Keep scale consistent across a numbered sub-sequence.** When one section spans several slides (see Numbered Section Header above), don't let a slide with little accompanying body text balloon its figure far past its siblings just because there's more empty space to fill — cap the figure's height to roughly the same range the sequence's other slides use, and let any leftover space become extra margin instead of extra image. A hero figure that's dramatically bigger on one slide than the next reads as inconsistency, not emphasis.

## Components

### Cover Slide

**`slide-cover`** — the deck's opening slide, on flat white.
- **brand wordmark** top-right (`/brand/logo.png`), ~200–240px wide, clear of the edges.
- **"Lab Meeting" bar**: a horizontal `{colors.navy}` fill, centered, roughly 45–55% of the canvas width, with `Lab Meeting` centered in `{colors.on-navy}` `{typography.cover-bar}`. Square corners.
- **Title**: the deck name centered below the bar in `{colors.ink}` `{typography.cover-title}` Bold (e.g. `Darcy Flow – Neural Operator`, `DQN 기반 AGV 스케줄링 구현`).
- **Rule**: a thin `{colors.navy}` horizontal rule under the title, about the title's width.
- **Date**: centered below, `{colors.ink-mute}` `{typography.caption}` (e.g. `2026.03.19.`).
- **Affiliation**: two centered lines near the bottom, `{colors.ink-mute}` — the presenter's affiliation (e.g. `대학교 학과명`) then the presenter's name.
- **Width discipline**: give the bar, the title's text box, and the rule the *same* fixed width, sized to whatever the title actually needs — don't size each independently. A long English title at an unconstrained width will render wider than the bar/rule and visually "stick out" past them. Prefer **widening the shared bar/title/rule width** to land the title on a clean 2-line break over squeezing the title narrower and forcing an awkward 3-line wrap — it's fine for the bar to run past the "45–55% of canvas" guideline (e.g. out to ~860px on a 1280px canvas) when a long title calls for it; matching widths across all three elements matters more than hitting a specific percentage.
- **Horizontal breathing room, even for short titles**: don't shrink-wrap the bar/rule tight to a short title's text width either. The bar and rule should read as a deliberate frame with comfortable side margin around the title (e.g. ~700–720px for a short one-line Korean title on a 1280px canvas), not clamped to the exact glyph width. Too-tight a bar makes a short title look cramped; leave visible padding on both sides of the title inside the shared width.
- **Vertical placement**: center the title group (bar + title + rule) at the true vertical middle of the canvas — treat it as its own block, not lumped together with the date/affiliation into one big centered flex column. Pin the affiliation near the bottom independently (e.g. `bottom: 56px`). Place the date at the literal midpoint between the title group's rule and the affiliation — give the rule→date gap and the date→affiliation gap the *same* margin, so the date reads as centered in that space, not stranded just under the rule or clinging to the affiliation.



### Numbered Section Header

**`section-head`** — the signature header on every content slide.
- A short, thick **navy vertical bar** (`{colors.navy}`, ~5–6px wide, ~0.9× the cap height) immediately left of the title.
- The title as `N. Title` in `{colors.ink}` `{typography.section-head}` Bold — the number and title share one line (`1. Darcy Flow`, `2. Paper Review - Introduction`).
- Sits upper-left in the content margin. No eyebrow, no dot, no orange — the navy bar is the only ornament.
- **When one numbered topic spans several slides** (e.g. a single "4. Method" section split across seven slides), carry the literal per-slide heading text from the content draft — `4. VRPAgent 방법론 - Biased Crossover`, `4. VRPAgent 방법론 - Mutation` — rather than inventing a `(1)/(2)/(3)` counter. The words after the dash should be exactly what the draft's own heading says, not a paraphrase or a renumbering scheme layered on top.
- **No two-tone split.** Render the whole string — number, main title, and the part after the dash — in the same `{colors.ink}` `{typography.section-head}` Bold, at the same size. Don't mute or shrink the part after the dash to read as a "subtitle"; a single heading shouldn't fragment into two visual weights. Hierarchy here comes from the navy bar and the Bold weight against body copy, not from splitting the heading itself.

### Table of Contents

**`toc`** — the `목차` page, right after the cover.
- A plain numbered list, one entry per top-level section (`1. 요약`, `2. 연구 배경 및 관련 연구`, …), each with a bold navy numeral (period included, e.g. `1.` not `1`) and the section title beside it.
- Keep it minimal, not another headline: smaller and lighter than body bullets elsewhere (e.g. ~19px, Medium — not the ~22px Bold a first pass tends to reach for). The numeral can stay bold/navy since weight there is doing the accenting; the title text itself should be light enough that the page reads as a quiet index, not a second cover.
- **Give the list room to breathe** — a generous ~20–22px gap between entries, noticeably looser than the ~8–12px used for regular body bullets. A tightly-packed numbered list reads as a dense outline; the TOC should read as a calm, spaced-out index.
- **Only pair it with a figure if the content draft supplies one for the TOC slide.** If the draft's `목차` section is text-only (just the numbered outline), keep the slide text-only — a clean, vertically-centered numbered list is complete on its own. Do **not** add a manufactured "representative" figure the draft didn't ask for (a reused cover image, an overview diagram); a text-only TOC is the default, not an unfinished slide.

### Bullet List

**`bullets`** — the primary body element.
- Filled round bullets (`•`) in `{colors.ink}` at ~5px, item text in `{colors.body}` `{typography.body}`, ~8–12px vertical gap.
- **No dot when the line numbers itself.** A draft bullet whose text opens with its own parenthesized counter — `(1) …`, `(2) …` — renders as a plain line without the round bullet marker (author preference; a dot in front of `(1)` double-marks the line). Keep the same body type and spacing, just drop the `•`.
- **Nested sub-bullets** indent once, drop to `{typography.body-sub}`, and use a smaller or hollow marker. Two levels is plenty; a third means the slide is doing too much.
- Emphasis words are `{colors.ink}` SemiBold/Bold inline — not a second color.

### Sub-heading Block

**`subhead`** — labelled groups within a slide (the decks' `연구배경 / 연구목적 / 연구내용` pattern).
- A `{colors.ink}` SemiBold `{typography.subhead}` label, then its bullets indented beneath. A little extra space above each label separates the groups — no boxes, no rules needed.

### Numbered Steps

**`steps`** — an ordered process (e.g. a training loop).
- `1)` `2)` `3)` markers in `{colors.ink}` SemiBold, step text in `{colors.body}`. Plain text numbers with a parenthesis — not filled circles or `①` glyphs.

### Annotation / Footnote (주석)

**`annotation`** is a quiet aside for `※`-marked lines. When the content draft prefixes a sentence with `※` (the author's own definitions, rationale, or side-notes that support a point without being part of the main flow), render it as a comment, not as body copy. The type is the same in both placements below: small and light, around **11-12px** in `{colors.ink-mute}`, line-height ~1.5, with the `※` glyph kept verbatim as the leading marker and a **hanging indent** so wrapped lines align under the text, not under the `※`. No box, no border, no navy; a `※` aside is the *quietest* element on the slide, never a framed or bolded note.

**Placement depends on whether the `※` is attached to an image**, read straight off the draft's markdown:
- **Grouped under a figure**: if a `![]()` image is *immediately* followed on the very next line by a `※` line (no blank line between them), that `※` block is the image's own note. Keep it directly beneath that figure, tight to it (no extra gap), so it reads as the caption/aside for that specific image and moves with it.
- **Slide-bottom footnote (the default for everything else)**: any `※` line that is *not* the immediate next line after an image (a standalone aside, or one separated from its image by a blank line) collects into a footnote pinned to the **bottom edge of the slide**. Draw a thin hairline rule above the block (`{colors.line}` `#D7DCE5`, ~1px, partial width, the text column or ~40-50% from the left) for the conventional footnote-separator look, then the `※` lines beneath it. Gather all of a slide's bottom-footnote `※` lines into that single block. **Keep clear air between the body and the footnote**: even when the body runs long, leave a generous gap (~26–30px minimum) above the hairline so the footnote reads as a separate register, not the body's next line (author preference).

### Figure / Figure Row

**`figure`** — one or more plots on white.
- Single figure: placed in the free area (commonly the right ~55%), `contain`-fit, caption below only if the draft provides one (see Image & Figure Handling above) — most figures carry no caption at all.
- Figure row: 2–4 figures at equal height sharing a baseline, separated by white space (gap) only — no rule between them. No frames, no invented per-figure labels.
- Reproduce the source figure as-is (screenshots of papers, matplotlib plots, architecture diagrams all sit bare on white).

### Equation Call-out

**`eq-box`** — a boxed governing equation or definition.
- A **dashed** thin border (`{colors.line}` or a muted navy), square corners, white interior, comfortable padding.
- Equation set in mono/math (`{typography.code}` or KaTeX) in `{colors.ink}`. Used for `Governing equation:` / `Solution Operator:` style call-outs beside a figure.

### Code Call-out

**`codebox`** — a boxed source-code listing (e.g. a class/function the draft attaches to a slide).
- Same shell as `eq-box`: a **dashed** thin border (`{colors.line}`), square corners, white interior, comfortable padding (~14px 20px).
- Text set in `{typography.code}` (13px, 1.6 line-height, D2Coding) in `{colors.ink}` — the standard readable code size, not shrunk to force-fit.
- **When the code is taller than the box, let the box scroll instead of shrinking the font.** Size the box to match its neighbor on the slide (e.g. the paired figure's height in a split layout), set `overflow: auto`, and leave the font at its normal size — a reader can scroll to see the rest. Do not compress the font down to cram the whole listing into view; a code block that needs a magnifier to read has failed regardless of whether it all fit. This trades off print/PDF export (scrolling doesn't exist on paper, so an overflowing listing is clipped there) for a readable on-screen/interactive default — accept that tradeoff rather than shrinking type to avoid it.
- Long lines are allowed to overflow horizontally too (`white-space: pre`, no wrap) — the box scrolls both ways. Only add a `.wrap` variant (`white-space: pre-wrap; word-break: break-word`) when the content is naturally line-oriented and wrapping reads better than horizontal scroll (e.g. a long JSON blob), not for ordinary source code.

### Reference List

**`refs`** — a sources block (common on intro slides).
- A `Reference` sub-heading, then items as `Source name – ` + an underlined `{colors.link}` hyperlink. Keep link text short and descriptive.

### Comparison Table

**`table`** — a plain data table, used sparingly.
- Header row: `{colors.navy}` fill, `{colors.on-navy}` text, `{typography.subhead}` weight.
- Body rows: white (or alternating `{colors.surface}`), `{colors.line}` 1px row separators. Square corners, no outer shadow.

### Closing Slide

**`slide-end`** — minimal final slide. **Optional** — only build one if the content draft's own outline ends with a closing/`감사합니다` section. Don't append one by default; a deck that ends on its last content section (e.g. `견해`) is complete as-is if that's what the draft calls for.
- A centered `감사합니다` (or a one-line takeaway) in `{colors.ink}`. Optionally the brand wordmark top-right, matching the cover. No other chrome.

## A Few Things Worth Holding Onto

These habits keep the system recognizable — and keep it from drifting into a "designed template" look.

- **One color.** brand navy for chrome (bar, section bar, rules, dividers, table headers); black ink for text; blue only for real links. No orange, no second brand hue.
- **Flat white, always.** No gradient, no card backgrounds, no drop shadows.
- **Figures bare on white.** No frames or rounded cards. Separate a figure row with white space alone — no rules, no boxes.
- **Weight for hierarchy.** Bold the header and the keyword; don't recolor to emphasize.
- **Logo on the cover only.** Content slides stay clean.
- **When in doubt, remove.** Empty white space is the intended look, not a gap to fill.

## Slide-Level Responsive Behavior

### Content Density (rules of thumb)
- Text slides read best at ~5–7 bullet lines or fewer; past that, split to a second slide or lean on a figure.
- A text column + one figure is the default content slide. Two-to-four figures in a row is fine when they belong together.
- Leave a figure room to be read — don't crowd a caption against the next element.

### Export
- All elements within the 1280 × 720 canvas — no bleed.
- PDF export target: `@page { size: 33.87cm 19.05cm; margin: 0 }`.
- Figures `contain`; captions one line where possible.

### Use Every Referenced Asset
Place every figure the draft **references with `![]()`** — don't silently drop one to keep a slide sparse; group tightly-related plots in one figure row instead. "Supplied" means *referenced by the draft*, not *present in the `assets/` folder*: an unreferenced file in `assets/` stays unused. So the rule cuts both ways — place all of the draft's referenced images, and none that it doesn't reference.

## Iteration Guide

A loose order of operations, not a checklist to clear:
1. Build the cover first (wordmark, navy "Lab Meeting" bar, title, rule, date, affiliation) — it sets the tone.
2. For each content slide, drop the numbered `section-head` upper-left, then lay the text column and figure(s) in the open white.
3. Default body to `{typography.body}`; sub-heads to `{typography.subhead}`; captions to `{colors.ink-mute}`.
4. Keep the navy scarce — bar, section bar, rules, dividers, table headers. Nothing else navy.
5. Place figures bare on white at true aspect ratio; separate figures in a row with white space only. Leave them uncaptioned unless the draft itself has a descriptive line for that image — don't invent `Figure N.` / `Table N.` labels.
6. Do a visual pass (PDF or screenshots) for overlap, ragged figure rows, and Korean wrapping — then delete anything that looks decorative.
