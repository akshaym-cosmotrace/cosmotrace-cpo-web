# CosmoTrace CPO Web

Marketing website for **CosmoTrace CPO** — pharmaceutical serialization, aggregation, compliant warehousing, and track-and-trace operations from a UAE Free Zone facility.

This is the **CPO child site** for CosmoTrace. The main corporate website lives at [www.cosmotrace.com](https://www.cosmotrace.com). This project is intended to deploy at **`cpo.cosmotrace.com`**.

---

## Quick links

| Resource | URL |
|----------|-----|
| **GitHub repository** | [akshaym-cosmotrace/cosmotrace-cpo-web](https://github.com/akshaym-cosmotrace/cosmotrace-cpo-web) |
| **Production (planned)** | `https://cpo.cosmotrace.com` |
| **Setup & deploy guide** | [SETUP.md](./SETUP.md) |
| **Local development** | `http://localhost:4028` |

---

## Quick start

```bash
git clone https://github.com/akshaym-cosmotrace/cosmotrace-cpo-web.git
cd cosmotrace-cpo-web
npm install
cp .env.example .env
npm run dev
```

Open **http://localhost:4028**. Full setup, deployment, and DNS instructions are in **[SETUP.md](./SETUP.md)**.

---

## What this site is

CosmoTrace CPO is a **UAE-based pharmaceutical operations and compliance provider**. This website presents:

- Serialization and aggregation **operations** (performed end-to-end, not just enabled)
- Compliant warehousing and cold chain storage
- Platform and compliance capabilities (GS1, EPCIS, Tatmeen)
- Contact and consultation flows for UAE & GCC pharmaceutical companies

**Positioning:** You bring the products — CosmoTrace provides the infrastructure, operations, and compliance.

---

## Technology stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Forms | [React Hook Form 7](https://react-hook-form.com/) |
| Toasts | [Sonner](https://sonner.emilkowal.ski/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Charts | [Recharts 2](https://recharts.org/) (admin dashboard — currently hidden) |
| Hosting | [Vercel](https://vercel.com/) (recommended) |
| DNS | [SiteGround](https://siteground.com/) (`cosmotrace.com`) |

---

## Project structure

```
cosmotrace-cpo-web/
├── .env.example              # Environment variable template
├── image-hosts.config.mjs    # Allowed next/image remote hostnames
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind theme (CSS variable mapping)
├── tsconfig.json             # TypeScript config (@/* → src/*)
├── SETUP.md                  # Step-by-step setup & deployment guide
├── README.md                 # This file
├── public/
│   ├── assets/images/        # Logos and static images
│   └── favicon.ico
└── src/
    ├── app/                  # Next.js App Router pages
    │   ├── layout.tsx        # Root layout (font, toaster, cookie consent)
    │   ├── page.tsx          # Homepage
    │   ├── about/            # About page
    │   ├── services/         # Services overview
    │   ├── serialization/    # Serialization operations
    │   ├── aggregation/      # Aggregation operations
    │   ├── warehousing/      # Warehousing & cold chain
    │   ├── platform/         # nTrack platform
    │   ├── compliance/       # Compliance & standards
    │   ├── blog/             # Insights / blog listing
    │   ├── contact/          # Contact & consultation
    │   ├── admin-dashboard/  # Admin UI (redirects to / — hidden for launch)
    │   └── components/       # Homepage section components
    ├── components/
    │   ├── layout/           # Navbar, footer, cookie consent, brand logo
    │   ├── marketing/        # Reusable marketing sections (hero, CTA, cards)
    │   ├── admin/            # Admin shell (sidebar, topbar — not public)
    │   └── ui/               # AppImage, AppLogo, AppIcon
    ├── lib/
    │   ├── metadata.ts       # Page metadata builder (OG tags)
    │   ├── navigation.ts     # Nav and footer link definitions
    │   ├── images.ts         # Shared image URL constants
    │   └── motion.ts         # Framer Motion variants
    └── styles/
        └── tailwind.css      # Design tokens, utilities, component classes
```

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).

---

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, about, services overview, compliance, pricing, blog preview |
| `/about` | About | Company narrative and facility overview |
| `/services` | Services | Full services grid |
| `/serialization` | Serialization | GS1 serialization operations |
| `/aggregation` | Aggregation | Unit-to-pallet hierarchy traceability |
| `/warehousing` | Warehousing | Pharma-grade storage and cold chain |
| `/platform` | Platform | nTrack platform capabilities |
| `/compliance` | Compliance | Tatmeen, GS1, EPCIS, GCC standards |
| `/blog` | Insights | Blog listing with demo articles |
| `/contact` | Contact | Consultation form and contact details |
| `/admin-dashboard` | — | Redirects to `/` (hidden for launch) |
| `/blog-listing-page` | Legacy blog | Redirects to `/blog` via `next.config.mjs` |

Navigation is defined centrally in `src/lib/navigation.ts`.

---

## NPM scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev -p 4028` | Development server at **localhost:4028** |
| `build` | `next build` | Production build → `.next/` |
| `serve` | `next start` | Serve production build (default port 3000) |
| `start` | `next dev -p 4028` | Same as `dev` — use `serve` for production preview |
| `lint` | `next lint` | Run ESLint |
| `lint:fix` | `next lint --fix` | ESLint with auto-fix |
| `format` | Prettier on `src/` | Format TypeScript, CSS, JSON |
| `type-check` | `tsc --noEmit` | TypeScript validation |

**Quality gate before deploy:**

```bash
npm run type-check && npm run lint && npm run build
```

---

## Environment variables

Copy `.env.example` to `.env` for local development. See [SETUP.md § Environment variables](./SETUP.md#4-environment-variables) for the full list.

| Variable | Required | Notes |
|----------|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | Production | Set to `https://cpo.cosmotrace.com` in production |
| Others | Optional | Reserved for analytics, Supabase, AI APIs — not wired in current UI |

`.env` is gitignored. Never commit secrets.

---

## Deployment architecture

```text
www.cosmotrace.com          SiteGround    Main corporate website
cpo.cosmotrace.com          Vercel        This Next.js CPO site (subdomain)
```

### Vercel (recommended)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Set `NEXT_PUBLIC_SITE_URL=https://cpo.cosmotrace.com`
3. Add custom domain `cpo.cosmotrace.com` in Vercel project settings
4. Add CNAME record in SiteGround DNS Zone Editor

Detailed steps: **[SETUP.md § Deploy to Vercel](./SETUP.md#5-deploy-to-vercel)** and **[§ Connect custom subdomain](./SETUP.md#6-connect-custom-subdomain-siteground-dns)**.

### Automatic deploys

Pushes to the `main` branch trigger a Vercel production deploy when the GitHub integration is connected.

---

## Design system

Brand tokens are defined in `src/styles/tailwind.css` and mapped in `tailwind.config.js`.

| Token | Usage |
|-------|-------|
| **Primary navy** | `#1A2B48` — headings, nav, structural elements |
| **Sky blue** | `#29ABE2` — accents, links, highlights |
| **Gold gradient** | CTA buttons and emphasis text |
| **Montserrat** | Primary typeface (loaded via `next/font/google`) |

Key utility classes: `.hero-gradient`, `.cta-pill`, `.cta-pill-outline`, `.compliance-badge`, `.gold-gradient-text`.

---

## Key features

### Marketing pages

Full multi-page marketing site with shared shell (`MarketingPageShell`), animated sections (Framer Motion), and responsive layout.

### Contact form

`ContactSection` uses React Hook Form with a mock submit handler (simulated latency + Sonner toast). Backend integration (`POST /api/leads`) is planned but not implemented.

### Cookie consent

Banner persists acceptance in `localStorage` under key `cosmotrace-cookie-consent`.

### Admin dashboard (hidden)

Demo admin UI (metrics, charts, leads table) exists under `src/app/admin-dashboard/` but is **disabled for launch**:

- Nav "Admin" link removed from `MarketingNavbar`
- `/admin-dashboard` redirects to homepage

See [SETUP.md § Re-enable admin dashboard](./SETUP.md#9-re-enable-admin-dashboard-later) to restore it later.

### Blog

Demo blog articles with category filters in `BlogGrid`. Content is static mock data — no CMS connected yet.

---

## Configuration notes

### `next.config.mjs`

| Setting | Value | Notes |
|---------|-------|-------|
| `typescript.ignoreBuildErrors` | `true` | Build won't fail on TS errors — run `type-check` separately |
| `eslint.ignoreDuringBuilds` | `true` | Build won't fail on lint errors — run `lint` separately |
| `productionBrowserSourceMaps` | `true` | Source maps in production for debugging |
| `images.remotePatterns` | From `image-hosts.config.mjs` | Controls allowed `next/image` hosts |

### Remote images

Add new hostnames to `image-hosts.config.mjs` before using them with `next/image`. Currently allowed: Unsplash, Pexels, Pixabay.

### Metadata

Page-level SEO metadata is built via `buildPageMetadata()` in `src/lib/metadata.ts`. Update `siteUrl` there when the production domain is confirmed.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Port 4028 in use | Kill the process or change port in `package.json` |
| Build fails on font fetch | Ensure network access to `fonts.googleapis.com` |
| `next/image` invalid src | Add hostname to `image-hosts.config.mjs` |
| Anchor links hidden under navbar | Adjust `--marketing-header-height` in `tailwind.css` |
| Subdomain not resolving | Check SiteGround CNAME; wait for DNS propagation |
| Wrong social preview URL | Update `siteUrl` in `metadata.ts` and redeploy |

More details in [SETUP.md § Common issues](./SETUP.md#10-common-issues).

---

## Contributing

1. Create a feature branch from `main`
2. Make changes
3. Run `npm run type-check && npm run lint && npm run build`
4. Open a pull request — Vercel creates a preview deploy automatically

---

## License

Private repository (`"private": true` in `package.json`). Usage and redistribution per CosmoTrace organization policy.

---

## Documentation index

| Document | Purpose |
|----------|---------|
| **[SETUP.md](./SETUP.md)** | First-time setup, env vars, Vercel deploy, SiteGround DNS, post-deploy checklist |
| **[.env.example](./.env.example)** | Environment variable template |
| [Next.js docs](https://nextjs.org/docs) | App Router, deployment, configuration |
| [Vercel docs](https://vercel.com/docs) | Hosting, domains, environment variables |
| [Tailwind CSS docs](https://tailwindcss.com/docs) | Utility classes and configuration |
