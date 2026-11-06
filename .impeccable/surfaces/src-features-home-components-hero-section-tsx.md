---
version: 1
slug: "src-features-home-components-hero-section-tsx"
primary_target: "src/features/home/components/hero-section.tsx"
related_targets:
  [
    "src/app/page.tsx",
    "src/features/home/home-page.tsx",
    "src/features/home/components/hero-section.module.css",
    "src/features/home/components/selected-projects-section.tsx",
    "src/components/layout/site-header.tsx",
    "src/components/layout/site-header.module.css",
  ]
---

# Homepage hero

Mode: Experience. Primary target: `src/features/home/components/hero-section.tsx`.

The owner delegated direct design and implementation using Impeccable. This pass
covers the homepage introduction, shared header, real portrait, and a small
interactive introduction to the supplied projects. Other pages remain outside
the design scope.

## Direction contract

THESIS: A personal introduction with the reading rhythm of correspondence. A
full-width statement leads into a photographic author block and a live work
index. The portrait follows the statement instead of becoming the right half of
a conventional split hero.

OWN-WORLD: Pale sage stationery, deep green ink, an Onest sans-serif voice,
unboxed text links, and the original portrait in natural color. The dark theme
uses deep green with pale sage text. Layout, typography, and image scale carry
the identity.

STORY: Meet Mehedi, understand his backend and applied AI focus, inspect specific
work, and follow an email or About link. Supplied project descriptions provide
evidence without invented customers, availability, or performance claims.

FIRST VIEWPORT: A compact header precedes the owner's chosen statement,
“I engineer the space between data and intelligence.” The large heading balances
its lines naturally as the available width changes. A rectangular portrait and
readable biographical note sit beneath it.
The work action stays beside the note, and the start of the project index enters
the first desktop viewport. The signature interaction is a keyboard-operable
project index that changes the accompanying project note in place. On mobile,
the statement stays first, the author block reflows, and every project remains
reachable. Reduced-motion users receive immediate state changes.

FORM: Personal correspondence, grounded candidate 7. seed:44744100725e246c.
Code-first implementation was explicitly requested by the owner; no comp round
or generated mockup is part of this pass.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification boundary

The owner explicitly requested code edits only and will review the code and run
the build. Do not run build, dev servers, browser automation, tests, linters, or
the mechanical detector in this pass. Rendered verification and the full visual
finish review remain pending the owner's run. Any static review must be labeled
as static and must not claim visual approval.

## Assets

The displayed portrait is the owner's transparent
`public/images/profile/mehedi.png` (1195 × 896). Use the theme's `surface` behind
the cutout, 4px corners, and a bottom-aligned CSS crop. The About portrait uses
the same treatment. Preserve both this supplied PNG and the original
`public/images/mehedi.jpeg`, which remains the social-preview fallback. Do not
invent a portrait or use a mockup crop as the asset. Rendered review of this
refinement remains pending under the owner's code-only instruction.
