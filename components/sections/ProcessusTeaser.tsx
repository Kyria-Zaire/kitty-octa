"use client";

import { motion } from "framer-motion";
import { slideInLeft, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const steps = [
    {
        num: "01",
        title: "Consultation",
        desc: "Un premier échange gratuit pour comprendre votre vision",
    },
    {
        num: "02",
        title: "Conception",
        desc: "Une proposition personnalisée et un devis détaillé sous 48h",
    },
    {
        num: "03",
        title: "Coordination",
        desc: "Nous gérons chaque prestataire et chaque détail pour vous",
    },
    {
        num: "04",
        title: "Votre Jour J",
        desc: "Vous profitez pleinement, nous orchestrons en coulisses",
    },
];

export function ProcessusTeaser() {
    return (
        <SectionWrapper variant="charcoal" size="lg">
            <div className="mx-auto max-w-7xl text-center">
                <p className="font-serif text-lg italic text-gold">Notre Approche</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
                    Un processus pensé<br />pour votre sérénité
                </h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20 relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6"
                >
                    {/* Ligne pointillée décorative Desktop uniquement */}
                    <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-gold/30 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            variants={slideInLeft}
                            className="relative z-10 flex flex-col items-center px-4"
                        >
                            {/* Le numéro en grand (Watermark style) */}
                            <div className="font-serif text-6xl text-gold/20 leading-none bg-charcoal px-4 select-none">
                                {step.num}
                            </div>

                            <div className="mt-6 flex flex-col items-center">
                                <h3 className="font-serif text-xl text-ivory">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-ivory/60 max-w-[200px]">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20">
                    <Button variant="gold" href="/process" size="lg">
                        Découvrir notre processus complet
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
