"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTAFinal() {
  return (
    <SectionWrapper variant="charcoal" size="lg" className="relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Ruban doré — top */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 max-w-xs mx-auto mb-12">
            <div className="h-px flex-1 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px flex-1 bg-gold/40" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-playfair italic text-gold text-lg text-center"
          >
            Votre projet mérite l&apos;excellence
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-5xl md:text-6xl text-ivory text-center leading-tight mt-4"
          >
            Créons ensemble
            <br />
            votre moment d&apos;exception
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-dm-sans text-ivory/50 text-sm tracking-widest uppercase text-center mt-6"
          >
            Consultation gratuite · Réponse sous 24h · Devis personnalisé
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button variant="gold" size="lg" href="/contact">
              Démarrer mon projet
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/portfolio"
              className="text-ivory border border-ivory/30 hover:border-ivory hover:text-ivory"
            >
              Voir nos réalisations
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
            <Badge variant="gold">Agenda 2025 · Disponibilités limitées</Badge>
          </motion.div>

          {/* Ruban doré — bottom */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 max-w-xs mx-auto mt-12">
            <div className="h-px flex-1 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px flex-1 bg-gold/40" />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default CTAFinal;

