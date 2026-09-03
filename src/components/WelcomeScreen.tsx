import { useEffect, useLayoutEffect, useRef, useState } from "react";

const INTRO_DURATION_MS = 1200;
const EXIT_DURATION_MS = 350;

interface WelcomeScreenProps {
    onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    const [isLeaving, setIsLeaving] = useState(false);
    const dismissTimerRef = useRef<number | null>(null);

    useLayoutEffect(() => {
        document.body.classList.add("welcome-active");
        document.getElementById("initial-welcome-gate")?.remove();

        return () => {
            document.body.classList.remove("welcome-active");
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const introDuration = prefersReducedMotion ? 500 : INTRO_DURATION_MS;

        const exitTimer = window.setTimeout(() => setIsLeaving(true), introDuration);
        const completeTimer = window.setTimeout(
            onComplete,
            introDuration + (prefersReducedMotion ? 100 : EXIT_DURATION_MS),
        );

        return () => {
            window.clearTimeout(exitTimer);
            window.clearTimeout(completeTimer);
            if (dismissTimerRef.current !== null) {
                window.clearTimeout(dismissTimerRef.current);
            }
        };
    }, [onComplete]);

    function dismissWelcome() {
        if (isLeaving) return;

        setIsLeaving(true);
        dismissTimerRef.current = window.setTimeout(onComplete, EXIT_DURATION_MS);
    }

    return (
        <section
            className={`welcome-screen ${isLeaving ? "welcome-screen--leaving" : ""}`}
            aria-label="Welcome"
            aria-live="polite"
        >
            <div className="welcome-screen__glow welcome-screen__glow--cyan" />
            <div className="welcome-screen__glow welcome-screen__glow--purple" />
            <div className="welcome-screen__grid" />

            <div className="welcome-screen__content">
                <div className="welcome-screen__eyebrow">
                    <span className="welcome-screen__status" />
                    <span>RA / INITIALIZED</span>
                </div>

                <h1 className="welcome-screen__title">
                    <span>Welcome to</span>
                    <strong>my digital space.</strong>
                </h1>

                <p className="welcome-screen__copy">
                    Thoughtful engineering. Clean design. Meaningful experiences.
                </p>

                <div className="welcome-screen__progress" aria-hidden="true">
                    <span />
                </div>
            </div>

            <button
                type="button"
                className="welcome-screen__skip"
                onClick={dismissWelcome}
            >
                SKIP INTRO
                <span aria-hidden="true">&rarr;</span>
            </button>
        </section>
    );
}
