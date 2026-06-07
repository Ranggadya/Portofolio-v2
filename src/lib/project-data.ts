import type { Project, AccentColor, ColSpan } from "../types/project-type";

export interface AccentTokens {
    border: string;
    tag: string;
    hoverTitle: string;
    arrowHover: string;
    iconBg: string;
    glow: string;
    glowStrong: string;
    shimmer: string;
    viewBtn: string;
    overlayFrom: string;
    text: string;
}

export const ACCENT_TOKENS: Record<AccentColor, AccentTokens> = {
    cyan: {
        border: "hover:border-cyan-400/35",
        tag: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
        hoverTitle: "group-hover:text-cyan-300",
        arrowHover: "hover:text-cyan-300 hover:border-cyan-400/50",
        iconBg: "bg-cyan-400/10 text-cyan-300",
        glow: "bg-cyan-400/10",
        glowStrong: "bg-cyan-400/25",
        shimmer: "from-cyan-400/70 via-purple-600/40 to-transparent",
        viewBtn: "bg-cyan-300 hover:bg-cyan-200 text-[#0b1120]",
        overlayFrom: "from-cyan-950/75",
        text: "text-cyan-300",
    },
    purple: {
        border: "hover:border-purple-400/35",
        tag: "border-purple-400/30 bg-purple-400/10 text-purple-300",
        hoverTitle: "group-hover:text-purple-300",
        arrowHover: "hover:text-purple-300 hover:border-purple-400/50",
        iconBg: "bg-purple-400/10 text-purple-300",
        glow: "bg-purple-400/10",
        glowStrong: "bg-purple-400/25",
        shimmer: "from-purple-400/70 via-cyan-600/40 to-transparent",
        viewBtn: "bg-purple-300 hover:bg-purple-200 text-[#0b1120]",
        overlayFrom: "from-purple-950/75",
        text: "text-purple-300",
    },
    emerald: {
        border: "hover:border-emerald-400/35",
        tag: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
        hoverTitle: "group-hover:text-emerald-300",
        arrowHover: "hover:text-emerald-300 hover:border-emerald-400/50",
        iconBg: "bg-emerald-400/10 text-emerald-300",
        glow: "bg-emerald-400/10",
        glowStrong: "bg-emerald-400/25",
        shimmer: "from-emerald-400/70 via-teal-600/40 to-transparent",
        viewBtn: "bg-emerald-300 hover:bg-emerald-200 text-[#0b1120]",
        overlayFrom: "from-emerald-950/75",
        text: "text-emerald-300",
    },
    amber: {
        border: "hover:border-amber-400/35",
        tag: "border-amber-400/30 bg-amber-400/10 text-amber-300",
        hoverTitle: "group-hover:text-amber-300",
        arrowHover: "hover:text-amber-300 hover:border-amber-400/50",
        iconBg: "bg-amber-400/10 text-amber-300",
        glow: "bg-amber-400/10",
        glowStrong: "bg-amber-400/25",
        shimmer: "from-amber-400/70 via-orange-600/40 to-transparent",
        viewBtn: "bg-amber-300 hover:bg-amber-200 text-[#0b1120]",
        overlayFrom: "from-amber-950/75",
        text: "text-amber-300",
    },
};

export const COL_SPAN_CLASS: Record<ColSpan, string> = {
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    12: "md:col-span-12",
};

export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

export function getProjectUrlLabel(project: Project): string {
    if (project.liveUrl !== "#") return project.liveUrl;
    return `${project.title.toLowerCase().replace(/\s+/g, "-")}.app`;
}

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
        imageUrl: undefined,
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
        layout: "wide",
        colSpan: 7,
        githubUrl: "#",
        liveUrl: "#",
        imageUrl: undefined,
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
        layout: "wide",
        colSpan: 7,
        githubUrl: "#",
        liveUrl: "#",
        imageUrl: undefined,
        placeholderIcon: "account_tree",
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
            "A retirement planning platform with actuarial calculations, 10,000-iteration Monte Carlo simulations, comprehensive financial projections, and a personalized AI advisor.",
        stats: [
            { label: "Simulation", value: "Monte Carlo 10K" },
            { label: "Role", value: "Full-Stack Developer" },
        ],
        accentColor: "purple",
        layout: "compact",
        colSpan: 5,
        githubUrl: "https://github.com/FarhanGhifari/CuanSelor",
        liveUrl: "https://cuanselor.my.id",
        imageUrl: undefined,
        placeholderIcon: "monitoring",
    },
];
