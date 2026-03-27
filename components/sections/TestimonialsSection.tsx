"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export function TestimonialsSection() {
  return (
    <SectionWrapper variant="beige" size="lg">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-lg italic text-gold">Ils nous font confiance</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
          Ce que disent<br />nos clients
        </h2>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 relative"
        >
          {/* Guillemets décoratifs géants */}
          <div className="absolute -top-10 left-4 text-9xl leading-none text-gold/20 font-serif select-none md:-left-8 md:-top-16">
            &ldquo;
          </div>

          <Card
            variant="default"
            className="relative z-10 p-10 md:p-16 bg-gold text-charcoal border border-gold-dark/20"
          >
            <CardContent className="p-0 flex flex-col items-center">
              {/* Étoiles SVG */}
              <div className="flex gap-1 mb-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-6 w-6 text-gold drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Citation */}
              <blockquote className="font-serif italic text-xl md:text-2xl text-charcoal leading-relaxed text-center max-w-2xl">
                OctaviEvent a transformé notre mariage en un moment magique et inoubliable. Chaque détail était parfait, exactement comme nous l&apos;avions rêvé. Kitty a une sensibilité et un professionnalisme rares.
              </blockquote>

              <div className="mt-10 text-center">
                <p className="font-sans font-medium text-lg text-charcoal tracking-wide">
                  Sarah &amp; Thomas M.
                </p>
                <p className="font-sans text-sm text-taupe mt-1 tracking-wider uppercase">
                  Mariage &mdash; Juin 2024, Amiens
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-16">
          <Button variant="secondary" size="lg" href="/temoignages">
            Lire tous les témoignages
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
