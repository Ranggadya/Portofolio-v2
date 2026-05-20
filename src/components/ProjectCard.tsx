import type { Project } from "../types/project-type";

const ACCENT_BORDER_COLOR_MAP: Record<Project["accentColor"], string> = {
    cyan: "hover:border-cyan-400/30",
    purple: "hover:border-purple-400/30",
};

const ACCENT_TAG_COLOR_MAP: Record<Project["accentColor"], string> = {
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-400",
    purple: "border-purple-400/30 bg-purple-400/10 text-purple-400",
};

const ACCENT_HOVER_TITLE_MAP: Record<Project["accentColor"], string> = {
    cyan: "group-hover:text-cyan-400",
    purple: "group-hover:text-purple-400",
};

const ACCENT_ARROW_HOVER_MAP: Record<Project["accentColor"], string> = {
    cyan: "hover:text-cyan-400 hover:border-cyan-400/50",
    purple: "hover:text-purple-400 hover:border-purple-400/50",
};

interface FeaturedProjectCardProps {
    project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
    return (
        <article className="md:col-span-12 group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/8 min-h-[420px] flex flex-col md:flex-row">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-600/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0b1120] via-[#0b1120]/90 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400/60 via-purple-600/40 to-transparent" />

            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end w-full md:w-1/2 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag.label}
                            className="font-jetbrains text-[11px] tracking-widest px-3 py-1 rounded border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[13px]">{tag.icon}</span>
                            {tag.label}
                        </span>
                    ))}
                    <span className="font-jetbrains text-[11px] tracking-widest px-3 py-1 rounded border border-purple-400/20 bg-purple-400/5 text-purple-400">
                        FEATURED
                    </span>
                </div>

                <h3 className="font-grotesk font-bold text-[32px] md:text-[40px] text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="font-geist text-[15px] text-white/50 mb-6 max-w-lg leading-relaxed">
                    {project.description}
                </p>

                {project.stats && (
                    <div className="flex flex-wrap gap-6 mb-6 pt-4 border-t border-white/10">
                        {project.stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-1">
                                <span className="font-jetbrains text-[10px] tracking-widest text-white/30 uppercase">
                                    {stat.label}
                                </span>
                                <span className="font-jetbrains text-[12px] text-white">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-6">
                    <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 font-jetbrains text-[12px] tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                        VIEW CASE STUDY
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>

                    <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 font-jetbrains text-[12px] tracking-widest text-white/30 hover:text-white/60 transition-colors duration-200"
                    >
                        <span className="material-symbols-outlined text-[16px]">code</span>
                        SOURCE
                    </a>
                </div>
            </div>

            <div className="hidden md:flex md:w-1/2 items-center justify-center relative p-10">
                <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/5 to-transparent pointer-events-none" />
                <div className="relative z-10 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute -inset-8 bg-cyan-400/10 rounded-full blur-3xl" />
                        <span className="material-symbols-outlined text-[140px] text-cyan-400/15 relative z-10">hub</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

interface RegularProjectCardProps {
    project: Project;
}

export function RegularProjectCard({ project }: RegularProjectCardProps) {
    const colSpanClass = project.colSpan === 7 ? "md:col-span-7" : "md:col-span-5";

    return (
        <article
            className={`${colSpanClass} group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 ${ACCENT_BORDER_COLOR_MAP[project.accentColor]} hover:bg-white/8 min-h-[300px] flex flex-col`}
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-auto">
                    <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 ${project.accentColor === "cyan"
                                ? "bg-cyan-400/10 text-cyan-400"
                                : "bg-purple-400/10 text-purple-400"
                            }`}
                    >
                        <span className="material-symbols-outlined text-[24px]">{project.categoryIcon}</span>
                    </div>
                    <span className={`font-jetbrains text-[11px] tracking-widest px-3 py-1 rounded border ${ACCENT_TAG_COLOR_MAP[project.accentColor]}`}>
                        {project.category}
                    </span>
                </div>

                <div className="mt-8">
                    <h3 className={`font-grotesk font-bold text-[22px] text-white mb-2 transition-colors duration-300 ${ACCENT_HOVER_TITLE_MAP[project.accentColor]}`}>
                        {project.title}
                    </h3>
                    <p className="font-geist text-[14px] text-white/40 leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="flex items-center gap-4 text-white/30">
                            {project.tags.map((tag) => (
                                <span key={tag.label} className="font-jetbrains text-[11px] tracking-widest flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">{tag.icon}</span>
                                    {tag.label}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href={project.githubUrl}
                                className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/30 transition-all duration-200 ${ACCENT_ARROW_HOVER_MAP[project.accentColor]}`}
                                aria-label={`View ${project.title} source code`}
                            >
                                <span className="material-symbols-outlined text-[15px]">code</span>
                            </a>

                            <a
                                href={project.liveUrl}
                                className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/30 transition-all duration-200 ${ACCENT_ARROW_HOVER_MAP[project.accentColor]}`}
                                aria-label={`View ${project.title} live`}
                            >
                                <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
