---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets:
  [
    "src/app/about/page.tsx",
    "src/app/projects/page.tsx",
    "src/app/projects/[slug]/page.tsx",
    "src/app/blog/page.tsx",
    "src/app/blog/[slug]/page.tsx",
    "src/features/about/about-page.tsx",
    "src/features/projects/projects-page.tsx",
    "src/features/projects/project-detail-page.tsx",
    "src/features/blog/blog-page.tsx",
    "src/features/blog/post-detail-page.tsx",
  ]
---

# Complete portfolio

The owner delegated completion of the whole website in code, inheriting the
implemented hero's identity. Missing factual material uses visible placeholders
documented in `CONTENT-REPLACEMENT.md`.

## Surface modes

| Surface        | Mode       | Visitor job                                                 |
| -------------- | ---------- | ----------------------------------------------------------- |
| Homepage       | Experience | Meet the engineer and enter the actual work.                |
| About          | Read       | Understand background, expertise, and approach.             |
| Projects index | Operate    | Search and narrow the collection, then choose a case study. |
| Project detail | Read       | Understand the product and engineering contribution.        |
| Blog index     | Read       | Scan article titles, summaries, and topics.                 |
| Article detail | Read       | Read technical material and navigate its structure.         |

## Direction contract

THESIS: Personal correspondence becomes a complete portfolio. The homepage
introduces the person, the project index makes work discoverable, and long-form
surfaces give evidence and writing room to breathe.

OWN-WORLD: Inherit `DESIGN.md` and the current sage/green semantic tokens. Onest
carries the interface; JetBrains Mono is reserved for code. Flat text-led
sections, real photography, simple controls, and open project notes stay coherent
across light and dark themes.

STORY: Recognize Mehedi's backend and applied AI focus, explore projects and
writing, understand his background, and make direct contact. Draft facts and
sample writing remain visibly distinct from confirmed source material.

FIRST VIEWPORT: Preserve the existing homepage statement and photographic author
block, followed by the interactive work index. Collection pages put their title,
search, filters, result count, and entries in a direct scanning order. Detail
pages put the title, summary, relevant metadata, and draft status before the
reading column and generated table of contents. Narrow layouts stack safely;
controls retain keyboard focus and reduced-motion behavior.

FORM: Extension of the established personal-correspondence implementation,
inheriting grounded candidate 7, seed:44744100725e246c. The route purposes and
sections are already confirmed; the owner delegated their direct implementation.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Review boundary

The owner explicitly forbids build commands and will run the site after code
review. No build, typecheck, lint, tests, dev server, browser capture, or mechanical
detector runs in this pass. Formatting source and resolving the dependency
lockfile with lifecycle scripts disabled are source-maintenance steps.

The independent source review's two findings—duplicate heading IDs and a missing
work target with an empty featured collection—were fixed and reread. No runtime
or visual ship verdict is claimed. The owner's build and rendered review remain
pending. The supplied portrait is preserved unchanged, and no mockup assets are
used as page content.
