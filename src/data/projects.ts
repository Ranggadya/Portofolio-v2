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
        'A high-performance footwear retail platform built on a decoupled monorepo architecture featuring a responsive React client, high-concurrency Go REST API, size-specific inventory locks, and multi-courier shipping.',
      clientContext: 'Retail Footwear & Lifestyle Storefront',
      roleDiscipline: 'Full-Stack Architect & Core Developer',
      timelineState: '2025 — 2026 (Production Live)',
      primaryStack: 'React, TypeScript, Go (Chi Router), PostgreSQL, Docker',
      liveUrl: 'https://shoes4-us.vercel.app/',
      githubUrl: 'https://github.com/Ranggadya',
      challengeParagraphs: [
        'Traditional footwear e-commerce architectures frequently struggle with inventory race conditions during high-demand releases, slow database query times across multi-attribute shoe variations (size, color, brand), and fragmented shipping rate calculations.',
        'Shoes4Us addresses this with a decoupled monorepo setup: a lightweight React 18 client-side application for instant product browsing, coupled with a high-throughput Go backend that utilizes atomic row-level locks (FOR UPDATE) in PostgreSQL to ensure sub-15ms checkout validation and 100% accurate stock deduction.',
      ],
      systemDesignHeadline: 'Decoupled Monorepo with Go API & PostgreSQL',
      systemDesignDesc:
        'Engineered for maximum velocity with strict boundary separation between client-side rendering, administrative product catalogs, and high-concurrency transactional database services.',
      layers: [
        {
          layer: 'LAYER 01: CLIENT STOREFRONT',
          badge: 'REACT 18 / VITE',
          title: 'Vite SPA & Context State Engine',
          description:
            'Interactive catalog with real-time size availability, instant client cart synchronization, and brand-based filtering.',
        },
        {
          layer: 'LAYER 02: HIGH-SPEED BACKEND',
          badge: 'GO 1.24 / CHI',
          title: 'Go REST API & Chi Routing',
          description:
            'Sub-15ms response latency utilizing Chi router, pgx connection pooling, and stateless JWT authentication.',
        },
        {
          layer: 'LAYER 03: DATABASE & SCHEMAS',
          badge: 'POSTGRESQL',
          title: 'Relational Schema & Atomic Locks',
          description:
            'Indexed product variation tables, row-level inventory locks (FOR UPDATE), and optimized order history tracking.',
        },
        {
          layer: 'LAYER 04: LOGISTICS & DEVOPS',
          badge: 'DOCKER / CLOUD',
          title: 'Multi-Courier Shipping & Containerization',
          description:
            'Integrated rate calculation for Indonesian couriers (JNE, J&T, SiCepat, POS) and automated Docker Compose production deployment.',
        },
      ],
      codeSnippet: {
        filename: 'inventory_service.go — ATOMIC STOCK RESERVATION',
        lang: 'Go 1.24 / pgx',
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
          title: 'Atomic Row-Level Locking (FOR UPDATE)',
          description:
            'Eliminates inventory race conditions when multiple customers buy the same shoe size simultaneously.',
        },
        {
          title: 'Clean Monorepo Decoupling',
          description:
            'Independent deploy targets for frontend SPA (Vercel) and Go API backend (Docker / Cloud PaaS) while sharing database contracts.',
        },
        {
          title: 'Multi-Courier Logistics Pipeline',
          description:
            'Real-time shipping calculation across Indonesian postal and private courier services during checkout.',
        },
      ],
      capabilities: [
        {
          code: '01 // INVENTORY',
          title: 'Dynamic Size & SKU Matrix',
          description:
            'Per-size inventory counters, multi-image upload per product, and real-time out-of-stock indicators.',
        },
        {
          code: '02 // PERFORMANCE',
          title: 'Sub-15ms Go REST API',
          description:
            'High-concurrency Go backend with pgx connection pooling and memory-efficient Chi routing.',
        },
        {
          code: '03 // CHECKOUT UX',
          title: 'Frictionless Cart & Payment',
          description:
            'Instant cart drawer, brand filtering, address validation, and seamless multi-channel checkout.',
        },
      ],
      tools: ['React 18', 'TypeScript', 'Go (Golang)', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Vite', 'React Router v7'],
      quote: {
        text:
          '“E-commerce succeeds or fails at the speed of checkout and the certainty of inventory. Building Shoes4Us meant creating a zero-friction bridge between desire and delivery.”',
        author: '— Architecture Philosophy, Shoes4Us',
      },
    },
  },
];
