---
name: Mehedi Hasan Portfolio
description: Personal correspondence in pale sage and deep green.
colors:
  background: "#e7ece4"
  foreground: "#243a34"
  surface: "#f1f3ed"
  muted: "#d9e1d5"
  muted-foreground: "#53675e"
  accent: "#264f40"
  accent-foreground: "#f1f3ed"
  border: "#bac9bc"
  focus: "#2f5e3d"
  scroll-thumb: "#829887"
  dark-background: "#1d302b"
  dark-foreground: "#e7ece2"
  dark-surface: "#263d35"
  dark-muted: "#304b40"
  dark-muted-foreground: "#b8c8ba"
  dark-accent: "#e0ebaa"
  dark-border: "#466054"
  dark-focus: "#c8deaa"
  dark-scroll-thumb: "#6c8877"
typography:
  display:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 6.7vw, 6rem)"
    fontWeight: 480
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(22px, 2.1vw, 28px)"
    fontWeight: 480
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 550
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  introduction:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(19px, 1.75vw, 24px)"
    lineHeight: 1.6
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.75
  label:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 450
  project-tab:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.8vw, 23px)"
    fontWeight: 500
    letterSpacing: "-0.025em"
  metadata:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    lineHeight: 1.7
  page-title:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.1vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  section-title:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(25px, 2.8vw, 34px)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  prose:
    fontFamily: "Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    lineHeight: 1.85
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "14px"
    lineHeight: 1.8
rounded:
  portrait: "4px"
  control: "50%"
  small: "4px"
  field: "6px"
  code: "8px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "32": "32px"
  "48": "48px"
  "56": "56px"
  "64": "64px"
components:
  work-link:
    textColor: "{colors.foreground}"
  about-link:
    textColor: "{colors.muted-foreground}"
  about-link-hover:
    textColor: "{colors.foreground}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "0"
    height: "44px"
    width: "44px"
  theme-toggle-hover:
    backgroundColor: "{colors.muted}"
  navigation:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
  project-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.project-tab}"
    padding: "0 0 12px"
  project-tab-selected:
    textColor: "{colors.foreground}"
  project-note:
    textColor: "{colors.foreground}"
    padding: "25px 0 8px"
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.field}"
    padding: "10px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "10px 18px"
  button-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "12px 50px 12px 16px"
  category-select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
  filter-tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.small}"
    padding: "8px 12px"
  filter-tag-hover:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
  filter-tag-selected:
    textColor: "{colors.foreground}"
  project-cover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.small}"
    padding: "clamp(20px, 4vw, 52px)"
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.code}"
    rounded: "{rounded.code}"
---

# Design System: Mehedi Hasan Portfolio

## Overview

**Creative North Star: "Personal correspondence"**

Pale sage stationery, deep green ink, Onest, and the owner's natural-color photograph give the portfolio a personal reading rhythm. Typography, open spacing, and understated text links carry that character through the homepage, project collection and case studies, blog collection and articles, About page, and shared navigation and footer. The dark theme changes the paper and ink roles while retaining the same vocabulary.

This is a **source-derived record of the complete route implementation**, pending the owner's build and rendered review. No approved comp, screenshot, visual ship verdict, or build success exists. Source formatting and a lockfile-only dependency resolution with lifecycle scripts disabled were code-editing steps in this pass; no application build, tests, lint, typecheck, detector, development server, browser, or runtime validation ran. Static review found heading-ID collisions and a missing empty-state `#work` target; targeted source rereads confirmed both corrections. Rendered evidence and owner approval remain pending.

Cinderella Couture is the only retained project, with a visibly marked draft narrative and an owner-supplied storefront screenshot. Other project entries and all sample blog articles were removed at the owner's request. The homepage writing section is hidden while the blog collection is empty; `/blog` retains an empty state without search, filters, or a reset action until articles exist. Some personal copy also remains marked for owner review. Replacement instructions belong in `CONTENT-REPLACEMENT.md`. The hero-specific first-viewport ambition remains in `.impeccable/surfaces/src-features-home-components-hero-section-tsx.md`, not a universal page requirement.

**Key Characteristics:**

- Sage and green semantic colors in both themes.
- Onest for interface and reading; JetBrains Mono for code.
- Flat paper surfaces, fine dividers, and restrained corner radii.
- Original owner-supplied photography with CSS-only presentation cropping.
- Native collection controls, an accessible project tab index, and open reading layouts.

Evidence: `src/app/tokens.css`, `globals.css`, and `fonts.ts`; shared layout, UI, and MDX components; home, projects, blog, and About features and their CSS modules. Frontmatter records active source roles and recurring literal spacing steps; those numeric steps are documentation, not a global spacing-variable API. `src/app/tokens.css` remains the color source of truth.

## Colors

The palette reads as green-tinted paper and ink. A single accent family supports selection and controls; no additional decorative color family is introduced.

### Primary

- **Green accent / pale citron accent** (`accent`, `dark-accent`): caret, text-selection background, and filled-button hover. Corresponding accent foreground supplies readable selection and button text.
- **Focus green / pale focus green** (`focus`, `dark-focus`): visible keyboard outline in the corresponding theme.

### Neutral

- **Sage paper / deep green paper** (`background`, `dark-background`): page and mobile-menu surfaces.
- **Raised paper / deep green surface** (`surface`, `dark-surface`): portrait backgrounds, search/select fields, project-cover fallbacks, code blocks, callouts, placeholder notices, and the homepage contact band. This is tonal separation without elevation.
- **Green ink / pale sage ink** (`foreground`, `dark-foreground`): headings, links, active controls, SVG strokes, and primary button fill.
- **Quiet green ink** (`muted-foreground`, `dark-muted-foreground`): supporting copy, metadata, captions, and inactive project/filter labels.
- **Soft green wash** (`muted`, `dark-muted`): hover fills and inline-code backing.
- **Fine sage divider** (`border`, `dark-border`): collection rows, section rules, fields, code/callout boundaries, and menu edge.
- **Scrollbar green** (`scroll-thumb`, `dark-scroll-thumb`): thin scrollbar against page paper.

Dark frontmatter keys record overrides of the same unprefixed CSS variables under `:root[data-theme="dark"]`; they are not additional source variables. Source surface foreground equals foreground in each theme. Dark accent foreground equals dark background; source selection uses the accent pair. Sidecar tonal ramps are display metadata, not shipped palette tokens.

### Named Rules

**The Semantic Ink Rule.** Read color from the current theme's semantic role. Supporting copy, selection, focus, icons, and browser surfaces belong to the same green palette.

## Typography

**Display Font:** Onest, with the source system sans-serif fallback stack.

**Body Font:** Onest, with the same fallback stack.

**Mono Font:** JetBrains Mono, with the source monospace fallback stack.

The variable sans-serif supports the personal statement and technical reading through modest weight changes, close display tracking, and sentence case. `next/font/google` registers both visible families with `display: swap`. Source Serif 4 remains registered but has no applied reading or display role.

### Hierarchy

- **Display** (`display`): the owner-selected homepage statement, “I engineer the space between data and intelligence.”, uses balanced wrapping without a fixed line break. At (720px) and below it becomes `clamp(2.55rem, 8.9vw, 4rem)`, line height (1.1), and tracking (-0.035em).
- **Page title** (`page-title`): collection, detail, About, missing-page, and error headings; maximum measure (20ch). Introductory page copy uses `clamp(18px, 1.8vw, 22px)`, line height (1.7), and a (62ch) maximum.
- **Section title** (`section-title`): shared section headings. The smaller `title` role remains specific to selected work, falling to (21px) at (720px).
- **Headline** (`headline`): selected-project note at (32ch) maximum. Project-card titles use (25px), weight (550); blog titles use `clamp(23px, 2.6vw, 31px)`, weight (500), at (34ch) maximum.
- **Introduction** (`introduction`): homepage author note; maximum note width (730px), description (48ch), and name weight (620). At (720px), copy becomes (18px) / (1.55).
- **Body** (`body`): project and post summaries, generally capped at (60–65ch). **Prose** (`prose`) is the article voice, capped at (72ch); at (600px), it becomes (17px) / (1.8). About reading uses (18px) / (1.8), capped at (70ch).
- **Label / metadata** (`label`, `metadata`): navigation, dates, reading time, technology lists, and quiet utility text. Display tags are plain (13px) text; filter labels are (14px) buttons.
- **Code** (`code`): fenced code with tab size (4); at (600px), it becomes (13px). Inline code uses the same family at (0.82em) over a muted wash.

### Named Rules

**The One Voice Rule.** Use Onest for interface and prose, with JetBrains Mono reserved for code. A registered serif family does not establish a second display voice.

## Layout

The shared shell uses a centered maximum width (1280px) and fluid side gutters (`clamp(20px, 5.5vw, 80px)`). Interior pages use fluid top padding (`clamp(40px, 5vw, 72px)`) and bottom padding (96px); at (720px), those become (36px 64px). Section rules and gaps, rather than boxed groups, establish reading rhythm.

The homepage retains its statement above a photographic author note, a desktop (224px) portrait column, and a fluid gap. The project tab row scrolls horizontally with focus-outline clearance. Its open note uses `minmax(0, 1.5fr) minmax(180px, 0.65fr)`, a gap (56px), and minimum height (210px). These are surface facts, not a template for every page.

Projects use a two-column semantic list/grid, with gaps (48px 32px), becoming one column at (680px). Each cover is (16 / 10). Blog entries are divider-led rows with a (200px) metadata column and gap (40px); at (650px), metadata wraps below the text. Search and category select share a flexible column plus (220px) column, stacking at (600px). Blog search is capped at (760px).

Detail pages pair a body track of at most (76ch) with a table-of-contents track of at least (180px); prose itself stops at (72ch). The TOC is sticky (32px from the top), scrollable within the viewport, and becomes a static pre-article section at (900px). Tables and code scroll inside their own width. About section labels sit beside reading copy with a gap (64px), stacking at (720px). Its intro portrait column is (260px); at (800px), it follows the text at (210px) wide.

The header falls from (108px) to (88px) minimum height at (720px), when its native mobile disclosure replaces desktop navigation. The hero portrait becomes (160px) at (720px), (112px) at (480px), and a standalone (128px) image in a single-column author block at (380px). Hero actions stack at (720px). The homepage contact band becomes one column at (680px). Footer groups wrap naturally. Viewport fit and the first-viewport composition await rendered review.

## Elevation & Depth

No box shadows are implemented. Page paper, surface tint, fine dividers, typography, and spacing separate content. The mobile disclosure uses stacking order and an opaque page-colored surface with a bottom divider. Code blocks and callouts use surface tint and borders rather than simulated lift.

### Named Rules

**The Flat Surface Rule.** Keep the implemented paper treatment flat; use the existing surface roles, rules, and spacing to separate content.

## Shapes

Both homepage and About use the owner-supplied transparent `public/images/profile/mehedi.png`, preserving its natural subject colors and alpha edges. CSS uses `object-fit: cover` and `object-position: center bottom` to keep the shirt aligned to the frame, (4px) portrait corners (`rounded.portrait`), and the theme's `surface` color behind the cutout. `next/image` declares the actual dimensions (1195 × 896), unoptimized. Preserve the supplied file. Homepage portrait ratios vary with viewport; About uses (1 / 1.1). The original `public/images/mehedi.jpeg` remains unmodified and serves as the default social-preview image. This portrait refinement is source-reviewed only; rendered approval remains pending.

Theme and mobile-menu controls are circles (`rounded.control`) in (44px) square targets. Covers, figures, filter buttons, and the search-clear control use restrained small corners (`rounded.small`); fields and filled/outline buttons use `rounded.field`; code containers use `rounded.code`. Inline code has (3px) corners. Cards have an open text area beneath their cover, with no enclosing panel. Dividers are (1px), and selected-project underlines are (2px). There are no gradients or decorative textures.

## Components

### Text actions and buttons

Hero, case-study, résumé, contact, and article-end links remain underlined text actions, generally with (44px) minimum targets. The hero work link uses a stronger underline and an authored arrow that shifts right (4px) over (180ms); its quieter About link changes from supporting ink to foreground on hover. Selected work links now open internal case studies using a right arrow.

The recovery button uses foreground fill, background text, a foreground border, padding (10px 18px), and (44px) minimum height. The empty-results reset uses its transparent secondary variant. Both hover to the accent pair; disabled buttons reduce opacity to (0.55) and use a not-allowed cursor. These buttons supplement the text-action pattern.

### Collection controls and states

Native search inputs and category selects use surface fill, a fine border, restrained corners, inherited Onest at (16px), and minimum height (52px). Search has a hidden explicit label, supporting-ink placeholder, and a trailing (44px) clear button when populated; Escape clears the query. Selects retain native options and behavior.

Topic filters are wrapping (44px) minimum-height buttons. Rest is transparent with quiet ink; hover adds muted wash and foreground ink; `aria-pressed="true"` adds a foreground border and foreground text. Display tags remain unenclosed text. Result counts use polite live status, active filtering exposes an underlined reset, and empty results show centered title/copy plus a secondary clear button. Search, select, and filter behavior is implemented in React; static sidecar samples do not reproduce it.

### Project covers and blog rows

Project cards are full-card links in a semantic list. Cinderella uses the supplied `public/images/projects/cinderella/image.png` (1905 × 967), contained without cropping inside the (16 / 10) cover. Entries without imagery retain the surface-colored title/category fallback labeled “Product imagery to add.” Below it are a title/right-arrow row, supporting summary, plain tags, and a draft notice when flagged. Hover underlines the title. Case-study headers add a ruled three-column definition list, collapsing at (680px), and a wrapping link row. The same screenshot appears as a full-width (2 / 1) contained preview above the homepage project note and as a natural-ratio figure in the case study. The homepage note also labels draft case studies.

Blog rows use title links, summary, plain tags, and separate date/reading-time metadata. Sample articles are labeled in both lists and detail headers. Placeholder notices are squared surface-colored asides with a fine border, emphasized title, and quieter (15px) explanatory text; they communicate editorial status without introducing an alert palette.

### Reading and MDX blocks

Articles and case studies share reading styles and a conditional TOC, shown for at least two headings, with nested third-level links. Links underline more strongly on hover. Blockquotes use a fine leading rule and quiet ink. Tables use collapsed borders, left-aligned cells, and focusable horizontal-scroll wrappers; the comparison block adds a caption and scoped headers.

Fenced code sits in a rounded, bordered surface with a small utility row. “Copy code” changes to “Copied” or “Copy unavailable,” announces politely, and returns to idle after (2500ms); code remains selectable in a focusable horizontal-scroll region. Clipboard behavior remains untested. Inline code uses muted backing.

The MDX map also supplies bordered callouts, responsive figures with quiet captions, wrapping architecture steps joined by authored arrows, comparison tables, and ruled demo sections with external text links. These follow the same paper/ink vocabulary. Cinderella's case study uses a figure for the supplied storefront screenshot; its narrative diagram remains explicitly illustrative.

### Navigation and theme

The compact lowercase wordmark uses two staggered lines. Desktop text links underline on hover and current-page state. At (720px), native `details`/`summary` navigation uses a circular trigger and page-colored menu; links have (48px) minimum height. Escape closes it and returns focus to the summary; navigation also closes the disclosure. The focus-revealed skip link targets `#main-content`.

The circular theme control uses foreground ink, a transparent rest state, and muted hover wash over (160ms). It is disabled until mounted, labels the next theme, and initially follows the system preference. Visible keyboard focus is a theme-colored outline (2px), offset (3px). Source keyboard relationships and states are recorded facts; browser and assistive-technology behavior remain pending owner review.

### Selected-work index, contact, and footer

Project tabs use roving tab stops, wrapping Left/Right Arrow selection, and Home/End. Tabs label their panels, and hidden panels leave layout. Selection uses foreground ink and an underline entering over (200ms); the visible note moves from opacity (0.85) and downward offset (5px) over (240ms). The `#work` section remains present with an index link when no projects are featured.

Contact uses a surface-colored homepage band, a larger wrapping email link, and shared underlined contact links. About uses ruled expertise, approach, experience, and résumé/contact sections. Its résumé action reads “Request my résumé” when no URL is configured. The shared footer has a fine top divider, the name and brief role, wrapping contact links, and quiet copyright text. Error and missing-page views reuse the interior page title/intro and clear recovery links or button.

All authored component transitions and panel animation are removed under `prefers-reduced-motion: reduce`; the work-arrow position change remains immediate. Smooth document scrolling is enabled only without a reduced-motion request. Authored SVGs use current-color strokes and are hidden from assistive technology when decorative.

## Do's and Don'ts

### Do:

- **Do** use the current theme's semantic colors for surfaces, text, focus, selection, controls, and dividers.
- **Do** preserve Onest for interface and reading, and JetBrains Mono for code.
- **Do** preserve the original owner-supplied portrait and use CSS for presentation cropping.
- **Do** retain native field semantics, visible focus, live filter results, and project tab relationships.
- **Do** keep draft/sample notices visible until the owner verifies replacement content.
- **Do** retain reduced-motion overrides and contained overflow for code and tables.
- **Do** treat this record as pending the owner's build and rendered review.

### Don't:

- **Don't** replace the real portrait with an invented image or destructive crop.
- **Don't** turn plain metadata tags or the selected-project note into enclosing cards.
- **Don't** introduce a second display voice merely because a serif font is registered.
- **Don't** treat illustrative sidecar tonal ramps as shipped palette tokens.
- **Don't** claim visual approval, first-viewport fit, runtime accessibility, or build success from this source-only record.

Not canonized or repaired: no additional source defect is established by this documentation pass. The two static findings were corrected in source; content placeholders, missing rendered evidence, runtime validation, and owner approval remain explicit limitations, not house-style rules.
