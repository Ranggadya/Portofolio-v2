// ============================================================
// types.ts — bisa dipisah ke file terpisah
// ============================================================

export type AccentColor = "cyan" | "purple";
export type ColSpan = 5 | 7 | 12;

export interface ProjectTag {
  label: string;
  icon: string;
}

export interface ProjectStat {
  label: string;
  value: string;
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
  isFeatured: boolean;
  colSpan: ColSpan;
  githubUrl: string;
  liveUrl: string;
}
