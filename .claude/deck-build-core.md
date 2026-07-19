# Deck build core (shared by every `/make-*` deck skill)

The shared workflow for turning a `DRAFT.md` into a finished deck
(`index.html` + `meta.json`), then deploying it. **This file is not a skill** -
it is the single source of truth the per-theme skills all read, so the rules
below only ever have to be fixed in one place.

The skill that sent you here pins three things; everything else is identical
across themes:

| Parameter | Meaning |
|---|---|
| `<THEME>` | the `theme` value written to `meta.json` (e.g. `minimal-navy`) |
| `<GUIDE>` | the design system to apply, `design-guide/design-<...>.md` |
| `<EVENT>` | the `event` value for `meta.json`, if the skill pins one |

Wherever this file says `<THEME>`, `<GUIDE>`, or `<EVENT>`, substitute what the
invoking skill specified. If it pinned nothing for `<EVENT>`, resolve it per
*Event resolution* below.

## Input resolution

- **`@<folder>`** (e.g. `@presentations/20260716-labmeeting`): the draft is
  `DRAFT.md` inside that folder. Write `index.html` and `meta.json` **into that
  folder**.
- **`@<file.md>`** (e.g. `@presentations/foo/DRAFT.md` or any `.md`): use that
  file as the draft. Write `index.html` and `meta.json` **into the file's own
  directory**.
- The presentation file is always named **`index.html`** (never `slide.html`,
  `deck.html`, etc.).

If no path is given, ask which folder/file to build - don't guess.

## Success criteria (verify each before deploying)

1. `index.html` exists next to the draft, with **exactly one slide per `---`
   break** in the draft (same count and order). Verify: slide count == number of
   `---`-delimited sections in the draft.
2. `meta.json` exists next to the draft with `title`, `date`, `event`, `theme`.
3. Every `![]()` image in the draft appears on its slide; **no** image the draft
   didn't reference appears anywhere.
4. `※` lines render per the placement rule below (grouped under an image when
   they immediately follow it; otherwise a bottom-edge footnote), never as inline
   body copy.
5. Every `<!-- @claude: ... -->` directive is obeyed and stripped (absent from
   `index.html`).
6. The deck renders without overlap/overflow (do a visual pass).
7. The deck is deployed and the Vercel build reports success.

## Build workflow

### 1. Read the draft and the design system
Read the draft and `<GUIDE>` (the full spec for `<THEME>`). The repo's
`CLAUDE.md` (발표 워크플로우 section) and `<GUIDE>` are the authority for layout,
typography, components, and figure handling. Follow them. The rules below restate
the parts that are load-bearing for every build so they aren't lost.

**Build directives (`<!-- @claude: ... -->`).** The draft may embed HTML-comment
instructions addressed to you, e.g.
`<!-- @claude: 이 그림 캡션 없이 오른쪽 60%에 크게 -->`. These are build-time
requests, not content:
- **Obey them, then strip them.** They must never appear in the rendered deck.
  They're HTML comments (invisible in a markdown/marp preview); keep them out of
  `index.html` too - don't turn them into visible text or a `※` footnote.
- **Write it anywhere** - any slide, any line. Position never restricts where a
  directive is allowed; it only tells you *what the directive is about*: a
  directive sitting inside a `---` section applies to that slide; one placed
  immediately under a specific line (an image, a bullet) applies to that element;
  one placed before the first slide (by the marp frontmatter) applies to the
  whole deck.
- **When a directive conflicts with a design default, the directive wins** - it's
  the user's explicit instruction for this deck.
- Only comments carrying the `@claude:` keyword are directives. A plain HTML
  comment without it is an ordinary comment; ignore it and leave it out of the
  output as usual.

### 2. Content fidelity (do not paraphrase)
This is the point of these skills - the user wants their draft, built, not
rewritten.

- **Follow the draft's structure and flow exactly.** One `---` section = one
  slide. Never split, merge, reorder, add, or drop a slide, even if a design
  heuristic suggests "this is dense, split it." Final slide count must equal the
  draft's `---` count.
- **Do not alter any sentence, the table of contents, or any slide title.** Use
  the draft's wording verbatim. No summarizing, no re-heading, no "improving"
  phrasing, no translating.
- **Only place images the draft references with `![]()`.** A file sitting in
  `assets/` is *not* a reason to place it. If the draft doesn't reference it, it
  goes on no slide - no reused cover, no "illustrative" diagram, no decorative
  figure - even if that leaves an asset unused.

### 3. `※` annotation placement (conditional, theme-independent)
The draft marks author asides with a leading `※`. This rule applies **whatever
theme is in use** - including themes whose guide doesn't document an Annotation
component. Where each `※` goes depends on whether it is attached to an image,
read off the draft's markdown:

- **Grouped under a figure**: if a `![]()` image is *immediately* followed on the
  very next line by a `※` line (no blank line between), keep that `※` block
  directly beneath that image, tight to it - it is that image's own note.
- **Slide-bottom footnote (everything else)**: any other `※` line (a standalone
  aside, or one separated from its image by a blank line) collects into a
  footnote pinned to the **bottom edge of its slide**, preceded by a thin
  hairline rule (~1px, partial width - the text column or ~40-50% from the left)
  for the conventional footnote-separator look.

Both placements use the same type: about **11-12px**, line-height ~1.5, `※` glyph
kept verbatim as the leading marker, **hanging indent** so wrapped lines align
under the text. No box, no border, no accent color - a `※` aside is the
*quietest* element on the slide. Gather a slide's bottom-footnote `※` lines into
one block; only slides with qualifying `※` lines get a footnote.

**Take the colors from `<GUIDE>`, not from another theme.** Use that theme's
muted/secondary text color for the `※` text and its hairline/divider color for
the footnote rule. If `<GUIDE>` documents an Annotation component, follow it; if
it doesn't, apply this rule using the theme's nearest muted-text and hairline
tokens.

### 4. meta.json
Write next to the draft:

```json
{
  "title": "<from the draft>",
  "date": "<YYYY-MM-DD>",
  "event": "<EVENT>",
  "theme": "<THEME>"
}
```

- **`title`**: the deck's title from the draft - its cover/first title line
  (marp frontmatter title or the first H1). Verbatim.
- **`date`**: parse the **leading 8 digits of the folder name** (`20260716-...`
  -> `2026-07-16`). If the folder name has no such prefix, use **today's date**.
- **`theme`**: always `<THEME>` - the invoking skill pins it.
- **`event`**: see below.

#### Event resolution
`event` groups decks on the site; it is **independent of the theme**. Resolve in
this order:
1. If the invoking skill pins `<EVENT>`, use it.
2. Else, if the folder name contains `labmeeting`, use `labmeeting`.
3. Else, if the deck is clearly coursework (a term project, a class
   presentation), use `class`.
4. Else ask the user once - don't invent a new event value. The values in use in
   this repo are `labmeeting` and `class`.

### 5. Visual pass (before deploy)
Render and eyeball the deck - don't deploy blind. Start the dev server on a port
other than 3000 (it's occupied): `npm run dev -- -p 3100`, then preview at
`http://localhost:3100/view/<slug>` (the site requires login; the same session
cookie used elsewhere applies). Screenshot a few slides - at minimum one with a
`※` footnote and one with an image - and confirm: correct slide count, images on
the right slides, footnote small/muted with its hairline, no overlap or
off-canvas content. Fix issues before deploying.

## Deploy

Deploying = committing the deck's source and pushing to `main`; Vercel builds
`public/decks` from `presentations/` automatically (`prebuild` runs
`gen-decks`). Only decks under `presentations/<slug>/` are served on the site and
shown on the home gallery. (If the draft lives outside `presentations/`, the
build still produces `index.html`, but skip the thumbnail + deploy steps and tell
the user the deck must live under `presentations/<slug>/` to be published.)

1. **Thumbnail** (home-gallery card): the home page needs
   `public/thumbs/<slug>.webp` or the card is blank. Generate it with the dev
   server running on 3100: `npm run gen-thumbs` (it logs in via `.env.local`,
   captures each deck's first slide). It captures *every* deck, so only stage the
   `.webp` for the deck you built - if it incidentally generates a thumbnail for
   an unrelated, unbuilt deck, don't commit that one.
2. **Commit the intended files only.** Stage exactly: `presentations/<slug>/`
   (DRAFT.md, index.html, meta.json, assets/) and `public/thumbs/<slug>.webp`.
   **Never** stage `.gitignore` or an untracked `CLAUDE.md` - the user keeps
   those pending on purpose. Follow the repo's normal commit convention.
3. **Push to `main`.** Vercel auto-deploys.
4. **Confirm the build.** Poll the deploy status and report the result to the
   user, e.g.:
   `gh api repos/<owner>/<repo>/commits/<SHA>/status --jq .state`
   Wait for `success` (or surface `failure` with the log URL). Don't claim it's
   deployed until the build is confirmed.

## Guardrails
- Credentials live only in `.env.local` (`SITE_ID`, `SITE_PASSWORD`); never print
  the password or copy it into code/commits.
- Dev server: never port 3000 (occupied) - use 3100.
- Report honestly: if the visual pass shows a problem or the Vercel build fails,
  say so with the evidence; don't paper over it.
