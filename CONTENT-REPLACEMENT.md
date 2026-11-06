# Content and placeholder replacement guide

The agreed routes now have code. This guide records what was supplied, what is
placeholder content, and how to replace it. The owner will review the source and
run the build; no application validation was run in this coding pass.

## Supplied material

The name, email, social URLs, employment, education, skills, and Cinderella
overview come from the supplied résumé. Cinderella is the only retained project;
the other project entries and all sample blog articles were removed at the
owner's request. Its supplied screenshot is
`public/images/projects/cinderella/image.png` (1905 × 967), used as the project
cover, homepage preview, and case-study figure. Its narrative remains visibly
labelled **Draft case study** (`placeholder: true`, `draft: false`). Set
`draft: true` if it should be hidden entirely.

`public/images/profile/mehedi.png` is the
owner-supplied transparent portrait used on the homepage and About page. Its
1195 × 896 dimensions are declared in both portrait components; CSS controls
cropping, bottom alignment, 4px corners, and the theme-aware `--surface` backdrop.
To replace it, overwrite that PNG with a transparent portrait of the same size,
or update the image path and dimensions in
`src/features/home/components/hero-section.tsx` and
`src/features/about/components/intro-section.tsx`.
`public/images/mehedi.jpeg` remains the original photograph and the default social
preview, which needs its own opaque background outside the site's theme. Project URLs
were copied from the résumé and still need the owner's current-link review.
No testimonials, customer counts, revenue, availability, years of experience,
or performance benchmarks were invented.

## Placeholder inventory

| ID  | Current placeholder or fallback                                                                                  | Where to replace it                                                                                                     | Replacement                                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P01 | Resolved: the production origin is `https://mehedi807.github.io/`.                                               | `site.url` in `src/config/site.ts`                                                                                      | No domain replacement is needed. Set `site.indexingEnabled` to false for preview exports. No environment file is needed. See `SEO.md`.                                                                  |
| P02 | No résumé PDF. About shows a working **Request my résumé** email link.                                           | `site.resumeUrl` in `src/config/site.ts`; `public/files/`                                                               | Add the real PDF and set `resumeUrl` to `/files/mehedi-hasan-resume.pdf`, or use an HTTPS URL. Leave empty to keep the email fallback.                                                                  |
| P03 | Cinderella uses the supplied storefront screenshot. Future entries without a cover use the typographic fallback. | Frontmatter in `src/content/projects/*.mdx`; images in `public/images/projects/`                                        | Set `cover` and `coverAlt` for each project. Index covers fit inside 16:10 frames and homepage previews inside 2:1 frames without cropping the screenshot. Use `<Figure>` for body images and captions. |
| P04 | Cinderella remains marked **Draft case study**; `year` says **Year to confirm**.                                 | `src/content/projects/cinderella-couture.mdx`                                                                           | Confirm role/year, replace draft narrative and illustrative diagrams, add actual ownership/outcomes, remove draft body callouts, then set `placeholder: false`.                                         |
| P05 | No project repository URLs. The source-code action is hidden.                                                    | Optional `sourceUrl` in each project frontmatter                                                                        | Add an HTTPS public repository link when appropriate. An absent field keeps the action hidden.                                                                                                          |
| P06 | Working approach is proposed copy with a visible draft notice.                                                   | `src/features/about/data/about-content.ts`                                                                              | Replace `approach` entries with your process and set `approachIsPlaceholder: false`.                                                                                                                    |
| P07 | No blog articles remain. The homepage writing section is hidden, and `/blog` shows an empty state.               | `src/content/blog/`                                                                                                     | Add original MDX articles using the example below. The homepage writing section returns automatically when an article is available.                                                                     |
| P08 | Cinderella is the sole featured project.                                                                         | `featured` and `order` in project frontmatter                                                                           | Change `featured` and numeric `order`. Up to four featured entries appear. An empty featured set preserves a link to the full project index.                                                            |
| P09 | Hero/contact wording and blog topic focus are initial editorial copy.                                            | `src/features/home/data/home-content.ts`, `src/features/home/components/contact-section.tsx`, and feature `data/` files | Review wording for your voice. Factual background is separated from the proposed working approach. Categories and tags derive from content.                                                             |
| P10 | Social previews fall back to the original opaque portrait.                                                       | `site.socialImage` in `src/config/site.ts`; optional content `cover`/`coverAlt`                                         | Optionally add a dedicated share image and update its path, alt text, width, and height. Per-content covers override the fallback.                                                                      |
| P11 | Resolved: Google ownership verification uses the supplied HTML file.                                             | `public/googleef44720086433717.html`                                                                                    | Keep the supplied filename and contents unchanged when exporting and deploying. No verification environment variables or meta tags are needed. See `SEO.md`.                                            |

## Adding and editing a project

A lower-case kebab-case filename in `src/content/projects/` determines its URL:
`your-project.mdx` becomes `/projects/your-project`.

```mdx
---
title: Your project
headline: What the product does.
summary: The problem and your contribution in a few sentences.
category: Backend engineering
tags: [Python, PostgreSQL]
role: Your actual contribution
year: "2026"
featured: true
order: 4
placeholder: false
draft: false
cover: /images/projects/your-project.webp
coverAlt: Describe the actual product image
liveUrl: https://your-project.tld
---

## The problem

Explain the context and the work you actually owned.

## The decisions

Describe a trade-off, your solution, and evidence supporting its result.
```

Required fields are `title`, `summary`, `category`, `role`, and `tags`. `headline`
defaults to the title. Quote a numeric `year`, because the field is a string.
`featured` defaults to false and `order` to 100. `cover`, `coverAlt`, `liveUrl`,
and `sourceUrl` are optional. Links must be a root-relative path or HTTPS URL.

`placeholder: true` displays a draft notice on the case study, adds noindex to
its detail page, and excludes it from the sitemap and article structured data.
A collection containing only placeholders also has a noindex index page.
Review the body as well: setting the flag to false
does not remove draft callouts or illustrative captions inside MDX.

`draft: true` removes an entry from indexes and static detail paths. Draft files
can keep incomplete metadata while they are being written.

## Adding and editing an article

Use `src/content/blog/your-article.mdx` for `/blog/your-article`:

```mdx
---
title: Your article
summary: What the reader will learn.
date: "2026-11-06"
tags: [Backend, Architecture]
placeholder: false
draft: false
---

## Start with the question

Write the article here.
```

Use a quoted ISO date (`YYYY-MM-DD`). Articles sort newest first, then by title
when dates match. Reading time is an estimate from the source. The homepage
shows the latest three entries, hiding its writing section when there are none.
Optional `cover` supplies the article's social
preview; use `<Figure>` for images in the article itself.

Optional `updated: "YYYY-MM-DD"` records a genuine content revision and must not
precede the publication date. It supplies the visible updated date, social and
structured-data modification dates, and sitemap `lastmod`; it is never generated
from the build time. See `SEO.md` for the search and sharing setup.

Delete samples or mark them `draft: true` to remove them. Empty collections have
working empty states. Because Next static export requires nonempty params, an
internal `_empty` parameter returns not-found when a collection is empty. It is
never listed as an article or project.

## Custom MDX blocks

The renderer supports Markdown, GFM tables, fenced code, links, images, and:

| Block                 | Props                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| `Callout`             | Optional `title`; body as children.                                                                 |
| `Figure`              | `src`, `alt`, optional `caption`, `width`, `height`. Supply real dimensions; defaults are 1200×750. |
| `ArchitectureDiagram` | `title`, string-array `steps`, optional `caption`.                                                  |
| `Comparison`          | `title`, `items` array of `{ label, before, after }`, optional `beforeLabel` and `afterLabel`.      |
| `Demo`                | `title`, HTTPS `href`, optional explanatory children. It links to the real project.                 |

```mdx
<Callout title="A useful boundary">
  Explain the trade-off in a few sentences.
</Callout>

<Figure
  src="/images/projects/your-project.webp"
  alt="Describe what is shown"
  caption="Context that helps the reader understand the image."
  width={1600}
  height={1000}
/>
```

Start body headings at `##`; the page provides its `h1`. Heading IDs and the
table of contents are generated. Duplicate headings get unique suffixes. Code
blocks include copying with a manual-copy fallback; code and tables can scroll.

Register shared blocks in `src/components/mdx/mdx-components.tsx` and project
blocks in `src/features/projects/components/project-mdx-components.tsx`. Their
implementations can live in the adjacent `mdx-blocks/` directory. Use registered
blocks instead of importing TypeScript modules inside MDX documents.

MDX executes JavaScript. This implementation reads trusted local repository
files only; it is not a compiler for visitor-submitted or remote input.

## Other edit locations

- Identity and metadata: `src/config/site.ts`.
- Real email and socials: `src/config/contact.ts`.
- Header links: `src/config/navigation.ts`.
- Biography, work history, education, expertise: `src/features/about/data/about-content.ts`.
- Hero wording: `src/features/home/data/home-content.ts`.
- Page colors and type roles: `src/app/tokens.css`; fonts: `src/app/fonts.ts`.
- Recorded design rules and source-review limits: `DESIGN.md` and `.impeccable/`.

Content, public files, and site configuration constants are incorporated into the static
export. Changing them requires a new export. There is no runtime CMS, database,
contact-form endpoint, or secret API key to configure.

## Owner review and build

No build, lint, typecheck, tests, development server, or browser verification ran
in this coding pass. Source formatting and lockfile-only dependency resolution
were editing steps; lifecycle scripts were disabled for the lockfile operation.

Commands for the owner to run from `Mehedi/` after reviewing:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm preview
```

Before publishing, confirm the configured domain, review draft/sample notices and diagrams,
confirm current project URLs, and choose whether to provide a résumé PDF.
Exercise navigation, both search/filter interfaces, theme switching, article
anchors, code copying, and narrow-screen layouts. Source review does not
establish rendered behavior or build success.
