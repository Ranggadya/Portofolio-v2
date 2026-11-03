import type { NavItem } from '@/types';

export const profile = {
  brand: 'RANGGADYA.',
  fullName: 'Ranggadya Aditama Ramadhani',
  headline: ['RANGGADYA ADITAMA', 'SOFTWARE ENGINEER', 'FULL STACK DEVELOPER'],
  tagline:
    'Architecting resilient digital solutions, scalable full-stack applications, and performant web experiences.',
  email: 'ranggadya2530@gmail.com',
  location: 'Semarang, ID (GMT+7)',
  photo: '/photo.jpg',
  resumeUrl: '/cv.pdf',
  status: 'Open for Opportunities',
  discipline: 'Full-Stack & Software Engineering',
  experience: 'Undergrad & Industry Experience',
  aboutHeadline:
    'Software Engineer & Full-Stack Developer building resilient, high-performance digital systems.',
  aboutParagraphs: [
    "Hello! I'm Ranggadya Aditama Ramadhani, a Computer Science student at Diponegoro University and a passionate Software Engineer working across the entire web stack. I specialize in turning complex system requirements into clean, scalable architectures—from responsive, accessible frontends in React and Next.js to reliable backend services with Laravel, Node.js, and modern databases.",
    "With industry experience as an intern at SKENACORP and PT DSI, I bring a practical, engineering-first mindset to production code: optimizing query performance, structuring modular design systems, integrating AI solutions like Gemini, and prioritizing clean, maintainable software craftsmanship.",
  ],
  principles: [
    { title: '01. Performance First', text: 'Sub-second response times, optimized bundling, efficient state flow.' },
    { title: '02. Clean Architecture', text: 'Modular component hierarchies, robust type-safety, maintainable code.' },
    { title: '03. User-Centric Craft', text: 'Seamless interactions, high accessibility, and cohesive design systems.' },
  ],
  stats: [
    { value: '10+', label: 'Shipped Projects' },
    { value: '2+ Yrs', label: 'Coding & Engineering' },
    { value: '100%', label: 'Commitment to Craft' },
  ],
  socials: {
    github: 'https://github.com/Ranggadya',
    linkedin: 'https://www.linkedin.com/in/ranggadya/',
  },
  footerLinks: [
    { label: 'GITHUB', href: 'https://github.com/Ranggadya' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/ranggadya/' },
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/rnggdyar/' },
  ],
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SERVICES', href: '#services' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'TECH STACK', href: '#tech-stack' },
  { label: 'CERTIFICATES', href: '#credentials' },
];
