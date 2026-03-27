"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scaleIn } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const temoignages = [
  {
    citation:
      "OctaviEvent a transformé notre mariage en un moment magique. Chaque détail était parfait, exactement comme nous l'avions rêvé. Kitty a une sensibilité et un professionnalisme rares.",
    auteur: "Sarah & Thomas M.",
    evenement: "Mariage — Juin 2024, Amiens",
    initiales: "ST",
  },
  {
    citation:
      "Notre séminaire annuel a dépassé toutes nos attentes. Une organisation sans faille, des prestataires de qualité et une cheffe de projet qui anticipe tout. Je recommande sans hésiter.",
    auteur: "Marie-Claire D.",
    evenement: "Séminaire d’entreprise — Mars 2024",
    initiales: "MD",
  },
  {
    citation:
      "L'anniversaire de mes 40 ans était exactement ce que j'avais imaginé, en mieux. Kitty a su créer une atmosphère unique et personnalisée. Mes invités en parlent encore.",
    auteur: "Isabelle R.",
    evenement: "Anniversaire privé — Octobre 2024",
    initiales: "IR",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isDesktop) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % temoignages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isDesktop]);

  const currentItem = temoignages[current];
  const goPrev = () => setCurrent((prev) => (prev - 1 + temoignages.length) % temoignages.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % temoignages.length);

  return (
    <SectionWrapper variant="beige" size="lg">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-lg italic text-gold">Ils nous font confiance</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
          Ce que disent
          <br />
          nos clients
        </h2>

        {/* Mobile — carrousel animé */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 relative md:hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card
                variant="default"
                className="relative z-10 p-10 bg-gold text-charcoal border border-gold-dark/20"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-charcoal text-ivory font-dm-sans text-sm tracking-widest">
                    {temoignages[current].initiales}
                  </div>

                  <div className="flex gap-1 my-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-gold drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="font-serif italic text-xl text-charcoal leading-relaxed text-center">
                    &ldquo;{temoignages[current].citation}&rdquo;
                  </blockquote>

                  <div className="mt-10 text-center">
                    <p className="font-dm-sans font-medium text-base text-charcoal tracking-wide">
                      {temoignages[current].auteur}
                    </p>
                    <p className="font-dm-sans text-sm text-taupe mt-1 tracking-wide">
                      {temoignages[current].evenement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {temoignages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === current ? "bg-gold w-4" : "bg-taupe/30 w-1.5"
                )}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop — 1 témoignage featured + navigation manuelle */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative hidden md:block mt-16"
        >
          <div
            className="pointer-events-none absolute top-0 left-8 font-playfair text-9xl text-gold/15 leading-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-taupe/30 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
              aria-label="Témoignage précédent"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-taupe/30 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
              aria-label="Témoignage suivant"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>

            <div className="px-16">
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <blockquote className="font-playfair italic text-2xl text-charcoal text-center leading-relaxed max-w-3xl mx-auto">
                    &ldquo;{currentItem.citation}&rdquo;
                  </blockquote>
                  <div className="w-12 h-px bg-gold mx-auto my-6" aria-hidden="true" />
                  <p className="font-dm-sans font-medium text-charcoal text-center">
                    {currentItem.auteur}
                  </p>
                  <p className="font-dm-sans text-sm text-taupe text-center">
                    {currentItem.evenement}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-8">
                {temoignages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === current ? "bg-gold w-4" : "bg-taupe/30 w-1.5"
                    )}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
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

export default TestimonialsSection;

