// src/pages/Projects.tsx

import { useMemo, memo } from "react";
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from "../types/project-type";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Shoes4Us",
    category: "Shopping",
    categoryIcon: "shopping_cart",
    tags: [
      { label: "Next JS", icon: "code" },
      { label: "Tailwind CSS", icon: "database" },
      { label: "PostgreSQL", icon: "database" },
    ],
    description:
      "A E-Commerce Shoes Store website to buy shoes.",
    stats: [
      { label: "System", value: "E-Commerce" },
      { label: "Role", value: "Full-Stack Developer" },
    ],
    accentColor: "cyan",
    layout: "featured",
    colSpan: 12,
    githubUrl: "#",
    liveUrl: "https://shoes4us.vercel.app/",
    imageUrl: "/shoes4us.png",
    placeholderIcon: "hub",
  },
  {
    id: 2,
    title: "Venue Event Management",
    category: "Management System",
    categoryIcon: "",
    tags: [
      { label: "NestJS", icon: "code_blocks" },
      { label: "MySQL", icon: "database" },
      { label: "Prisma", icon: "database" },
      { label: "EJS", icon: "web" },
    ],
    description:
      "A production-style venue booking management system designed for venue providers such as hotels, campuses, co-working spaces, and rental businesses. The system allows admins to manage venues, schedule event bookings, calculate rental costs, monitor payment status, and analyze revenue statistics.",
    stats: [
      { label: "System", value: "Admin Panel" },
      { label: "Role", value: "Backend Engineer" },
    ],
    accentColor: "purple",
    layout: "compact",
    colSpan: 5,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/venue.png",
    placeholderIcon: "meeting_room",
  },
  {
    id: 3,
    title: "Web Portofolio Profile",
    category: "Profile",
    categoryIcon: "public",
    tags: [
      { label: "React JS", icon: "code" },
      { label: "Tailwind CSS", icon: "database" },
    ],
    description:
      "A Web Portofolio Profile website.",
    stats: [
      { label: "System", value: "Profile" },
      { label: "Role", value: "UI/UX Designer" },
    ],
    accentColor: "cyan",
    layout: "soft",
    colSpan: 7,
    githubUrl: "#",
    liveUrl: "https://shoes4us.vercel.app/",
    imageUrl: "/shoes4us.png",
    placeholderIcon: "lock",
  },
  {
    id: 4,
    title: "LokaLin",
    category: "Shopping",
    categoryIcon: "shopping_cart",
    tags: [
      { label: "Next JS", icon: "code" },
      { label: "Tailwind CSS", icon: "design_services" },
      { label: "PostgreSQL", icon: "database" },
      { label: "Supabase", icon: "database" },
    ],
    description:
      "Web e-coommerce untuk UMKM",
    stats: [
      { label: "System", value: "E-Commerce" },
      { label: "Role", value: "Full-Stack Developer" },
    ],
    accentColor: "emerald",
    layout: "soft",
    colSpan: 7,
    githubUrl: "#",
    liveUrl: "https://market-place-flame.vercel.app/",
    imageUrl: "/UMKM.png",
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
    imageUrl: "/Photo.jpg",
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
