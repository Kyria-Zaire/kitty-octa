"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    alt: "Mariage élégant en salle dorée",
    category: "Mariage",
    title: "Cérémonie Dorée",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    alt: "Événement d'entreprise prestige",
    category: "Entreprise",
    title: "Gala Prestige",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Décoration florale de mariage",
    category: "Mariage",
    title: "Floral & Élégance",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    alt: "Fête d'anniversaire luxe",
    category: "Privé",
    title: "Anniversaire d'Exception",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
    alt: "Table de réception de mariage",
    category: "Mariage",
    title: "Table d'Honneur",
  },
  {
    src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80",
    alt: "Séminaire d'entreprise haut de gamme",
    category: "Entreprise",
    title: "Séminaire Excellence",
  },
];

function PortfolioItem({
  src,
  alt,
  category,
  title,
}: {
  src: string;
  alt: string;
  category: string;
  title: string;
}) {
  return (
    <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-sm">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-700 ease-luxury filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-end p-4">
        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
          <span className="text-ivory font-dm-sans text-xs tracking-widest uppercase">
            {category}
          </span>
          <p className="text-ivory font-playfair text-lg mt-1">{title}</p>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPreview() {
  return (
    <SectionWrapper variant="ivory" spacing="lg">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-serif text-lg italic text-gold">Nos Réalisations</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Chaque événement,
            <br />
            une histoire unique
          </h2>
        </div>

        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
            {portfolioImages.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-72 snap-start">
                <PortfolioItem {...item} />
              </div>
            ))}
          </div>
          <p className="text-center text-taupe text-xs mt-3 tracking-wide">
            ← Glissez pour voir plus →
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {portfolioImages.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <PortfolioItem {...item} />
              </motion.div>
            ))}
          </AnimatePresence>
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

export default PortfolioPreview;

