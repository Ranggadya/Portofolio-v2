// src/components/ProjectCard.tsx

import { memo } from "react";
import type { AccentColor, ColSpan, Project, ProjectTag } from "../types/project-type";

// ─── Accent Config ─────────────────────────────────────────────────────────────

interface AccentTokens {
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

const ACCENT_TOKENS: Record<AccentColor, AccentTokens> = {
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

// ─── Col Span Map ──────────────────────────────────────────────────────────────

const COL_SPAN_CLASS: Record<ColSpan, string> = {
    5: "md:col-span-5",
    7: "md:col-span-7",
    12: "md:col-span-12",
};

// ─── Helper ────────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(" ");
}

function getProjectUrlLabel(project: Project): string {
    if (project.liveUrl !== "#") return project.liveUrl;

    return `${project.title.toLowerCase().replace(/\s+/g, "-")}.app`;
}

// ─── Image Placeholder ─────────────────────────────────────────────────────────

const ImagePlaceholder = memo(function ImagePlaceholder({
    icon,
    accentColor,
    featured = false,
}: {
    icon: string;
    accentColor: AccentColor;
    featured?: boolean;
}) {
    const tokens = ACCENT_TOKENS[accentColor];

    return (
        <div className="relative h-full w-full overflow-hidden bg-[#0b1120]">
            <div
                className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]",
                    featured ? "h-[440px] w-[440px]" : "h-[260px] w-[260px]",
                    tokens.glowStrong
                )}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_45%)]" />

            <span
                className="material-symbols-outlined absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none text-white/[0.07]"
                style={{ fontSize: featured ? "140px" : "76px" }}
                aria-hidden="true"
            >
                {icon}
            </span>
        </div>
    );
});

// ─── Project Image ─────────────────────────────────────────────────────────────

const ProjectImage = memo(function ProjectImage({
    imageUrl,
    placeholderIcon = "image",
    alt,
    accentColor,
    featured = false,
}: {
    imageUrl?: string;
    placeholderIcon?: string;
    alt: string;
    accentColor: AccentColor;
    featured?: boolean;
}) {
    return (
        <div className="relative h-full w-full overflow-hidden">
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt={alt}
                    className={cn(
                        "h-full w-full object-cover transition-transform duration-700 ease-out",
                        "group-hover:scale-[1.035]",
                        featured && "object-center"
                    )}
                    loading="lazy"
                    decoding="async"
                />
            ) : (
                <ImagePlaceholder
                    icon={placeholderIcon}
                    accentColor={accentColor}
                    featured={featured}
                />
            )}
        </div>
    );
});

// ─── Browser Mockup Preview ────────────────────────────────────────────────────

const BrowserMockupPreview = memo(function BrowserMockupPreview({
    project,
    large = false,
}: {
    project: Project;
    large?: boolean;
}) {
    const tokens = ACCENT_TOKENS[project.accentColor];

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10",
                "bg-[#0d1424]/90 backdrop-blur-xl",
                "shadow-[0_28px_80px_rgba(0,0,0,0.36)]",
                "transition-all duration-500",
                "group-hover:-translate-y-1 group-hover:shadow-[0_38px_110px_rgba(0,0,0,0.46)]",
                large ? "w-full max-w-[780px]" : "w-full"
            )}
        >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
                <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="mx-4 flex-1">
                    <div className="mx-auto flex max-w-[260px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                        <span className="truncate font-jetbrains text-[10px] tracking-widest text-white/35">
                            {getProjectUrlLabel(project)}
                        </span>
                    </div>
                </div>

                <div className="w-[44px]" />
            </div>

            <div
                className={cn(
                    "relative overflow-hidden",
                    large ? "h-[320px] md:h-[400px]" : "h-[190px]"
                )}
            >
                <ProjectImage
                    imageUrl={project.imageUrl}
                    placeholderIcon={project.placeholderIcon}
                    alt={`${project.title} preview`}
                    accentColor={project.accentColor}
                    featured={large}
                />

                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-tr opacity-30",
                        tokens.overlayFrom,
                        "via-transparent to-transparent"
                    )}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                    <span className="font-jetbrains text-[10px] uppercase tracking-widest text-white/55">
                        Interface Preview
                    </span>
                </div>
            </div>
        </div>
    );
});

// ─── Project Tag Badge ─────────────────────────────────────────────────────────

const ProjectTagBadge = memo(function ProjectTagBadge({
    tag,
    accentColor,
    subtle = false,
}: {
    tag: ProjectTag;
    accentColor: AccentColor;
    subtle?: boolean;
}) {
    const tokens = ACCENT_TOKENS[accentColor];

    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
                "font-jetbrains text-[10px] tracking-widest backdrop-blur-md",
                subtle ? "border-white/10 bg-white/[0.035] text-white/42" : tokens.tag
            )}
        >
            <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                {tag.icon}
            </span>
            {tag.label}
        </span>
    );
});

// ─── Category Badge ────────────────────────────────────────────────────────────

const CategoryBadge = memo(function CategoryBadge({
    project,
}: {
    project: Project;
}) {
    const tokens = ACCENT_TOKENS[project.accentColor];

    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
                "bg-black/30 backdrop-blur-xl",
                "font-jetbrains text-[10px] uppercase tracking-widest",
                tokens.tag
            )}
        >
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                {project.categoryIcon}
            </span>
            {project.category}
        </div>
    );
});

// ─── Action Icon Button ────────────────────────────────────────────────────────

const ActionIconButton = memo(function ActionIconButton({
    href,
    icon,
    label,
    accentColor,
}: {
    href: string;
    icon: string;
    label: string;
    accentColor: AccentColor;
}) {
    const tokens = ACCENT_TOKENS[accentColor];
    const isExternal = href !== "#";

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                "border border-white/10 bg-white/10 text-white/55",
                "backdrop-blur-xl transition-all duration-200",
                "hover:bg-white/15",
                tokens.arrowHover
            )}
            aria-label={label}
        >
            <span className="material-symbols-outlined text-[17px]" aria-hidden="true">
                {icon}
            </span>
        </a>
    );
});

// ─── Featured Project Card ─────────────────────────────────────────────────────

const FeaturedProjectCard = memo(function FeaturedProjectCard({
    project,
}: {
    project: Project;
}) {
    const tokens = ACCENT_TOKENS[project.accentColor];
    const isExternalLive = project.liveUrl !== "#";
    const isExternalGithub = project.githubUrl !== "#";

    return (
        <article
            className={cn(
                "md:col-span-12 group relative overflow-hidden rounded-[30px]",
                "min-h-[560px] border border-white/10 bg-white/[0.04]",
                "shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl",
                "transition-all duration-500 hover:bg-white/[0.06]",
                tokens.border
            )}
            aria-label={`Featured project: ${project.title}`}
        >
            <div className="absolute inset-0">
                <div
                    className={cn(
                        "absolute left-[-10%] top-[-10%] h-[280px] w-[280px] rounded-full blur-3xl opacity-35",
                        tokens.glow
                    )}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,17,32,0.98)_0%,rgba(11,17,32,0.93)_34%,rgba(11,17,32,0.70)_58%,rgba(11,17,32,0.24)_82%,rgba(11,17,32,0.08)_100%)]" />
            </div>

            <div
                className={cn(
                    "absolute left-0 top-0 z-20 h-[1px] w-full bg-gradient-to-r",
                    tokens.shimmer
                )}
            />

            <div className="relative z-10 grid min-h-[560px] grid-cols-1 gap-10 p-6 md:grid-cols-12 md:p-10">
                <div className="flex flex-col justify-between md:col-span-5 lg:col-span-5">
                    <div>
                        <div className="mb-5 flex flex-wrap items-center gap-2">
                            <span
                                className={cn(
                                    "rounded-full border px-3 py-1.5 font-jetbrains text-[11px] tracking-widest",
                                    tokens.tag
                                )}
                            >
                                FEATURED
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-jetbrains text-[11px] tracking-widest text-white/45">
                                {project.category}
                            </span>
                        </div>

                        <h3
                            className={cn(
                                "mb-4 font-grotesk text-[36px] font-bold leading-[1.02] tracking-tight text-white",
                                "md:text-[52px] lg:text-[60px]",
                                "transition-colors duration-300",
                                tokens.hoverTitle
                            )}
                        >
                            {project.title}
                        </h3>

                        <p className="mb-7 max-w-xl font-geist text-[15px] leading-relaxed text-white/54 md:text-[16px]">
                            {project.description}
                        </p>

                        {project.stats && project.stats.length > 0 && (
                            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {project.stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
                                    >
                                        <span className="block font-jetbrains text-[10px] uppercase tracking-widest text-white/28">
                                            {stat.label}
                                        </span>
                                        <span className="mt-1 block font-jetbrains text-[12px] text-white/90">
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mb-8 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <ProjectTagBadge
                                    key={tag.label}
                                    tag={tag}
                                    accentColor={project.accentColor}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href={project.liveUrl}
                            target={isExternalLive ? "_blank" : undefined}
                            rel={isExternalLive ? "noopener noreferrer" : undefined}
                            className={cn(
                                "inline-flex items-center gap-2 rounded-full px-5 py-3",
                                "font-jetbrains text-[11px] font-semibold tracking-widest",
                                "transition-all duration-200 hover:scale-[1.02]",
                                tokens.viewBtn
                            )}
                            aria-label={`Visit ${project.title} live`}
                        >
                            <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                                open_in_new
                            </span>
                            LIVE DEMO
                        </a>

                        <a
                            href={project.liveUrl}
                            target={isExternalLive ? "_blank" : undefined}
                            rel={isExternalLive ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-jetbrains text-[11px] tracking-widest text-white/55 transition-all duration-200 hover:bg-white/10 hover:text-white"
                        >
                            VIEW CASE STUDY
                            <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                                arrow_forward
                            </span>
                        </a>

                        <a
                            href={project.githubUrl}
                            target={isExternalGithub ? "_blank" : undefined}
                            rel={isExternalGithub ? "noopener noreferrer" : undefined}
                            className="ml-auto inline-flex items-center gap-2 font-jetbrains text-[11px] tracking-widest text-white/30 transition-colors duration-200 hover:text-white/65"
                            aria-label={`View ${project.title} source on GitHub`}
                        >
                            <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                                code
                            </span>
                            SOURCE
                        </a>
                    </div>
                </div>

                <div className="relative flex items-center justify-center md:col-span-7 lg:col-span-7">
                    <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)] md:block" />

                    <div className="relative w-full max-w-[820px] md:translate-x-4 lg:translate-x-8">
                        <BrowserMockupPreview project={project} large />
                    </div>
                </div>
            </div>
        </article>
    );
});

// ─── Compact Project Card ──────────────────────────────────────────────────────

const CompactProjectCard = memo(function CompactProjectCard({
    project,
}: {
    project: Project;
}) {
    const tokens = ACCENT_TOKENS[project.accentColor];
    const isExternalLive = project.liveUrl !== "#";
    const isExternalGithub = project.githubUrl !== "#";

    return (
        <article
            className={cn(
                COL_SPAN_CLASS[project.colSpan],
                "group relative flex min-h-[420px] flex-col overflow-hidden rounded-[26px]",
                "border border-white/10 bg-white/[0.045] backdrop-blur-xl",
                "shadow-[0_20px_80px_rgba(0,0,0,0.22)]",
                "transition-all duration-500 hover:bg-white/[0.065]",
                tokens.border
            )}
            aria-label={`Project: ${project.title}`}
        >
            <div
                className={cn(
                    "absolute right-[-20%] top-[-12%] h-[260px] w-[260px] rounded-full blur-[90px] opacity-30",
                    tokens.glowStrong
                )}
            />

            <div className="absolute left-0 top-0 z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="relative z-10 p-5 pb-0">
                <BrowserMockupPreview project={project} />
            </div>

            <div className="relative z-10 flex flex-1 flex-col p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                    <CategoryBadge project={project} />

                    <div className="flex items-center gap-2">
                        <ActionIconButton
                            href={project.githubUrl}
                            icon="code"
                            label={`View ${project.title} source code`}
                            accentColor={project.accentColor}
                        />
                        <ActionIconButton
                            href={project.liveUrl}
                            icon="open_in_new"
                            label={`Visit ${project.title} live`}
                            accentColor={project.accentColor}
                        />
                    </div>
                </div>

                <h3
                    className={cn(
                        "mb-3 font-grotesk text-[24px] font-bold leading-tight text-white",
                        "transition-colors duration-300",
                        tokens.hoverTitle
                    )}
                >
                    {project.title}
                </h3>

                <p className="mb-6 font-geist text-[13px] leading-relaxed text-white/48">
                    {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <ProjectTagBadge
                            key={tag.label}
                            tag={tag}
                            accentColor={project.accentColor}
                            subtle
                        />
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                    <a
                        href={project.liveUrl}
                        target={isExternalLive ? "_blank" : undefined}
                        rel={isExternalLive ? "noopener noreferrer" : undefined}
                        className={cn(
                            "inline-flex items-center gap-2 font-jetbrains text-[11px] font-semibold tracking-widest",
                            "transition-colors duration-200",
                            tokens.text,
                            "hover:text-white"
                        )}
                    >
                        EXPLORE
                        <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                            arrow_forward
                        </span>
                    </a>

                    <a
                        href={project.githubUrl}
                        target={isExternalGithub ? "_blank" : undefined}
                        rel={isExternalGithub ? "noopener noreferrer" : undefined}
                        className="font-jetbrains text-[11px] tracking-widest text-white/30 transition-colors duration-200 hover:text-white/60"
                    >
                        SOURCE
                    </a>
                </div>
            </div>
        </article>
    );
});

// ─── Soft Blend Project Card ───────────────────────────────────────────────────

const SoftBlendProjectCard = memo(function SoftBlendProjectCard({
    project,
}: {
    project: Project;
}) {
    const tokens = ACCENT_TOKENS[project.accentColor];
    const isExternalLive = project.liveUrl !== "#";
    const isExternalGithub = project.githubUrl !== "#";

    return (
        <article
            className={cn(
                COL_SPAN_CLASS[project.colSpan],
                "group relative overflow-hidden rounded-[26px]",
                "min-h-[420px] border border-white/10 bg-white/[0.045]",
                "shadow-[0_22px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl",
                "transition-all duration-500 hover:bg-white/[0.065]",
                tokens.border
            )}
            aria-label={`Project: ${project.title}`}
        >
            <div className="absolute inset-y-0 right-0 w-full md:w-[68%]">
                <ProjectImage
                    imageUrl={project.imageUrl}
                    placeholderIcon={project.placeholderIcon}
                    alt={`${project.title} preview`}
                    accentColor={project.accentColor}
                />
            </div>

            <div
                className={cn(
                    "absolute right-[-10%] top-[-12%] h-[300px] w-[300px] rounded-full blur-[100px] opacity-35",
                    tokens.glowStrong
                )}
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,17,32,0.98)_0%,rgba(11,17,32,0.95)_34%,rgba(11,17,32,0.78)_52%,rgba(11,17,32,0.42)_74%,rgba(11,17,32,0.18)_100%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,17,32,0.94)_0%,rgba(11,17,32,0.52)_40%,rgba(11,17,32,0.08)_100%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.13),transparent_34%)]" />

            <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.75)_1px,transparent_1px)] bg-[size:52px_52px]" />

            <div className="absolute inset-0 bg-[#0b1120]/35 md:bg-transparent" />

            <div className="absolute left-0 top-0 z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between gap-3">
                <CategoryBadge project={project} />

                <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                    <ActionIconButton
                        href={project.githubUrl}
                        icon="code"
                        label={`View ${project.title} source code`}
                        accentColor={project.accentColor}
                    />

                    <ActionIconButton
                        href={project.liveUrl}
                        icon="open_in_new"
                        label={`Visit ${project.title} live`}
                        accentColor={project.accentColor}
                    />
                </div>
            </div>

            <div className="relative z-10 flex min-h-[420px] items-end md:items-center p-6">
                <div className="w-full max-w-[460px] pt-20 md:pt-12">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <ProjectTagBadge
                                key={tag.label}
                                tag={tag}
                                accentColor={project.accentColor}
                            />
                        ))}
                    </div>

                    <div className="mb-4 flex items-start gap-3">
                        <div
                            className={cn(
                                "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl",
                                "border border-white/10 bg-black/20 backdrop-blur-xl",
                                tokens.iconBg
                            )}
                            aria-hidden="true"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {project.categoryIcon}
                            </span>
                        </div>

                        <div>
                            <h3
                                className={cn(
                                    "font-grotesk text-[28px] font-bold leading-tight text-white",
                                    "transition-colors duration-300",
                                    tokens.hoverTitle
                                )}
                            >
                                {project.title}
                            </h3>

                            <p className="mt-3 max-w-[410px] font-geist text-[14px] leading-relaxed text-white/52">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {project.stats && project.stats.length > 0 && (
                        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {project.stats.slice(0, 2).map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
                                >
                                    <span className="block font-jetbrains text-[9px] uppercase tracking-widest text-white/28">
                                        {stat.label}
                                    </span>
                                    <span className="mt-1 block font-jetbrains text-[11px] text-white/85">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                        <a
                            href={project.liveUrl}
                            target={isExternalLive ? "_blank" : undefined}
                            rel={isExternalLive ? "noopener noreferrer" : undefined}
                            className={cn(
                                "inline-flex items-center gap-2 font-jetbrains text-[11px] font-semibold tracking-widest",
                                "transition-colors duration-200",
                                tokens.text,
                                "hover:text-white"
                            )}
                            aria-label={`View ${project.title} live demo`}
                        >
                            EXPLORE PROJECT
                            <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                                arrow_forward
                            </span>
                        </a>

                        <a
                            href={project.githubUrl}
                            target={isExternalGithub ? "_blank" : undefined}
                            rel={isExternalGithub ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 font-jetbrains text-[11px] tracking-widest text-white/30 transition-colors duration-200 hover:text-white/60"
                            aria-label={`View ${project.title} source on GitHub`}
                        >
                            SOURCE
                            <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                                code
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
});

// ─── Wide Project Card ─────────────────────────────────────────────────────────
// Opsional: tetap disediakan kalau nanti kamu mau pakai layout wide lagi.

const WideProjectCard = memo(function WideProjectCard({
    project,
}: {
    project: Project;
}) {
    return <SoftBlendProjectCard project={project} />;
});

// ─── Project Card Router ───────────────────────────────────────────────────────

export const ProjectCard = memo(function ProjectCard({
    project,
}: {
    project: Project;
}) {
    if (project.layout === "featured") {
        return <FeaturedProjectCard project={project} />;
    }

    if (project.layout === "soft") {
        return <SoftBlendProjectCard project={project} />;
    }

    if (project.layout === "wide") {
        return <WideProjectCard project={project} />;
    }

    return <CompactProjectCard project={project} />;
});