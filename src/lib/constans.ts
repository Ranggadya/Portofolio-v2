// ============================================================
// constants.ts — bisa dipisah ke file terpisah
// ============================================================

import type { Project } from "../types/project-type";

export const PROJECTS: Project[] = [
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
        accentColor: "purple",
        layout: "soft",
        colSpan: 7,
        githubUrl: "#",
        liveUrl: "#",
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
        accentColor: "cyan",
        layout: "compact",
        colSpan: 5,
        githubUrl: "#",
        liveUrl: "#",
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
        accentColor: "cyan",
        layout: "compact",
        colSpan: 5,
        githubUrl: "#",
        liveUrl: "#",
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
        accentColor: "purple",
        layout: "soft",
        colSpan: 7,
        githubUrl: "#",
        liveUrl: "#",
    },
];
