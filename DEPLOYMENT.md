# Deployment

One codebase, two targets. The build only differs by the Nitro preset that the
TanStack Start plugin passes on, which is driven by the `START_TARGET`
environment variable (`process.env.START_TARGET ?? options.target` in
`@tanstack/start-plugin-core`).

| | Development | Production |
|---|---|---|
| Host | Coolify (self-hosted) | Vercel |
| Preset | `node-server` (default) | `vercel` |
| Command | `pnpm build` | `pnpm build:vercel` |
| Output | `.output/` + `node .output/server/index.mjs` | `.vercel/output/` (Build Output API v3) |
| Node | 24 (`node:24-slim`, see `Dockerfile`) | 24.x (`engines.node` in `package.json`) |

`pnpm build` must **not** be given `START_TARGET=vercel` on Coolify, and Vercel
must **not** run plain `pnpm build`, or it will emit a Node server instead of a
Vercel deployment.

## Coolify (development)

Already wired up: Coolify builds the repo's `Dockerfile`, which does a plain
`pnpm build` and runs the Node server.

- **Port:** `3000` (`EXPOSE 3000`; Nitro's node-server reads `PORT`, which
  Coolify injects).
- **Health check:** `GET /api/health`, already declared as a `HEALTHCHECK` in the
  image and safe to use as Coolify's health check path.
- **Environment variables:** none are required. Do not set `START_TARGET`.
- **Recommended:** keep the dev hostname out of search results. The site's
  canonical tags, `og:url` and sitemap all point at
  `https://globalracksstorage.com`, so duplicate indexing is already unlikely,
  but adding `X-Robots-Tag: noindex` to the dev host (Coolify/Traefik middleware
  or Cloudflare) makes it explicit.

## Vercel (production)

The repo is Vercel-ready:

- **`vercel.json`** sets `framework: null`, the build command
  (`pnpm build:vercel`), the install command, `regions: ["bom1"]` (Mumbai, the
  closest region for an India-based audience), `cleanUrls`, cache headers for
  `/assets/*` and `/images/*`, and baseline security headers.
- **`pnpm build:vercel`** runs the Vite build with `START_TARGET=vercel` and then
  `scripts/postbuild-vercel.mjs`, which adds an `overrides` entry to
  `.vercel/output/config.json` for every prerendered page so that
  `/about`, `/manufacturing`, `/products/cantilever-racks` and friends resolve to
  the prerendered `<route>.html` files instead of falling through to the SSR
  function.
- The Prerender output lives in `.vercel/output/static`; every non-prerendered
  route plus `/api/*` is handled by a single `__fallback` function
  (`nodejs22.x` runtime, per Nitro's preset).

### Project settings

1. Import the repository in Vercel.
2. Framework preset: **Other** (leave detection alone; `vercel.json` wins).
3. Build command, install command, output directory: leave empty so
   `vercel.json` applies.
4. Node.js version: **24.x**. `package.json` `engines.node` is `24.x`, and
   Vercel lets `engines` override the dashboard setting.
5. Environment variables: none required.
6. Add the domain (`globalracksstorage.com` plus `www` redirect) once the first
   deployment is green.

### First-deploy checklist

- `/` returns the homepage and `/manufacturing` returns the new page (proves the
  prerender + overrides mapping works).
- `/products/heavy-duty-pallet-racking` returns 200, not the 404 page.
- `/api/health` returns `{"status":"ok", ...}`.
- `/sitemap.xml` lists 18 URLs on the production host, and `/robots.txt` points
  at the same sitemap.
- Submitting the contact form returns 200 from `POST /api/contact` (the handler
  still only logs the enquiry; wire it to email/CRM before launch).

## Local checks

```bash
pnpm build          # Coolify-shaped output: .output/server/index.mjs
pnpm build:vercel   # Vercel-shaped output: .vercel/output/{config.json,static,functions}
pnpm typecheck && pnpm lint
```

After `pnpm build:vercel`, `.vercel/output/config.json` should contain an
`overrides` block mapping `<route>.html` to `<route>`; the script logs the number
of pages it mapped.