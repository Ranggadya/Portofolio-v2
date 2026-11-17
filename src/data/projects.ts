import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website — High Performance & Editorial UX',
    stack: 'React 18, TypeScript, Vite, Tailwind CSS',
    year: '2026',
    mockup: 'portfolio',
    dossier: {
      ref: 'PJ-2026-01',
      discipline: 'FRONTEND ARCHITECTURE & EDITORIAL DESIGN SYSTEM',
      status: 'STATUS: PRODUCTION LIVE',
      featuredTag: 'FEATURED CASE STUDY',
      estYear: 'EST. 2026',
      summary:
        'An editorial brutalist engineering portfolio designed for rapid 15–30 second recruiter scanning and deep technical evaluation—featuring a semantic dual-theme token system, code-split modal views, and verified bundle & media optimizations.',
      clientContext: 'Personal Engineering Showcase',
      roleDiscipline: 'Frontend Architect & Engineer',
      timelineState: '2026 — Production Live',
      primaryStack: 'React 18, TypeScript, Vite, Tailwind CSS',
      liveUrl: 'https://github.com/Ranggadya/Portofolio-v2',
      githubUrl: 'https://github.com/Ranggadya/Portofolio-v2',
      challengeParagraphs: [
        'Engineering portfolios often fall into two extremes: over-animated templates that obscure technical substance, or dense text pages that are difficult for recruiters and engineering leads to scan quickly.',
        'This portfolio balances editorial clarity with strict frontend engineering discipline. It pairs a high-contrast Swiss typographic grid and semantic CSS variable tokens (Light & Dark mode without flash) with aggressive bundle dieting, lazy-loaded case study drawers, and WCAG 2.1 AA keyboard & touch accessibility.',
      ],
      systemDesignHeadline: 'Semantic Token System & Zero-Jank Frontend Architecture',
      systemDesignDesc:
        'Built around a lightweight component hierarchy, pre-paint theme hydration, and observer-driven runtime interactions that avoid layout thrashing during scrolling.',
      layers: [
        {
          layer: 'LAYER 01: DESIGN TOKENS',
          badge: 'CSS VARIABLES',
          title: 'Semantic Light & Dark Surface Contract',
          description:
            'Dynamic RGB CSS variables (--surface, --subtle, --chip, --line, --fg, --muted, --soft) paired with an inline pre-paint script for flicker-free theme switching.',
        },
        {
          layer: 'LAYER 02: TYPOGRAPHY',
          badge: 'LATIN SUBSETS',
          title: 'Self-Hosted Editorial Font Pairing',
          description:
            'Pairs Plus Jakarta Sans Variable with Space Grotesk Latin subsets via @fontsource, removing third-party font CDN requests and unused glyph subsets.',
        },
        {
          layer: 'LAYER 03: BUNDLE & MEDIA',
          badge: 'VITE / WEBP',
          title: 'Code Splitting & Native REST Fetching',
          description:
            'Splits React vendor and heavy modal chunks via React.lazy() and uses native REST fetch with AbortController timeouts instead of heavy client SDKs.',
        },
        {
          layer: 'LAYER 04: INTERACTION & A11Y',
          badge: 'WCAG 2.1 AA',
          title: 'Observer Scroll-Spy & Focus-Trapped Modals',
          description:
            'Uses IntersectionObserver and ResizeObserver for zero-reflow scroll tracking, full keyboard focus trapping, and >=44px mobile touch targets.',
        },
      ],
      decisions: [
        {
          title: 'Native REST Fetch over Heavy SDK (-49.6% Initial JS)',
          description:
            'Replaced the monolithic @supabase/supabase-js client with native fetch() against the PostgREST endpoint and deferred execution via IntersectionObserver, cutting initial JS from 460.87 kB to 232.37 kB.',
        },
        {
          title: 'WebP Media Pipeline & Explicit Aspect Ratios (-75% Image Weight)',
          description:
            'Converted showcase and portrait assets to WebP with <picture> JPEG fallbacks and explicit width/height attributes to eliminate Cumulative Layout Shift (CLS).',
        },
        {
          title: 'Zero-Reflow Runtime Observers',
          description:
            'Replaced per-pixel scroll DOM queries with IntersectionObserver for navbar scroll-spy and ResizeObserver + requestAnimationFrame for carousel pagination.',
        },
      ],
      capabilities: [
        {
          code: '01 // BUNDLE DIET',
          title: '-49.6% Initial JS Payload',
          description:
            'Initial JS reduced from 460.87 kB (131.17 kB gzip) to 232.37 kB (73.25 kB gzip) via SDK removal, vendor chunk splitting, and lazy modal loading.',
        },
        {
          code: '02 // MEDIA & FONTS',
          title: '-58% Total Media & Latin Font Subsets',
          description:
            'Responsive WebP compression (shoes4us 132.9 KB -> 33.0 KB) and Space Grotesk Latin subsetting reduce network transfer size from 15 font files to 7.',
        },
        {
          code: '03 // ACCESSIBILITY',
          title: 'WCAG 2.1 AA & 44px Touch Ergonomics',
          description:
            'Full keyboard navigation, modal focus trap with focus restoration, semantic ARIA tabs, >=4.5:1 text contrast, and 44x44px minimum touch targets.',
        },
      ],
      tools: [
        'React 18',
        'TypeScript 5',
        'Vite 5',
        'Tailwind CSS 3.4',
        'CSS Variables',
        'IntersectionObserver API',
        'WebP Media',
        'Vercel Edge',
      ],
      quote: {
        text:
          'A portfolio should be proof of its own claims—engineered with the same restraint, performance budget, and accessibility rigor expected in production software.',
        author: '— Design & Engineering Note, Ranggadya',
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

      liveUrl: 'https://shoes4-us.vercel.app/',
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
