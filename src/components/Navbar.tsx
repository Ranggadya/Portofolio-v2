import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

interface NavLink {
    href: string;
    sectionId: string;
    label: string;
}

const NAV_LINKS: NavLink[] = [
    { href: "#home", sectionId: "home", label: "HOME" },
    { href: "#about", sectionId: "about", label: "ABOUT" },
    { href: "#projects", sectionId: "projects", label: "PROJECTS" },
    { href: "#experience", sectionId: "experience", label: "EXPERIENCE" },
    { href: "#contact", sectionId: "contact", label: "CONTACT" },
];

function scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
    }
}

interface NavLinkButtonProps {
    link: NavLink;
    isActive: boolean;
    onClick: () => void;
}

function NavLinkButton({ link, isActive, onClick }: NavLinkButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`font-jetbrains text-[11px] tracking-widest transition-colors duration-200 ${isActive
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "text-white/50 hover:text-white"
                }`}
        >
            {link.label}
        </button>
    );
}

export default function Navbar() {
    const { activeSection, isScrolled } = useActiveSection();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function handleNavLinkClick(sectionId: string) {
        setIsMenuOpen(false);
        scrollToSection(sectionId);
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#0b1120]/90 backdrop-blur-2xl border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="px-[5%] lg:px-[10%]">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <button
                        onClick={() => handleNavLinkClick("home")}
                        className="flex items-center gap-2.5 group focus:outline-none"
                        aria-label="Home"
                    >
                        <span className="material-symbols-outlined text-cyan-400 text-[22px] transition-transform duration-200 group-hover:scale-110">
                            terminal
                        </span>
                        <span className="font-grotesk font-extrabold text-[22px] tracking-tight text-white flex items-center transition-colors">
                            RA<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">.</span>
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLinkButton
                                key={link.sectionId}
                                link={link}
                                isActive={activeSection === link.sectionId}
                                onClick={() => handleNavLinkClick(link.sectionId)}
                            />
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <button
                        onClick={() => handleNavLinkClick("contact")}
                        className="hidden md:flex items-center gap-2 font-jetbrains text-[11px] tracking-widest text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 rounded hover:bg-cyan-400/20 transition-all duration-200"
                    >
                        LET&apos;S CHAT
                        <span className="material-symbols-outlined text-[16px]">
                            arrow_forward
                        </span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white/50 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen((previous) => !previous)}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>

                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden flex flex-col gap-4 pb-6 pt-4 border-t border-white/10">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.sectionId}
                                onClick={() => handleNavLinkClick(link.sectionId)}
                                className={`text-left font-jetbrains text-[11px] tracking-widest transition-colors ${activeSection === link.sectionId
                                        ? "text-cyan-400"
                                        : "text-white/50 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavLinkClick("contact")}
                            className="w-fit font-jetbrains text-[11px] tracking-widest text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 rounded hover:bg-cyan-400/20 transition-all"
                        >
                            LET&apos;S CHAT
                        </button>
                    </nav>
                )}

            </div>
        </header>
    );
}