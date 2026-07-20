## Overview

BMW M's marketing surface is a near-pure black canvas (`{colors.canvas}` — #000) holding white BMW Type Next Latin headlines in **confident UPPERCASE**. The system has no decorative voltage of its own; brand energy comes from **full-bleed automotive photography** — cars cornering at speed, carbon-fiber wheel detail, driver cockpit shots, motorsport pit lanes — placed as edge-to-edge content that fills entire bands. UI chrome around the photography stays minimal: thin sans-serif copy, dividers as 1px hairlines (`{colors.hairline}`), all-caps button labels with no fill until pressed.

The **M tricolor stripe** — `{colors.m-blue-light}` (#0066b1) → `{colors.m-blue-dark}` (#1c69d4) → `{colors.m-red}` (#e22718) — appears sparingly as the brand's signature accent, used on the M wordmark, motorsport chrome, vehicle-tech callouts, and model badges. It is never a CTA color and never used as a background fill — the tricolor is exclusively a brand-identity marker.

Type voice runs **BMW Type Next Latin** in two cuts: regular for display + nav labels and Light for body + secondary copy. Display sizes use weight 700 (BMW's signature heavy-but-tight setting), while body type drops to weight 300 (Light). The contrast between heavy display and light body is the system's editorial signature.

**Key Characteristics:**
- Near-pure black canvas (`{colors.canvas}` — #000) with white type. The system inverts almost nothing — there is no light-mode marketing surface.
- Display headlines in UPPERCASE BMW Type Next Latin at weight 700. Sub-heads stay sentence-case at lighter weight.
- M tricolor (`{colors.m-blue-light}` / `{colors.m-blue-dark}` / `{colors.m-red}`) used as 4px brand-stripe dividers, M-wordmark accents, and motorsport chrome — never as buttons or fills.
- Photography fills entire bands edge-to-edge. Cars are always the visual subject; UI chrome backs off to small white labels overlaid on photography.
- Buttons are flat with `{rounded.none}` (0px) corners and uppercase letterspaced labels. The "industrial precision" rectangular silhouette IS the brand.
- Border radius is mostly zero across the system. The few exceptions: `{rounded.full}` on circular icon buttons (carousel arrows, chatbot launcher) and `{rounded.sm}` on a handful of small toggle pills.
- Spacing is generous and grid-aligned: `{spacing.section}` (96px) between major bands; `{spacing.xxl}` (64px) inside hero photo bands; `{spacing.xl}` (40px) inside content cards.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #ffffff): The system's primary type and CTA color. Used for h1/h2/h3 display, body text on dark, and primary button labels (the buttons themselves are transparent or canvas-colored — the white text + outline IS the button).
- **M Blue Light** (`{colors.m-blue-light}` — #0066b1): The first stop in the M tricolor stripe. Used on M-badge accents and motorsport chrome.
- **M Blue Dark** (`{colors.m-blue-dark}` — #1c69d4): The middle stop. The same hex as the heritage corporate blue, repurposed as the middle band of the M stripe.
- **BMW Blue** (`{colors.bmw-blue}` — #1c69d4): BMW's heritage corporate blue (identical value, kept as its own token for wordmark chrome).
- **M Red** (`{colors.m-red}` — #e22718): The third stop. The signature M-power red, used in the stripe and on motorsport-pace callouts.
- **Electric Blue** (`{colors.electric-blue}` — #0653b6): A separate electric-vehicle accent used on M xDrive electric model pages. Distinct from the heritage blue — feels colder, more digital.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The default page floor across every marketing surface. True black.
- **Surface Soft** (`{colors.surface-soft}` — #0d0d0d): A barely-different-from-black used for spec table cells and footer-adjacent strips.
- **Surface Card** (`{colors.surface-card}` — #1a1a1a): Cards, secondary buttons, icon-button backgrounds.
- **Surface Elevated** (`{colors.surface-elevated}` — #262626): One step lighter, used for nested cards inside dark bands.
- **Carbon Gray** (`{colors.carbon-gray}` — #2b2b2b): Carbon-fiber-inspired surface tone used on technical-spec cards.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #3c3c3c): The 1px divider tone on dark surfaces. Used between body sections, between table rows, around card outlines.
- **Hairline Strong** (`{colors.hairline-strong}` — #262626): Same hex as `{colors.surface-elevated}` — borders feel like one-step elevations rather than ink lines.

### Text
- **Ink / On Dark** (`{colors.on-dark}` — #ffffff): All headline and primary text on dark canvas.
- **Body** (`{colors.body}` — #bbbbbb): Default running-text color (slightly cooler than pure white). Used for body paragraphs and secondary metadata.
- **Body Strong** (`{colors.body-strong}` — #e6e6e6): Emphasized body / lead paragraph.
- **Muted** (`{colors.muted}` — #7e7e7e): Footer links, breadcrumbs, captions.

### Semantic
- **Warning** (`{colors.warning}` — #f4b400): Used very sparingly on technical-warning callouts.
- **Success** (`{colors.success}` — #0fa336): Order-confirmation states (rare on marketing surfaces).

## Typography

### Font Family
**BMW Type Next Latin** is BMW's licensed display + body typeface. The system uses two cuts: regular and Light. The split is a deliberate weight-pair:
- Display (700) for headlines, navigation labels, button text, and category labels — the "stamped" voice
- Light (300) for body paragraphs, descriptive copy, and secondary metadata — the "engineered" voice

The contrast between heavy display and light body is BMW's editorial signature — never blur it by using regular (400) display or medium (500) body.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 700 | 1.0 | 0 | Hero h1 ("THE ULTIMATE", "MORE BMW M.") |
| `{typography.display-lg}` | 56px | 700 | 1.05 | 0 | Section heads ("MORE FROM BMW M MAGAZINE.") |
| `{typography.display-md}` | 40px | 700 | 1.1 | 0 | Sub-section heads, model names |
| `{typography.display-sm}` | 32px | 700 | 1.15 | 0 | CTA-band heads, category page titles |
| `{typography.title-lg}` | 24px | 700 | 1.3 | 0 | Card titles in 3-up grids |
| `{typography.title-md}` | 20px | 400 | 1.4 | 0 | Card sub-titles, lead paragraphs |
| `{typography.title-sm}` | 18px | 400 | 1.4 | 0 | Spec callouts, intro paragraphs |
| `{typography.label-uppercase}` | 14px | 700 | 1.3 | 1.5px | Category tabs, "VIEW MORE" inline labels |
| `{typography.body-md}` | 16px | 300 (Light) | 1.5 | 0 | Default body |
| `{typography.body-sm}` | 14px | 300 (Light) | 1.5 | 0 | Footer body, fine print |
| `{typography.caption}` | 12px | 400 | 1.4 | 0.5px | Photo captions, image-credit lines |
| `{typography.button}` | 14px | 700 | 1.0 | 1.5px | All button labels — uppercase, letterspaced |
| `{typography.nav-link}` | 14px | 400 | 1.4 | 0.5px | Top-nav menu items |

### Principles
The system contrasts heavy headlines (700) against very light body (300) at all times — the gap is the editorial signature. Letter-spacing is non-trivial: button labels and category labels carry 1.5px tracking that makes them feel "machined" rather than "typed." Display headlines stay at 0 letter-spacing — the type's natural cap-height handles spacing on large sizes.

UPPERCASE display is the default voice for h1/h2 — sentence case appears on body and intro paragraphs but rarely on headlines. The all-caps treatment is a brand-voice signal, not a stylistic choice.

### Note on Fonts (this repo)
BMW Type Next Latin is not licensed here; the guide's own recommended substitute is **Inter** at 700/300, which the repo bundles (auto-injected via `/shared/fonts.css`). Set display headline tracking to about -0.5px to match BMW Type's tighter large-size spacing. Korean text must not fall to a random default: chain **Pretendard** behind Inter — `'Inter', 'Pretendard', 'Apple SD Gothic Neo', sans-serif` — so Korean display renders in Pretendard 700-800 and Korean body in Pretendard 300. Uppercase transforms don't affect Korean; the weight contrast (700 vs 300) carries the voice instead.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 96px.
- **Section padding (vertical):** `{spacing.section}` (96px) between major editorial bands.
- **Hero photo bands:** `{spacing.xxl}` (64px) internal vertical padding around the hero h1 + sub-headline pair.
- **Card internal padding:** `{spacing.lg}` (24px) for content and model cards; `{spacing.xl}` (40px) for spec-cell tables.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids.

### Whitespace Philosophy
BMW M trusts photography to do the visual work. Whitespace around photography is restrained — the cars fill the frame, and copy sits below or beside them in tightly-aligned columns. Where whitespace appears (between body sections, around CTAs), it's always uniform. The system never adds atmospheric backdrops, gradients, or decoration — empty space stays as empty black canvas.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, footer, photo bands |
| Soft hairline | 1px `{colors.hairline}` border | Section dividers, card outlines, table rows |
| Card surface | `{colors.surface-card}` background over canvas — no shadow | Feature photo cards, magazine cards |
| Photographic depth | Full-bleed photography with edge-to-edge crop | Hero bands, motorsport features — depth via subject matter, not chrome |

The system uses no drop shadows and no layered chrome. Depth comes entirely from photography and the contrast between black canvas and slightly-elevated `{colors.surface-card}`.

### Decorative Depth
- **M Stripe Divider** (`{component.m-stripe-divider}`): A 4px-tall horizontal divider carrying the M tricolor (`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`). Used on motorsport chrome, model-detail headers, and brand-identity moments. The stripe is the system's only true "decorative" element — used sparingly to mark significance.
- **Carbon-fiber surfaces**: `{colors.carbon-gray}` (#2b2b2b) cells for technical-spec treatments — a single-page treatment, not a system-wide pattern.
- **Photographic depth**: Full-bleed cars are the depth. Lighting in the photography does the elevation work that drop shadows would do elsewhere.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All buttons, cards, photo containers, spec cells, inputs — the dominant radius |
| `{rounded.xs}` | 2px | Almost no use — reserved for legal CTAs |
| `{rounded.sm}` | 4px | Small toggle pills on configurator surfaces |
| `{rounded.full}` | 9999px / 50% | Circular icon buttons, carousel arrows |

The radius hierarchy is "almost always 0, sometimes circular." Sharp rectangles read as engineered precision; circles read as functional controls. Nothing in between.

### Photography Geometry
Hero photography fills full-width with no rounding. Photo cards inside grids retain `{rounded.none}` corners, edge-to-edge images. Cinema-aspect (16:9 / 21:9) crops for wide shots; 4:5 portrait crops for people. Always sharp corners.

## Components

### Buttons

**`button-primary`** — Background `{colors.canvas}` (or transparent over photography), text `{colors.on-dark}` (white), 1px white border outline, rounded `{rounded.none}`, padding 16px × 32px, height 48px. Type `{typography.button}` — uppercase 14px / 700 / 1.5px tracking. The rectangular silhouette and uppercase letterspaced label IS the brand button.

**`button-primary-outline`** — Same shape with transparent background and white outline only. Used over photography.

**`button-icon`** / **`carousel-arrow`** — Circular icon buttons. 48 × 48px, background `{colors.surface-card}`, white glyph centered, rounded `{rounded.full}`. The only non-rectangular shape in the system.

**`text-link`** — Inline uppercase letterspaced links ("VIEW ALL MODELS", "READ MORE"). `{typography.label-uppercase}`, white on dark, no underline, with a chevron → glyph beside the label.

### Cards & Containers

**`hero-photo-band`** — Full-width black band with full-bleed automotive photography. The h1 uses `{typography.display-xl}` and sits left-aligned over the photo, with a small subtitle in `{typography.body-md}` below. No card frame — the photo IS the band.

**`feature-photo-card`** — 3-up grid card. Background `{colors.surface-card}`, rounded `{rounded.none}`, padding `{spacing.lg}`. Top: 16:9 photo full-bleed within the card; below: category tag in `{typography.label-uppercase}`, `{typography.title-lg}` title, short body description.

**`model-card`** — Photo on plain black (no card surface), rounded `{rounded.none}`. Model name in `{typography.display-md}`, short specs line in `{typography.body-sm}`, a `{component.text-link}`.

**`spec-cell`** — Technical specification cell. Background `{colors.surface-soft}` (#0d0d0d), rounded `{rounded.none}`, padding `{spacing.lg}`. A value in `{typography.display-sm}` at top and a label in `{typography.label-uppercase}` below.

**`motorsport-photo-card`** — Edge-to-edge photo with a small white overlay caption bottom-left. The photography IS the brand.

**`category-tab`** + **`category-tab-active`** — Text-only uppercase labels; active state turns `{colors.body}` → `{colors.on-dark}` and adds a 2px white underline. No background fill, no rounding.

### Inputs

**`text-input`** — Background `{colors.surface-card}`, text `{colors.on-dark}`, rounded `{rounded.none}`, padding 12px × 16px, height 48px, 1px hairline border; focus thickens the border to white.

### Signature Components

**`m-stripe-divider`** — The 4px horizontal stripe carrying the M tricolor (`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`). Used as a divider on motorsport chrome, between brand-identity sections. The most distinctive non-typographic element in the system.

**`cta-band-photo`** — Pre-footer CTA band with full-bleed photography, centered `{typography.display-md}` headline, `{component.button-primary-outline}` below.

**`footer`** — Black footer, text `{colors.body}`, caption-tier disclaimer in `{typography.caption}`. Never inverts.

## Slide Deck Adaptation (this repo)

This guide describes a *marketing site*; our decks are fixed-canvas **1280×720 slides**. Deck-wide rules (draft fidelity, `---` slide boundaries, `@claude` directives, `※` footnotes) come from `.claude/deck-build-core.md`; this section maps the M chrome onto slide chrome.

- **Every slide floor is true black** (`{colors.canvas}`). No gradients, no backdrop washes — empty space stays black.
- **Slide header**: the slide title in the display voice — white, weight 700-800 (Korean falls to Pretendard), ~24-28px, with a small **`m-stripe-divider` chip** (~36×4px) sitting above it as the brand mark, and a right-aligned muted `{typography.label-uppercase}` section tag (e.g. "SECTION 02"). A 1px `{colors.hairline}` rule closes the header band.
- **Cover slide**: an uppercase-energy hero — muted tracked eyebrow ("LAB MEETING"), a full-width 4px `m-stripe-divider`, the deck title huge in the display register (~52-64px, weight 800), then date and presenter/affiliation in Light `{colors.body}`. If the draft supplies a cover image via `![]()` it becomes a full-bleed hero photograph under the type; otherwise stay flat black — never invent photography.
- **Content groups (`▣` blocks)**: the `▣` label as a white `{typography.label-uppercase}`-voiced heading (weight 700, tracked) over a 1px hairline, with body items beneath in **Light 300 `{colors.body}`** — the 700/300 contrast is the whole voice. Group blocks may sit on `{colors.surface-soft}` spec-cell panels with hairline borders when the slide needs separation; otherwise flat black with hairline rules between groups.
- **Figures**: hard-cornered rectangles with a 1px `{colors.hairline}` border on black — no shadows, no radius. Rows share equal heights with ~16px gutters. Let images run large; "bigger photography before bigger type."
- **Footnotes (`※`)**: `{colors.muted}` ~11-12px above a 1px hairline, pinned to the slide's bottom edge.
- **Interactive controls** (e.g. a parameter slider figure): white-on-black machined chrome — hairline track, white fill, a `{rounded.full}` white knob (the one sanctioned circle), uppercase tracked labels.
- **The tricolor is rationed**: the header chip, the cover stripe, and nothing else. Never behind text, never a fill, never on buttons.
- **Scale for projection**: display 40-64px, group labels ~15-16px, body ~15-16px (Light), captions/footnotes 11-12px. Keep 1.5px tracking on uppercase Latin labels; Korean text skips tracking and relies on weight.

## Do's and Don'ts

### Do
- Anchor pages with full-bleed photography where the content supplies it. The cars are the brand voltage; chrome backs off.
- Use UPPERCASE display headlines (Latin); let Korean display carry the voice through weight instead.
- Pair heavy display (700) with light body (300). The weight contrast is the editorial signature.
- Reserve the M tricolor stripe for brand-identity moments — wordmark accents, header chips, motorsport chrome. Never as a button fill or surface.
- Use `{rounded.none}` (0px) by default. Reserve `{rounded.full}` for circular icon controls only.
- Letter-space all-caps Latin labels at 1.5px. The "machined" feel is non-negotiable.

### Don't
- Don't introduce a brand color outside the M tricolor and the heritage `{colors.bmw-blue}`.
- Don't bold body type. Body stays at 300 (Light) — bumping to 400 or 500 makes the page feel marketing-bombastic instead of European-engineered.
- Don't use rounded buttons or rounded cards. The rectangular silhouette IS the brand.
- Don't put gradient backdrops behind hero type. The page floor stays pure black.
- Don't use the M stripe as a button fill or background. The stripe is a divider / accent — never an action surface.
- Don't track uppercase button labels under 1.5px — the spacing is what makes them feel "machined."
- Don't add drop shadows anywhere; depth is hairlines, surface steps, and photography.
