import type { TechPillar } from '@/types';

export const techPillars: TechPillar[] = [
  {
    id: 'frontend',
    label: 'Pillar 01',
    tagline: 'CORE CLIENT LAYER',
    title: 'Frontend Runtimes & Frameworks',
    description:
      'Architecting modular, maintainable client-side user interfaces with declarative component structures, TypeScript type-safety, and responsive modern design systems.',
    items: ['React.js', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vue.js'],
  },
  {
    id: 'backend',
    label: 'Pillar 02',
    tagline: 'SERVER & SYSTEM ARCHITECTURE',
    title: 'Backend Services & APIs',
    description:
      'Developing robust server-side systems, RESTful microservices, secure authentication flows, and high-velocity background data processing pipelines.',
    items: ['Node.js', 'Express.js', 'PHP / Laravel', 'FastAPI (Python)', 'REST API', 'Clean Architecture'],
  },
  {
    id: 'database-devops',
    label: 'Pillar 03',
    tagline: 'DATA PERSISTENCE & DEVOPS',
    title: 'Database & Cloud Delivery',
    description:
      'Designing relational schemas, indexing strategies for sub-second queries, containerized deployment pipelines, and CI/CD workflow automation.',
    items: ['PostgreSQL', 'MySQL', 'Docker', 'Git & GitHub Actions', 'Supabase', 'Vercel'],
  },
  {
    id: 'ai-performance',
    label: 'Pillar 04',
    tagline: 'INTELLIGENCE & ASSURANCE',
    title: 'AI Integration & Quality Benchmarks',
    description:
      'Embedding generative AI models, Monte Carlo financial simulations, web scraping automations, and strict Core Web Vitals performance benchmarks.',
    items: ['Gemini AI', 'Web Scraping', 'Vite', 'Core Web Vitals', 'Lighthouse 95+', 'Postman'],
  },
];
