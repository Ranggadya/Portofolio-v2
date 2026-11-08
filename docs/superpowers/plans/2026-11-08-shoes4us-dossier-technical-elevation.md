# Shoes4Us Case Study Dossier Technical Elevation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the technical depth of the Shoes4Us project in the portfolio by updating its Case Study Dossier data in `src/data/projects.ts` to highlight enterprise security, sub-15ms fast queries, and atomic concurrency locking without altering existing component styling or the front-facing mockup.

**Architecture:** Pure data-layer enhancement within the strongly typed `ProjectDossier` structure in `src/data/projects.ts`. Preserves all schema contracts consumed by `ProjectDossierModal.tsx`, keeping front-facing `Shoes4UsMockup.tsx` untouched and styling 100% consistent with the active portfolio design system.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Vite.

**Spec:** [`docs/superpowers/specs/2026-11-08-shoes4us-dossier-technical-elevation-design.md`](../specs/2026-11-08-shoes4us-dossier-technical-elevation-design.md)

## Global Constraints

- Do not modify `Shoes4UsMockup.tsx` (front-page mockup card must remain identical to its current state).
- Do not alter visual CSS/theme styling or token usage in `ProjectDossierModal.tsx`.
- Must satisfy all TypeScript types defined in `src/types/index.ts` (`Project`, `ProjectDossier`, `DossierLayer`, etc.) without type errors.
- Build command `npm run build` (`tsc --noEmit && vite build`) must pass cleanly with 0 errors.

## Review Focus

1. **Undefined properties in `dossier`**: Ensure every required property (`ref`, `discipline`, `status`, `featuredTag`, `estYear`, `summary`, `clientContext`, `roleDiscipline`, `timelineState`, `primaryStack`, `liveUrl`, `githubUrl`, `challengeParagraphs`, `systemDesignHeadline`, `systemDesignDesc`, `layers`, `codeSnippet`, `decisions`, `capabilities`, `tools`, `quote`) is populated with string/array types so no runtime crashes occur when rendering tabs.
2. **Missing code snippet fields**: Ensure `codeSnippet` contains both `filename`, `lang`, and `code`.
3. **Array bounds and rendering**: `layers`, `decisions`, `capabilities`, `tools`, and `challengeParagraphs` must have non-empty arrays that map cleanly across mobile and desktop viewports.
4. **Theme compatibility**: Content text must not use hardcoded contrasting colors that clash in either light or dark mode inside the modal.
5. **No regression on other projects**: Projects `portfolio` and `ayamsehat` in `src/data/projects.ts` must remain completely intact.

---

### Task 1: Update Shoes4Us Dossier Data with Technical & Selling Narrative

**Files:**
- Modify: `src/data/projects.ts:253-394`

**Interfaces:**
- Consumes: `Project` and `ProjectDossier` types from `src/types/index.ts`.
- Produces: Updated `shoes4us` project object in `projects` array containing enriched `dossier`.

- [ ] **Step 1: Inspect existing `shoes4us` entry in `src/data/projects.ts`**
  Verify the exact line range and properties of `id: 'shoes4us'`.

- [ ] **Step 2: Update `dossier.summary` and `dossier.challengeParagraphs`**
  Replace with the approved high-converting narrative that addresses real e-commerce challenges (checkout latency, payment security, and size-specific overselling drama) and the architecture solution.

- [ ] **Step 3: Update `dossier.layers` (4 Architecture Layers)**
  - Layer 01: Client Storefront (Vite / React 18 SPA) — Instant Discovery & Cart State.
  - Layer 02: High-Speed Backend (Go 1.25 / Chi Router) — Sub-15ms Query Latency & pgxpool.
  - Layer 04: Zero-Trust Defense (Security & RBAC) — Bcrypt, Dual-Mode JWT (Bearer + HttpOnly), Anti-SQLi.
  - Layer 04: Transactional Integrity (PostgreSQL Locks) — Atomic Row-Level Stock Locking (`SELECT ... FOR UPDATE`).

- [ ] **Step 4: Update `dossier.decisions` & `dossier.capabilities`**
  Reinforce the 3 core pillars:
  - Fast Query & Low Latency (Sub-15ms API via Go + pgx connection pool + B-Tree composite indexes)
  - Zero-Trust Security (Bcrypt hash, dual-mode JWT auth, RBAC guard, parameterized SQL)
  - Atomic Concurrency Integrity (0% stock oversell via row-level locking)

- [ ] **Step 5: Verify real Go atomic code snippet in `dossier.codeSnippet`**
  Confirm `inventory_service.go` accurately highlights `SELECT ... FOR UPDATE` row locking.

- [ ] **Step 6: Run TypeScript typecheck & build**
  Run: `npm run build`
  Expected: Clean build (`tsc --noEmit && vite build`) with exit code 0.

- [ ] **Step 7: Commit changes**
  Run: `git add src/data/projects.ts docs/superpowers/`
  Run: `git commit -m "feat(projects): elevate shoes4us dossier with technical security and query performance narrative"`

---

### Task 2: Verify End-to-End Dossier Modal Rendering & Theme Consistency

**Files:**
- Verify: `src/components/projects/ProjectDossierModal.tsx`
- Verify: `src/data/projects.ts`

**Interfaces:**
- Consumes: `projects` from `src/data/projects.ts`.
- Produces: Seamless modal experience across all 4 tabs (`01. OVERVIEW`, `02. CODE ARCHITECTURE`, `03. TECH STACK & PATTERNS`, `04. BENCHMARKS & PERFORMANCE`).

- [ ] **Step 1: Run mechanical design inspection via Impeccable script**
  Run: `& "C:\Users\LENOVO\.gemini\config\skills\impeccable\scripts\impeccable.cmd" detect --json src/data/projects.ts src/components/projects/ProjectDossierModal.tsx`
  Expected: Empty list `[]` (no anti-patterns).

- [ ] **Step 2: Run production build check**
  Run: `npm run build`
  Expected: Exit code 0, 0 errors.

- [ ] **Step 3: Push to repository**
  Run: `git push origin main`

