"use client";

import Link from "next/link";
import Image from "next/image";
import { trackCTA } from "@/lib/analytics";

const projects = [
  {
    title: "Mariage champêtre élégant",
    category: "Wedding Planning",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    title: "Séminaire d'entreprise créatif",
    category: "Événementiel",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    title: "Layer Cake thématique",
    category: "Pâtisserie",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Quelques projets qui illustrent notre savoir-faire et notre créativité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-gray-900 mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            onClick={() => trackCTA("Voir tout le portfolio", "Portfolio Preview")}
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            Voir tout le portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

