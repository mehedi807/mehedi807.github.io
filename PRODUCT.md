# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Employers, hiring managers, and engineering teams evaluating Mehedi for backend
  engineering or AI engineering roles.
- Prospective clients evaluating him for freelance and contract engineering work.

Both audiences are in scope; neither has been designated as the sole priority.

## Product Purpose

Md Mehedi Hasan's personal portfolio helps visitors understand his strengths,
evaluate his work and writing, and contact him about relevant opportunities.
Success means generating interest in backend and applied AI work, including both
employment and client engagements.

## Positioning

Backend engineering and applied AI are the central professional focus. His
broader product development experience supports that positioning.

The supplied background connects APIs, authentication, payments, background jobs,
retrieval, agents, and deployment to shipped product work across AI tools,
publishing, and commerce. Case studies should explain the work and engineering
decisions behind those products.

The owner wants selective, persuasive presentation of his strengths. The resume
is background material for choosing and framing relevant stories.

## Operating Context

The owner maintains the portfolio in a source repository. Long-form project case
studies and blog articles will use Markdown/MDX. Structured copy, identity,
navigation, and contact details have dedicated TypeScript source locations.

Visitors can browse projects and articles, narrow either collection with search
and filters, read individual entries, learn more about Mehedi, and follow email
or social links to get in touch.

## Capabilities and Constraints

### Confirmed routes and content

- `/`: a brief personal overview integrated into the hero, selected projects,
  latest posts, and contact links. The full project collection has its own page.
- `/about`: background, backend and AI expertise, working approach, experience,
  and resume/contact information.
- `/projects`: the full project index with search and filters.
- `/projects/[slug]`: individual MDX case studies using a shared layout with
  optional custom content blocks.
- `/blog`: the article index with search and tag filtering.
- `/blog/[slug]`: individual MDX articles.

Contact uses email and social links. An on-site contact form is outside the
confirmed scope.

### Engineering constraints

- The existing baseline uses Next.js App Router, React, TypeScript, and Tailwind
  CSS. It already includes theme support, Motion, and a GSAP integration.
- Next.js is configured for static export (`output: "export"`). Routes and
  content must remain compatible with build-time generation and static hosting.
- Source organization is feature-first: `home`, `about`, `projects`, and `blog`.
  Routes assemble pages; feature code owns its domain components, data, types,
  and filtering logic. Cross-feature UI, layout, and MDX rendering are shared.
- Files and folders use kebab-case; React component names use PascalCase.
- Search/filter controls are shared between the project and blog features;
  collection-specific filtering logic belongs to each feature.
- All agreed routes have code, including the complete homepage, About, both
  searchable/filterable collection indexes, and statically generated MDX detail
  pages. Shared content blocks, theme controls, navigation, footer, error/not-found
  recovery, and metadata are implemented. Build and rendered verification remain
  the owner's responsibility under the explicit code-only instruction.

## Brand Commitments

- Professional identity: Md Mehedi Hasan; the shorter Mehedi Hasan has been used
  in draft portfolio concepts.
- The portfolio should feel personal and distinctive. The owner identified an
  AI-generated-looking presentation as a reason to reject an otherwise appealing
  mockup.
- The owner authorized direct implementation of the whole website using
  Impeccable, with a real portrait and documented placeholders for missing content.
  The coded design awaits the owner's review.

## Evidence on Hand

- The owner supplied a resume at
  `/home/mehedi/Git/Resume and Portfolio/Resume/v1/Base/main_new.tex`.
- The resume describes backend employment at Join Venture AI and experience
  with Python, Django, FastAPI, Next.js, PostgreSQL, vector search, Celery, Redis,
  payment integrations, and deployment tooling.
- It identifies three project candidates:
  - SafientAI: LLM comparison, usage metering, subscriptions, and multimodal
    features.
  - Harmony Publishing: publishing workflows, AI market research, printing
    quotes, and background processing.
  - Cinderella Couture: commerce, semantic product search, payments, inventory,
    and shipping integration.
- Cinderella Couture is the only retained project and remains a visible draft
  case study. The owner requested removal of the other project entries and all
  sample blog articles. Its screenshot at
  `public/images/projects/cinderella/image.png` is used on the homepage, project
  index, and detail page. The empty homepage writing section is hidden;
  `/blog` remains available for future articles.
- The owner supplied the transparent portrait at
  `public/images/profile/mehedi.png` for the homepage and About page. The original
  `public/images/mehedi.jpeg` is retained for social previews. No public resume
  PDF has been supplied. `CONTENT-REPLACEMENT.md` records remaining placeholders
  and their edit paths.
- An externally generated hero mockup was discussed, but its image has not been
  supplied in this workspace and it was not approved for implementation.

## Product Principles

- Keep backend engineering and applied AI central to the professional story.
- Make the work useful for both hiring decisions and client evaluations.
- Select relevant evidence and explain its value clearly; keep the presentation
  persuasive and concise.
- Make projects and writing independently discoverable and directly linkable.

## Open Decisions

- Owner-authored articles, final topics, and filter taxonomy; no sample articles
  remain in the content collection.
- Verified case-study detail, years, outcomes, project media, working-approach
  wording, featured-project selection, and the public resume asset.
- Production origin, current external project URLs, and final owner approval of
  the coded design and copy.
