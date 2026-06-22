// src/types/project-type.ts

export type AccentColor = "cyan" | "purple" | "emerald" | "amber";

export type ProjectLayout = "featured" | "wide" | "compact" | "soft";

export type ColSpan = 5 | 6 | 7 | 12;

export interface ProjectTag {
  label: string;
  icon: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectDetails {
  overview: string;
  problem: string;
  solution: string;
  benefits: string[];
  highlights: string[];
  collaboration?: "Individual Project" | "Team Project";
  coreTechnologies?: string[];
  keyFeatures?: {
    title: string;
    description: string;
  }[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  categoryIcon: string;
  tags: ProjectTag[];
  description: string;
  stats?: ProjectStat[];
  accentColor: AccentColor;
  layout: ProjectLayout;
  colSpan: ColSpan;
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  placeholderIcon?: string;
  details?: ProjectDetails;
}
