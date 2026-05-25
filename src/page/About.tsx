import { memo } from "react";
import { Briefcase, FileText } from "lucide-react";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiLaravel,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiGit,
    SiTailwindcss,
    SiTypescript,
    SiGo
} from "react-icons/si";
import heroImg from "../assets/Photo.jpg";

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-4 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src={heroImg}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

interface SkillItem {
    name: string;
    level: number;
}

interface SkillCategory {
    category: string;
    icon: string;
    accentColor: string;
    items: SkillItem[];
}

interface ProfileMetaItem {
    label: string;
    value: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        category: "Frontend Development",
        icon: "code_blocks",
        accentColor: "cyan",
        items: [
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript / JavaScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
        ],
    },
    {
        category: "Backend Development",
        icon: "dns",
        accentColor: "purple",
        items: [
            { name: "Node.js / Express", level: 80 },
            { name: "Laravel / PHP", level: 85 },
            { name: "PostgreSQL / MySQL", level: 80 },
        ],
    },
    {
        category: "Software Engineering",
        icon: "account_tree",
        accentColor: "slate",
        items: [
            { name: "Git / Version Control", level: 90 },
            { name: "Docker / CI-CD", level: 75 },
            { name: "System Architecture", level: 80 },
        ],
    },
];

const PROFILE_META_ITEMS: ProfileMetaItem[] = [
    { label: "ENV.LOCATION", value: "Indonesia" },
    { label: "ENV.EXPERIENCE", value: "1 Years" },
];

const TECH_STACK_MARQUEE = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "ERP", icon: Briefcase, color: "#A855F7" },
];

const ACCENT_COLOR_MAP: Record<string, string> = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    slate: "text-slate-400",
};

const ACCENT_BG_MAP: Record<string, string> = {
    cyan: "bg-cyan-400/10 border-cyan-400/20",
    purple: "bg-purple-400/10 border-purple-400/20",
    slate: "bg-slate-400/10 border-slate-400/20",
};

const ACCENT_BAR_MAP: Record<string, string> = {
    cyan: "from-cyan-400/60 to-cyan-400",
    purple: "from-purple-400/60 to-purple-400",
    slate: "from-slate-400/60 to-slate-400",
};

interface SkillBarProps {
    skillItem: SkillItem;
    accentColor: string;
}

function SkillBar({ skillItem, accentColor }: SkillBarProps) {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="font-jetbrains text-[11px] tracking-widest text-white/40 uppercase">
                    {skillItem.name}
                </span>
                <span className={`font-jetbrains text-[11px] tracking-widest ${ACCENT_COLOR_MAP[accentColor]}`}>
                    {skillItem.level}%
                </span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${ACCENT_BAR_MAP[accentColor]}`}
                    style={{ width: `${skillItem.level}%` }}
                />
            </div>
        </div>
    );
}

interface SkillCardProps {
    skillCategory: SkillCategory;
}

function SkillCard({ skillCategory }: SkillCardProps) {
    return (
        <div className="glass-panel rounded-xl p-8 flex flex-col gap-6 relative overflow-hidden hover:border-white/15 transition-all duration-500">
            {/* Background glow */}
            <div
                className={`absolute top-0 right-0 w-32 h-32 blur-[40px] rounded-full pointer-events-none opacity-20 ${skillCategory.accentColor === "cyan"
                        ? "bg-cyan-400"
                        : skillCategory.accentColor === "purple"
                            ? "bg-purple-400"
                            : "bg-slate-400"
                    }`}
            />

            {/* Card Header */}
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded border border-white/10 ${ACCENT_BG_MAP[skillCategory.accentColor]}`}>
                    <span className={`material-symbols-outlined text-[22px] ${ACCENT_COLOR_MAP[skillCategory.accentColor]}`}>
                        {skillCategory.icon}
                    </span>
                </div>
                <h3 className="font-grotesk font-semibold text-[16px] text-white">
                    {skillCategory.category}
                </h3>
            </div>

            {/* Skill Bars */}
            <div className="flex flex-col gap-5">
                {skillCategory.items.map((skillItem) => (
                    <SkillBar
                        key={skillItem.name}
                        skillItem={skillItem}
                        accentColor={skillCategory.accentColor}
                    />
                ))}
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen w-full px-[5%] lg:px-[10%] py-24"
        >

            {/* Section Header */}
            <div className="mb-16">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-jetbrains text-[11px] tracking-widest text-white/40 uppercase">
                        System Profile
                    </span>
                </div>
                <h2 className="font-grotesk font-bold text-[42px] md:text-[56px] lg:text-[64px] text-white leading-tight tracking-tight mb-4">
                    About{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Me.
                    </span>
                </h2>
            </div>

            {/* About + Domain Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

                {/* Profile Text — 8 cols */}
                <div className="lg:col-span-8 glass-panel rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600 opacity-60" />
                    <div
                        className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />

                    <div className="relative z-10">

                        {/* Large Heading from Image */}
                        <h2 className="font-grotesk font-bold text-[40px] md:text-[60px] leading-[1.1] mb-8 tracking-tight">
                            <span className="text-white">Architecting</span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Scalable Systems
                            </span>
                        </h2>

                        {/* Code Block */}
                        <div className="font-jetbrains text-[13px] text-white/40 leading-relaxed mb-8 bg-black/20 rounded-lg p-6 border border-white/5 relative overflow-hidden group">
                            {/* Decorative line on the left */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-400 opacity-40" />
                            
                            <span className="text-cyan-400">const</span>{" "}
                            <span className="text-white">developer</span>{" "}
                            <span className="text-white/40">= {"{"}</span>
                            <br />
                            &nbsp;&nbsp;role:{" "}
                            <span className="text-purple-300">&apos;Software Engineer & Full Stack Developer&apos;</span>,
                            <br />
                            &nbsp;&nbsp;focus:{" "}
                            <span className="text-purple-300">&apos;High-performance architecture & elite UX&apos;</span>,
                            <br />
                            &nbsp;&nbsp;philosophy:{" "}
                            <span className="text-purple-300">&apos;Make it work. Make it fast. Make it clean.&apos;</span>,
                            <br />
                            &nbsp;&nbsp;available:{" "}
                            <span className="text-cyan-400">true</span>
                            <br />
                            <span className="text-white/40">{"}"}</span>
                        </div>

                        {/* Bio */}
                        <div className="space-y-4 mb-8">
                            <p className="font-geist text-[15px] text-white/50 leading-relaxed">
                                I&apos;m a passionate software engineer focused on building
                                end-to-end digital solutions. From architecting robust backend
                                systems to crafting polished user interfaces, I bring ideas to
                                life through clean and efficient code.
                            </p>
                            <p className="font-geist text-[15px] text-white/50 leading-relaxed">
                                With experience across web development, software engineering, and
                                ERP systems, I thrive at the intersection of technology and
                                real-world business needs.
                            </p>
                        </div>

                        {/* Meta Info */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {PROFILE_META_ITEMS.map((metaItem) => (
                                <div
                                    key={metaItem.label}
                                    className="bg-white/5 border border-white/5 rounded-lg px-4 py-3 flex flex-col gap-1"
                                >
                                    <span className="font-jetbrains text-[10px] tracking-widest text-white/30">
                                        {metaItem.label}
                                    </span>
                                    <span className="font-jetbrains text-[12px] text-white">
                                        {metaItem.value}
                                    </span>
                                </div>
                            ))}
                            {/* CV Button */}
                            <a
                                href="cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="col-span-2 sm:col-span-1 flex items-center justify-center w-full"
                            >
                                <button
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    className="w-full sm:px-6 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Profile Photo — 4 cols */}
                <div className="lg:col-span-4 flex items-center justify-end p-4 md:p-8 lg:p-0">
                    <ProfileImage />
                </div>

            </div>

            {/* Skills Section */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <span className="font-jetbrains text-cyan-400 text-lg">&gt;_</span>
                    <h3 className="font-grotesk font-semibold text-[28px] md:text-[32px] text-white tracking-tight">
                        TECHNICAL_CAPABILITIES
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SKILL_CATEGORIES.map((skillCategory) => (
                        <SkillCard
                            key={skillCategory.category}
                            skillCategory={skillCategory}
                        />
                    ))}
                </div>
            </div>

            {/* Tech Stack Marquee */}
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b1120] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b1120] to-transparent z-10 pointer-events-none" />

                <div
                    className="flex w-max py-4"
                    style={{
                        animation: "marquee 30s linear infinite",
                    }}
                >
                    {[...TECH_STACK_MARQUEE, ...TECH_STACK_MARQUEE].map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex items-center gap-2 glass-panel px-6 py-3 rounded-lg mx-2 shrink-0"
                            >
                                <Icon className="w-4 h-4" style={{ color: tech.color }} />
                                <span className="font-jetbrains text-[11px] tracking-widest text-white whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Marquee keyframes */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

        </section>
    );
}