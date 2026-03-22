"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const portfolioItems = [
  {
    title: "Château de Chantilly",
    category: "Mariage",
    gradient: "from-taupe/30 to-gold/20",
    href: "/portfolio/chateau-chantilly",
  },
  {
    title: "Gala de Fin d'Année",
    category: "Corporate",
    gradient: "from-charcoal/40 to-taupe/30",
    href: "/portfolio/gala-corporate",
  },
  {
    title: "Anniversaire 30 ans",
    category: "Événement Privé",
    gradient: "from-gold/20 to-taupe/20",
    href: "/portfolio/anniversaire-30-ans",
  },
  {
    title: "Domaine des Oliviers",
    category: "Mariage",
    gradient: "from-taupe/20 to-charcoal/30",
    href: "/portfolio/domaine-oliviers",
  },
];

export function PortfolioPreview() {
  return (
    <SectionWrapper variant="ivory" size="lg">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-serif text-lg italic text-gold">Nos Réalisations</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Chaque événement,<br />une histoire unique
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative w-full overflow-hidden rounded-[2px]">
              <Link href={item.href} className="block aspect-[4/3] w-full">

                {/* 
                  // TODO(Sprint2): Remplacer par next/image avec les photos Kitty 
                  <Image src="..." fill alt="..." className="object-cover transition-transform duration-400 group-hover:scale-105" />
                */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-400 ease-in-out group-hover:scale-105",
                    item.gradient
                  )}
                />

                {/* Overlay Hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-2xl text-ivory text-center px-4">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="secondary" href="/portfolio" size="lg">
            Voir toutes nos réalisations
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
