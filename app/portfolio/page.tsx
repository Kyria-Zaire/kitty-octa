"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackPortfolioView, trackCTA } from "@/lib/analytics";

const portfolioItems = [
  {
    id: 1,
    title: "Mariage champêtre élégant",
    category: "Wedding Planning",
    location: "Picardie",
    description: "Un mariage romantique en pleine nature avec une décoration minimaliste et raffinée. Coordination complète des prestataires et organisation du jour J.",
    image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["150 invités", "Coordination complète", "Décoration sur mesure"],
  },
  {
    id: 2,
    title: "Séminaire d'entreprise créatif",
    category: "Événementiel Professionnel",
    location: "Paris",
    description: "Organisation d'un séminaire de 3 jours pour une entreprise tech, avec des activités team building innovantes et une scénographie moderne.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    highlights: ["80 participants", "3 jours", "Team building"],
  },
  {
    id: 3,
    title: "Layer Cake nuptial artisanal",
    category: "Pâtisserie",
    location: "Amiens",
    description: "Création d'un layer cake de 5 étages pour un mariage, avec décoration florale comestible et saveurs personnalisées.",
    image: "https://images.unsplash.com/photo-1549254800-381c9c6f4ee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["5 étages", "Décoration florale", "Saveurs sur mesure"],
  },
  {
    id: 4,
    title: "Demande en mariage scénarisée",
    category: "Événementiel Privé",
    location: "Île-de-France",
    description: "Organisation complète d'une demande en mariage scénarisée avec escape game personnalisé et réception intime.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
    highlights: ["Scénarisation complète", "Escape game", "30 invités"],
  },
  {
    id: 5,
    title: "Bal masqué thématique",
    category: "Événementiel",
    location: "Hauts-de-France",
    description: "Direction complète d'un bal masqué de plus de 50 personnes avec création d'univers visuel cohérent, gestion des artistes et coordination logistique.",
    image: "https://images.unsplash.com/photo-1590065635566-dc6959d6f8ee?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["50+ invités", "Création d'univers", "Coordination artistes"],
  },
  {
    id: 6,
    title: "Layer Cake végane thématique",
    category: "Pâtisserie",
    location: "Paris",
    description: "Conception d'un layer cake 100% végane pour un anniversaire, avec décoration artistique sur le thème de la nature.",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&h=800&fit=crop",
    highlights: ["100% végane", "Décoration artistique", "Thème personnalisé"],
  },
];

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openModal = (id: number) => {
    const item = portfolioItems.find((item) => item.id === id);
    if (item) {
      trackPortfolioView(item.title);
    }
    setSelectedItem(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  const navigateModal = (direction: "prev" | "next") => {
    if (selectedItem === null) return;
    
    const currentIndex = portfolioItems.findIndex((item) => item.id === selectedItem);
    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
    }

    setSelectedItem(portfolioItems[newIndex].id);
  };

  // Navigation au clavier
  useEffect(() => {
    if (selectedItem === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        navigateModal("prev");
      } else if (e.key === "ArrowRight") {
        navigateModal("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const currentItem = selectedItem
    ? portfolioItems.find((item) => item.id === selectedItem)
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden min-h-[250px] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Section Portfolio - Découvrez nos réalisations d'événements organisés par Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-primary-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-lg md:text-xl font-bold text-white mb-1.5 drop-shadow-lg">
            Portfolio
          </h1>
          <p className="text-xs text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Découvrez quelques-unes de nos réalisations qui illustrent notre savoir-faire,
            notre créativité et notre attention aux détails.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openModal(item.id)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedItem !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors shadow-lg"
              aria-label="Fermer"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation précédent */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateModal("prev");
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
              aria-label="Projet précédent"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Navigation suivant */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateModal("next");
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
              aria-label="Projet suivant"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Contenu de la modal */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image */}
              <div className="relative h-48 md:h-64">
                <Image
                  src={currentItem.image}
                  alt={`${currentItem.title} - ${currentItem.category} organisé par Kitty-Octa à ${currentItem.location}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {currentItem.category}
                  </span>
                </div>
              </div>

              {/* Détails */}
              <div className="p-5 md:p-6">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {currentItem.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {currentItem.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs">{currentItem.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Appel à l'action - Votre projet pourrait être le prochain événement organisé par Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre avec transparence */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

        {/* Contenu */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
            Votre projet pourrait être le prochain
          </h2>
          <p className="text-sm text-gray-200 mb-6 leading-relaxed">
            Discutons de votre événement et créons ensemble quelque chose d'exceptionnel.
          </p>
          <Link
            href="/contact"
            onClick={() => trackCTA("Parler de mon projet", "Portfolio CTA")}
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Parler de mon projet</span>
            {/* Effet glow */}
            <span className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></span>
          </Link>
        </div>
      </section>
    </div>
  );
}

