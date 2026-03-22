"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function useCountUp(target: number, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing ease-out cubique
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress >= 1) clearInterval(timer);
        }, 16); // ~60fps

        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return { count, ref };
}
