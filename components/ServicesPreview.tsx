"use client";

import Link from "next/link";
import { trackCTA } from "@/lib/analytics";

const services = [
  {
    title: "Wedding Planning",
    description: "Accompagnement complet des futurs mariés du concept à la réalisation.",
    icon: "💍",
  },
  {
    title: "Organisation d'événements",
    description: "Mariages, séminaires, team building, manifestations culturelles et professionnelles.",
    icon: "🎉",
  },
  {
    title: "Layer Cakes",
    description: "Pâtisseries décoratives sur mesure, véganes, thématiques et artistiques.",
    icon: "🎂",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une offre complète et personnalisée pour tous vos événements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            onClick={() => trackCTA("Découvrir tous nos services", "Services Preview")}
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Découvrir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}

