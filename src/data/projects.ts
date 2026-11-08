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
    stack: 'React 19, TypeScript, Go, Chi, PostgreSQL, Tailwind CSS',
    year: '2026',
    mockup: 'shoes4us',
    dossier: {
      ref: 'PJ-2026-03',
      discipline: 'FULL-STACK DEVELOPMENT & BACKEND ENGINEERING',
      status: 'LIVE APPLICATION',
      featuredTag: 'E-COMMERCE & RETAIL PLATFORM',
      estYear: 'EST. 2026',

      summary:
        'A full-stack footwear e-commerce platform built with React and Go, featuring a modular REST API, JWT-based authentication, size-specific inventory management, and transaction-safe order processing.',

      clientContext: 'Independent E-Commerce Project',
      roleDiscipline: 'Full-Stack Developer',
      timelineState: '2026 — Independent Project',
      primaryStack: 'React 19, TypeScript, Go, PostgreSQL',

      liveUrl: 'https://shoes4us.vercel.app/',
      githubUrl: 'https://github.com/Ranggadya/Shoes4Us',

      challengeParagraphs: [
        'Footwear e-commerce systems require more than basic product and order management. Product availability must account for individual size variants, while checkout operations must preserve inventory consistency when multiple customers attempt to purchase the same products concurrently.',
        'Shoes4Us addresses these requirements through a decoupled frontend and backend architecture. The React storefront communicates with a Go-based REST API, while PostgreSQL handles persistent application data and transactional inventory operations. The backend is organized into distinct domain, repository, service, and handler layers to maintain separation of concerns and support ongoing development.',
      ],

      systemDesignHeadline: 'Modular Full-Stack & Transactional Architecture',

      systemDesignDesc:
        'A decoupled React frontend and Go REST API backed by PostgreSQL. The backend separates HTTP handling, application services, domain contracts, and database access, while transactional checkout operations maintain consistency across inventory and order records.',

      layers: [
        {
          layer: 'LAYER 01: PRESENTATION',
          badge: 'REACT / VITE',
          title: 'Storefront & Customer Experience',
          description:
            'Provides product discovery, catalog filtering, product details, shopping cart interactions, wishlist management, and responsive customer-facing interfaces using React, TypeScript, and React Router.',
        },
        {
          layer: 'LAYER 02: APPLICATION API',
          badge: 'GO / CHI',
          title: 'REST API & Business Logic',
          description:
            'Processes application requests through Go HTTP handlers and service components, with Chi routing, centralized response handling, and modular backend dependencies.',
        },
        {
          layer: 'LAYER 03: SECURITY & IDENTITY',
          badge: 'JWT / RBAC',
          title: 'Authentication & Access Control',
          description:
            'Implements JWT-based authentication, Bcrypt password hashing, HttpOnly authentication cookies, and role-based middleware to separate customer and administrative operations.',
        },
        {
          layer: 'LAYER 04: DATA & STORAGE',
          badge: 'POSTGRESQL / R2',
          title: 'Relational Data & Object Storage',
          description:
            'Uses PostgreSQL with pgx connection pooling for persistent application data and transactional operations, alongside S3-compatible Cloudflare R2 storage for product media.',
        },
      ],

      codeSnippet: {
        filename: 'order_repository.go — TRANSACTIONAL INVENTORY',
        lang: 'Go 1.24 / pgx v5',
        code: `// Begin a database transaction.
tx, err := r.pool.Begin(ctx)
if err != nil {
    return err
}
defer tx.Rollback(ctx)

// Process size-specific inventory updates.
const decSizeQuery = \`
    UPDATE product_sizes
    SET stock = stock - $1, "updatedAt" = $2
    WHERE "productId" = $3
      AND size = $4
      AND stock >= $1
\`

cmdTag, err := tx.Exec(
    ctx,
    decSizeQuery,
    item.Quantity,
    now,
    item.ProductID,
    sz,
)
if err != nil {
    return err
}

if cmdTag.RowsAffected() == 0 {
    return domain.NewBadRequest(
        "Insufficient size-specific stock",
    )
}

// Commit only after all order operations succeed.
return tx.Commit(ctx)`,
      },

      decisions: [
        {
          title: 'Transactional Checkout & Inventory Consistency',
          description:
            'Groups inventory deduction, order creation, order-item insertion, and cart clearing into a single PostgreSQL transaction. Failed operations prevent partial checkout state from being committed.',
        },
        {
          title: 'Conditional Stock Updates',
          description:
            'Uses atomic SQL UPDATE statements with stock availability conditions and affected-row validation to prevent inventory quantities from becoming negative during concurrent checkout operations.',
        },
        {
          title: 'Layered Backend Architecture',
          description:
            'Separates domain contracts, repository implementations, application services, HTTP handlers, and middleware to improve maintainability, testability, and dependency organization.',
        },
        {
          title: 'Deterministic Inventory Processing',
          description:
            'Sorts checkout items by product and size before inventory deduction to establish a consistent database update order and reduce potential deadlocks.',
        },
      ],

      capabilities: [
        {
          code: '01 // BACKEND ENGINEERING',
          title: 'Modular Go REST API',
          description:
            'Develops backend application services using Go, Chi routing, pgx connection pooling, structured handlers, and layered domain and repository components.',
        },
        {
          code: '02 // TRANSACTION PROCESSING',
          title: 'Transaction-Safe Order Management',
          description:
            'Implements checkout workflows with transactional inventory updates, order creation, order-item persistence, and cart management.',
        },
        {
          code: '03 // SECURITY & IDENTITY',
          title: 'JWT Authentication & Role-Based Access',
          description:
            'Implements password hashing, JWT verification, HttpOnly authentication cookies, and authorization middleware for customer and administrative endpoints.',
        },
        {
          code: '04 // QUALITY ENGINEERING',
          title: 'Automated Testing & CI Pipeline',
          description:
            'Integrates backend vetting, Go unit tests with the race detector, frontend linting and production builds, and Docker image build verification through GitHub Actions.',
        },
      ],

      tools: [
        'React 19',
        'TypeScript',
        'Vite',
        'React Router v7',
        'Tailwind CSS',
        'Go 1.24',
        'Chi Router',
        'PostgreSQL',
        'pgx v5',
        'JWT',
        'Bcrypt',
        'Cloudflare R2',
        'Docker',
        'GitHub Actions',
      ],

      quote: {
        text:
          'Reliable e-commerce systems depend on more than a seamless storefront. They require consistent business logic, secure access control, and transactional integrity across every order.',
        author: '— Engineering Philosophy, Shoes4Us',
      },
    },
  }
];
