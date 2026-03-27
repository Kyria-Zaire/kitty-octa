"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Un premier échange gratuit pour comprendre votre vision.",
  },
  {
    number: "02",
    title: "Conception",
    description: "Une proposition personnalisée et un devis détaillé sous 48h.",
  },
  {
    number: "03",
    title: "Coordination",
    description: "Nous gérons chaque prestataire et chaque détail pour vous.",
  },
  {
    number: "04",
    title: "Votre Jour J",
    description: "Vous profitez pleinement, nous orchestrons en coulisses.",
  },
];

export function ProcessusTeaser() {
  return (
    <SectionWrapper variant="charcoal" size="lg">
      <div className="text-center">
        <p className="font-serif text-lg italic text-gold">Notre Approche</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
          Un processus pensé
          <br />
          pour votre sérénité
        </h2>
        <Divider
          variant="ornamental"
          className="mx-auto mt-8 w-56 [&_span:first-child]:bg-gold/30 [&_span:last-child]:bg-gold/30"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4"
      >
        {steps.map((step) => (
          <motion.div key={step.number} variants={fadeInUp} className="relative">
            <div className="font-playfair text-6xl text-gold/20 leading-none select-none">
              {step.number}
            </div>
            <h3 className="mt-3 font-playfair text-xl text-ivory">{step.title}</h3>
            <p className="mt-3 font-dm-sans text-sm leading-relaxed text-ivory/60">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <Button variant="secondary" size="lg" href="/process">
          Découvrir notre processus complet
        </Button>
      </div>
    </SectionWrapper>
  );
}

export default ProcessusTeaser;

