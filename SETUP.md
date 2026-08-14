# CosmoTrace CPO — Setup Guide

Step-by-step instructions to run, configure, and deploy the **CosmoTrace CPO** marketing website.

| | |
|---|---|
| **Repository** | [github.com/akshaym-cosmotrace/cosmotrace-cpo-web](https://github.com/akshaym-cosmotrace/cosmotrace-cpo-web) |
| **Production URL (planned)** | `https://cpo.cosmotrace.com` |
| **Main corporate site** | `https://www.cosmotrace.com` (SiteGround) |
| **Local dev URL** | `http://localhost:4028` |

---

## Table of contents

1. [Prerequisites](#1-prerequisites)
2. [First-time local setup](#2-first-time-local-setup)
3. [Daily development workflow](#3-daily-development-workflow)
4. [Environment variables](#4-environment-variables)
5. [Deploy to Vercel](#5-deploy-to-vercel)
6. [Connect custom subdomain (SiteGround DNS)](#6-connect-custom-subdomain-siteground-dns)
7. [Post-deploy checklist](#7-post-deploy-checklist)
8. [Push updates to production](#8-push-updates-to-production)
9. [Re-enable admin dashboard (later)](#9-re-enable-admin-dashboard-later)
10. [Common issues](#10-common-issues)

---

## 1. Prerequisites

Install the following before you begin:

| Tool | Version | Check |
|------|---------|-------|
| **Node.js** | 20.x LTS or newer | `node -v` |
| **npm** | 9+ (bundled with Node) | `npm -v` |
| **Git** | Any recent version | `git -v` |

**Accounts you'll need for deployment:**

- [GitHub](https://github.com) — source code hosting
- [Vercel](https://vercel.com) — hosting for this Next.js app
- [SiteGround](https://siteground.com) — DNS for `cosmotrace.com` (domain already listed as External Domain)

---

## 2. First-time local setup

### Step 1 — Clone the repository

```bash
git clone https://github.com/akshaym-cosmotrace/cosmotrace-cpo-web.git
cd cosmotrace-cpo-web
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Create your environment file

```bash
cp .env.example .env
```

For local development, the default values in `.env.example` are sufficient. You only need to change `NEXT_PUBLIC_SITE_URL` if testing metadata/OG tags against a specific URL.

### Step 4 — Start the development server

```bash
npm run dev
```

Open **http://localhost:4028** in your browser.

### Step 5 — Verify the build (optional but recommended)

```bash
npm run build
npm run serve
```

Production preview runs on **http://localhost:3000** (or the port set in `PORT`).

> **Note:** `npm start` in this project also runs the **dev** server on port 4028. Use `npm run serve` for a production preview after `npm run build`.

---

## 3. Daily development workflow

```bash
# Start dev server
npm run dev

# Type-check
npm run type-check

# Lint
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format source files
npm run format
```

**Recommended before opening a PR or pushing to main:**

```bash
npm run type-check && npm run lint && npm run build
```

---

## 4. Environment variables

Copy `.env.example` → `.env` for local use. On **Vercel**, add the same variables under **Project → Settings → Environment Variables**.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | **Yes (production)** | Canonical URL, e.g. `https://cpo.cosmotrace.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_SUPABASE_URL` | No | Reserved for future backend integration |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Reserved for future backend integration |
| `OPENAI_API_KEY` | No | Server-only; never expose to client |
| `GEMINI_API_KEY` | No | Server-only |
| `ANTHROPIC_API_KEY` | No | Server-only |
| `PERPLEXITY_API_KEY` | No | Server-only |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No | Stripe publishable key (public) |
| `NEXT_PUBLIC_ADSENSE_ID` | No | Google AdSense |

**Rules:**

- Variables prefixed with `NEXT_PUBLIC_` are embedded in the client bundle — never put secrets there.
- `.env` is gitignored. Commit only `.env.example` with placeholder values.
- After changing env vars on Vercel, **redeploy** for changes to take effect.

---

## 5. Deploy to Vercel

### Option A — GitHub import (recommended)

Automatic deploys on every push to `main`.

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Import **`akshaym-cosmotrace/cosmotrace-cpo-web`**
4. Framework preset: **Next.js** (auto-detected)
5. Add environment variables (at minimum `NEXT_PUBLIC_SITE_URL`)
6. Click **Deploy**

Vercel assigns a preview URL like `https://cosmotrace-cpo-web.vercel.app`.

### Option B — Vercel CLI

```bash
npx vercel login
npx vercel          # preview deploy
npx vercel --prod   # production deploy
```

---

## 6. Connect custom subdomain (SiteGround DNS)

This CPO site lives on a **subdomain** of the main CosmoTrace website:

```text
www.cosmotrace.com      →  Main corporate site (SiteGround — unchanged)
cpo.cosmotrace.com      →  This CPO site (Vercel)
```

### Step 1 — Add domain in Vercel

1. Vercel → your project → **Settings → Domains**
2. Add **`cpo.cosmotrace.com`**
3. Vercel shows the DNS record to create (typically a **CNAME**)

### Step 2 — Add DNS record in SiteGround

1. Log in to **SiteGround**
2. Go to **Site Tools → Domain → DNS Zone Editor** for `cosmotrace.com`
3. Add a new record:

| Type | Name | Value |
|------|------|-------|
| CNAME | `cpo` | `cname.vercel-dns.com` |

> Use the **exact target** shown in Vercel — it may differ slightly.

**Do not modify** existing `@` or `www` records — those keep the main website running.

### Step 3 — Wait for DNS propagation

Usually 5–30 minutes; can take up to a few hours.

### Step 4 — Update environment variables

In Vercel, set:

```env
NEXT_PUBLIC_SITE_URL=https://cpo.cosmotrace.com
```

Also update `siteUrl` in `src/lib/metadata.ts` to match, then redeploy.

### Step 5 — Link from main website

On `www.cosmotrace.com`, add a footer or navigation link:

**CPO Operations** → `https://cpo.cosmotrace.com`

---

## 7. Post-deploy checklist

Use this after the first production deploy:

- [ ] Site loads at `https://cpo.cosmotrace.com`
- [ ] SSL certificate is active (Vercel handles this automatically)
- [ ] `NEXT_PUBLIC_SITE_URL` set to `https://cpo.cosmotrace.com` in Vercel
- [ ] `src/lib/metadata.ts` `siteUrl` matches production domain
- [ ] All pages load: Home, About, Services, Serialization, Aggregation, Warehousing, Platform, Compliance, Blog, Contact
- [ ] Contact form shows success toast (mock submit — no backend yet)
- [ ] Admin link is **not** visible in navigation (intentionally hidden for launch)
- [ ] `/admin-dashboard` redirects to homepage
- [ ] Link added on `www.cosmotrace.com` pointing to CPO subdomain
- [ ] Google Analytics ID added (when ready)

---

## 8. Push updates to production

If Vercel is connected to GitHub, pushing to `main` triggers an automatic deploy:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

Monitor the deploy in the Vercel dashboard. Preview deploys are created automatically for pull requests.

---

## 9. Re-enable admin dashboard (later)

The admin dashboard is **hidden for the initial launch**. The code remains in the repo.

To restore it:

1. **`src/components/layout/MarketingNavbar.tsx`** — uncomment/restore the Admin nav link
2. **`src/app/admin-dashboard/page.tsx`** — replace the `redirect('/')` with the original dashboard layout (see git history)
3. Redeploy

Admin components live under `src/components/admin/` and `src/app/admin-dashboard/components/`.

---

## 10. Common issues

| Problem | Solution |
|---------|----------|
| **Port 4028 already in use** | Stop the other process or change the port in `package.json` `dev` script |
| **`npm run build` fails fetching Montserrat font** | Build environment needs internet access to `fonts.googleapis.com` |
| **`next/image` error for remote URL** | Add the hostname to `image-hosts.config.mjs` |
| **Vercel deploy fails** | Run `npm run build` locally first; check build logs in Vercel dashboard |
| **Subdomain not resolving** | Confirm CNAME in SiteGround DNS Zone Editor; wait for propagation |
| **Wrong Open Graph URL in social previews** | Update `siteUrl` in `src/lib/metadata.ts` and `NEXT_PUBLIC_SITE_URL` |
| **Anchor links hidden under navbar** | Adjust `--marketing-header-height` in `src/styles/tailwind.css` |

---

## Quick reference

| Task | Command / URL |
|------|---------------|
| Local dev | `npm run dev` → http://localhost:4028 |
| Production build | `npm run build` |
| Production preview | `npm run serve` → http://localhost:3000 |
| GitHub repo | https://github.com/akshaym-cosmotrace/cosmotrace-cpo-web |
| Production domain | https://cpo.cosmotrace.com |
| Main website | https://www.cosmotrace.com |

For architecture, routes, and component reference, see **[README.md](./README.md)**.
