"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Divider from "@/components/ui/Divider";

const items = [
  {
    title: "Une vision 100% personnalisée",
    text: "Chaque événement reflète votre identité. Aucun modèle standard — tout est créé pour vous.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8 text-gold"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.9 0-3.553.956-4.5 2.35-.947-1.394-2.6-2.35-4.5-2.35-2.761 0-5 2.015-5 4.5 0 7.5 9.5 12 9.5 12s9.5-4.5 9.5-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Basée à Amiens, rayonnant en région",
    text: "Connaissance parfaite du tissu local, des prestataires et des lieux d'exception des Hauts-de-France.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8 text-gold"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    ),
  },
  {
    title: "Réactivité et transparence",
    text: "Réponse garantie sous 24h, suivi en temps réel, zéro mauvaise surprise sur le budget.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8 text-gold"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Votre sérénité, notre priorité",
    text: "Vous profitez de chaque instant. Nous gérons chaque détail, même les imprévus.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8 text-gold"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3 20 7v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
] as const;

export function PourquoiNousChoisir() {
  return (
    <SectionWrapper variant="beige" spacing="lg">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-serif text-lg italic text-gold">Notre Différence</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
          Pourquoi choisir
          <br />
          OctaviEvent ?
        </h2>
        <Divider variant="ornament" className="mx-auto mt-8 w-56" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
      >
        {items.map((item) => (
          <motion.div key={item.title} variants={fadeInUp} className="flex gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
              {item.icon}
            </div>
            <div className="text-left">
              <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
              <p className="mt-2 font-dm-sans text-sm leading-relaxed text-taupe">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default PourquoiNousChoisir;
