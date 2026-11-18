<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# blakeswaidner.com

Blake Swaidner's personal site: a resume with more depth, read by recruiters, interviewers and hiring managers. It is public, and so is this repo. Every claim on the site must be something a reader can check.

## Working here

- `pnpm check` (lint, typecheck, tests) and `pnpm build` must pass before a change is done. CI runs the same two commands.
- `main` deploys to production on Vercel; every pull request gets a preview URL. Work on a branch, never on `main`.
- Commit subjects are plain sentences describing the change, with no `feat:` or `fix:` prefix.
- Vercel Analytics and Speed Insights are the only monitoring. Do not add other trackers.

## Content

- All copy lives in `src/content/` as typed data, validated by `src/content/schema.ts`. Change copy there, not in page components.
- A case study needs at least one evidence link; the schema and `src/content/content.test.ts` enforce it.
- `src/lib/site.ts` has `launched: false`, which keeps search engines out while the copy is placeholder.

## Rules for copy

- Never invent or round up a claim, number, title or date. If a fact is not already on the site, ask Blake; his source notes are private and are not in this repo.
- Do not copy private notes, drafts or anything from an employer's codebase into this repo.
- Use ranges and ratios where an exact figure is confidential.
- Say what Blake did himself and name what others did. "Led the design of" and "built" are different claims.
- Plain words: no buzzwords (results-driven, leverage, spearheaded, passionate), no em dashes, no rows of identically shaped bullets.
- Blake writes first drafts. Agents polish and check; they do not author claims.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
