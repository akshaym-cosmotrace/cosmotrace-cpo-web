# CosmoTrace — setup

## Live / production URL

Set **`NEXT_PUBLIC_SITE_URL`** in `.env` to your deployed site (for example `https://www.yourdomain.com`).

## Local

1. **Node 20+** and **npm**
2. `npm install`
3. Copy/configure **`.env`** (see `README.md` § Environment variables). Optional for current static UI.
4. **Dev:** `npm run dev` → **http://localhost:4028**
5. **Prod preview:** `npm run build` then `npm run serve` → **http://localhost:3000** (or `PORT` if set)

**Note:** In `package.json`, `npm start` runs the dev server on 4028 (same as `dev`). Use **`npm run serve`** for `next start` after a build.
