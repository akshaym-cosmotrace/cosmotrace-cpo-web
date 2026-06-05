# CosmoTrace

**CosmoTrace** is a marketing and operations-facing web application for **AI-enabled pharmaceutical serialization, aggregation, and track-and-trace** positioning (UAE & GCC). The codebase is a [Next.js](https://nextjs.org/) 15 **App Router** project using **React 19**, **TypeScript**, **Tailwind CSS**, and a custom **CosmoTrace** visual theme (deep navy / sky blue / gold accents, Montserrat typography, pill CTAs).

This document is the **canonical reference** for the repository: architecture, configuration, scripts, styling, routes, and operational notes.

---

## Table of contents

1. [Repository overview](#1-repository-overview)
2. [Technology stack](#2-technology-stack)
3. [System requirements](#3-system-requirements)
4. [Directory structure](#4-directory-structure)
5. [Installation and local development](#5-installation-and-local-development)
6. [NPM scripts (reference)](#6-npm-scripts-reference)
7. [Environment variables](#7-environment-variables)
8. [Application routes and pages](#8-application-routes-and-pages)
9. [UI architecture and layout](#9-ui-architecture-and-layout)
10. [Design system and styling](#10-design-system-and-styling)
11. [Key components (functional map)](#11-key-components-functional-map)
12. [Forms, toasts, and client behavior](#12-forms-toasts-and-client-behavior)
13. [Admin dashboard (demo UI)](#13-admin-dashboard-demo-ui)
14. [Blog listing (demo content)](#14-blog-listing-demo-content)
15. [Next.js configuration](#15-nextjs-configuration)
16. [Images and remote patterns](#16-images-and-remote-patterns)
17. [TypeScript and ESLint build behavior](#17-typescript-and-eslint-build-behavior)
18. [Deployment](#18-deployment)
19. [Security and secrets](#19-security-and-secrets)
20. [Troubleshooting](#20-troubleshooting)
21. [Related documentation](#21-related-documentation)

---

## 1. Repository overview

| Item | Detail |
|------|--------|
| **Package name** | `cosmotrace` |
| **Version** | `0.1.0` |
| **Private** | Yes (`"private": true` in `package.json`) |
| **Framework** | Next.js **15.1.11** (App Router) |
| **UI library** | React **19.0.3** |
| **Language** | TypeScript (**strict** mode in `tsconfig.json`) |
| **Styling** | Tailwind CSS **3.4.6** + `src/styles/tailwind.css` design tokens |
| **Primary audience** | Pharmaceutical serialization / compliance / CPO messaging |

The app is largely **static marketing UI** plus a **demo admin dashboard** and **demo blog grid**. Backend integrations (e.g. lead API, Supabase, analytics) are anticipated via environment variables; **current application source under `src/` does not reference `process.env`**, so those keys are **reserved for future wiring** unless you add usage.

---

## 2. Technology stack

### Core runtime

| Technology | Version (from `package.json`) | Role |
|------------|-------------------------------|------|
| **next** | `15.1.11` | Framework, routing, SSR/RSC, `next/font`, `next/image` |
| **react** | `19.0.3` | UI |
| **react-dom** | `19.0.3` | DOM rendering |
| **typescript** | `^5` | Static typing |

### Styling and UI utilities

| Package | Role |
|---------|------|
| **tailwindcss** | Utility-first CSS; extended theme in `tailwind.config.js` |
| **@tailwindcss/typography** | Prose-style typography plugin |
| **@tailwindcss/forms** | Form control normalization (dependency present) |
| **tailwindcss-animate** | Animation utilities (dev dependency) |
| **autoprefixer**, **postcss** | CSS pipeline |

### Interaction, motion, charts

| Package | Role |
|---------|------|
| **framer-motion** | Section animations (`whileInView`, staggered children) |
| **react-hook-form** | Contact form state and validation |
| **sonner** | Toast notifications (`<Toaster />` in root layout) |
| **recharts** | Admin charts (pie, bar, etc.) |
| **lucide-react** | Icon set for nav, sections, admin |
| **@heroicons/react** | Icon set (used where imported) |

### Tooling and quality

| Package | Role |
|---------|------|
| **eslint** + **eslint-config-next** + **@typescript-eslint/*** | Linting |
| **eslint-config-prettier**, **eslint-plugin-prettier** | Prettier integration |
| **prettier** | Formatting (`npm run format`) |

### Optional / platform

| Package | Role |
|---------|------|
| **@netlify/plugin-nextjs** | Netlify Next.js runtime (devDependency; use with Netlify deploy config) |

---

## 3. System requirements

| Requirement | Notes |
|-------------|------|
| **Node.js** | **20.x** or compatible LTS recommended (Next.js 15 typical expectation) |
| **npm** | Used in scripts (`npm install`, `npm run …`) |
| **Network (build time)** | `next/font/google` loads **Montserrat** from Google Fonts during `next build`. CI or sandboxes without DNS to `fonts.googleapis.com` will fail the build unless fonts are cached or you switch strategy. |
| **Git** | Standard clone / branch workflows |

---

## 4. Directory structure

High-level map of **first-party** source (excluding `node_modules`, `.next`).

```
cosmotrace/
├── image-hosts.config.mjs    # next/image remotePatterns hostnames
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind theme extensions (CSS variables)
├── tsconfig.json             # TypeScript: strict, paths `@/*` → `./src/*`
├── package.json
├── SETUP.md                  # Short setup + live URL (see that file)
├── README.md                 # This file
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout: font, global CSS, Toaster, CookieConsent
│   │   ├── page.tsx          # Marketing homepage composition
│   │   ├── not-found.tsx     # 404 page
│   │   ├── components/       # Homepage sections (Hero, About, Services, …)
│   │   ├── blog-listing-page/
│   │   │   ├── page.tsx
│   │   │   └── components/   # BlogHero, BlogGrid
│   │   └── admin-dashboard/
│   │       ├── page.tsx
│   │       └── components/   # Metrics, charts, tables, activity feed
│   ├── components/
│   │   ├── layout/           # MarketingNavbar, MarketingFooter, CookieConsent
│   │   ├── admin/            # AdminLayout, AdminSidebar, AdminTopbar
│   │   └── ui/               # AppLogo, AppIcon, AppImage
│   └── styles/
│       ├── index.css         # Re-exports tailwind.css
│       └── tailwind.css      # @tailwind layers, :root tokens, utilities
└── public/                   # Static assets served from site root (if present)
```

**Path alias:** `@/` resolves to `src/` (see `tsconfig.json` `"paths"`).

---

## 5. Installation and local development

1. **Clone** the repository.
2. **Install dependencies:** `npm install`
3. **Environment:** create or edit `.env` at the project root (see [§7 Environment variables](#7-environment-variables)). For the current UI-only codepath, the app may run without consuming these variables.
4. **Start dev server:** `npm run dev`  
   - Default in this project: **http://localhost:4028** (port fixed in `package.json` script).

A shorter checklist lives in **`SETUP.md`**.

---

## 6. NPM scripts (reference)

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev -p 4028` | Development server on **port 4028** |
| `build` | `next build` | Production-optimized build → `.next/` |
| `start` | `next dev -p 4028` | ⚠️ **Same as `dev` in current `package.json`** — not `next start`. For production HTTP server use `serve`. |
| `serve` | `next start` | Serves **production** build (run after `build`; default port **3000** unless `PORT` is set) |
| `lint` | `next lint` | ESLint via Next |
| `lint:fix` | `next lint --fix` | ESLint with autofix |
| `format` | `prettier --write "src/**/*.{ts,tsx,css,md,json}"` | Prettier on `src` |
| `type-check` | `tsc --noEmit` | TypeScript check without emit |

**Operational recommendation:** treat **`npm run serve`** as the production local preview after **`npm run build`**.

---

## 7. Environment variables

Variables appear in the repo’s **`.env`** template (placeholders). They are **typical** for analytics, AI, payments, and Supabase-backed apps. **As of the current `src/` tree, there are no `process.env` reads** — wiring is a future step unless you add it.

| Variable | Exposure | Intended use (typical) |
|----------|----------|-------------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Public | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public | Supabase anonymous key |
| `OPENAI_API_KEY` | Server-only | OpenAI API |
| `GEMINI_API_KEY` | Server-only | Google Gemini API |
| `ANTHROPIC_API_KEY` | Server-only | Anthropic API |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public | Google Analytics 4 |
| `NEXT_PUBLIC_ADSENSE_ID` | Public | AdSense |
| `PERPLEXITY_API_KEY` | Server-only | Perplexity API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Public | Stripe publishable key |
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical site URL for metadata, OG, redirects |

**`NEXT_PUBLIC_*`** variables are embedded in the client bundle — never put secrets in them.

**Security note:** `.env` is **not** listed in `.gitignore` in this repository. You should **add `.env` to `.gitignore`** and commit only a **`.env.example`** (sanitized) to avoid leaking keys.

---

## 8. Application routes and pages

| Route | File | Description |
|-------|------|-------------|
| **`/`** | `src/app/page.tsx` | Full marketing homepage: navbar + sections + footer |
| **`/blog-listing-page`** | `src/app/blog-listing-page/page.tsx` | Blog hero + large demo grid |
| **`/admin-dashboard`** | `src/app/admin-dashboard/page.tsx` | Demo admin shell: metrics, charts, leads table |
| **Unknown paths** | `src/app/not-found.tsx` | Custom 404 UI |

**Anchors** on the homepage (`#services`, `#contact`, etc.) rely on section `id` attributes. `html` uses `scroll-padding-top` aligned to `--marketing-header-height` so fixed headers do not obscure targets.

---

## 9. UI architecture and layout

### Root layout (`src/app/layout.tsx`)

- Loads global styles: `src/styles/tailwind.css` (via `../styles/tailwind.css`).
- Applies **Montserrat** via `next/font/google` (`--font-montserrat` CSS variable).
- Renders **`CookieConsent`** (client-side cookie bar; persists accept in `localStorage`).
- Renders **`Toaster`** from **sonner** (`position="bottom-right"`, `richColors`).

### Marketing shell

- **`MarketingNavbar`**: Fixed **single-tier** header — slim **brand gradient accent** (navy → primary → gold), glassy white bar, editorial nav, optional **xl+** contact strip, gold CTA. Height drives **`pt-marketing-header`** on first sections.
- **`MarketingFooter`**: Dark footer, links, compliance quick links, CTA.

### Admin shell

- **`AdminLayout`**: Flex row — `AdminSidebar` + column with `AdminTopbar` + scrollable `<main>`.

---

## 10. Design system and styling

### Source of truth

- **Tokens:** `:root` CSS variables in `src/styles/tailwind.css` (`--primary`, `--secondary`, `--accent`, navy/gold/teal scales, `--marketing-header-height`, etc.).
- **Tailwind mapping:** `tailwind.config.js` maps semantic colors (`primary`, `secondary`, `accent`, `muted`, …) to `var(--*)`.
- **Components / utilities:** same file defines `@layer utilities` (e.g. `.hero-gradient`, `.hero-tech-overlay`, `.gold-gradient-text`) and `@layer components` (e.g. `.cta-pill`, `.cta-pill-outline`, `.nav-pill`).

### Brand direction (summary)

- **Primary navy** (~`#1A2B48`), **sky** accent (~`#29ABE2`), **gold** CTA gradient (`#FBB03B` → `#D68F29` → deeper gold).
- **Hero**: blue–purple gradient with subtle tech-style glow overlay.
- **Typography:** Montserrat; navigation and CTAs use **uppercase** + **letter-spacing** where specified by utility classes.

### Tailwind plugins

- `@tailwindcss/typography` enabled in `tailwind.config.js`.
- **Dark mode:** `darkMode: 'class'` is set — toggling dark mode requires a `class="dark"` strategy on a parent element (not automatically wired in layout).

---

## 11. Key components (functional map)

### Homepage sections (`src/app/components/`)

| Component | Role |
|-----------|------|
| `HeroSection` | Full-viewport hero, motion, workflow chips, CTAs |
| `AboutSection` | Company / facility narrative |
| `PlatformSection` | Platform capabilities and cards |
| `ServicesSection` | Grid of serialization / logistics services |
| `WarehousingSection` | Warehousing value props |
| `ComplianceSection` | Regulatory / standards framing |
| `PricingSection` | Tiered pricing presentation |
| `WhyChooseSection` | Differentiators |
| `BlogPreviewSection` | Teaser cards toward blog |
| `ContactSection` | Split layout: copy + **react-hook-form** consultation form (client-side mock submit + toast) |

### Blog (`src/app/blog-listing-page/components/`)

| Component | Role |
|-----------|------|
| `BlogHero` | Gradient hero for blog index |
| `BlogGrid` | Large demo article grid with filters/search UI patterns |

### Admin (`src/app/admin-dashboard/components/`)

| Component | Role |
|-----------|------|
| `MetricsBentoGrid` | KPI cards |
| `ChartsRow` | Chart row composition |
| `WeeklyLeadsChart`, `LeadSourceChart` | **Recharts** visualizations |
| `LeadsTable` | Demo table with status badges |
| `ActivityFeed` | Recent activity list |

### Shared UI (`src/components/ui/`)

| Component | Role |
|-----------|------|
| `AppLogo` | Logo image wrapper |
| `AppIcon` | Icon wrapper (used on 404) |
| `AppImage` | Image helper (if used with `next/image` patterns) |

---

## 12. Forms, toasts, and client behavior

### Contact form (`ContactSection.tsx`)

- **Library:** `react-hook-form`.
- **Submit handler:** currently **`await new Promise((r) => setTimeout(r, 1400))`** — placeholder latency to simulate network.
- **Comment in code** indicates intended backend: `POST /api/leads` (not implemented in tree at documentation time).
- **Feedback:** `sonner` toast on success; inline success state in the form card.

### Cookie consent (`CookieConsent.tsx`)

- **Storage key:** `cosmotrace-cookie-consent` in `localStorage`.
- **Dismiss:** hides bar after **Accept**; no cookie category granularity (banner-level consent only).

---

## 13. Admin dashboard (demo UI)

- **Route:** `/admin-dashboard`.
- **Purpose:** **Demonstration** of an internal console (metrics, charts, leads). Data is **static / illustrative**, not connected to a live CRM in the provided source.
- **Navigation:** `AdminSidebar` uses `next/link` to the same route for multiple items (placeholder structure).

---

## 14. Blog listing (demo content)

- **Route:** `/blog-listing-page`.
- **Purpose:** Marketing-style blog index with **demo** posts and UI for discovery (tags, search, etc., per `BlogGrid` implementation).
- **Data source:** in-component mock data (not headless CMS in repo).

---

## 15. Next.js configuration

File: **`next.config.mjs`**.

| Option | Value | Effect |
|--------|-------|--------|
| `productionBrowserSourceMaps` | `true` | Generates browser source maps in production (larger deploy; easier prod debugging). |
| `distDir` | `process.env.DIST_DIR \|\| '.next'` | Custom output dir when `DIST_DIR` is set. |
| `typescript.ignoreBuildErrors` | `true` | **Type errors do not fail the build** — prefer fixing errors and setting this to `false` for strict CI. |
| `eslint.ignoreDuringBuilds` | `true` | **ESLint does not fail the build** — prefer enabling for strict CI. |
| `images.remotePatterns` | from `image-hosts.config.mjs` | Restricts `next/image` remote hosts. |

---

## 16. Images and remote patterns

File: **`image-hosts.config.mjs`** exports `imageHosts` used by `next.config.mjs`.

Allowed hostnames (examples in repo):

- `images.unsplash.com`
- `images.pexels.com`
- `images.pixabay.com`

Add new `{ protocol, hostname }` entries before using additional remote `next/image` sources.

---

## 17. TypeScript and ESLint build behavior

Because **`typescript.ignoreBuildErrors`** and **`eslint.ignoreDuringBuilds`** are **enabled**, **`next build` can succeed even with type or lint issues**.

**Recommended CI / quality gate:**

```bash
npm run type-check
npm run lint
npm run build
```

---

## 18. Deployment

### Build artifact

- Run **`npm run build`** → output under **`.next/`** (or `DIST_DIR` if overridden).

### Production process

1. `npm run build`
2. `npm run serve` (or your platform’s equivalent: `next start` with `NODE_ENV=production`)

### Netlify

- DevDependency **`@netlify/plugin-nextjs`** is present for **Netlify**’s Next.js runtime.
- Configure in Netlify UI or **`netlify.toml`** (not committed in this snapshot — add per [Netlify Next.js docs](https://docs.netlify.com/frameworks/next-js/overview/)).

### Site URL (`NEXT_PUBLIC_SITE_URL`)

Set **`NEXT_PUBLIC_SITE_URL`** in **`.env`** to your canonical public URL (for example `https://www.yourcompany.com` in production, or `http://localhost:4028` for local-only metadata). Update it whenever the deployment domain changes.

---

## 19. Security and secrets

- Never commit real **API keys** or **service role** credentials.
- Prefer **`.env.example`** + **`.gitignore`** entry for `.env`.
- Use **server-only** env vars for secrets (`OPENAI_API_KEY`, etc.) and only expose **`NEXT_PUBLIC_*`** for truly public configuration.

---

## 20. Troubleshooting

| Symptom | Likely cause | Mitigation |
|---------|--------------|------------|
| **`next build` fails on Montserrat fetch** | No network / blocked `fonts.googleapis.com` | Ensure build environment has internet; or switch to local / system font strategy. |
| **Port 4028 in use** | Another process bound to 4028 | Free the port or change `-p` in `package.json` `dev` / `start` scripts. |
| **`next/image` invalid src** | Remote host not in `image-hosts.config.mjs` | Add hostname to `imageHosts`. |
| **Anchors hidden under navbar** | Header height mismatch | Adjust `--marketing-header-height` in `tailwind.css` to match actual header stack. |

---

## 21. Related documentation

| Document | Purpose |
|----------|---------|
| **`SETUP.md`** | Minimal steps: live URL, local install, dev/prod commands |
| [Next.js docs](https://nextjs.org/docs) | App Router, `next/font`, `next/image`, `next build` |
| [Tailwind CSS docs](https://tailwindcss.com/docs) | Utilities and configuration |

---

## License and ownership

The `package.json` declares `"private": true`. **No SPDX license** is specified in the snippets reviewed; treat usage and redistribution according to your organization’s policy.

---

*Last updated to match repository layout and dependencies as documented from `package.json`, `next.config.mjs`, `tsconfig.json`, and `src/` App Router structure.*
