interface FooterLink {
    label: string;
    url: string;
}

interface FooterNavSection {
    title: string;
    links: FooterLink[];
}

const FOOTER_NAV_SECTIONS: FooterNavSection[] = [
    {
        title: "Navigation",
        links: [
            { label: "Home", url: "#home" },
            { label: "About", url: "#about" },
            { label: "Projects", url: "#projects" },
            { label: "Experience", url: "#experience" },
            { label: "Contact", url: "#contact" },
        ],
    },
    {
        title: "Social",
        links: [
            { label: "GitHub", url: "https://github.com/Ranggadya" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/ranggadya/" },
            { label: "Instagram", url: "https://www.instagram.com/rnggdyar/" },
        ],
    },
];

function scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
    }
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-xl">
            <div className="px-[5%] lg:px-[10%] py-12">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

                    {/* Brand Column */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="flex items-center gap-2.5 w-fit group focus:outline-none"
                            aria-label="Home"
                        >
                            <span className="material-symbols-outlined text-cyan-400 text-[22px] transition-transform duration-200 group-hover:scale-110">
                                terminal
                            </span>
                            <span className="font-grotesk font-extrabold text-[22px] tracking-tight text-white flex items-center transition-colors">
                                RA<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">.</span>
                            </span>
                        </button>
                        <p className="font-geist text-[14px] text-white/30 max-w-xs leading-relaxed">
                            Software Engineer & Full Stack Developer building scalable
                            solutions with clean, maintainable code.
                        </p>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="font-jetbrains text-[10px] tracking-widest text-white/30">
                                OPEN TO WORK
                            </span>
                        </div>
                    </div>

                    {/* Nav Sections */}
                    {FOOTER_NAV_SECTIONS.map((navSection) => (
                        <div key={navSection.title} className="md:col-span-3 flex flex-col gap-4">
                            <h4 className="font-jetbrains text-[11px] tracking-widest text-white/30 uppercase">
                                {navSection.title}
                            </h4>
                            <nav className="flex flex-col gap-3">
                                {navSection.links.map((footerLink) => (
                                    <a
                                        key={footerLink.label}
                                        href={footerLink.url}
                                        onClick={
                                            footerLink.url.startsWith("#")
                                                ? (clickEvent) => {
                                                    clickEvent.preventDefault();
                                                    scrollToSection(footerLink.url.replace("#", ""));
                                                }
                                                : undefined
                                        }
                                        target={
                                            footerLink.url.startsWith("http") ? "_blank" : undefined
                                        }
                                        rel={
                                            footerLink.url.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="font-geist text-[14px] text-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-200 w-fit"
                                    >
                                        {footerLink.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="font-jetbrains text-[11px] tracking-widest text-white/20">
                        © {currentYear} RA — ALL RIGHTS RESERVED.
                    </span>
                    <span className="font-jetbrains text-[11px] tracking-widest text-white/20">
                        ENGINEERED WITH{" "}
                        <span className="text-cyan-400">REACT</span>
                        {" "}+{" "}
                        <span className="text-purple-400">VITE</span>
                    </span>
                </div>

            </div>
        </footer>
    );
}