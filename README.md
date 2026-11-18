# blakeswaidner.com

Source for [blakeswaidner.com](https://blakeswaidner.com), Blake Swaidner's personal site.

Next.js (App Router), Tailwind, shadcn/ui on Base UI, deployed on Vercel.

## Start

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # lint, typecheck, tests
pnpm build
```

Node 22 and pnpm 10 (see `.nvmrc` and `packageManager`).

## Layout

- `src/content/`: all copy as typed data, with its schema and test.
- `src/app/`: routes (`/`, `/work/[slug]`, `/resume`) plus sitemap, robots and the Open Graph image.
- `src/components/`: page components; `ui/` holds shadcn components.
- `AGENTS.md`: rules for coding agents working in this repo.
