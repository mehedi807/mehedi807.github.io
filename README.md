# Mehedi Hasan — portfolio

A static Next.js App Router portfolio for backend engineering and applied AI.
It includes the homepage, About, searchable/filterable project and blog indexes,
MDX detail pages, theme switching, custom content blocks, and static metadata.

Read [CONTENT-REPLACEMENT.md](CONTENT-REPLACEMENT.md) before publication. It lists
the Cinderella draft case study, supplied imagery, domain setting, and résumé
replacement. Cinderella is the only project entry, and the blog currently has
no articles. `DESIGN.md` records the implemented system and its pending
rendered-review status.

## Source organization

- `src/app`: routes, layouts, errors, sitemap, and robots.
- `src/features`: home, About, projects, and blog components and logic.
- `src/components`: shared layout, controls, and MDX blocks.
- `src/content`: trusted local MDX articles and case studies.
- `src/config`: identity, navigation, contact, and public site settings.
- `src/lib`: content parsing, MDX compilation, search, and metadata helpers.
- `public`: the real portrait and owner-supplied media/files.

All agreed routes have code. Initial content includes explicitly labelled
placeholders so the complete site can be reviewed. No build or application
validation was run during this code-only implementation pass.

## First setup

Install the pinned dependencies with `pnpm install --frozen-lockfile`. Copy
`.env.example` to `.env.local`, replace `NEXT_PUBLIC_SITE_URL` with the real
production origin, and optionally set the résumé URL. An unset/example origin
keeps the site noindex and leaves the sitemap empty. MDX compiles at export
time; no Next.js server or external content service is needed after deployment.

## Requirements

- Node.js 26.13.0
- pnpm 12.17.0

Corepack can activate the pinned pnpm version:

```sh
corepack enable
corepack install
```

## Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm typecheck
pnpm format
pnpm format:check
pnpm check
pnpm check:build
```

`pnpm build` writes the static site to `out/`. Run `pnpm preview` after building
to serve that export at `http://127.0.0.1:4173`. Rebuild after changing source
files to update the preview. The preview serves exported HTML files directly,
without a single-page application fallback. Deploy `out/` to a static hosting
provider.

`pnpm check` runs the formatting check, ESLint, and TypeScript in sequence,
stopping on the first failure. `pnpm check:build` runs those checks followed by
a production build.

## Code quality

`pnpm typecheck` runs `next typegen` before `tsc --noEmit`, so route and layout
types are generated even on a fresh checkout without an existing `.next/`.

TypeScript enables `strict`, `noUncheckedIndexedAccess`, and
`exactOptionalPropertyTypes`. Handle potentially missing array entries and map
values, and distinguish omitted optional properties from explicit `undefined`.

ESLint uses Next.js Core Web Vitals and TypeScript presets. TypeScript files also
use the TypeScript project service for the `no-floating-promises` and
`no-misused-promises` rules. Await promises, return them, or deliberately mark
fire-and-forget calls with `void` and handle rejections where appropriate.
JavaScript configuration files retain the existing linting without requiring
inclusion in the TypeScript project.

The root document defaults to `lang="en"`. Change this in `src/app/layout.tsx`
when a project uses a different primary language.

## Static export constraints

This baseline sets `output: "export"`. Features that require a Next.js server
at request time are unavailable, including Server Actions, cookies, redirects,
rewrites, headers, ISR, and the default `next/image` optimization loader.
Dynamic routes must provide every path at build time.

Hosting-specific options such as `basePath`, `assetPrefix`, `trailingSlash`,
and image-loader behavior are intentionally not configured.

## Styling

Use Tailwind utilities for layout, spacing, responsive styling, and interaction
states. Keep Tailwind's default breakpoints and spacing scale until a project
needs to change them. Use colocated `*.module.css` files for complex selectors,
keyframes, and effects that are clearer in CSS.

`src/app/tokens.css` defines semantic sage/green colors and typography roles.
`src/app/globals.css` maps them to Tailwind utilities such as `bg-background`,
`text-foreground`, `bg-surface`, `text-muted-foreground`, `bg-accent`,
`text-accent-foreground`, `border-border`, `outline-focus`, `font-body`,
`font-heading`, and `font-code`. Override token values to establish a project's
visual identity. Tailwind's existing typography scale remains available.

The root layout includes `ThemeProvider` from `src/app/theme-provider.tsx`,
which uses `next-themes`. It follows the system color scheme by default, saves
explicit choices in local storage under `theme`, and syncs changes across tabs.
While the selection is `system`, changes to the system color scheme update the
page automatically.

The provider sets `data-theme="light"` or `data-theme="dark"` on `<html>`,
activating the existing tokens and Tailwind's `dark:` variant. The tokens own
the CSS `color-scheme` property, including the appearance of native controls.

In a Client Component, import `useTheme` from `next-themes`. Call
`setTheme("light")`, `setTheme("dark")`, or `setTheme("system")` to change the
selection. `theme` is the selected preference, and `resolvedTheme` is the actual
light or dark palette. These values are unavailable during static rendering;
wait until the component mounts before rendering controls whose markup depends
on them. The shared header already includes a mounted, accessible theme toggle.

The provider applies the theme before hydration to avoid a light-theme flash.
The root `<html>` uses `suppressHydrationWarning` because that attribute changes
before React hydrates. Without JavaScript, the base light palette remains
available.

Keep global CSS limited to tokens and shared base behavior. Put custom component
rules in the `components` layer so Tailwind utilities can override them. In a CSS
Module, reference tokens directly with `var(--background)`, `var(--accent)`, or
`var(--type-body)`. If using `@apply`, add `@reference "<relative path to
app/globals.css>";` so the module can access the shared theme without emitting
the global stylesheet again.

### Fonts

`src/app/fonts.ts` configures three variable Google Fonts through
`next/font/google`. The root layout attaches their CSS variables to `<html>`;
`globals.css` exposes the corresponding Tailwind utilities.

| Family | Default typeface | Tailwind utility |
| ------ | ---------------- | ---------------- |
| Sans   | Onest            | `font-sans`      |
| Serif  | Source Serif 4   | `font-serif`     |
| Mono   | JetBrains Mono   | `font-mono`      |

Change a loader in `fonts.ts` while preserving its `variable` name to replace a
typeface across the project. The defaults use the Latin subset and
`display: "swap"`. Sans is preloaded; serif and mono are loaded by the browser
when used.

Each Google font is followed by an explicit system fallback stack. The OS-default
family comes first within that stack: `system-ui` for sans, `ui-serif` for serif,
and `ui-monospace` for mono. Named platform fonts follow, with `sans-serif`,
`serif`, or `monospace` last. Google fonts remain the primary faces.

`adjustFontFallback: false` prevents Next.js from inserting its generated fallback
ahead of these system stacks, preserving their explicit order.

The semantic `font-body` and `font-heading` roles use sans by default;
`font-code` uses mono. Change these assignments in `tokens.css` to suit the
project. For serif headings, set `--type-heading: var(--font-family-serif)`.

Next.js downloads these fonts during development/build and serves them with the
site, including the static export. Development/build needs access to Google
Fonts; visitors load the emitted font assets from the site itself. See the
[Next.js font documentation](https://nextjs.org/docs/app/getting-started/fonts).

## Animation

Use CSS for simple hover, focus, and state changes; Motion for React interactions,
layout changes, and enter/exit transitions; and GSAP for timelines and scroll
sequences. Give each animated property one owner per element. Use a nested
wrapper when two systems need to animate the same property independently, and
avoid `transition-all` on JavaScript-animated elements.

### CSS

Gate decorative movement with `motion-safe:` utilities or
`@media (prefers-reduced-motion: no-preference)`. Use `motion-reduce:` overrides
when an existing transition or animation needs an accessible alternative. Keep
content visible without animation; do not rely on a universal animation-duration
override to handle reduced motion.

### Motion for React

The root layout includes `MotionProvider`, which sets
`<MotionConfig reducedMotion="user">`. Import `motion`, `AnimatePresence`, and
other APIs from `motion/react` inside Client Components.

Motion's policy disables transform and layout animation for reduced-motion users;
opacity and color animation can still run. Use `useReducedMotion()` for bespoke
behavior such as disabling parallax or autoplay. The policy does not govern
imperative `animate()` calls; those need their own preference check. No global
duration, easing, or animation preset is imposed.

### GSAP

Import `gsap`, `ScrollTrigger`, and `useGsapMotion` from `@/lib/gsap` in Client
Components. The shared module registers plugins in the browser. GSAP is only
loaded when a component imports it.

`useGsapMotion(setup, { scope, dependencies })` requires a ref to the owning
element. It scopes selector strings to that element and reverts animations and
ScrollTriggers on unmount, dependency changes, and reduced-motion changes. The
setup callback receives `prefersReducedMotion`, `context`, and `contextSafe`.
The callback must choose an appropriate reduced-motion state; the hook does not
rewrite arbitrary tweens automatically.

For example, inside a Client Component with a `scope` ref attached to its root:

```tsx
useGsapMotion(
  ({ prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    gsap.from("[data-animate]", {
      opacity: 0,
      y: 16,
      duration: 0.4,
      scrollTrigger: { trigger: "[data-animate]", once: true },
    });
  },
  { scope },
);
```

Supply reactive inputs in `dependencies`; changing them reverts the old setup
before rebuilding. Wrap deferred callbacks with `contextSafe` so their GSAP
objects are tracked. Return a cleanup function from setup to remove your own
event listeners and timers. Keep setup synchronous; use a cleaned-up listener or
timer for asynchronous work. Use the scoped lifecycle rather than global
`ScrollTrigger.killAll()` cleanup.

References: [Tailwind theme variables](https://tailwindcss.com/docs/theme),
[Tailwind CSS Modules](https://tailwindcss.com/docs/compatibility#css-modules),
[GSAP React](https://gsap.com/resources/React/),
[GSAP matchMedia](<https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/>), and
[MotionConfig](https://motion.dev/docs/react-motion-config).

## Dependency updates

Dependencies are pinned exactly for reproducible installs. Update them
intentionally, regenerate `pnpm-lock.yaml`, then run `pnpm check:build` before
accepting the change.
