export interface NavItem { label: string; href: string }

export interface ProjectDossierLayer {
  layer: string;
  badge: string;
  title: string;
  description: string;
}

export interface ProjectDossierDecision {
  title: string;
  description: string;
}

export interface ProjectDossierCapability {
  code: string;
  title: string;
  description: string;
}

export interface ProjectDossier {
  ref: string;
  discipline: string;
  status: string;
  featuredTag: string;
  estYear: string;
  summary: string;
  clientContext: string;
  roleDiscipline: string;
  timelineState: string;
  primaryStack: string;
  liveUrl?: string;
  githubUrl?: string;
  challengeParagraphs: string[];
  systemDesignHeadline: string;
  systemDesignDesc: string;
  layers: ProjectDossierLayer[];
  codeSnippet: {
    filename: string;
    lang: string;
    code: string;
  };
  decisions: ProjectDossierDecision[];
  capabilities: ProjectDossierCapability[];
  tools: string[];
  quote: {
    text: string;
    author: string;
  };
}

export interface Project {
  id: string;
  title: string;
  stack: string;
  year: string;
  mockup: 'portfolio' | 'ayamsehat' | 'shoes4us';
  dossier: ProjectDossier;
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
  issuerSub?: string;
  description: string;
  tags: string[];
  verifyUrl: string;
  issueDate?: string;
  validUntil?: string;
  badgeCode?: string;
  badgeCategory?: string;
  badgeAuthority?: string;
  gradeBadge?: string;
  watermark?: string;
  score?: string;
  syllabus?: string;
  icon?: 'award' | 'verified' | 'cloud' | 'palette' | 'shield' | 'code';
}
