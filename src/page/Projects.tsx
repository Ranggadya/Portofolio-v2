// src/pages/Projects.tsx

import { useMemo, memo } from "react";
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from "../types/project-type";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neural Dynamics",
    category: "Featured",
    categoryIcon: "science",
    tags: [
      { label: "React Ecosystem", icon: "science" },
      { label: "WebGL", icon: "view_in_ar" },
    ],
    description:
      "An experimental data visualization platform leveraging hardware-accelerated graphics to map complex neural networks in real-time. Designed for enterprise research facilities.",
    stats: [
      { label: "Architecture", value: "Micro-frontends" },
      { label: "Performance", value: "60 FPS Render" },
    ],
    accentColor: "cyan",
    layout: "featured",
    colSpan: 12,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/public/Photo.jpg",
    placeholderIcon: "hub",
  },
  {
    id: 2,
    title: "Ledger Core UI",
    category: "FinTech",
    categoryIcon: "account_balance",
    tags: [
      { label: "Figma API", icon: "design_services" },
      { label: "Storybook", icon: "code_blocks" },
    ],
    description:
      "A comprehensive design system and component library built for a high-frequency trading terminal.",
    stats: [
      { label: "System", value: "Design System" },
      { label: "Role", value: "UI Engineer" },
    ],
    accentColor: "purple",
    layout: "compact",
    colSpan: 5,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: undefined,
    placeholderIcon: "account_balance",
  },
  {
    id: 3,
    title: "Quantum Auth",
    category: "Open Source",
    categoryIcon: "public",
    tags: [
      { label: "Rust", icon: "code" },
      { label: "PostgreSQL", icon: "database" },
    ],
    description:
      "A lightweight, highly secure authentication microservice structured around biometric spatial mapping.",
    stats: [
      { label: "Security", value: "Token-based" },
      { label: "Database", value: "PostgreSQL" },
    ],
    accentColor: "cyan",
    layout: "soft",
    colSpan: 7,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/public/Photo.jpg",
    placeholderIcon: "lock",
  },
  {
    id: 4,
    title: "ERP Dashboard",
    category: "Enterprise",
    categoryIcon: "account_tree",
    tags: [
      { label: "Laravel", icon: "code" },
      { label: "Vue.js", icon: "deployed_code" },
    ],
    description:
      "A full-featured ERP dashboard for managing inventory, HR, and finance modules in real-time.",
    stats: [
      { label: "Modules", value: "Inventory + HR" },
      { label: "Dashboard", value: "Real-time" },
    ],
    accentColor: "emerald",
    layout: "soft",
    colSpan: 7,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/public/Photo.jpg",
    placeholderIcon: "account_tree",
  },
  {
    id: 5,
    title: "DevOps Pipeline",
    category: "Infrastructure",
    categoryIcon: "cloud",
    tags: [
      { label: "Docker", icon: "deployed_code" },
      { label: "CI/CD", icon: "sync" },
    ],
    description:
      "Automated deployment pipeline with containerized services, monitoring, and zero-downtime deploys.",
    stats: [
      { label: "Deploy", value: "Zero-downtime" },
      { label: "Infra", value: "Containerized" },
    ],
    accentColor: "purple",
    layout: "compact",
    colSpan: 5,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/public/Photo.jpg",
    placeholderIcon: "cloud",
  },
];

// ─── Section Header ────────────────────────────────────────────────────────────

const SectionHeader = memo(function SectionHeader() {
  return (
    <header className="mb-16">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
        <span
          className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"
          aria-hidden="true"
        />
        <span className="font-jetbrains text-[11px] uppercase tracking-widest text-white/40">
          Selected Works
        </span>
      </div>

      <h2 className="mb-4 font-grotesk text-[42px] font-bold leading-tight tracking-tight text-white md:text-[56px] lg:text-[64px]">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projects.
        </span>
      </h2>

      <p className="max-w-2xl font-geist text-[16px] leading-relaxed text-white/40 md:text-[18px]">
        A curated collection of digital experiences, engineered with precision
        and designed for impact.
      </p>
    </header>
  );
});

// ─── Projects Main Export ──────────────────────────────────────────────────────

export default function Projects() {
  const sortedProjects = useMemo(() => {
    const featured = PROJECTS.filter((project) => project.layout === "featured");
    const regular = PROJECTS.filter((project) => project.layout !== "featured");

    return [...featured, ...regular];
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen w-full px-[5%] py-24 lg:px-[10%]"
      aria-label="Projects section"
    >
      <SectionHeader />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}