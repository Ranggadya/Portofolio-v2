import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'dbs-coding-camp',
    period: 'Feb 2026 — Jul 2026',
    current: false,
    type: 'Bootcamp / Remote',
    company: 'Coding Camp 2026 powered by DBS Foundation',
    role: 'Full-Stack Web Developer — Capstone Project',
    description:
      'Developed CuanSelor, an AI-powered personal financial planning platform designed to help Gen Z make informed financial decisions and plan for long-term financial goals. Built responsive frontend interfaces, developed backend REST APIs, designed database integrations, and connected the application with AI/ML services for personalized financial insights and retirement projections. Collaborated with AI Engineers and Data Scientists to integrate application features and ensure seamless communication between the frontend, backend, and AI components.',
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
    description:
      'Engineered automated web scrapers to collect and aggregate data from online publications, developed real-time analytics dashboards, and created reusable UI component systems with React and TypeScript.',
    tags: ['Python', 'React.js', 'TypeScript', 'Web Scraping', 'Design Systems', 'Dashboard UI'],
  },
  {
    id: 'dsi',
    period: 'Nov 2025 — Dec 2025',
    current: false,
    type: 'Internship',
    company: 'PT DSI (Dwi Selo Giri Mas)',
    role: 'Full-Stack Developer Intern',
    description:
      'Developed an automated enterprise payroll system for employee compensation processing and participated in system integrations with customs, manufacturing, and internal ERP workflows.',
    tags: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'MySQL', 'REST API'],
  },
  {
    id: 'undip',
    period: '2023 — Present',
    current: true,
    type: 'Undergraduate',
    company: 'Diponegoro University (UNDIP)',
    role: 'Bachelor of Computer Science (Informatika)',
    description:
      'Focusing on full-stack software development, distributed systems architecture, database engineering, and cognitive interaction design. Actively building open-source platforms and production-ready applications.',
    tags: ['Computer Science', 'Data Structures', 'System Architecture', 'PostgreSQL', 'Software Engineering'],
  },
];
