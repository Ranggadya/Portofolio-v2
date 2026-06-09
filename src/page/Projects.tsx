// src/pages/Projects.tsx

import { useCallback, useMemo, useState, memo } from "react";
import { ProjectCard } from "../components/ProjectCard";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
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
      "A simple online shoe store that makes finding and buying the right pair feel effortless.",
    stats: [
      { label: "System", value: "E-Commerce" },
      { label: "Role", value: "Full-Stack Developer" },
    ],
    accentColor: "cyan",
    layout: "featured",
    colSpan: 12,
    githubUrl: "#",
    liveUrl: "https://shoes4us.vercel.app/",
    imageUrl: "/shoes4us.jpg",
    placeholderIcon: "hub",
    details: {
      overview:
        "Shoes4Us is an online store designed to help people discover, compare, and purchase shoes without the friction of visiting multiple stores.",
      problem:
        "Buying shoes online can feel overwhelming when products are difficult to browse and important information is scattered.",
      solution:
        "The experience presents products in a clear, familiar shopping flow so customers can quickly understand their options and move confidently toward checkout.",
      benefits: [
        "Saves time when searching for suitable shoes.",
        "Makes product information easier to understand.",
        "Creates a smooth shopping journey from discovery to purchase.",
      ],
      highlights: [
        "Browse available shoe collections.",
        "Review product details before making a choice.",
        "Purchase products through a simple online flow.",
      ],
    },
  },
  {
    id: 2,
    title: "Venue Event Management",
    category: "Management System",
    categoryIcon: "meeting_room",
    tags: [
      { label: "NestJS", icon: "code_blocks" },
      { label: "MySQL", icon: "database" },
      { label: "Prisma", icon: "database" },
      { label: "EJS", icon: "web" },
    ],
    description:
      "A central workspace that helps venue providers manage bookings, payments, schedules, and revenue.",
    stats: [
      { label: "System", value: "Admin Panel" },
      { label: "Role", value: "Backend Engineer" },
    ],
    accentColor: "purple",
    layout: "compact",
    colSpan: 6,
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/venue.jpg",
    placeholderIcon: "meeting_room",
    details: {
      overview:
        "Venue Event Management helps hotels, campuses, co-working spaces, and rental businesses organize their venue operations from one place.",
      problem:
        "Managing bookings through chats and spreadsheets makes it easy to miss schedule conflicts, payment updates, and important customer details.",
      solution:
        "The system brings venue availability, booking schedules, rental costs, and payment progress into one organized dashboard.",
      benefits: [
        "Reduces the risk of double bookings.",
        "Makes daily venue operations easier to monitor.",
        "Helps teams understand revenue and payment status.",
      ],
      highlights: [
        "Manage venue information and availability.",
        "Schedule and review event bookings.",
        "Track rental costs, payments, and revenue.",
      ],
    },
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
      "A personal portfolio that introduces my work, experience, and capabilities in one clear destination.",
    stats: [
      { label: "System", value: "Profile" },
      { label: "Role", value: "UI/UX Designer" },
    ],
    accentColor: "cyan",
    layout: "soft",
    colSpan: 6,
    githubUrl: "#",
    liveUrl: "https://shoes4us.vercel.app/",
    imageUrl: "/Porto.jpg",
    placeholderIcon: "lock",
    details: {
      overview:
        "This portfolio gives visitors a quick and engaging way to understand who I am, what I can build, and the experience I bring to a project.",
      problem:
        "A traditional resume often cannot show the personality, visual quality, and practical thinking behind someone’s work.",
      solution:
        "The website combines selected projects, experience, skills, and contact information into an easy-to-explore personal profile.",
      benefits: [
        "Helps visitors understand my profile quickly.",
        "Keeps projects and experience in one accessible place.",
        "Makes it easy for potential collaborators to contact me.",
      ],
      highlights: [
        "Explore selected projects and case studies.",
        "Review professional experience and capabilities.",
        "Send a message directly through the contact section.",
      ],
    },
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
      "A digital marketplace that helps local small businesses reach more customers online.",
    stats: [
      { label: "System", value: "E-Commerce" },
      { label: "Role", value: "Full-Stack Developer" },
    ],
    accentColor: "emerald",
    layout: "soft",
    colSpan: 6,
    githubUrl: "#",
    liveUrl: "https://market-place-flame.vercel.app/",
    imageUrl: "/UMKM.jpg",
    placeholderIcon: "account_tree",
    details: {
      overview:
        "LokaLin connects customers with products from local small businesses, giving those businesses a more visible and accessible digital storefront.",
      problem:
        "Many small businesses have great products but struggle to reach customers beyond their immediate neighborhood.",
      solution:
        "LokaLin provides a shared online marketplace where customers can discover local products and businesses can present their offerings more professionally.",
      benefits: [
        "Helps local businesses reach a wider audience.",
        "Makes local products easier for customers to discover.",
        "Supports a more convenient shopping experience.",
      ],
      highlights: [
        "Browse products from local businesses.",
        "Discover and learn about participating sellers.",
        "Shop through a convenient online marketplace.",
      ],
    },
  },
  {
    id: 5,
    title: "CuanSelor",
    category: "Financial Planning",
    categoryIcon: "monitoring",
    tags: [
      { label: "Next.js", icon: "code" },
      { label: "Express.js", icon: "dns" },
      { label: "FastAPI", icon: "calculate" },
      { label: "Gemini AI", icon: "auto_awesome" },
    ],
    description:
      "A retirement planning companion that turns complex financial choices into a clearer, more personal plan.",
    stats: [
      { label: "Simulation", value: "Monte Carlo 10K" },
      { label: "Role", value: "Full-Stack Developer" },
    ],
    accentColor: "purple",
    layout: "compact",
    colSpan: 6,
    githubUrl: "https://github.com/FarhanGhifari/CuanSelor",
    liveUrl: "https://cuanselor.my.id",
    imageUrl: undefined,
    placeholderIcon: "monitoring",
    details: {
      overview:
        "CuanSelor helps people understand whether their current financial habits can support the retirement they want and what they can improve along the way.",
      problem:
        "Retirement planning often feels distant and confusing because people must make decisions using complex assumptions and uncertain future conditions.",
      solution:
        "The platform translates financial information into understandable projections, explores different future scenarios, and provides personalized guidance.",
      benefits: [
        "Makes retirement planning easier to understand.",
        "Shows how current decisions may affect future goals.",
        "Provides practical guidance tailored to each user.",
      ],
      highlights: [
        "Create a personalized retirement projection.",
        "Explore possible future financial scenarios.",
        "Receive guidance from an AI-powered advisor.",
      ],
    },
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { featuredProject, bodyProjects } = useMemo(() => {
    const featuredProject =
      PROJECTS.find((project) => project.layout === "featured") ?? PROJECTS[0];
    const bodyProjects = PROJECTS.filter(
      (project) => project.id !== featuredProject.id
    );

    return { featuredProject, bodyProjects };
  }, []);
  const closeProjectDetails = useCallback(() => setSelectedProject(null), []);
  const openProjectDetails = useCallback(
    (project: Project) => setSelectedProject(project),
    []
  );

  return (
    <section
      className="min-h-screen w-full px-[5%] py-24 lg:px-[10%]"
      aria-label="Projects section"
    >
      <SectionHeader />

      <div className="space-y-6">
        {featuredProject && (
          <ProjectCard project={featuredProject} onExplore={openProjectDetails} />
        )}

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
          {bodyProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onExplore={openProjectDetails}
            />
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={closeProjectDetails}
      />
    </section>
  );
}
