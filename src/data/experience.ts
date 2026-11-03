import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'dbs-coding-camp',
    period: 'Feb 2026 — Jul 2026',
    current: false,
    type: 'Bootcamp / Remote',
    company: 'Coding Camp 2026 powered by DBS Foundation',
    role: 'Full-Stack Web Developer — Capstone Project',
    env: 'ENV // FINTECH & AI PLATFORM',
    era: 'CAPSTONE ACCELERATOR',
    description:
      'Developed CuanSelor, an AI-powered personal financial planning platform designed to help Gen Z make informed financial decisions and plan for long-term financial goals. Built responsive frontend interfaces, developed backend REST APIs, designed database integrations, and connected the application with AI/ML services for personalized financial insights and retirement projections. Collaborated with AI Engineers and Data Scientists to integrate application features and ensure seamless communication between the frontend, backend, and AI components.',
    metrics: [
      {
        label: 'SIMULATION ENGINE',
        value: '10K ITERATIONS',
        sub: 'Monte Carlo actuarial risk models',
      },
      {
        label: 'CORE PLATFORM',
        value: 'CUANSELOR',
        sub: 'AI financial advisor for Gen Z',
      },
      {
        label: 'COLLABORATION',
        value: 'CROSS-SQUAD',
        sub: 'Frontend, backend & AI/ML sync',
      },
    ],
    bullets: [
      'Architected end-to-end full-stack systems: Developed responsive Next.js frontend interfaces, Express.js backend REST APIs, and Supabase PostgreSQL persistence.',
      'Integrated AI & Actuarial Models: Connected the application with Gemini AI advisor endpoints and 10,000-iteration Monte Carlo simulation services for retirement forecasts.',
      'Cross-Functional Squad Leadership: Collaborated with AI Engineers and Data Scientists to ensure deterministic communication between client views, backend services, and machine learning models.',
    ],
    artifact: {
      name: 'ARTIFACT // CUANSELOR-PLATFORM.SPEC',
      type: 'AI FINTECH ARCHITECTURE / V1.0',
    },
    tags: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Express.js',
      'REST API',
      'Supabase',
      'PostgreSQL',
      'AI/ML API Integration',
    ],
  },
  {
    id: 'skenacorp',
    period: 'Jan 2026 — Mar 2026',
    current: false,
    type: 'Internship / On-site',
    company: 'SKENACORP',
    role: 'Software Engineer Intern',
    env: 'ENV // ONLINE MEDIA & SCRAPING',
    era: 'PRODUCTION INTERNSHIP',
    description:
      'Engineered automated web scrapers to collect and aggregate data from online publications, developed real-time analytics dashboards, and created reusable UI component systems with React and TypeScript.',
    metrics: [
      {
        label: 'DATA INGESTION',
        value: 'AUTOMATED',
        sub: 'Multi-source publication scrapers',
      },
      {
        label: 'TELEMETRY DASHBOARD',
        value: 'REAL-TIME',
        sub: 'Content performance monitor',
      },
      {
        label: 'COMPONENT DESIGN',
        value: 'MODULAR UI',
        sub: 'Reusable React/TS component library',
      },
    ],
    bullets: [
      'Engineered automated web scrapers in Python to reliably collect and aggregate structured editorial content across online publications.',
      'Developed real-time analytics dashboards utilizing React and TypeScript for immediate editorial content tracking.',
      'Constructed modular and reusable design system UI components to ensure visual coherence across internal publishing tools.',
    ],
    artifact: {
      name: 'ARTIFACT // SKENA-SCRAPER-PIPELINE.DAG',
      type: 'ETL DATA INGESTION / V2.1',
    },
    tags: ['Python', 'React.js', 'TypeScript', 'Web Scraping', 'Design Systems', 'Dashboard UI'],
  },
  {
    id: 'dsi',
    period: 'Nov 2025 — Dec 2025',
    current: false,
    type: 'Internship / On-site',
    company: 'PT DSI (Dwi Selo Giri Mas)',
    role: 'Full-Stack Developer Intern',
    env: 'ENV // ENTERPRISE PAYROLL & ERP',
    era: 'MANUFACTURING INTEGRATION',
    description:
      'Developed an automated enterprise payroll system for employee compensation processing and participated in system integrations with customs, manufacturing, and internal ERP workflows.',
    metrics: [
      {
        label: 'PAYROLL PROCESSING',
        value: 'AUTOMATED',
        sub: 'Eliminated manual calculation errors',
      },
      {
        label: 'SYSTEM SYNC',
        value: 'ERP CONNECT',
        sub: 'Customs & manufacturing workflows',
      },
      {
        label: 'API CONTRACTS',
        value: 'RESTFUL',
        sub: 'Secured PHP Laravel endpoints',
      },
    ],
    bullets: [
      'Constructed an automated enterprise payroll engine in PHP Laravel, calculating industrial employee compensation and overtime schedules.',
      'Integrated backend modules with internal manufacturing schedules, material inventories, and customs compliance documentation.',
      'Structured relational MySQL database tables with indexing, role-based access authorization, and audit logs.',
    ],
    artifact: {
      name: 'ARTIFACT // DSI-PAYROLL-INTEGRATION.SYS',
      type: 'ERP TRANSACTION SPEC / V1.4',
    },
    tags: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'MySQL', 'REST API'],
  },
  {
    id: 'undip',
    period: '2023 — Present',
    current: true,
    type: 'Undergraduate / Active',
    company: 'Diponegoro University (UNDIP)',
    role: 'Bachelor of Computer Science (Informatika)',
    env: 'ENV // S1 COMPUTER SCIENCE',
    era: 'ACADEMIC FOUNDATIONS',
    description:
      'Focusing on full-stack software development, distributed systems architecture, database engineering, and cognitive interaction design. Actively building open-source platforms and production-ready applications.',
    metrics: [
      {
        label: 'DEGREE PROGRAM',
        value: 'INFORMATIKA',
        sub: 'Diponegoro University (UNDIP)',
      },
      {
        label: 'TECHNICAL RIGOR',
        value: 'SYSTEMS & DB',
        sub: 'Architecture & distributed engineering',
      },
      {
        label: 'PRODUCTION BUILDS',
        value: 'ACTIVE LAB',
        sub: 'Web platforms & open-source solutions',
      },
    ],
    bullets: [
      'Comprehensive study of Data Structures, Algorithms, Distributed Computing, Database Management Systems, and Software Craftsmanship.',
      'Architecting modern web platforms, integrating state-of-the-art frontend tooling with resilient backend microservices.',
      'Active participation in software engineering research, technical collaborative projects, and community technology workshops.',
    ],
    artifact: {
      name: 'ARTIFACT // UNDIP-CS-CURRICULUM.SPEC',
      type: 'ACADEMIC RECORD / S1 INFORMATIKA',
    },
    tags: ['Computer Science', 'Data Structures', 'System Architecture', 'PostgreSQL', 'Software Engineering'],
  },
];
