export interface NavItem { label: string; href: string }

export interface Project {
  id: string;
  title: string;
  stack: string;
  year: string;
  mockup: 'portfolio' | 'ayamsehat';
}

export type ServiceItem =
  | { kind: 'text'; id: string; title: string; description: string }
  | { kind: 'phone'; id: string }
  | { kind: 'brand'; id: string };

export interface Experience {
  id: string;
  period: string;
  current?: boolean;
  type: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
}

export interface TechPillar {
  id: string;
  label: string;
  tagline: string;
  title: string;
  description: string;
  items: string[];
}

export interface Certificate {
  id: string;
  credentialId: string;
  title: string;
  issuer: string;
  description: string;
  tags: string[];
  verifyUrl: string;
}
