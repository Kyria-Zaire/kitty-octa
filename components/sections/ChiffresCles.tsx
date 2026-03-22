"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
    finalNumber: number;
    suffix: string;
    label: string;
}

function StatItem({ finalNumber, suffix, label }: StatItemProps) {
    const { count, ref } = useCountUp(finalNumber, 2500);

    return (
        <div
            ref={ref as any}
            className="flex flex-col items-center justify-center text-center relative px-4"
        >
            <div className="font-serif text-5xl font-bold text-gold md:text-6xl tracking-tight">
                {count}
                {suffix}
            </div>
            <div className="mt-3 font-sans text-sm tracking-widest uppercase text-taupe">
                {label}
            </div>
        </div>
    );
}

export function ChiffresCles() {
    const stats = [
        { finalNumber: 50, suffix: "+", label: "Événements organisés" },
        { finalNumber: 100, suffix: "%", label: "Clients satisfaits" },
        { finalNumber: 5, suffix: "★", label: "Note moyenne" },
        { finalNumber: 24, suffix: "h", label: "Délai de réponse garanti" },
    ];

    return (
        <SectionWrapper variant="beige" size="lg">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:divide-x md:divide-gold/20">
                    {stats.map((stat, i) => (
                        <StatItem
                            key={i}
                            finalNumber={stat.finalNumber}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
