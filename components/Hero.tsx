"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackCTA } from "@/lib/analytics";

const heroImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1686783009584-0ef0afc5fb5b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628578569073-8ee77295315d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Carrousel d'images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Carrousel d'images d'événements - Scène ${index + 1} de mariage ou d'événement organisé par Kitty-Octa`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

      {/* Contenu par-dessus */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Des événements <span className="text-primary-400">inoubliables</span> sur mesure
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          Transformez vos rêves en réalité. Chaque détail compte, chaque moment est unique.
          <br className="hidden md:block" />
          Laissez-nous créer l'événement parfait qui vous ressemble.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            onClick={() => trackCTA("Demander un devis", "Hero")}
            className="bg-primary-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105"
          >
            Demander un devis
          </Link>
          <Link
            href="/portfolio"
            onClick={() => trackCTA("Découvrir nos réalisations", "Hero")}
            className="bg-white/90 backdrop-blur-sm text-primary-600 px-6 py-3 rounded-full text-base font-semibold border-2 border-white/50 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Découvrir nos réalisations
          </Link>
        </div>
      </div>

      {/* Indicateurs de pagination */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-8 bg-primary-600"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

