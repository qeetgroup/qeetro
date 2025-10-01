# qeetro

Modern project management platform with boards, tasks, and team collaboration.

## Monorepo Overview

This repository is a PNPM workspace containing multiple packages and apps:

- apps/frontend: React + TypeScript + Vite web app
- apps/backend: Express (TypeScript) API server
- packages/types: Shared TypeScript types used across the workspace

## Requirements

- Node.js 20+
- PNPM (the repo is configured with `packageManager: pnpm@10.15.0`)

## Getting Started

Install all dependencies at the workspace root:

```bash
pnpm install
```

Run the frontend dev server:

```bash
pnpm --filter @qeetro/frontend dev
```

Run the backend in watch mode:

```bash
pnpm --filter @qeetro/backend dev
```

Build all projects:

```bash
pnpm -r build
```

## Common Scripts (root)

- generate:tree: Generate `project.tree` for the current repo structure
- prettier:check: Check formatting
- prettier:format: Format files in-place
- lint: Lint all workspaces
- lint:fix: Autofix lint issues

Examples:

```bash
pnpm run generate:tree
pnpm run prettier:check
pnpm run lint
```

## Workspace Script Reference

- Frontend
  - dev: `pnpm --filter @qeetro/frontend dev`
  - build: `pnpm --filter @qeetro/frontend build`
  - lint: `pnpm --filter @qeetro/frontend lint`
  - preview: `pnpm --filter @qeetro/frontend preview`

- Backend
  - dev: `pnpm --filter @qeetro/backend dev`
  - build: `pnpm --filter @qeetro/backend build`

- Types
  - build: `pnpm --filter @qeetro/types build`

## Project Structure

```text
apps/
  backend/     # Express API (TypeScript)
  frontend/    # React + Vite app
packages/
  types/       # Shared TypeScript types
```

## License

MIT
