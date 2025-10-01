# Types Package (@qeetro/types)

Shared TypeScript types for the `qeetro` monorepo.

## Scripts

- build: Compile TypeScript declarations and JS to `dist/`

From the repo root, run with PNPM filters:

```bash
pnpm --filter @qeetro/types build
```

From this directory:

```bash
pnpm build
```

## Usage

In a workspace package or app:

```ts
import {} from /* types */ '@qeetro/types';
```

Ensure consumers reference the `types` entry exposed by this package for TypeScript.
