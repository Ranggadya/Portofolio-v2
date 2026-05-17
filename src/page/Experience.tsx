interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    techStack: string[];
    isCurrent: boolean;
}

interface EducationItem {
    id: number;
    degree: string;
    institution: string;
    period: string;
    description: string;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
    {
        id: 1,
        role: "Senior Product Designer",
        company: "NEXUS DYNAMICS",
        period: "2021 — PRESENT",
        description:
            "Leading design initiatives for enterprise SaaS platforms, focusing on complex data visualization and modular design systems. Orchestrated the redesign of the core analytics suite, resulting in a 40% increase in user engagement.",
        techStack: ["Figma", "Design Systems", "React"],
        isCurrent: true,
    },
    {
        id: 2,
        role: "UX/UI Designer",
        company: "AETHER CREATIVE",
        period: "2018 — 2021",
        description:
            "Developed intuitive user interfaces for high-profile fintech clients. Conducted extensive user research and usability testing to refine transaction flows and improve overall user satisfaction.",
        techStack: ["Figma", "Vue.js", "CSS"],
        isCurrent: false,
    },
    {
        id: 3,
        role: "Junior Web Designer",
        company: "LUMINA STUDIOS",
        period: "2016 — 2018",
        description:
            "Assisted in the creation of responsive marketing websites and digital campaigns. Handled front-end prototyping using HTML, CSS, and early-stage JavaScript frameworks.",
        techStack: ["HTML", "CSS", "JavaScript"],
        isCurrent: false,
    },
];

const EDUCATION_ITEMS: EducationItem[] = [
    {
        id: 1,
        degree: "Bachelor of Computer Science",
        institution: "Diponegoro University",
        period: "2023 - current",
        description:
            "Focus on cognitive psychology in digital interfaces and advanced interaction design paradigms.",
    }
];

interface ExperienceCardProps {
    experienceItem: ExperienceItem;
}

function ExperienceCard({ experienceItem }: ExperienceCardProps) {
    return (
        <div className="relative pl-8 group">

            {/* Timeline dot */}
            <div
                className={`absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full ring-4 ring-[#0b1120] transition-colors duration-300 ${experienceItem.isCurrent
                        ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        : "bg-white/20 group-hover:bg-cyan-400"
                    }`}
            />

            {/* Card */}
            <div className="glass-panel rounded-xl p-6 hover:border-white/15 transition-all duration-300">

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                        <h3 className="font-grotesk font-semibold text-[17px] text-white">
                            {experienceItem.role}
                        </h3>
                        <p className={`font-jetbrains text-[11px] tracking-widest mt-1 ${experienceItem.isCurrent ? "text-cyan-400" : "text-purple-400"
                            }`}>
                            {experienceItem.company}
                        </p>
                    </div>
                    <span className="font-jetbrains text-[11px] tracking-widest text-white/30 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit whitespace-nowrap">
                        {experienceItem.period}
                    </span>
                </div>

                {/* Description */}
                <p className="font-geist text-[14px] text-white/40 leading-relaxed mb-4">
                    {experienceItem.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                    {experienceItem.techStack.map((technology) => (
                        <span
                            key={technology}
                            className="font-jetbrains text-[11px] tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}

interface EducationCardProps {
    educationItem: EducationItem;
}

function EducationCard({ educationItem }: EducationCardProps) {
    return (
        <div className="relative pl-8 group">

            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-2 w-[8px] h-[8px] rounded-full bg-white/20 ring-4 ring-[#0b1120] group-hover:bg-purple-400 transition-colors duration-300" />

            {/* Card */}
            <div className="glass-panel rounded-xl p-6 hover:border-white/15 transition-all duration-300">

                {/* Card Header */}
                <div className="mb-3">
                    <h3 className="font-grotesk font-semibold text-[16px] text-white">
                        {educationItem.degree}
                    </h3>
                    <p className="font-jetbrains text-[11px] tracking-widest text-white/40 mt-1">
                        {educationItem.institution}
                    </p>
                    <p className="font-jetbrains text-[11px] tracking-widest text-white/30 mt-1">
                        {educationItem.period}
                    </p>
                </div>

                {/* Description */}
                <p className="font-geist text-[13px] text-white/40 leading-relaxed">
                    {educationItem.description}
                </p>

            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen w-full px-[5%] lg:px-[10%] py-24"
        >

            {/* Section Header */}
            <div className="mb-16">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-jetbrains text-[11px] tracking-widest text-white/40 uppercase">
                        Career Timeline
                    </span>
                </div>
                <h2 className="font-grotesk font-bold text-[42px] md:text-[56px] lg:text-[64px] text-white leading-tight tracking-tight mb-4">
                    Experience &{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Education.
                    </span>
                </h2>
                <p className="font-geist text-[16px] md:text-[18px] text-white/40 max-w-2xl leading-relaxed">
                    A chronological overview of my professional journey and educational
                    background.
                </p>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Experience Column — 8 cols */}
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-cyan-400 text-[22px]">
                            work
                        </span>
                        <h3 className="font-grotesk font-semibold text-[24px] text-white">
                            Professional Experience
                        </h3>
                    </div>

                    {/* Timeline Line + Cards */}
                    <div className="relative border-l border-white/10 ml-1 space-y-6">
                        {EXPERIENCE_ITEMS.map((experienceItem) => (
                            <ExperienceCard
                                key={experienceItem.id}
                                experienceItem={experienceItem}
                            />
                        ))}
                    </div>
                </div>

                {/* Education Column — 4 cols */}
                <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-purple-400 text-[22px]">
                            school
                        </span>
                        <h3 className="font-grotesk font-semibold text-[24px] text-white">
                            Education
                        </h3>
                    </div>

                    {/* Timeline Line + Cards */}
                    <div className="relative border-l border-white/10 ml-1 space-y-6">
                        {EDUCATION_ITEMS.map((educationItem) => (
                            <EducationCard
                                key={educationItem.id}
                                educationItem={educationItem}
                            />
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}