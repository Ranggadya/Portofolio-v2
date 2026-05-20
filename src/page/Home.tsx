import { memo } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import SocialLinks from "../components/SocialLinks";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// ============================================================
// CONSTANTS
// ============================================================

const ROTATING_WORDS: string[] = [
    "Front End Developer",
    "Back-End Developer",
    "Full Stack Developer",
    "Web Designer",
];

const TECH_STACK: string[] = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "PostgreSQL",
    "Go",
];

const CTA_BUTTONS: { label: string; icon: string; sectionId: string }[] = [
    { label: "CONTACT", icon: "mail", sectionId: "contact" },
    { label: "MY WORK", icon: "open_in_new", sectionId: "projects" },
];

const PROFILE_DETAILS: { label: string; value: string }[] = [
    { label: "ROLE", value: "Software Engineer" },
    { label: "FOCUS", value: "Full Stack Development" },
    { label: "STACK", value: "React / Node.js / Laravel" },
    { label: "DOMAIN", value: "Web · Software · ERP" },
];

const PROFILE_TECH_TAGS: string[] = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "PostgreSQL",
    "ERP",
];

const SOCIAL_LINKS = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/Ranggadya" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/ranggadya/" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/rnggdyar/" },
];

// HELPER
// ============================================================

function scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
    }
}

// ============================================================
// SUB COMPONENTS — di-memo supaya tidak re-render saat
// displayedText berubah karena typing effect
// ============================================================

const StatusBadge = memo(function StatusBadge() {
    return (
        <div className="relative inline-flex w-fit group">

           
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-50 group-hover:opacity-80 blur-sm transition duration-300" />

            <div className="relative inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-white font-jetbrains text-[11px] tracking-widest whitespace-nowrap">
                    AVAILABLE FOR OPPORTUNITIES
                </span>
            </div>

        </div>
    );
});

const HeroTitle = memo(function HeroTitle() {
    return (
        <div className="space-y-2">
            <h1 className="font-grotesk font-bold text-[48px] sm:text-[56px] md:text-[60px] xl:text-[72px] tracking-tight leading-tight">
                <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-20 pointer-events-none" />
                    <span className="relative text-white">Software</span>
                </span>
                <br />
                <span className="relative inline-block mt-2">
                    <span className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-20 pointer-events-none" />
                    <span className="relative bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Engineer
                    </span>
                </span>
            </h1>
        </div>
    );
});

const HeroDescription = memo(function HeroDescription() {
    return (
        <p className="font-geist text-base md:text-lg text-white/50 max-w-xl leading-relaxed font-light">
            I design and build end-to-end software solutions — from scalable backend
            systems and clean APIs to responsive, high-performance interfaces. Make it
            work. Make it fast. Make it clean.
        </p>
    );
});

const TechStackPills = memo(function TechStackPills() {
    return (
        <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((technology) => (
                <div
                    key={technology}
                    className="hidden sm:block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 font-jetbrains text-[12px] text-white/50 hover:bg-white/10 hover:text-white/80 transition-all duration-200 cursor-default"
                >
                    {technology}
                </div>
            ))}
        </div>
    );
});

const CTAButtons = memo(function CTAButtons() {
    return (
        <div className="flex flex-row gap-4">
            {CTA_BUTTONS.map((button) => (
                <button
                    key={button.label}
                    onClick={() => scrollToSection(button.sectionId)}
                    className="group relative w-[150px]"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700" />
                    <div className="relative h-11 bg-[#0b1120] backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden">
                        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-cyan-400/20 to-purple-600/20" />
                        <span className="absolute inset-0 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                            <span className="font-jetbrains text-white text-[11px] tracking-widest z-10">
                                {button.label}
                            </span>
                            <span className="material-symbols-outlined text-[15px] text-white z-10 group-hover:translate-x-1 transition-transform duration-300">
                                {button.icon}
                            </span>
                        </span>
                    </div>
                </button>
            ))}
        </div>
    );
});

const ProfileCard = memo(function ProfileCard() {
    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">

                {/* Glow effect behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20 blur-xl rounded-xl pointer-events-none" />

                <div className="glass-panel rounded-xl p-8 relative overflow-hidden hover:border-cyan-400/50 transition-colors duration-500">

                    {/* Corner accent top left */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-xl" />

                    {/* Corner accent bottom right */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/30 rounded-br-xl" />

                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h3 className="font-grotesk font-semibold text-[26px] text-white mb-1">
                                Engineer Profile
                            </h3>
                            <p className="font-jetbrains text-[11px] text-cyan-400 tracking-widest">
                                ID: SWE-0x1A4
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-[36px] text-cyan-400 opacity-40">
                            fingerprint
                        </span>
                    </div>

                    {/* Profile Details */}
                    <div className="space-y-4">
                        {PROFILE_DETAILS.map((detail) => (
                            <div
                                key={detail.label}
                                className="flex items-center justify-between border-b border-white/5 pb-3"
                            >
                                <span className="font-jetbrains text-[11px] tracking-widest text-white/40">
                                    {detail.label}
                                </span>
                                <span className="font-geist text-[14px] text-white">
                                    {detail.value}
                                </span>
                            </div>
                        ))}

                        {/* Status Row */}
                        <div className="flex items-center justify-between pb-2">
                            <span className="font-jetbrains text-[11px] tracking-widest text-white/40">
                                STATUS
                            </span>
                            <span className="font-geist text-[14px] text-purple-300 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
                                Open to Work
                            </span>
                        </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                        {PROFILE_TECH_TAGS.map((tag) => (
                            <span
                                key={tag}
                                className="font-jetbrains text-[11px] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded hover:bg-cyan-400/20 transition-colors duration-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
});


function TypingDisplay({ displayedText }: { displayedText: string }) {
    return (
        <div className="h-8 flex items-center">
            <span className="font-grotesk text-xl md:text-2xl text-white/60 font-light">
                {displayedText}
            </span>
            <span className="w-[3px] h-6 bg-gradient-to-t from-cyan-400 to-purple-400 ml-1 animate-pulse" />
        </div>
    );
}

// MAIN COMPONENT

export default function Home() {
    const { displayedText } = useTypingEffect({
        words: ROTATING_WORDS,
        typingSpeed: 100,
        erasingSpeed: 50,
        pauseDuration: 2000,
    });

    return (
        <section
            id="home"
            className="min-h-screen w-full overflow-hidden px-[5%] lg:px-[10%]"
        >
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 lg:gap-20 py-32">

                {/* Left Column */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                    <StatusBadge />
                    <HeroTitle />
                    <TypingDisplay displayedText={displayedText} />
                    <HeroDescription />
                    <TechStackPills />
                    <CTAButtons />
                    <SocialLinks socialLinks={SOCIAL_LINKS} />
                </div>

                {/* Right Column */}
                <ProfileCard />

            </div>
        </section>
    );
}