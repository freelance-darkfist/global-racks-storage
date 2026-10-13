# ─── Stage 1: Install dependencies ───────────────────────────────
FROM node:24-slim AS deps
RUN corepack enable && corepack prepare pnpm@12.10.1 --activate
WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
RUN pnpm install --frozen-lockfile

# ─── Stage 2: Build the application ─────────────────────────────
FROM node:24-slim AS builder
RUN corepack enable && corepack prepare pnpm@12.10.1 --activate
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ─── Stage 3: Production runtime ────────────────────────────────
FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.output ./.output

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/api/health').then(r=>{if(!r.ok)throw 1})" || exit 1
CMD ["node", ".output/server/index.mjs"]
