import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
    words: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    pauseDuration?: number;
}

export function useTypingEffect({
    words,
    typingSpeed = 100,
    erasingSpeed = 50,
    pauseDuration = 2000,
}: UseTypingEffectOptions) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(true);
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);

    const handleTyping = useCallback(() => {
        const currentWord = words[wordIndex];

        if (isTyping) {
            if (charIndex < currentWord.length) {
                setDisplayedText((previous) => previous + currentWord[charIndex]);
                setCharIndex((previous) => previous + 1);
            } else {
                setTimeout(() => setIsTyping(false), pauseDuration);
            }
        } else {
            if (charIndex > 0) {
                setDisplayedText((previous) => previous.slice(0, -1));
                setCharIndex((previous) => previous - 1);
            } else {
                setWordIndex((previous) => (previous + 1) % words.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex, words, pauseDuration]);

    useEffect(() => {
        const timeout = setTimeout(
            handleTyping,
            isTyping ? typingSpeed : erasingSpeed
        );
        return () => clearTimeout(timeout);
    }, [handleTyping, isTyping, typingSpeed, erasingSpeed]);

    return { displayedText };
}