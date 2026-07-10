# AI Agent Context — homeloom.app

## What this project is
A homeschool management web app for parents to track daily tasks, children's progress, compliance records, and generate transcripts.

## Stack
- **Build:** Vite + pnpm (runs inside Docker via `make buildsh` from the `sites/` parent)
- **Frontend:** React 18, TypeScript, Vite
- **UI:** MUI (Material UI v9) + shadcn/ui (Radix UI primitives) + Tailwind CSS
- **Routing:** React Router DOM v6
- **State:** Custom React Context store (`src/store.jsx`)
- **Data fetching:** TanStack React Query
- **PDF export:** jsPDF
- **Charts:** Recharts
- **Testing:** Vitest + Testing Library

## Project structure
```
homeloom.app/
  src/
    pages/            # Route-level page components
    components/       # Shared UI components (Layout, NavLink, shadcn/ui)
    hooks/            # Custom React hooks
    lib/              # Utility functions
    store.jsx         # Global app state (parent, children, tasks, streaks)
  public/             # Static assets
  docs/               # PRD and prompt history
  genai/              # Original Lovable-generated scaffold (can be deleted)
```

## How to run
All commands run inside the Docker container. From the `sites/` parent directory:

```bash
make buildsh                      # enter the container
# then inside the container:
cd homeloom.app && pnpm install   # install deps (generates pnpm-lock.yaml)
pnpm dev                          # start Vite dev server on :5173
pnpm build                        # production build
pnpm test                         # run Vitest tests
```

Or use the Makefile shortcut (installs + starts dev server):
```bash
make run proj=homeloom.app
```

## Dev environment
- **Package manager:** pnpm (managed by Volta inside Docker — never use npm or bun)
- **Container:** Debian-based Docker image defined at `../Dockerfile` (parent `sites/` dir)
- **Mount:** The container mounts the entire `sites/` directory to `/usr/src/app/`, so this project is at `/usr/src/app/homeloom.app/` inside the container
- **Entry:** `make buildsh` from `sites/` builds and enters the container interactively
- **Makefile shortcut:** `make run proj=homeloom.app` runs install + dev server in one step

## Key conventions
- Pages live in `src/pages/`, mixed JSX and TSX files
- State is managed via a single context store in `store.jsx`; use `useStore()` hook to access
- MUI is the primary component system; shadcn/ui components live in `src/components/ui/`
- jsPDF is used for transcript PDF generation

## Deployment

> **Serving reality — verify before editing any deploy config.** The apex
> domain **`homeloom.app` is currently served by Vercel, *not* Cloudflare.**
> Confirm the real host first:
> `curl -sI https://homeloom.app | grep -iE 'server|x-vercel|cf-ray'`
> (`server: Vercel` / `x-vercel-id` = Vercel; `cf-ray` = Cloudflare). A parallel
> Cloudflare Worker deployment also exists at
> `homeloop.foundervijo-324.workers.dev` and is the **intended migration
> target**, but the domain has not been cut over yet. **Both `vercel.json` and
> `wrangler.jsonc` are live config — neither is inert.** Until the DNS zone is
> moved to Cloudflare and the domain attached to the Worker, changes to
> `wrangler.jsonc` do NOT affect what Google crawls.

- **Prerendering:** `pnpm build` runs `vite-react-ssg build`, which prerenders
  the public/SEO routes to real static HTML in `dist/` — `/`, `/homeschool-laws`,
  `/homeschool-laws/<state>`, `/guides`, `/guides/<slug>`. App/dashboard routes
  (`/dashboard`, `/compliance`, `/transcript`, `/child/:id`) stay client-only
  SPA. `ssgOptions.includedRoutes` in `vite.config.ts` is the source of truth
  for what gets prerendered — do not edit the build script to change this.
- **Vercel (current prod) — `vercel.json`:** `"cleanUrls": true` so extension-less
  clean URLs resolve to their prerendered `.html` at the filesystem layer (Vercel
  checks files *before* rewrites). The SPA fallback rewrite must target `/`
  (**not** `/index.html` — `cleanUrls` 308-redirects `/index.html` → `/`, so a
  rewrite to `/index.html` becomes unreachable and file-less paths 404).
  `vercel.json` is **strict JSON — no comments** (a commented file fails the build).
- **Cloudflare Worker (migration target) — `wrangler.jsonc`:** `assets.directory`
  = `./dist`, `not_found_handling: "single-page-application"` for SPA routes, plus
  `html_handling: "auto-trailing-slash"` so clean URLs resolve to the prerendered
  `.html` *before* the SPA not-found fallback runs. `wrangler.jsonc` allows `//`
  comments. Do NOT add `custom_domain` routes until the zone is live on
  Cloudflare, or `wrangler deploy` fails ("zone not found").
- **Headers:** `public/_headers` (CF) / `vercel.json` `headers` (Vercel) — cache
  (`/assets/*` immutable, HTML no-cache) + security headers. Vite copies
  `public/` into `dist/` at build.
- **Vite version:** must be ≥ 6.0.0.
- **Env vars:** set `VITE_GA_ID` (and any `VITE_*` vars) in the serving
  platform's env settings — inlined at build time.

### SEO routing bug — 2026-07 (root-caused the hard way)
**Symptom:** `curl https://homeloom.app/homeschool-laws/california` (no JS = what
Googlebot sees) returned the **homepage shell** — `canonical="/"`, no disclaimer,
no `§33190` — while the page looked correct in a browser (client JS rendered the
route) and `.../california.html` (explicit extension) served the correct
prerendered file.

**Root cause:** an SPA **catch-all rewrite** served the shell for every
extension-less clean URL, shadowing the prerendered per-route files. Static
assets (the explicit `.html`) bypassed the rewrite; clean URLs fell through to it.

**Lessons for next time:**
1. **Read `curl -I` response headers FIRST** to identify the real host before
   touching deploy config. The docs claimed Cloudflare; production was Vercel.
   Two fix cycles were burned editing the wrong platform's config (`_redirects`,
   then `wrangler.jsonc`) because the header check was skipped.
2. **Prerendered pages + a few SPA routes** need the host to resolve clean URLs
   to `.html` *before* the SPA fallback. Vercel: `cleanUrls:true` + rewrite→`/`.
   CF Worker: `html_handling:"auto-trailing-slash"` + `not_found_handling:
   "single-page-application"`.
3. **Config-format traps that break the deploy:** `vercel.json` is strict JSON
   (no comments); a CF `_redirects` rule like `/child/*  /index.html  200` trips
   Cloudflare's infinite-loop detector and fails the build.
4. **Verify with `curl` (no JS), never a browser** — the browser hides the bug
   because client hydration renders the route regardless of what the server sent.

## Out of scope / don't touch
- <!-- leave blank for user to fill -->

## Versioning

This project follows the two-level versioning convention canonical
to the portfolio (see `sites/portfolio/AI_AGENTS.md` for the full
statement):

- **`vN`** — major capability tier (SemVer-MAJOR semantics).
- **`vN.X`** — phase letter within a tier (A, B, C, …) for
  internal slicing.
- **`vN.X.Y`** — numeric sub-phase for follow-up work that lands
  after `vN.X` shipped.

Track current phase + completed work in `docs/prd.md`.

## Building info

This project's `Makefile` forwards every target to `../Makefile`
(the sites/ workspace) which delegates per-stack work to the central
builder at `~/work/projects/builder/`. Common: `make deps`, `make dev`,
`make build`. Don't duplicate build logic per-site.

## Deployment info

See the **Deployment** section above for the authoritative, current
state. In short: `homeloom.app` is served by **Vercel today** (push to
`main` auto-builds via `vercel.json`, output `dist/`); a parallel
Cloudflare Worker (`homeloop`) is the migration target but the domain is
not cut over yet. Do not assume Cloudflare is live — `curl -I` the domain
to confirm the host before changing deploy config.

## Summary

*one paragraph: what this site is, what it does*

(to be filled in)

## Audience

*one sentence: who this is for (broad demographic)*

(to be filled in)

## ICP

*the specific ideal customer — demographics, pain points, what they use today. More detail than Audience: Audience is the broad demo ("homeowners with EV chargers"), ICP is the specific targetable subset ("Tesla owners in CA who installed in last 90d, paid $2k+")*

(to be filled in)

## Goals

*1-2 sentences: primary business / product goal*

(to be filled in)

## Tech stack

*frontend stack (Astro / Vite / etc.) + key deps*

(to be filled in by bootstrap template renderer)

## Content strategy

*what content this site needs — page types, initial topics, format mix (long-form vs reference vs tool)*

(to be filled in)

## Conventions

*pnpm-only, Vite ≥6, deferred-decisions log, project-specific quirks*

(to be filled in by bootstrap template renderer)
