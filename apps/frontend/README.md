# Frontend (React + TypeScript + Vite)

This is the web client for `qeetro`, built with React, TypeScript, and Vite.

## Scripts

- dev: Start Vite dev server
- build: Type-check and build for production
- lint: Run ESLint
- preview: Preview the production build

From the repo root, run with PNPM filters:

```bash
pnpm --filter @qeetro/frontend dev
pnpm --filter @qeetro/frontend build
pnpm --filter @qeetro/frontend lint
pnpm --filter @qeetro/frontend preview
```

From this directory:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

## Tech Stack

- React 19
- Vite 7
- TypeScript 5

## Development Notes

- Ensure the backend is running if the app expects API calls.
- Environment variables for Vite use the `VITE_` prefix and can be defined in `.env` files (e.g., `.env.local`).
