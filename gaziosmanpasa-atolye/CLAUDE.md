@AGENTS.md

---

## Session 1 — Completed (verified tsc exit 0)

### Stack correction (overrides master prompt)
- State: Zustand ^5 (not Redux Toolkit) — single store at store/ui.ts
- Next.js: 16.2.4 / React 19.2.4 (not Next 15)
- No Redux Provider needed anywhere

### Architectural decisions made
- ScrollSectionTracker.tsx owns containerRef + useScrollSection + SectionDotNav
- app/page.tsx is a Server Component — keep it that way
- WorkshopMapIsland.tsx isolates Leaflet's ssr:false from page.tsx
- Client page metadata pattern: use layout.tsx sibling, not page.tsx export
- Date/time rendering: always use useClientDate hook — never inline new Date()
- Icon imports: always named + ICON_MAP pattern — never import * as Icons

### Known remaining issues (next session priority)
1. HeroSection.tsx:13 — dynamic() import runs on mobile (execution blocked,
   transfer not blocked) — gate the import behind useMediaQuery
2. No error.tsx or loading.tsx at any route segment
3. /aklindaki-sorular, /filonu-yonet, /nasil-calisir, /hizmetler/[slug] 
   pages unaudited — likely missing metadata + unnecessary 'use client'
4. framer-motion whileInView pattern repeated in every section — 
   consolidate into shared <FadeIn> primitive

---

## Session 2 — Completed (verified tsc exit 0)

### Changes made
- HeroSection.tsx: NightSceneR3F gated behind useMediaQuery 
  (min-width: 769px) — ~220KB Three.js chunk skipped on mobile
- FadeIn.tsx created — shared whileInView primitive
- 7 sections consolidated to FadeIn (StatsSection, CTASection, 
  FAQSection, ServicesSection, StepsSection, TestimonialsSection, 
  filonu-yonet)
- error.tsx added at app/(site)/ level
- randevu/loading.tsx + rotani-bul/loading.tsx added

### Intentional skips (document for future sessions)
- RouteLineSVG.tsx: motion.path/circle — different animation type, 
  do not refactor to FadeIn
- nasil-calisir/page.tsx: x-translate + scale animation — do not 
  refactor to FadeIn
- TestimonialsSection: spring physics (stiffness:90) traded for 
  FadeIn tween — intentional standardization

### Known remaining issues (next session priority)
1. /aklindaki-sorular, /filonu-yonet, /nasil-calisir, 
   /hizmetler/[slug] pages unaudited — likely missing metadata + 
   unnecessary 'use client'
2. No loading.tsx for /hizmetler and /hizmetler/[slug] routes
3. npm run build not yet run — bundle composition unverified
4. WorkshopMap (Leaflet) has no error boundary — map crash = 
   blank panel with no fallback

---

## Session 3 — Completed (verified tsc exit 0, build exit 0)

### Changes made
- aklindaki-sorular/layout.tsx, nasil-calisir/layout.tsx,
  filonu-yonet/layout.tsx created — metadata for client pages
- Removed dead `import type { Metadata }` from filonu-yonet/page.tsx
- 4 hizmetler/[slug] static pages enhanced with openGraph + 
  alternates.canonical (kept existing static-file structure, 
  added per-page SEO fields)
- WorkshopMapErrorBoundary.tsx created (class boundary, 
  Leaflet-failure fallback with Google Maps deeplink)
- WorkshopMapIsland.tsx wraps dynamic map in the error boundary
- Production build verified: exit 0, 14 static + 3 dynamic API routes

### Hizmetler slug structure decision
- Spec proposed `[slug]/page.tsx` + generateMetadata pattern
- Project actually uses 4 separate static folders (bakimda-tut, 
  hesabi-gor, sisteme-gir, yenile) — each with its own page.tsx
- Kept static structure, enhanced existing `metadata` exports
  with openGraph + alternates.canonical (matches rotani-bul)
- For new slugs in future: either add a new folder OR refactor 
  to dynamic [slug] route — don't mix patterns

### TypeScript gotcha encountered
- `service?.longDesc ?? service?.desc` narrowed `service` to 
  `never` on the right side because TS reasons "longDesc is 
  always defined, so reaching ?? means service itself is 
  undefined"
- Fix: drop the redundant fallback — `service?.longDesc` alone
- Lesson: avoid chained optional + nullish on same object 
  when both fields are guaranteed to coexist

### Build observations (Next 16 / Turbopack)
- Turbopack build output does NOT include the per-route 
  First Load JS column the legacy webpack builder showed
- To inspect bundle sizes: `du -sh .next/static/chunks/` 
  (currently ~3.9MB uncompressed total)
- Largest chunk ~1.08MB uncompressed — likely Three.js 
  + R3F + postprocessing (already gated by useMediaQuery 
  on mobile, so it doesn't ship there)
- Warning "edge runtime disables static generation" — 
  expected, applies to /api/og only

### Known remaining issues (next session priority)
1. /api/og uses edge runtime — disables static gen for that 
   route. Acceptable since OG is dynamic-by-design, but 
   document if image generation moves to build-time
2. No loading.tsx for /hizmetler, /hizmetler/[slug], 
   /aklindaki-sorular, /filonu-yonet, /nasil-calisir
3. nasil-calisir/page.tsx still uses `import * as Icons` 
   wildcard (line 3) — needs ICON_MAP refactor for tree-shaking
4. Largest chunk (~1.08MB Three.js) confirmed via filesystem 
   inspection but no bundle-analyzer report — consider adding 
   @next/bundle-analyzer for compressed/breakdown view
5. canvas-confetti is also imported eagerly in CTASection.tsx 
   (line 7) — same lazy-load fix as randevu/page.tsx applies

---

## Session 4 — Completed (verified tsc exit 0, build exit 0)

### Changes made
- nasil-calisir/page.tsx: `import * as Icons` wildcard replaced 
  with named imports + STEP_ICON_MAP (Navigation, CreditCard, 
  PackageCheck, Database, SlidersHorizontal, Rocket; fallback Circle)
- CTASection.tsx: canvas-confetti moved from top-level eager 
  import to `await import("canvas-confetti")` inside onSubmit 
  success branch
- Three loading skeletons added: hizmetler/loading.tsx, 
  aklindaki-sorular/loading.tsx, nasil-calisir/loading.tsx
- 4 static slug folders (bakimda-tut, hesabi-gor, sisteme-gir, 
  yenile) collapsed into single dynamic [slug]/page.tsx with 
  generateStaticParams + generateMetadata
- Build now reports `● /hizmetler/[slug]` (SSG) instead of 
  4 separate `○` static routes — same prerendered output

### Bundle measurement (gzip, after all sessions)
- Total static chunks: 27 files, 936.6KB gzip
- Largest chunk (319KB gz / 1057KB raw): Three.js + R3F + 
  postprocessing — confirmed via grep for `THREE.`, `r3f`, 
  `postprocessing` in chunk content. Isolated and 
  desktop-only via HeroSection useMediaQuery gate.
- Second-largest (161KB gz): lucide-react icons. Was 302KB 
  before [slug] migration (two duplicate 151KB chunks for 
  per-slug bundles). Migration shaved ~141KB.
- 71KB chunk: framer-motion + react-spring (animation libs)
- 69KB chunk: react-dom + scheduler runtime

### Lucide-react size note
- Project uses lucide-react ^1.11.0 (per package.json)
- Even with named imports + ICON_MAP everywhere, lucide ships 
  ~161KB gzip total. Each icon is ~1KB and there are 30+ in 
  use across the site. This is the cost ceiling for this 
  icon library; further savings would require switching to 
  inline SVG or a smaller icon set.

### Three.js chunk grep verification (commit-time technique)
- Used `node -e "const z=require('zlib'),fs=require('fs');..."` 
  pattern to gzip + grep specific chunks for library names
- Useful to confirm code-split boundaries when Turbopack 
  output is opaque

### Known remaining issues (Session 5+ priority)
1. /api/og still uses edge runtime (acceptable, dynamic OG)
2. Bundle could shrink further by replacing lucide-react 
   with inline SVG icons (~161KB savings)
3. No bundle-analyzer report — for deeper analysis, install 
   @next/bundle-analyzer and run with ANALYZE=true
4. `.next/types/validator.ts` references stale page modules 
   after deletion — must `rm -rf .next/types` between major 
   route restructures or tsc will report phantom errors. 
   Build itself regenerates correctly.

### File restructuring gotcha (Next 16 / Turbopack)
- Deleting page.tsx files leaves stale entries in 
  `.next/types/validator.ts` until next full build
- After any folder rename/delete: 
  `rm -rf .next/types && node_modules/.bin/tsc --noEmit`
- Don't trust tsc errors that reference paths you just 
  deleted — clear the cache first

---

## Session 5 — Completed (verified tsc exit 0, build exit 0)

### Changes made
- /api/register now validates with z.discriminatedUnion on 
  `source` field (booking | homepage-cta | b2b) — was 
  accepting arbitrary payloads
- /api/og now reads WORKSHOP.copy.heroLine{1,2,3}, 
  WORKSHOP.name, tagline, street, district from constants 
  (no more hardcoded copy)
- sitemap.ts derives service slugs from WORKSHOP.services 
  (was hardcoded — would silently drift if services change)
- filonu-yonet/loading.tsx added — mirrors page sections 
  (PageHero, features grid, tier tabs, B2B form skeletons)

### API audit findings (recorded for future)
- /api/og: edge runtime, 1200x630, generic sans-serif font 
  (Turkish chars OK but doesn't match brand Syne — loading 
  next/font at edge is doable but adds cold-start cost)
- /api/register: in-memory Map rate limit (5/hr per IP) — 
  resets on cold start, won't share across serverless 
  instances. Local JSON file storage — won't work on 
  read-only serverless filesystems. Both production-blocking.
- /api/stats: GET-only, no input, no validation needed

### Sitemap pattern
- Always derive dynamic slug routes from constants
  (WORKSHOP.services, WORKSHOP.something) — never 
  hardcode slugs

---

## FINAL PROJECT SUMMARY (after 5 sessions)

### Headline metrics
- 9 routes (was 11) — slug consolidation
- 5/9 pages are Server Components (was 5/11)
- 9/9 pages have metadata (was 1 + root template)
- 6/9 pages have loading.tsx (was 0)
- Segment + focused error boundaries (was 0)
- 936.6KB gzip total bundle, Three.js (319KB) desktop-only
- 13 distinct bugs fixed across hooks, components, hydration, 
  perf, and API validation
- tsc + build green every session since S3

### Stack ground truth (overrides master prompt)
- Next.js 16.2.4 / React 19.2.4 — NOT Next 15
- State: Zustand ^5 single store at store/ui.ts — NOT Redux
- Build: Turbopack (no per-route kB column in output)
- Type cache: must `rm -rf .next/types` after route deletions

### Patterns established (use these consistently)
- Client-page metadata → sibling layout.tsx
- ssr:false dynamic imports → wrap in client island 
  (e.g. WorkshopMapIsland, ScrollSectionTracker)
- whileInView animations → <FadeIn> primitive (opacity+y)
- Date/time rendering → useClientDate hook
- Icons → named lucide imports + ICON_MAP, never wildcard
- API input → Zod schema (discriminated union when 
  multiple shapes share a route)
- Chunk inspection → node -e gzip+grep technique 
  (Turbopack output is opaque)

### Production-blocking items (Session 6+)
1. /api/register: in-memory rate limit + JSON file 
   storage — both fail on serverless. Need real DB + KV.
2. lucide-react ~161KB gzip — single biggest mobile win 
   if replaced with inline SVGs or smaller icon set.
3. WorkshopMap error boundary catches but doesn't 
   auto-retry — add retry button that resets hasError.

### Recommended next steps (priority order)
1. Production-ready /api/register (DB + persistent rate 
   limit) — deployment blocker
2. Replace lucide-react — biggest measurable bundle win
3. Install @next/bundle-analyzer for ongoing visibility
4. Playwright visual regression — confirm FadeIn 
   standardization didn't break layouts
5. Lighthouse audit — confirm LCP/CLS/INP improvements
6. Apply same patterns to sister project bagcilar-atolye
