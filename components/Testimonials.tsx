"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sophie & Thomas",
    role: "Mariés",
    content: "Octavie a transformé notre mariage en un moment magique. Son attention aux détails et sa créativité ont dépassé toutes nos attentes. Nous recommandons sans hésitation !",
    rating: 5,
  },
  {
    name: "Marie Dubois",
    role: "Directrice Marketing",
    content: "Pour notre séminaire annuel, Kitty-Octa a su créer une ambiance unique et professionnelle. L'organisation était impeccable et l'équipe a été ravie de l'expérience.",
    rating: 5,
  },
  {
    name: "Julie Martin",
    role: "Organisatrice d'événements",
    content: "Le layer cake créé pour notre événement était une véritable œuvre d'art ! À la fois délicieux et esthétiquement parfait. Un vrai plus pour notre réception.",
    rating: 5,
  },
  {
    name: "Alexandre & Camille",
    role: "Fiancés",
    content: "Un service exceptionnel du début à la fin. Octavie a su comprendre notre vision et l'a transformée en réalité. Notre mariage était parfait, merci infiniment !",
    rating: 5,
  },
  {
    name: "Sarah Bernard",
    role: "Responsable RH",
    content: "Notre team building a été un succès grâce à l'organisation impeccable de Kitty-Octa. L'équipe en parle encore ! Une professionnelle de talent.",
    rating: 5,
  },
  {
    name: "Marc & Élise",
    role: "Mariés",
    content: "Le layer cake pour notre anniversaire de mariage était à couper le souffle. Délicieux et magnifique, exactement ce que nous voulions. Merci !",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Animation automatique
  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - cardsPerView);
    if (maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000); // Change toutes les 5 secondes pour plus de temps de lecture

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="relative">
          {/* Conteneur du carrousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-full">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

