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
    'ENGINEERING SCALABLE, RELIABLE, AND MEANINGFUL DIGITAL SOLUTIONS.',
  aboutParagraphs: [
    "I'm a Software Engineer and Full-Stack Developer with a background in Computer Science at Diponegoro University. I enjoy designing and building web applications that solve real-world problems, from intuitive user interfaces to reliable backend systems and well-structured databases.Throughout my experience in software development, I've worked on various projects involving enterprise applications, manufacturing digitalization, ERP systems, and data-driven platforms. My experience spans frontend and backend development, REST API design, database management, and system integration, allowing me to understand how different components work together to deliver effective software solutions.",
    "Beyond writing code, I value understanding business requirements, solving technical challenges, and building systems that are maintainable, efficient, and reliable. I believe great software engineering is not just about making things work, but about creating meaningful solutions that deliver lasting value. I'm continuously exploring new technologies, refining my engineering practices, and looking for opportunities to build impactful digital products.",
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
