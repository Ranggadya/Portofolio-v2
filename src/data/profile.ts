import type { NavItem } from '@/types';

export const profile = {
  brand: 'RANGGADYA.',
  fullName: 'Ranggadya Aditama Ramadhani',
  headline: ['RANGGADYA ADITAMA', 'SOFTWARE ENGINEER', 'FULL-STACK DEVELOPER'],
  tagline:
    'Engineering reliable full-stack applications, robust backend services, and practical software solutions designed for real-world business needs.',
  email: 'ranggadya2530@gmail.com',
  location: 'Semarang, ID (GMT+7)',
  photo: '/photo.jpg',
  resumeUrl: '/cv.pdf',
  status: 'Open for Opportunities',
  discipline: 'Software Engineering & Full-Stack Development',
  experience: 'Enterprise Systems & Digital Solutions',
  aboutHeadline:
    'ENGINEERING RELIABLE SOFTWARE AND SCALABLE SYSTEMS FOR REAL-WORLD NEEDS.',
  aboutParagraphs: [
    "I am a Software Engineer and Full-Stack Developer with a background in Computer Science from Diponegoro University. My work centers on architecting and developing end-to-end web applications and digital systems, integrating responsive frontend interfaces with reliable backend services, robust APIs, and structured relational databases.",
    "Throughout my experience across enterprise environments, manufacturing digitalization, and data-driven platforms, I have focused on bridging business workflows with technical execution. I analyze operational requirements, model domain logic, and translate complex processes—such as production tracking and resource monitoring—into dependable, scalable software solutions.",
    "I approach software engineering with a commitment to system reliability, clean architecture, and long-term maintainability. Beyond writing functional code, I design applications to be observable, secure, and resilient under real-world usage—delivering measurable operational value to the organizations and users who rely on them.",
  ],
  principles: [
    {
      title: '01. Reliable Engineering',
      text: 'Building dependable applications through structured implementation, validation, and maintainable code.',
    },
    {
      title: '02. End-to-End Development',
      text: 'Connecting user interfaces, backend services, APIs, and databases into cohesive software systems.',
    },
    {
      title: '03. Business-Oriented Solutions',
      text: 'Understanding real workflows and translating business requirements into practical technical solutions.',
    },
  ],

  // Note: Statistics must remain grounded in verified portfolio content.
  // '4 Industry Engagements' reflects the 4 verifiable roles in experience.ts (Kalbe, DBS, SKENACORP, esikatERP).
  // '10+' and '2+ Yrs' should be verified or adjusted by the portfolio owner based on overall repository records.
  stats: [
    { value: '4', label: 'Industry Engagements' },
    { value: '10+', label: 'Projects & Repositories' },
    { value: '2+ Yrs', label: 'Technical Experience' },
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
