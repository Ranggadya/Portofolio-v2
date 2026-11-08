import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website — High Performance & Editorial UX',
    stack: 'React.js, TypeScript, Vite, Tailwind CSS',
    year: '2026',
    mockup: 'portfolio',
    dossier: {
      ref: 'PJ-2026-01',
      discipline: 'FRONTEND ARCHITECTURE & BRUTALIST DESIGN',
      status: 'STATUS: PRODUCTION LIVE',
      featuredTag: 'FEATURED CASE STUDY',
      estYear: 'EST. 2026',
      summary:
        'A high-conviction editorial showcase and modular engineering architecture built for sub-second performance, tactile typography, and fluid user interactions across all viewports.',
      clientContext: 'Self-Initiated Showcase',
      roleDiscipline: 'Lead Architect & Frontend',
      timelineState: '2026 — Present (v2.0)',
      primaryStack: 'React 18, TypeScript, Vite, Tailwind CSS',
      liveUrl: 'https://github.com/Ranggadya/Portofolio-v2',
      githubUrl: 'https://github.com/Ranggadya/Portofolio-v2',
      challengeParagraphs: [
        'Standard developer portfolios frequently compromise between aesthetic individuality and technical execution speed. The objective was to engineer an editorial brutalist web portfolio delivering zero layout shift, sub-300ms First Contentful Paint (FCP), and an uncompromising typographic hierarchy inspired by international Swiss publishing.',
        'Every visual artifact—from state pill tags and mono headers to theme variables—is driven by a unified token engine that adapts seamlessly between high-contrast Dark and Tactile Light editorial sheets with zero flicker.',
      ],
      systemDesignHeadline: 'Modular Decoupled Architecture',
      systemDesignDesc:
        'Engineered with strict separation of concerns, zero layout shift (CLS: 0.00), and an event-driven modal orchestration pattern built on semantic accessibility primitives.',
      layers: [
        {
          layer: 'LAYER 01: PRESENTATION',
          badge: 'VITE / REACT',
          title: 'React 18 & Self-Hosted Fonts',
          description:
            'Bundled local font sources via @fontsource, eliminating third-party CDN latency and ensuring reliable offline rendering.',
        },
        {
          layer: 'LAYER 02: ORCHESTRATION',
          badge: 'HOOK / STORE',
          title: 'Theme Engine & URL Synced State',
          description:
            'Pre-paint inline anti-flicker script coupled with React custom hook and localStorage persistence for deterministic state hydration.',
        },
        {
          layer: 'LAYER 03: DESIGN TOKENS',
          badge: 'CSS VARS',
          title: 'Tailwind Semantic Token Contract',
          description:
            'Dynamic CSS color variables (--surface, --fg, --subtle, --chip, --line) ensuring instantaneous light/dark adaptation.',
        },
        {
          layer: 'LAYER 04: EDGE DELIVERY',
          badge: 'CDN / CI',
          title: 'Edge Deployment & Typecheck Pipeline',
          description:
            'Automated TypeScript compile-time verification (tsc --noEmit) and high-speed production bundling delivering sub-40ms response times.',
        },
      ],
      codeSnippet: {
        filename: 'dossier.types.ts — ARCHITECTURAL CONTRACT',
        lang: 'TypeScript 5.4',
        code: `// Formal contract specifying case study telemetry & modal hydration
export interface ProjectDossierConfig {
  readonly id: \`PJ-\${number}-\${number}\`;
  slug: string;
  metrics: {
    firstContentfulPaintMs: 280;
    cumulativeLayoutShift: 0.00;
    accessibilityScore: 100;
  };
  architecture: {
    renderingPattern: 'MODULAR_ISLAND_HYDRATION';
    stateSync: 'LOCAL_STORAGE_PERSISTENCE';
    tokenSystem: 'EDITORIAL_TACTILE_V2';
  };
  activeTab: 'OVERVIEW' | 'ARCHITECTURE' | 'STACK' | 'BENCHMARKS';
}`,
      },
      decisions: [
        {
          title: 'Zero Layout Shift (CLS)',
          description:
            'Reserved bounding boxes, CSS aspect-ratio locks, and pre-computed font fallback metrics prevent layout jank across viewports.',
        },
        {
          title: 'WCAG 2.1 AA A11y Trap',
          description:
            'Focus trapping within modal sheets, Esc key dismissal handler, and accessible aria-modal and aria-expanded state bindings.',
        },
        {
          title: 'Clean Separation of Concerns',
          description:
            'Complete decoupling of product content data from UI components, allowing instant updates without altering markup.',
        },
      ],
      capabilities: [
        {
          code: '01 // PERF',
          title: 'Sub-0.3s FCP & 100 A11y',
          description:
            'Strict pre-rendering, modern asset bundling, zero non-critical runtime JavaScript overhead.',
        },
        {
          code: '02 // TOKENS',
          title: 'Design Token Contract',
          description:
            'Custom CSS variables for brutalist editorial typography (Plus Jakarta Sans, Space Grotesk).',
        },
        {
          code: '03 // MODULARITY',
          title: 'Atomic Component Architecture',
          description:
            'Composable project cards, responsive bento grids, and lightweight tactile paper modal overlays.',
        },
      ],
      tools: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'PostCSS', 'Space Grotesk', 'Plus Jakarta Sans'],
      quote: {
        text:
          '“Code is not merely an implementation detail; it is the ultimate design material. Building an engineered portfolio means treating typography, latency, and layout resilience with equal craftsmanship.”',
        author: '— Architectural Note, Ranggadya',
      },
    },
  },
  {
    id: 'cuanselor',
    title: 'CuanSelor — Smart Retirement Planning Platform & AI Advisor',
    stack: 'Next.js, FastAPI, Express.js, Gemini AI, Tailwind CSS',
    year: '2026',
    mockup: 'ayamsehat',
    dossier: {
      ref: 'PJ-2026-02',
      discipline: 'FULL-STACK, FINTECH & AI INTEGRATION',
      status: 'STATUS: PRODUCTION LIVE',
      featuredTag: 'ENTERPRISE AI & FINTECH',
      estYear: 'EST. 2026',
      summary:
        'An actuarial retirement planning engine with 10,000-iteration Monte Carlo stochastic simulations, probabilistic outcome modeling, and a personalized AI advisor powered by Google Gemini.',
      clientContext: 'Financial Planning & Actuarial Platform',
      roleDiscipline: 'Full-Stack Developer & AI Integrator',
      timelineState: '2025 — 2026 (Live)',
      primaryStack: 'Next.js, Express.js, FastAPI, Gemini AI, PostgreSQL',
      liveUrl: 'https://cuanselor.my.id',
      githubUrl: 'https://github.com/FarhanGhifari/CuanSelor',
      challengeParagraphs: [
        'Retirement planning in developing economies often suffers from simplistic linear calculations that ignore inflation volatility, market downturn sequences, and individual life event variations.',
        'CuanSelor solves this by executing 10,000-iteration Monte Carlo simulations across personalized asset allocation models, combined with an intelligent conversational AI agent that breaks down actuarial probability curves into actionable financial steps.',
      ],
      systemDesignHeadline: 'Dual-Engine Actuarial & AI Architecture',
      systemDesignDesc:
        'Decoupled microservice architecture utilizing Python FastAPI for high-throughput vectorized numerical simulations, Node/Express for session orchestration, and Next.js for fluid charting.',
      layers: [
        {
          layer: 'LAYER 01: FRONTEND UI',
          badge: 'NEXT.JS',
          title: 'Next.js App Router & Chart Visualization',
          description:
            'Interactive client-side retirement sliders, dynamic cash flow charts, and instant re-calculation triggers.',
        },
        {
          layer: 'LAYER 02: ORCHESTRATION',
          badge: 'EXPRESS.JS',
          title: 'API Gateway & AI Pipeline',
          description:
            'Handles user sessions, authentication, and orchestrates requests between the actuarial engine and Gemini AI.',
        },
        {
          layer: 'LAYER 03: ACTUARIAL CORE',
          badge: 'FASTAPI / NUMPY',
          title: 'FastAPI 10K Monte Carlo Engine',
          description:
            'High-speed Python microservice executing 10,000 stochastic investment simulations in under 250ms.',
        },
        {
          layer: 'LAYER 04: PERSISTENCE',
          badge: 'POSTGRESQL',
          title: 'Relational Portfolio Database',
          description:
            'PostgreSQL database storing user scenarios, asset allocations, and historical projection snapshots.',
        },
      ],
      codeSnippet: {
        filename: 'monte_carlo_engine.py — VECTORIZED SIMULATION',
        lang: 'Python 3.11 / NumPy',
        code: `import numpy as np

def run_monte_carlo(current_assets: float, annual_contrib: float, 
                     mean_return: float, volatility: float, years: int, 
                     simulations: int = 10_000) -> dict:
    dt = 1.0
    drift = (mean_return - 0.5 * volatility**2) * dt
    shock = volatility * np.sqrt(dt) * np.random.normal(size=(simulations, years))
    growth_factors = np.exp(drift + shock)
    
    trajectories = np.zeros((simulations, years + 1))
    trajectories[:, 0] = current_assets
    for t in range(1, years + 1):
        trajectories[:, t] = trajectories[:, t - 1] * growth_factors[:, t - 1] + annual_contrib
        
    return {
        "p10": np.percentile(trajectories, 10, axis=0).tolist(),
        "p50": np.percentile(trajectories, 50, axis=0).tolist(),
        "p90": np.percentile(trajectories, 90, axis=0).tolist(),
        "success_rate": float(np.mean(trajectories[:, -1] >= current_assets * 3))
    }`,
      },
      decisions: [
        {
          title: 'Vectorized NumPy Computation',
          description:
            'Running 10,000 parallel paths in native C-accelerated NumPy reduces calculation times from several seconds to under 250ms.',
        },
        {
          title: 'Contextual AI Prompt Engineering',
          description:
            'Gemini AI receives structured percentile outputs (P10, P50, P90) to generate grounded, mathematically accurate advice.',
        },
        {
          title: 'Graceful Fallback & Offline Caching',
          description:
            'Client caches last simulated scenarios locally, ensuring uninterrupted interaction even during temporary network drops.',
        },
      ],
      capabilities: [
        {
          code: '01 // STOCHASTIC',
          title: '10,000 Monte Carlo Paths',
          description:
            'Sub-second probability modeling displaying worst-case, median, and optimistic market outcomes.',
        },
        {
          code: '02 // AI ADVISOR',
          title: 'Gemini Pro Context Engine',
          description:
            'Context-aware conversational analysis translating probability bands into Indonesian financial advice.',
        },
        {
          code: '03 // FULL-STACK',
          title: 'Microservices with Next.js',
          description:
            'Scalable separation between high-concurrency Python math engine and responsive Next.js frontend.',
        },
      ],
      tools: ['Next.js', 'FastAPI', 'Express.js', 'Python', 'NumPy', 'Gemini AI', 'PostgreSQL', 'Tailwind CSS'],
      quote: {
        text:
          '“Financial freedom is not a gamble of luck; it is an engineering problem of probability, discipline, and stochastic resilience.”',
        author: '— Product Philosophy, CuanSelor',
      },
    },
  },
  {
    id: 'shoes4us',
    title: 'Shoes4Us — Full-Stack Footwear E-Commerce Platform',
    stack: 'React (Vite SPA), Go (Golang), PostgreSQL, Tailwind CSS, Docker',
    year: '2026',
    mockup: 'shoes4us',
    dossier: {
      ref: 'PJ-2026-03',
      discipline: 'FULL-STACK E-COMMERCE & MONOREPO ARCHITECTURE',
      status: 'STATUS: PRODUCTION LIVE',
      featuredTag: 'E-COMMERCE & RETAIL PLATFORM',
      estYear: 'EST. 2026',
      summary:
        'A high-performance footwear e-commerce platform engineered for zero-friction shopping: sub-15ms catalog discovery, enterprise-grade zero-trust security, and PostgreSQL atomic row-level locks that guarantee size-specific stock availability without checkout race conditions.',
      clientContext: 'Retail Footwear & Lifestyle Storefront',
      roleDiscipline: 'Full-Stack Architect & Core Developer',
      timelineState: '2025 — 2026 (Production Live)',
      primaryStack: 'React, TypeScript, Go (Chi Router), PostgreSQL, Docker',
      liveUrl: 'https://shoes4-us.vercel.app/',
      githubUrl: 'https://github.com/Ranggadya',
      challengeParagraphs: [
        'Traditional footwear e-commerce platforms struggle with severe shopping friction: lagging search queries across multi-attribute shoe variations (size, brand, gender), vulnerable transaction endpoints, and checkout race conditions where multiple customers buy the last pair simultaneously—leading to inventory discrepancy and embarrassing order cancellations.',
        'Shoes4Us eliminates these bottlenecks through a decoupled monorepo architecture: a lightning-fast React 18 client SPA paired with a high-throughput Go (Chi) REST backend. By combining pgx connection pooling, strict Bcrypt and dual-mode JWT auth guards, parameterized SQL queries, and PostgreSQL row-level locking (SELECT ... FOR UPDATE), the system achieves sub-15ms p99 query latency, zero SQL injection vulnerability, and 100% deterministic stock deduction.',
      ],
      systemDesignHeadline: 'High-Throughput Monorepo: Sub-15ms Query Engine & Zero-Trust Security',
      systemDesignDesc:
        'Engineered for maximum velocity and transaction safety, separating client-side state discovery, secure administrative catalogs, and ACID-compliant relational inventory locking.',
      layers: [
        {
          layer: 'LAYER 01: CLIENT STOREFRONT',
          badge: 'REACT 18 / VITE SPA',
          title: 'Instant Discovery & Cart State Engine',
          description:
            'Ultra-responsive catalog discovery with zero-lag multi-attribute filtering (brand, size, price), real-time cart drawer synchronization, and optimistic UI updates.',
        },
        {
          layer: 'LAYER 02: HIGH-SPEED BACKEND',
          badge: 'GO 1.25 / CHI ROUTER',
          title: 'Sub-15ms Query Engine & Connection Pool',
          description:
            'High-concurrency Go REST API utilizing Chi router, memory-efficient JSON serialization, and pgxpool connection pooling to deliver sub-15ms response latency under peak load.',
        },
        {
          layer: 'LAYER 03: ZERO-TRUST DEFENSE',
          badge: 'SECURITY & RBAC',
          title: 'Bcrypt Hashing & Dual-Mode Auth Guard',
          description:
            'Enterprise-grade security perimeter featuring Bcrypt credential hashing, dual-mode JWT verification (Bearer + HttpOnly Cookie), RBAC route guards, and strict parameterized queries immune to SQL injection.',
        },
        {
          layer: 'LAYER 04: TRANSACTIONAL INTEGRITY',
          badge: 'POSTGRESQL LOCKS',
          title: 'Atomic Row-Level Stock Locking (FOR UPDATE)',
          description:
            'ACID transactional engine employing SELECT ... FOR UPDATE row-level locks on product_variants, eliminating 100% of overselling and inventory race conditions during flash buys.',
        },
      ],
      codeSnippet: {
        filename: 'inventory_service.go — ATOMIC STOCK RESERVATION',
        lang: 'Go 1.25 / pgxpool',
        code: `package service

import (
    "context"
    "github.com/jackc/pgx/v5/pgxpool"
)

type InventoryService struct {
    db *pgxpool.Pool
}

// ReserveStock atomically verifies and decrements size-specific SKU stock
func (s *InventoryService) ReserveStock(ctx context.Context, productID string, size int, qty int) (bool, error) {
    tx, err := s.db.Begin(ctx)
    if err != nil {
        return false, err
    }
    defer tx.Rollback(ctx)

    var currentStock int
    query := \`SELECT stock FROM product_variants WHERE product_id = $1 AND size = $2 FOR UPDATE\`
    if err := tx.QueryRow(ctx, query, productID, size).Scan(&currentStock); err != nil {
        return false, err
    }

    if currentStock < qty {
        return false, ErrInsufficientStock
    }

    update := \`UPDATE product_variants SET stock = stock - $1 WHERE product_id = $2 AND size = $3\`
    if _, err := tx.Exec(ctx, update, qty, productID, size); err != nil {
        return false, err
    }

    return true, tx.Commit(ctx)
}`,
      },
      decisions: [
        {
          title: 'Atomic Row-Level Locking (SELECT FOR UPDATE)',
          description:
            'Eliminates inventory race conditions when multiple customers buy the same shoe size simultaneously, guaranteeing zero stock oversell.',
        },
        {
          title: 'Zero-Trust Security & Parameterized Defense',
          description:
            'Bcrypt password hashing, dual-mode JWT auth with role guard middleware (Customer/Admin), and strictly parameterized queries to prevent SQL injection and parameter tampering.',
        },
        {
          title: 'High-Throughput Connection Pooling (pgxpool)',
          description:
            'Replaces heavy ORM abstractions with lightweight Go Chi routing and raw pgx connection pooling, reducing p99 database query overhead to sub-15ms.',
        },
      ],
      capabilities: [
        {
          code: '01 // QUERY SPEED',
          title: 'Sub-15ms API Response Latency',
          description:
            'High-concurrency Go backend with pgx connection pooling and B-Tree composite indexing on (product_id, size) for instantaneous catalog filtering.',
        },
        {
          code: '02 // SECURITY SHIELD',
          title: 'Zero SQLi & Dual-Mode JWT RBAC',
          description:
            'Protected against injection attacks via parameterized SQL, accompanied by stateless JWT verification and strict admin route enforcement.',
        },
        {
          code: '03 // CONCURRENCY INTEGRITY',
          title: '0% Stock Overselling Guarantee',
          description:
            'Deterministic inventory state with transactional isolation and atomic rollbacks, ensuring order and payment certainty.',
        },
      ],
      tools: ['React 18', 'TypeScript', 'Go (Golang)', 'PostgreSQL', 'pgxpool', 'Tailwind CSS', 'Docker', 'Vite', 'React Router v7'],
      quote: {
        text:
          '“E-commerce succeeds or fails at the speed of query and the certainty of checkout. Building Shoes4Us meant creating an unshakeable bridge between instant browsing, bank-grade security, and atomic inventory truth.”',
        author: '— Architecture Philosophy, Shoes4Us',
      },
    },
  },
];
