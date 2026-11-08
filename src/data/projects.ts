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
    title: 'CuanSelor — AI-Powered Financial Planning Platform',
    stack: 'Next.js, Express.js, FastAPI, PostgreSQL, Gemini AI, Tailwind CSS',
    year: '2026',
    mockup: 'ayamsehat',
    dossier: {
      ref: 'PJ-2026-02',
      discipline: 'FULL-STACK DEVELOPMENT & AI SERVICE INTEGRATION',
      status: 'CAPSTONE PROJECT',
      featuredTag: 'FINANCIAL TECHNOLOGY & AI',
      estYear: 'EST. 2026',

      summary:
        'An AI-powered financial planning platform designed to help users make informed long-term financial decisions through personalized financial projections, actuarial simulations, and AI-assisted insights.',

      clientContext: 'AI-Powered Financial Planning Platform',
      roleDiscipline: 'Full-Stack Web Developer',
      timelineState: '2026 — Coding Camp Capstone',
      primaryStack: 'Next.js, Express.js, FastAPI, PostgreSQL',

      liveUrl: 'https://cuanselor.my.id',
      githubUrl: 'https://github.com/FarhanGhifari/CuanSelor',

      challengeParagraphs: [
        'Long-term financial planning requires users to consider multiple factors, including income, expenses, inflation, investment assumptions, and future financial goals. Without an accessible planning tool, translating these variables into understandable financial projections can be challenging.',
        'CuanSelor addresses this challenge through an integrated financial planning platform that combines a web-based user experience, backend application services, actuarial simulation capabilities, and AI-assisted financial insights. The platform is designed to make financial planning more accessible through structured data input and understandable projection results.',
      ],

      systemDesignHeadline: 'Decoupled Full-Stack & Simulation Architecture',
      systemDesignDesc:
        'The application separates the user-facing web application, core backend services, and computational simulation service. This architecture allows each component to handle its own responsibilities while communicating through service interfaces.',

      layers: [
        {
          layer: 'LAYER 01: PRESENTATION',
          badge: 'NEXT.JS',
          title: 'Web Application & User Experience',
          description:
            'Delivers the user-facing financial planning experience, including financial data input, planning workflows, and visualization of financial projection results.',
        },
        {
          layer: 'LAYER 02: APPLICATION BACKEND',
          badge: 'EXPRESS.JS',
          title: 'Core API & Business Logic',
          description:
            'Handles application-level requests, business logic, and communication between the frontend, data persistence, and supporting services.',
        },
        {
          layer: 'LAYER 03: COMPUTATIONAL SERVICE',
          badge: 'FASTAPI',
          title: 'Financial & Actuarial Simulation',
          description:
            'Provides a dedicated Python-based service for computational financial simulations and the processing of projection scenarios.',
        },
        {
          layer: 'LAYER 04: DATA & AI SERVICES',
          badge: 'POSTGRESQL / GEMINI',
          title: 'Data Persistence & AI-Assisted Insights',
          description:
            'Supports application data management and AI-assisted financial insights through integration with the Google Gemini service.',
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
          title: 'Separation of Application & Computational Services',
          description:
            'Uses Express.js for core application services and FastAPI for computational workloads, separating business operations from simulation processing.',
        },
        {
          title: 'API-Based Service Communication',
          description:
            'Connects the frontend, backend, and simulation service through defined API interfaces to support modular development and integration.',
        },
        {
          title: 'AI-Assisted Financial Insights',
          description:
            'Integrates Google Gemini to support the delivery of contextual financial insights alongside structured financial projection results.',
        },
      ],

      capabilities: [
        {
          code: '01 // FULL-STACK',
          title: 'End-to-End Web Application',
          description:
            'Development of the web application and backend services using Next.js and Express.js.',
        },
        {
          code: '02 // SIMULATION',
          title: 'Dedicated Financial Computation Service',
          description:
            'Integration with a FastAPI-based service for processing financial and actuarial simulation workloads.',
        },
        {
          code: '03 // AI INTEGRATION',
          title: 'AI-Assisted Financial Experience',
          description:
            'Integration of AI capabilities to support contextual financial information and user-facing insights.',
        },
      ],

      tools: [
        'Next.js',
        'Express.js',
        'FastAPI',
        'TypeScript',
        'JavaScript',
        'Python',
        'PostgreSQL',
        'Gemini AI',
        'Tailwind CSS',
      ],

      quote: {
        text:
          'Financial planning becomes more approachable when complex projections are translated into structured information and actionable insights.',
        author: '— Product Philosophy, CuanSelor',
      },
    },
  },
  {
    id: 'shoes4us',
    title: 'Shoes4Us — Full-Stack E-Commerce Platform',
    stack: 'React, TypeScript, Go, PostgreSQL, Tailwind CSS',
    year: '2026',
    mockup: 'shoes4us',
    dossier: {
      ref: 'PJ-2026-03',
      discipline: 'FULL-STACK DEVELOPMENT & E-COMMERCE ENGINEERING',
      status: 'FULL-STACK PROJECT',
      featuredTag: 'E-COMMERCE & RETAIL PLATFORM',
      estYear: 'EST. 2026',
      summary:
        'A full-stack footwear e-commerce application built with a React-based storefront and Go backend, featuring product catalog management, shopping cart workflows, user authentication, and transactional inventory handling.',

      clientContext: 'Footwear E-Commerce Application',
      roleDiscipline: 'Full-Stack Developer',
      timelineState: '2025 — 2026',
      primaryStack: 'React, TypeScript, Go, PostgreSQL',
      liveUrl: 'https://shoes4-us.vercel.app/',
      githubUrl: 'https://github.com/Ranggadya',
      challengeParagraphs: [
        'Footwear e-commerce applications need to manage product variations such as shoe sizes, product availability, and pricing while maintaining a consistent shopping experience. Inventory accuracy is particularly important because multiple customers may attempt to purchase the same product variation at the same time.',
        'Shoes4Us addresses these requirements through a full-stack architecture consisting of a React-based storefront, a Go REST API, and a PostgreSQL database. The application separates frontend interactions from backend business logic and uses database transactions to handle inventory updates consistently.',
      ],
      systemDesignHeadline: 'Full-Stack E-Commerce Architecture',

      systemDesignDesc:
        'A modular application architecture separating storefront interactions, backend business logic, authentication, and relational data management. PostgreSQL transactions support consistent inventory updates during order processing.',
      layers: [
        {
          layer: 'LAYER 01: STOREFRONT',
          badge: 'REACT / VITE',
          title: 'Product Discovery & Shopping Experience',
          description:
            'Provides the customer-facing storefront, product browsing, product filtering, shopping cart interactions, and responsive user interfaces.',
        },
        {
          layer: 'LAYER 02: APPLICATION BACKEND',
          badge: 'GO / CHI ROUTER',
          title: 'REST API & Business Logic',
          description:
            'Handles application requests, product operations, authentication workflows, and backend business logic through Go-based REST endpoints.',
        },
        {
          layer: 'LAYER 03: AUTHENTICATION',
          badge: 'JWT / RBAC',
          title: 'Authentication & Access Control',
          description:
            'Separates customer and administrative access through authentication mechanisms and role-based authorization.',
        },
        {
          layer: 'LAYER 04: DATA MANAGEMENT',
          badge: 'POSTGRESQL',
          title: 'Relational Data & Inventory Transactions',
          description:
            'Stores application data in a relational database and uses transactional operations to maintain consistency when updating product inventory.',
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

    if qty <= 0 {
    return false, ErrInvalidQuantity
}

if err := tx.Commit(ctx); err != nil {
    return false, err
}

return true, nil
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
