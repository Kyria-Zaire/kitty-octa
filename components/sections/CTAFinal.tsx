"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTAFinal() {
  return (
    <SectionWrapper variant="charcoal" size="lg" className="relative">
      <div className="mx-auto max-w-4xl text-center">
        <Divider
          variant="gold"
          className="mx-auto mb-10 max-w-xs bg-gold/20"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <motion.p variants={fadeInUp} className="font-playfair text-lg italic text-gold">
            Prêt à créer quelque chose d&apos;exceptionnel ?
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-playfair text-4xl leading-tight text-ivory md:text-5xl"
          >
            Votre événement mérite
            <br />
            l&apos;excellence
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl font-dm-sans text-sm leading-relaxed text-ivory/70"
          >
            Réponse garantie sous 24h · Consultation gratuite · Devis personnalisé
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <Badge variant="gold" size="md">
              Agenda 2025 — Prenez rendez-vous avant qu&apos;il soit complet
            </Badge>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="secondary" size="lg" href="/contact">
              Démarrer mon projet
            </Button>
            <Button variant="ghost" size="lg" href="/portfolio" className="text-ivory hover:text-gold">
              Voir nos réalisations
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default CTAFinal;

