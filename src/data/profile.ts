
export const profile = {
  brand: 'RANGGADYA.',
  fullName: 'Ranggadya Aditama Ramadhani',
  headline: ['RANGGADYA ADITAMA', 'SOFTWARE ENGINEER', 'FULL-STACK DEVELOPER'],
  tagline:
    'Building end-to-end software solutions, reliable backend systems, and web applications that solve real-world business problems.',
  email: 'ranggadya2530@gmail.com',
  location: 'Semarang, ID (GMT+7)',
  photo: '/photo.jpg',
  resumeUrl: '/cv.pdf',
  status: 'Open for Opportunities',
  discipline: 'Full-Stack & Software Engineering',
  experience: 'Software Engineering & Full-Stack Development',
  aboutHeadline:
    'BUILDING SOFTWARE THAT CONNECTS TECHNOLOGY WITH REAL-WORLD NEEDS.',
  aboutParagraphs: [
    "I'm a Software Engineer and Full-Stack Developer with a background in Computer Science at Diponegoro University. I focus on building web applications and digital systems that address real-world problems, combining frontend development, backend engineering, database design, and system integration.",
    "My experience includes developing enterprise-oriented applications, ERP-related solutions, manufacturing digitalization initiatives, and data-driven platforms. I enjoy understanding business workflows, translating requirements into technical solutions, and building software that is maintainable, reliable, and practical to use.",
    "Beyond implementation, I value clean code, thoughtful system design, and continuous learning. I aim to build software that not only works as expected but also provides measurable value to the people and organizations using it."
  ],
  principles: [
    {
      title: '01. Reliable Engineering',
      text: 'Building dependable applications through structured implementation, validation, and maintainable code.'
    },
    {
      title: '02. End-to-End Development',
      text: 'Connecting user interfaces, backend services, APIs, and databases into cohesive software systems.'
    },
    {
      title: '03. Business-Oriented Solutions',
      text: 'Understanding real workflows and translating business requirements into practical technical solutions.'
    }
  ],

  // Keep existing stats temporarily.
  // We will validate their accuracy before changing the displayed numbers.
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
