"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export function CTAFinal() {
    return (
        <SectionWrapper variant="charcoal" size="lg">
            {/* Ligne fine décorative au-dessus */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-4xl text-center py-12"
            >
                <motion.p variants={fadeInUp} className="font-serif text-lg italic text-gold">
                    Prêt à créer quelque chose d&apos;exceptionnel ?
                </motion.p>

                <motion.h2 variants={fadeInUp} className="mt-6 font-serif text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl max-w-3xl mx-auto">
                    Votre événement mérite<br />l&apos;excellence
                </motion.h2>

                <motion.p variants={fadeInUp} className="mt-8 font-sans text-sm uppercase tracking-[0.2em] text-ivory/70 leading-relaxed max-w-2xl mx-auto md:text-base">
                    Réponse garantie sous 24h &middot; Consultation gratuite &middot; Devis personnalisé
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button variant="gold" size="lg" href="/contact">
                        Démarrer mon projet
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        href="/portfolio"
                        className="text-ivory hover:text-gold-light hover:bg-white/5 border border-transparent hover:border-ivory/20"
                    >
                        Voir nos réalisations
                    </Button>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-16 inline-block">
                    <Badge variant="gold" size="md" className="gap-2 px-5 py-2">
                        Agenda 2025 &mdash; Prenez rendez-vous avant qu&apos;il soit complet
                    </Badge>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
