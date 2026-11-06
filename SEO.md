# Search and sharing setup

The canonical origin is **https://mehedi807.github.io/**. It is configured as
`site.url` in `src/config/site.ts`. Site settings use constants; no environment
file is needed. Edit that value if the site moves.

This is a source implementation. No build, application tests, browser checks,
search-engine submission, or deployment was performed in this pass.

## Implemented

| Concern                | Source                               | Behavior                                                                                                                         |
| ---------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Sitemap                | `src/app/sitemap.ts`                 | Exports `/sitemap.xml` with absolute canonical URLs, published collection/detail pages, and available cover images.              |
| Crawlers               | `src/app/robots.ts`                  | Exports `/robots.txt`, allows production crawling, and points to the sitemap.                                                    |
| Page metadata          | `src/lib/metadata.ts`                | Titles, descriptions, authorship, canonical URLs, Open Graph, explicit Twitter images, and robots directives.                    |
| Structured data        | `src/lib/structured-data.ts`         | Person, WebSite, homepage WebPage, About ProfilePage, published CollectionPage/ItemList, Article/BlogPosting, and breadcrumbs.   |
| JSON-LD rendering      | `src/components/seo/json-ld.tsx`     | Server-rendered scripts with `<` escaped before insertion. No extra client dependency.                                           |
| Ownership verification | `public/googleef44720086433717.html` | The supplied Google verification file is copied to the export root. No verification environment variables or meta tags are used. |
| Static URLs            | `next.config.ts`, `public/.nojekyll` | Directory-style exports, trailing-slash document URLs, and a marker to bypass Jekyll when publishing static files.               |

The implementation uses the framework's
[sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap),
[robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots),
and [JSON-LD](https://nextjs.org/docs/app/guides/json-ld) conventions.

## Indexing and editorial state

| State                                 | Search behavior                                                                                             |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Home and About                        | Indexable on the configured production origin.                                                              |
| Cinderella with `placeholder: true`   | Visible for review, but its detail page is `noindex`; omitted from the sitemap and article structured data. |
| A collection with no approved entries | Its index is `noindex` and omitted from the sitemap. This currently applies to `/projects/` and `/blog/`.   |
| `placeholder: false`, `draft: false`  | Eligible for collection/detail indexing, sitemap inclusion, and structured data.                            |
| `draft: true`                         | Not included in content indexes or generated detail paths.                                                  |
| `site.indexingEnabled: false`         | All pages receive `noindex`, robots disallows crawling, and the sitemap is empty. Use for preview exports.  |
| Invalid, blank, or example `site.url` | No canonical URLs or structured data; indexing is disabled and the sitemap is empty.                        |

With the current content, the sitemap contains only the homepage and About.
Approving Cinderella by setting `placeholder: false` adds the project index and
its case study on the next export. Adding a non-draft, non-placeholder article
adds the blog index and article automatically.

On production, draft pages remain crawlable so search engines can read their
`noindex` metadata. They are not separately blocked in robots.txt. Google
[documents why crawling is needed to read a noindex rule](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

## Dates and images

Blog frontmatter requires a quoted publication `date`. Optional `updated` must
be a valid quoted ISO date on or after publication:

```yaml
date: "2026-11-06"
updated: "2026-11-10"
```

Only supply `updated` after a meaningful content revision. It becomes the
visible updated date, Open Graph modified time, structured-data `dateModified`,
and sitemap `lastmod`. No modification dates are invented from the build clock.
Pages without a known revision date omit `lastmod`.

The default share image is the original opaque portrait, configured by
`site.socialImage` in `src/config/site.ts`. Optional content `cover`/`coverAlt`
override it for Open Graph and Twitter cards. Article structured data includes
an image only when that article has a supplied cover. No social account handle,
project publication dates, ratings, or business claims are invented.

To replace the default image, add the image under `public/images/` and update its
path, alt text, width, and height in `site.socialImage`. It is optional to create
a dedicated wide share graphic; the existing portrait is a working fallback.

## Google ownership verification

The supplied verification file is `public/googleef44720086433717.html`.
Keep its filename and contents unchanged. It is copied into the static export
and should be published at:

`https://mehedi807.github.io/googleef44720086433717.html`

Verification environment variables and verification meta tags are not used.
Completing the verification and submitting `/sitemap.xml` remain actions for the
owner in Google Search Console after deployment.

## GitHub Pages and owner review

The configured site is at the account root, so `basePath` and `assetPrefix` are
unset. `trailingSlash: true` exports `/about/index.html` and equivalent directories
for other document routes. Canonical URLs, sitemap entries, and structured-data
links use the matching trailing slash. Asset URLs keep their filenames.
See the [Next.js trailingSlash documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash).
GitHub documents the [`.nojekyll` marker](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
for custom static exports published from a branch.

Publish the contents of `out/` to the root of the account's GitHub Pages site,
including `.nojekyll` and `_next/`. No hosting workflow or account settings were
changed by this task. If you later deploy beneath a repository subdirectory,
review the base-path setup before publishing.

After reviewing and running the build yourself, check these URLs on the deployed
site:

- `https://mehedi807.github.io/robots.txt`
- `https://mehedi807.github.io/sitemap.xml`
- `https://mehedi807.github.io/about/`
- `https://mehedi807.github.io/projects/cinderella-couture/` (currently noindex)

Check exported document source for each page's title, canonical, robots,
Open Graph/Twitter image, and JSON-LD. Confirm direct navigation to nested pages
and a missing URL's 404 behavior on the host. Validate approved content using
[Google's Rich Results Test](https://search.google.com/test/rich-results) and the
[Schema Markup Validator](https://validator.schema.org/). Submission, crawling,
indexing, and search presentation are not established by source review.
