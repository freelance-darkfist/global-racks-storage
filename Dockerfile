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
CMD ["node", ".output/server/index.mjs"]
