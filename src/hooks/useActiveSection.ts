import { useState, useEffect } from "react";

const SECTION_IDS = ["home", "about", "projects", "experience", "contact"];
const SCROLL_OFFSET = 100;

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 20);

            const reversedSections = [...SECTION_IDS].reverse();

            for (const sectionId of reversedSections) {
                const sectionElement = document.getElementById(sectionId);
                if (
                    sectionElement &&
                    window.scrollY >= sectionElement.offsetTop - SCROLL_OFFSET
                ) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { activeSection, isScrolled };
}