## Overview

Dell's December 1996 home page is a perfectly preserved fossil of catalog-era enterprise web design — the moment when a Fortune-100 brand decided the web was *important enough* to invest in, but two years before CSS would be widely adopted and three years before "design system" was a phrase anyone used. Every visual choice on the page is a downstream consequence of that constraint: layout via HTML tables, type via the browser's built-in font stack (Arial Black / Helvetica / Times Roman), color via 8-bit-safe flat fills, and decoration via hand-cut GIF "stickers" (the NEW! burst, the round PC Magazine Readers' Choice seal, the beveled "BUY a DELL" yellow tab). The page is bordered — literally bordered, in a 1-cell-wide black HTML table — and inside that frame, every product line gets a "ribbon card": a white title bar with a sharp black underline, a tinted body block in one of eight catalog colors (sage, salmon, peach, lime, sky, steel, periwinkle, olive), and a beveled product photograph notched into the right edge of the card.

The brand voice carries through in two anchors: a vivid Dell-red CTA panel on the left of the homepage (cream-yellow Times Roman copy on a `{colors.primary}` fill, set inside the black frame) and a screaming red phone number — `1-800-213-DELL` — pinned to the top-right of every page, because in 1996 the website was a brochure that ended with a phone call. The footer is a row of four hand-drawn icon-labels (FIND / HOME / ONLINE STORE / SERVICE & SUPPORT) linked by a thin green horizontal rule, and a single classic-Mosaic-blue underlined "Copyright" link sitting above the legal small print in Times Roman.

**Key Characteristics:**
- Literal page frame: every page sits inside a `{colors.frame-ink}` (black) outer border ~8 px thick — the design treats the browser window as a printed picture frame
- Flat color-block "ribbon cards" tint each product family with a dedicated catalog color (`{colors.tint-sage}` Latitude, `{colors.tint-salmon}` OptiPlex GX, `{colors.tint-periwinkle}` PowerEdge, `{colors.tint-sky}` Dellware, etc.) — no gradients, no shadows, no opacity
- Chunky display typography in `{typography.display}` (Arial Black 36 / weight 900) for section title blocks; `{typography.heading-2}` (Helvetica Bold 16) for product row titles; `{typography.body}` Times Roman 14 for everything else
- Hand-cut GIF "stickers" overlay the layout: yellow "BUY a DELL" tab in the top right, angled "NEW!" bursts on new product rows, round red PC Magazine Readers' Choice seals
- `{colors.primary}` (Dell red) reserved for two things only: the homepage CTA panel and the top-right phone number — never decorative
- Footer icon-nav with classic-blue (`{colors.link}` #0000ee) anchor underlines — the unmistakable Netscape 3.x link colour

## Colors

### Brand & Accent
- **Dell Red** (`{colors.primary}` — #e91d2a): The brand's signature red. Reserved for the homepage CTA panel ("At Dell.com, we'll help you find the right system…"), the top-right phone number, and the PC Magazine Readers' Choice seal ring. Never used as a card body fill.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the red CTA panel and on black button fills.
- **Dell Yellow** (`{colors.yellow-sticker}` — #fcc20f): Sticker yellow — the "BUY a DELL" tab in the top banner, and the angled "NEW!" bursts overlapping new product rows.
- **Dell Purple** (`{colors.purple-stripe}` — #6a26a4): The accent stripe behind the lowercase ".com" / "DELL" wordmark text — appears inside the "BUY a DELL" sticker chrome only.

### Surface
- **Frame Ink** (`{colors.frame-ink}` — #000000): Pure black. The page frame, the top banner background, button fills, and all 1 px ribbon-card hairlines.
- **Canvas** (`{colors.canvas}` — #ffffff): True white inside the frame. The page surface, the ribbon-card title-bar fill, and the icon-label nav backdrop.

### Text
- **Ink** (`{colors.ink}` — #000000): Body text, headings, link copy before visit. Pure black; no warm-near-black softening in 1996.
- **Link** (`{colors.link}` — #0000ee): Classic Mosaic / Netscape 3.x default link blue. Underlined inline anchors ("Copyright", "(Terms of Use)", inline links).

### Ribbon-Card Tint Family
Eight catalog colors, one per product line — these are the page's chromatic personality:
- **Olive** (`{colors.tint-olive}` — #8e8a25): "DIMENSION DESKTOPS" eyebrow block
- **Sage** (`{colors.tint-sage}` — #b3bd95): Latitude Notebooks ribbon body
- **Salmon** (`{colors.tint-salmon}` — #d77a7a): "OPTIPLEX DESKTOP SYSTEMS" eyebrow + GX Series body
- **Peach** (`{colors.tint-peach}` — #e6915d): Dimension card body + OptiPlex Gs body
- **Lime** (`{colors.tint-lime}` — #c0d4a7): OptiPlex G Series body
- **Sky** (`{colors.tint-sky}` — #9ab6c8): Dellware ribbon body
- **Steel** (`{colors.tint-steel}` — #a5b8c0): Dimension XPS Pro ribbon body
- **Periwinkle** (`{colors.tint-periwinkle}` — #8c9ae0): PowerEdge ribbon body

The tints are saturated but not vivid — they sit just below true neutral chroma, the signature of GIF-era web-safe-palette quantization.

## Typography

### Font Family

Three system-stack families, no webfonts (webfonts didn't exist yet):

- **Arial Black** (fallback: Helvetica, system-ui sans) — display headings only. The chunky stenciled section eyebrows ("DIMENSION DESKTOPS", "OPTIPLEX DESKTOP SYSTEMS") are Arial Black at weight 900, set in all-caps with normal tracking.
- **Helvetica** (fallback: Arial, system-ui sans) — product-row titles, button labels, the top banner's "BUILD YOUR OWN COMPUTER. ONLINE." headline. Always bold (700), always all-caps.
- **Times New Roman** (fallback: Times, serif) — body copy. Every paragraph, every caption, every inline anchor sits in default-rendered Times Roman. The serifs date the design instantly — body text on the modern web is almost never serif.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display}` | 36px | 900 | 1.0 | Section eyebrow titles ("DIMENSION DESKTOPS", "OPTIPLEX DESKTOP SYSTEMS") |
| `{typography.heading-1}` | 24px | 900 | 1.05 | Sub-page hero headlines |
| `{typography.heading-2}` | 16px | 700 | 1.2 | Top banner copy, product-line H1 |
| `{typography.heading-3}` | 14px | 700 | 1.2 | Ribbon-card title bar ("OPTIPLEX GX PRO", "DIMENSION XPS") |
| `{typography.body}` | 14px | 400 | 1.4 | Default paragraph copy, ribbon-card body, CTA-panel copy |
| `{typography.body-sm}` | 12px | 400 | 1.4 | "This site is best viewed with browser versions 3.0 and higher." |
| `{typography.caption}` | 11px | 400 | 1.35 | Footer copyright text |
| `{typography.button}` | 12px | 700 | 1.0 | Button labels, "NEW!" sticker, BUY-a-DELL sticker |
| `{typography.ui-label}` | 12px | 700 | 1.0 | Icon-label nav uppercase labels ("FIND", "HOME", "ONLINE STORE") |

### Principles
- Sans for UI, serif for body — the inverse of the modern convention, and a dead giveaway of mid-90s typography.
- Display weights are extreme (900 / Black) and never softer. The "Dimension" / "OptiPlex" eyebrow blocks lean on the heaviest weight the font ships.
- No letter-spacing tracking adjustments — pixel-fonts in 1996 didn't reward it. Everything is set at the browser's default kern.
- Line-height is tight on display (1.0) and conventional on body (1.4) — a holdover from print-magazine catalog layout.

### Note on Fonts (this repo)
Arial Black / Helvetica / Times New Roman are OS defaults and need no bundling — but they carry **no Korean glyphs**, and Korean text silently falling to a system sans destroys the serif-body signature. Always chain Korean-capable faces:
- **Body (serif)**: `'Times New Roman', Times, 'NotoSerifKR', serif` — the repo bundles **NotoSerifKR** (400/600/700, auto-injected via `/shared/fonts.css`; the family name is the literal folder name `NotoSerifKR`). Korean body copy in a serif is what keeps the 1996 catalog voice.
- **Display / UI (sans)**: `'Arial Black', 'Helvetica Neue', Arial, 'Pretendard', sans-serif` — Korean display text falls to Pretendard at weight 900, which reads close enough to Arial Black's slab weight.

## Layout

### Spacing System

- **Base unit**: 4 px (with 2 / 6 / 10 intermediates). 1996 page layout was driven by HTML table cell padding (`cellpadding="4"` / `cellspacing="0"`) rather than a designed scale.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.s}` 6px · `{spacing.sm}` 8px · `{spacing.m}` 10px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.section-sm}` 32px · `{spacing.section}` 40px · `{spacing.section-lg}` 48px.
- **Card interior padding**: `{spacing.md}` 12 px vertical / `{spacing.lg}` 16 px horizontal on ribbon-card bodies.
- **Section vertical rhythm**: `{spacing.section}` 40 px between product-ribbon stacks; `{spacing.section-sm}` 32 px between the eyebrow color block and its first ribbon-card.

### Grid & Container
- Fixed-width table layout pinned around 760 px wide — the de facto 1996 standard targeting 800×600 monitors with a small scrollbar gutter.
- Two-column outer structure: left rail (~28 %) carries the homepage icon-link grid + CTA red panel; right column (~72 %) carries the product ribbon stack.
- No grid system in the modern sense — every section is its own `<table>` declaration with hard-coded column widths.

### Whitespace Philosophy
Tight by modern standards. Catalog density wins over editorial breath — every pixel inside the black frame is doing work (illustration, color block, headline, body). The compensating decompression happens *inside* each ribbon card: white title bar + tinted body block + product photo notch creates internal breathing room without enlarging the overall page.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flush | No shadow, no border | Body text, copyright row, footer band background |
| 1 — Hairline | `1px solid {colors.frame-ink}` | Ribbon-card outer edge, table-cell dividers |
| 2 — Frame | `8px solid {colors.frame-ink}` | The page-frame border around the entire viewport |
| 3 — Bevel | Hard-edge 1 px highlight + 1 px shadow on GIF stickers and product photos | "BUY a DELL" yellow sticker, NEW! bursts, award seals, product photographs |

There are **no soft shadows** in the 1996 design — every depth cue is either a hard 1 px border or a hand-painted bevel inside a GIF. Modern reproductions that need to feel period-accurate must resist the urge to add Material-style elevation or atmospheric drop shadows. Recreate the GIF bevel crisply with a hard offset (`box-shadow: 2px 2px 0 #000` / `filter: drop-shadow(2px 2px 0 #000)`), never a blurred one.

### Decorative Depth
Bevels and frames carry the entire depth vocabulary:
- The **page frame** is the strongest depth cue — it tells the viewer "this is a contained document, not a continuous canvas."
- **Bevels on stickers** (BUY a DELL, NEW!, PC Magazine Readers' Choice) push them forward off the page surface as if pinned on with thumbtacks.
- **Product photographs** carry their own hand-painted bevel + drop-shadow, baked into the GIF itself.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Universal default — buttons, cards, inputs, banners, page frame, ribbon-card bodies, eyebrow blocks |
| `{rounded.full}` | 9999px | Circular award seals (PC Magazine Readers' Choice), the round "h" sticker on the HOME icon |

The 1996 design has effectively **two** radius modes: square (everything) and round (decorative seal stickers). No 4 / 8 / 12 px subtle radius tier — that vocabulary belongs to the post-Bootstrap web.

### Photography Geometry
Product photos are rectangular GIFs with their own internal beveled "monitor" framing — they sit at native pixel dimensions, never scaled. Aspect ratios cluster around 4:3 (the era's standard CRT shape). No `border-radius`, no `clip-path` — a photo is always a hard rectangle.

## Components

> **No hover states documented.** Every component below documents Default state only.

### Frame & Banner

**`page-frame`** — the literal black border around the entire viewport.
- Background `{colors.frame-ink}`, padding `{spacing.sm}` 8 px on every side, no radius.
- The page sits *inside* this border. Treat it as a non-negotiable container chrome.

**`top-banner`** — pure-black strip running across the top with white Helvetica Bold headline, the yellow "BUY a DELL" sticker pinned at right, and the red "1-800-213-DELL" phone number.
- Background `{colors.frame-ink}`, text `{colors.canvas}`, type `{typography.heading-2}`, padding 12 px vertical / 16 px horizontal, no radius.

### Section Eyebrow Blocks

**`section-eyebrow`** — large tinted color block holding the chunky stenciled section title ("DIMENSION DESKTOPS") in `{typography.display}` (Arial Black 36 / 900), text `{colors.ink}`, padding 24 × 16, no radius. Fill comes from the section's assigned tint (e.g. `{colors.tint-olive}`, `{colors.tint-salmon}`).

### Ribbon Cards

The brand's signature component. Each product-row "card" is a stack of three pieces:
1. **`ribbon-card-title`** — white horizontal title bar with the product variant name in Helvetica Bold all-caps (e.g. "OPTIPLEX GX PRO"). 1 px bottom border in `{colors.frame-ink}`.
   - Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-3}`, padding 6 × 12, no radius.
2. **`ribbon-card-body-<tint>`** — color-block body in one of eight tints, holding the short marketing pitch in `{typography.body}` (Times Roman 14). Padding 12 × 16. The product photograph notches into the right edge.
3. **Photo notch** — the photo sits in the rightmost ~25 % of the row, hanging slightly above and below the body bar like a card pinned to a corkboard.

Tint variants (identical chrome — 1 px solid `{colors.frame-ink}` border, 12 × 16 padding, sharp corners, Times Roman body — only the fill changes):
- **`ribbon-card-body-sage`** — `{colors.tint-sage}` fill
- **`ribbon-card-body-salmon`** — `{colors.tint-salmon}` fill
- **`ribbon-card-body-peach`** — `{colors.tint-peach}` fill
- **`ribbon-card-body-lime`** — `{colors.tint-lime}` fill
- **`ribbon-card-body-sky`** — `{colors.tint-sky}` fill
- **`ribbon-card-body-steel`** — `{colors.tint-steel}` fill
- **`ribbon-card-body-periwinkle`** — `{colors.tint-periwinkle}` fill

### Call-to-Action

**`cta-block-red`** — the vivid Dell-red panel.
- Background `{colors.primary}`, text `{colors.on-primary}` (white), 1 px solid frame-ink border, type `{typography.body}` (Times Roman 14), padding 16 px, no radius.
- One per page maximum. The brand's most aggressive attention-grab.

**`phone-callout`** — top-right red text on the black banner ("1-800-213-DELL").
- Background `{colors.frame-ink}`, text `{colors.primary}`, type `{typography.heading-2}` Helvetica Bold 16, padding 4 × 8, no radius. Pinned to the right of the top banner on every page.

### Stickers (GIF-style overlays)

**`buy-a-dell-sticker`** — yellow rectangular sticker with black Helvetica Bold text and a small `{colors.purple-stripe}` accent stripe. 1 px black border, hard 2 px offset shadow, no radius.

**`new-burst-sticker`** — angled yellow burst with "NEW!" in Helvetica Bold black, overlapping the right side of new content rows. Slight rotation (~15°) gives it the pinned-on-with-tape feel.
- Background `{colors.yellow-sticker}`, text `{colors.ink}`, type `{typography.button}`, no radius (rotation applied separately).

**`cert-seal`** — round red award seal with a ringed caption and inner white field.
- Background `{colors.primary}`, text `{colors.canvas}`, type `{typography.button}`, rounded `{rounded.full}`, ~64 px size.

### Navigation

**`icon-label-nav`** — bottom navigation row: small icons connected by a thin green horizontal rule, each with an uppercase Helvetica label beneath.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`, padding 8 px around each icon-label pair, no radius.

### Inputs & Buttons

**`text-input`** — white fill, 1 px solid black border, Times Roman 14 inside, padding 4 × 6, no radius.

**`button-primary`** — black filled button with white Helvetica Bold uppercase label. 1 px solid frame-ink, padding 6 × 16, no radius.

**`button-secondary`** — white filled outlined button. Same chrome with inverted colours.

**`button-text-link`** — bare underlined anchor in classic-Mosaic blue `{colors.link}` #0000ee, Times Roman, underline on default.

### Footer

**`footer-band`** — icon-label nav row, classic-blue Copyright link, small print in Times Roman.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px top border in frame-ink, type `{typography.body-sm}`, padding 16 px.

## Slide Deck Adaptation (this repo)

This guide describes a fixed 760px *web page*; our decks are fixed-canvas **1280×720 slides** — treat every slide as one page of the 1996 catalog. Deck-wide rules (draft fidelity, `---` slide boundaries, `@claude` directives, `※` footnotes) come from `.claude/deck-build-core.md`; this section maps the catalog chrome onto slide chrome.

- **Every slide wears the `page-frame`**: an ~8px solid black border around the full 1280×720 canvas, white paper inside. This is the theme's non-negotiable signature.
- **Slide header** = the `top-banner`: a black strip under the frame's top edge carrying the slide title in white Helvetica Bold all-caps-energy (Korean titles stay as written), with a **red section number** pinned to the right in the `phone-callout` voice — that red number chip and the cover's CTA panel are the only red on any slide.
- **Cover slide** = catalog front page: a `section-eyebrow` tinted block with the deck title in the `{typography.display}` register (scale up to ~44-54px for 1280×720; Korean falls to Pretendard 900), one `cta-block-red` panel carrying the presenter/affiliation lines in serif, a `buy-a-dell-sticker`-style yellow date tab, and optionally a `cert-seal`. The red CTA panel appears on the cover only — never on content slides.
- **Content groups (`▣` blocks)** = ribbon cards: white Helvetica-bold title bar (the `▣` label verbatim) with a 1px black underline, then a tinted body block holding the bullets in serif. **Assign one tint per numbered section** and keep it for all of that section's slides (e.g. 1 배경 sage → 2 실험 salmon → 3 실험 결론 lime → 4 워크플로우 sky → 5 개인 맞춤형 steel → 6 결론 peach → 7 활용 예시 periwinkle → 8 Appendix olive) — the catalog "one color per product line" rule.
- **Figures** = beveled catalog photos: hard rectangles on white with a 1px black border and a hard 2-3px offset black shadow (no blur, no radius). Multiple figures share a tight row. A figure may "notch" — hang slightly past its ribbon body's edge — for the pinned-on-corkboard feel.
- **Footnotes (`※`)** = the footer small print: Times/serif ~11-12px above a thin black hairline, pinned to the slide's bottom edge. Quiet, black ink (the palette has no muted gray — smallness does the muting).
- **Stickers are seasoning**: an angled yellow NEW!-style burst may flag genuinely new content, sparingly. Links render as classic underlined `{colors.link}` blue.
- **Scale up type for projection**: keep the ratios but let display run 40-54px, ribbon titles ~16-18px, serif body ~15-17px, small print ~11-12px.
- No gradients, no soft shadows, no rounded corners anywhere — square everything except a round seal.

## Do's and Don'ts

### Do
- Keep the literal `{components.page-frame}` black border on every page — this is the brand's single most identifiable container chrome.
- Reserve `{colors.primary}` (Dell red) for the `{components.cta-block-red}` panel and the `{components.phone-callout}` only. Every other use dilutes the urgency signal.
- Use the eight ribbon-card tint colors (`{colors.tint-olive}` / sage / salmon / peach / lime / sky / steel / periwinkle) as a *family* — pick one per product line and stay with it across the line's marketing surfaces.
- Set every display headline in `{typography.display}` (Arial Black 36 / weight 900). The brand's typographic register depends on extreme weight against flat color.
- Keep body copy in `{typography.body}` Times Roman 14 — substituting a modern sans loses the catalog feel entirely.
- Render every CTA / button at `{rounded.none}` (0 px). Modern soft-radius buttons betray the era.
- Use hand-painted bevels / hard-edge shadows on stickers and product photos. Never substitute a soft CSS shadow.

### Don't
- Don't introduce a chromatic accent outside the eight catalog tints + Dell red + Dell yellow + classic link blue. The palette is closed by design.
- Don't soften any corner. `{rounded.none}` is the universal modifier; only award seals get `{rounded.full}`.
- Don't replace Times Roman body with Arial / Helvetica / Inter / a webfont sans — the serif body is the era's signature (Korean body stays in the bundled serif, NotoSerifKR).
- Don't add soft drop-shadows or atmospheric gradients. The brand has hard borders and flat fills; everything else reads as anachronism.
- Don't crop or "tuck" photos with `border-radius` or `clip-path`. The notch into the ribbon-card right edge is the framing — the photo itself stays a hard rectangle.
- Don't pair two `{components.cta-block-red}` panels on the same page. The red fill is meant to be the singular attention pole.
- Don't strip the red top-right callout from the header — in 1996 the phone number WAS the navigation; here its slot carries the section number.
