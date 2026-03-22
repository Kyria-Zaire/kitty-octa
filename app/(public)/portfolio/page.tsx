"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/layout/CTABanner";
import { cn } from "@/lib/utils";

/* ── Portfolio Data ── */

interface PortfolioItemData {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  highlights: string[];
}

const categories = ["Tous", "Mariages", "Corporate", "Cakes", "Privé"] as const;
type Category = (typeof categories)[number];

const categoryMap: Record<string, Category> = {
  "Wedding Planning": "Mariages",
  "Événementiel Professionnel": "Corporate",
  "Pâtisserie": "Cakes",
  "Événementiel Privé": "Privé",
  "Événementiel": "Corporate",
};

const portfolioItems: PortfolioItemData[] = [
  {
    id: 1,
    title: "Mariage champêtre élégant",
    category: "Wedding Planning",
    location: "Picardie",
    description:
      "Un mariage romantique en pleine nature avec une décoration minimaliste et raffinée. Coordination complète des prestataires et organisation du jour J.",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=987&auto=format&fit=crop",
    highlights: ["150 invités", "Coordination complète", "Décoration sur mesure"],
  },
  {
    id: 2,
    title: "Séminaire créatif",
    category: "Événementiel Professionnel",
    location: "Paris",
    description:
      "Organisation d\u2019un séminaire de 3 jours pour une entreprise tech, avec des activités team building innovantes et une scénographie moderne.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    highlights: ["80 participants", "3 jours", "Team building"],
  },
  {
    id: 3,
    title: "Wedding Cake artisanal",
    category: "Pâtisserie",
    location: "Amiens",
    description:
      "Wedding cake sur mesure avec décoration florale comestible et saveurs personnalisées. Un gâteau personnalisé de A à Z.",
    image:
      "https://images.unsplash.com/photo-1549254800-381c9c6f4ee5?q=80&w=1170&auto=format&fit=crop",
    highlights: ["5 étages", "Décoration florale", "Création sur mesure"],
  },
  {
    id: 4,
    title: "Demande en mariage scénarisée",
    category: "Événementiel Privé",
    location: "Île-de-France",
    description:
      "Organisation complète d\u2019une demande en mariage sur mesure avec escape game personnalisé et réception intime.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
    highlights: ["Scénarisation complète", "Escape game", "30 invités"],
  },
  {
    id: 5,
    title: "Bal masqué thématique",
    category: "Événementiel",
    location: "Hauts-de-France",
    description:
      "Direction complète d\u2019un bal masqué de plus de 50 personnes avec création d\u2019univers visuel, gestion des artistes et coordination logistique.",
    image:
      "https://images.unsplash.com/photo-1590065635566-dc6959d6f8ee?q=80&w=1025&auto=format&fit=crop",
    highlights: ["50+ invités", "Création d\u2019univers", "Coordination artistes"],
  },
  {
    id: 6,
    title: "Layer Cake végane",
    category: "Pâtisserie",
    location: "Paris",
    description:
      "Layer cake 100% végane pour un anniversaire, avec décoration artistique sur le thème de la nature.",
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&h=800&fit=crop",
    highlights: ["100% végane", "Décoration artistique", "Thème personnalisé"],
  },
  {
    id: 7,
    title: "Anniversaire sur mesure",
    category: "Événementiel Privé",
    location: "Hauts-de-France",
    description:
      "Organisation complète d\u2019anniversaire. Décoration, animation, rangement et gâteau personnalisé inclus.",
    image:
      "https://images.unsplash.com/photo-1759922273720-70171ab08bf2?q=80&w=1183&auto=format&fit=crop",
    highlights: ["Décoration", "Animation", "Gâteau personnalisé"],
  },
];

/**
 * Portfolio Page
 *
 * Filter bar (client interactive) + gallery grid + lightbox modal.
 */
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Tous");
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);

  const filtered =
    activeFilter === "Tous"
      ? portfolioItems
      : portfolioItems.filter(
        (item) => categoryMap[item.category] === activeFilter
      );

  /* ── Modal Logic ── */

  const openModal = (item: PortfolioItemData) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigateModal = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedItem) return;
      const currentIndex = filtered.findIndex((i) => i.id === selectedItem.id);
      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % filtered.length
          : (currentIndex - 1 + filtered.length) % filtered.length;
      setSelectedItem(filtered[nextIndex]);
    },
    [selectedItem, filtered]
  );

  useEffect(() => {
    if (!selectedItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") navigateModal("prev");
      else if (e.key === "ArrowRight") navigateModal("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedItem, closeModal, navigateModal]);

  return (
    <>
      <PageHero
        variant="compact"
        title="Portfolio"
        subtitle="Découvrez nos réalisations qui illustrent notre savoir-faire, notre créativité et notre attention aux détails."
        backgroundImage="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1171&auto=format&fit=crop"
        backgroundAlt="Réalisations événementielles par OctaviEvent"
      />

      <SectionWrapper variant="ivory" size="lg">
        {/* ── Filter Bar ── */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "rounded-md px-5 py-2 text-sm font-medium transition-all duration-200",
                activeFilter === cat
                  ? "bg-charcoal text-white shadow-sm"
                  : "bg-beige text-taupe hover:bg-gold/10 hover:text-charcoal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Gallery Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => openModal(item)}
              className="group relative overflow-hidden rounded-md text-left motion-safe:animate-fade-in-up focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.category} par OctaviEvent à ${item.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-1 text-xs font-medium uppercase tracking-wider text-gold">
                    {item.category}
                  </span>
                  <h3 className="px-4 text-center font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="mt-2 text-xs text-ivory/60">{item.location}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-taupe-light">
            Aucune réalisation dans cette catégorie pour le moment.
          </p>
        )}
      </SectionWrapper>

      {/* ── Lightbox Modal ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-md bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Fermer"
            >
              <svg className="h-5 w-5 text-charcoal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Nav Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal("prev"); }}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Projet précédent"
            >
              <svg className="h-5 w-5 text-charcoal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Nav Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal("next"); }}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Projet suivant"
            >
              <svg className="h-5 w-5 text-charcoal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Content */}
            <div className="max-h-[90vh] overflow-y-auto">
              <div className="relative h-56 md:h-72">
                <Image
                  src={selectedItem.image}
                  alt={`${selectedItem.title} — ${selectedItem.category}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-3 top-3">
                  <span className="rounded-md bg-charcoal/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-heading-2">
                  {selectedItem.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-taupe">
                  {selectedItem.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedItem.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-dark"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-taupe-light">
                  <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-xs">{selectedItem.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <CTABanner
        variant="charcoal"
        title="Votre projet pourrait être le prochain"
        subtitle="Discutons de votre événement et créons ensemble quelque chose d&apos;exceptionnel."
        ctaLabel="Parler de mon projet"
      />
    </>
  );
}
