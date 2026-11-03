import type { Certificate } from '@/types';

export const certificates: Certificate[] = [
  {
    id: 'dicoding-react-fundamental',
    credentialId: 'DICODING-REACT-FUND',
    title: 'Belajar Fundamental Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    description:
      'Membangun aplikasi web Single Page Application (SPA) modern dengan React, custom hooks, context management, konsumsi REST API, dan client-side routing.',
    tags: ['React.js', 'SPA Architecture', 'REST API', 'Custom Hooks'],
    verifyUrl: 'https://www.dicoding.com',
  },
  {
    id: 'dicoding-react-pemula',
    credentialId: 'DICODING-REACT-INIT',
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    description:
      'Fondasi ekosistem React modern mencakup declarative UI, komponen terisolasi, props validation, state management, controlled components, dan lifecycle methods.',
    tags: ['React.js', 'Component Lifecycle', 'State & Props', 'JSX'],
    verifyUrl: 'https://www.dicoding.com',
  },
  {
    id: 'dicoding-js',
    credentialId: 'DICODING-JS-DEV',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    description:
      'Pemrograman modern JavaScript ES6+, Asynchronous JS (Promise & async/await), functional programming, error handling, dan unit testing logic.',
    tags: ['JavaScript (ES6+)', 'Asynchronous JS', 'OOP', 'Functional Programming'],
    verifyUrl: 'https://www.dicoding.com',
  },
  {
    id: 'dicoding-web',
    credentialId: 'DICODING-WEB-DEV',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    description:
      'Standar web semantik HTML5, responsive CSS grid & flexbox, manipulasi DOM interaktif, layouting adaptif, dan fondasi arsitektur website profesional.',
    tags: ['HTML5 Semantic', 'CSS3 Layouting', 'Responsive Design', 'DOM API'],
    verifyUrl: 'https://www.dicoding.com',
  },
];
