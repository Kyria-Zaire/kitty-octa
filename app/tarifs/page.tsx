"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackCTA } from "@/lib/analytics";

const pricingPlans = [
  {
    name: "Wedding Planning",
    description: "Accompagnement complet pour votre mariage",
    price: "À partir de 1 500€",
    features: [
      "Accompagnement personnalisé (6-12 mois)",
      "Sélection et coordination des prestataires",
      "Gestion complète du budget",
      "Scénographie et décoration",
      "Coordination le jour J",
      "Planning détaillé et gestion des imprévus",
      "Consultations illimitées",
      "Support téléphonique et email",
    ],
    popular: true,
  },
  {
    name: "Organisation d'événements",
    description: "Conception et gestion d'événements sur mesure",
    price: "Sur devis",
    features: [
      "Consultation préalable gratuite",
      "Planification complète",
      "Coordination logistique",
      "Gestion des prestataires",
      "Création d'univers visuel",
      "Coordination le jour J",
      "Gestion des imprévus",
      "Reporting post-événement",
    ],
    popular: false,
  },
  {
    name: "Layer Cakes et pâtisseries sur mesure",
    description: "Création artisanale de pâtisseries sur mesure",
    price: "À partir de 80€",
    features: [
      "Consultation personnalisée",
      "Layer cake sur mesure",
      "Options véganes disponibles",
      "Décoration thématique",
      "Livraison et installation",
      "Conseils en saveurs",
      "Adaptation aux allergies",
      "Photos professionnelles",
    ],
    popular: false,
  },
];

const additionalServices = [
  {
    service: "Formation gestion de projet",
    price: "Sur devis",
    duration: "1-3 jours",
  },
  {
    service: "Accompagnement méthodologique",
    price: "Sur devis",
    duration: "Selon besoins",
  },
  {
    service: "Consultation événementielle",
    price: "80€/h",
    duration: "Minimum 2h",
  },
  {
    service: "Coordination jour J uniquement",
    price: "À partir de 500€",
    duration: "1 jour",
  },
];

export default function TarifsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden min-h-[250px] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Section Nos Tarifs - Devis personnalisé pour vos événements organisés par Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-primary-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-lg md:text-xl font-bold text-white mb-1.5 drop-shadow-lg">
            Nos Tarifs
          </h1>
          <p className="text-xs text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Des prestations sur mesure adaptées à vos besoins et à votre budget.
            Chaque projet est unique, contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* Pricing Plans Accordion */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? "border-primary-600 shadow-lg"
                    : "border-gray-200 shadow-md hover:shadow-lg"
                } ${openIndex === index ? "shadow-xl" : ""}`}
              >
                {/* En-tête cliquable */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-serif text-lg font-bold text-gray-900">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="bg-primary-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          Le plus populaire
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{plan.description}</p>
                  </div>
                  {/* Icône de flèche */}
                  <div className="ml-3 flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Contenu dépliable */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-4 pb-4 border-t border-gray-200 pt-4">
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center w-full py-2 rounded-full text-xs font-semibold transition-colors ${
                        plan.popular
                          ? "bg-primary-600 text-white hover:bg-primary-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-lg md:text-xl font-bold text-gray-900 mb-5 text-center">
            Services complémentaires
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-100">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                    <div className="flex-1">
                      <h3 className="text-xs font-semibold text-gray-900">
                        {service.service}
                      </h3>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-5">
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
              💡 Informations importantes
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start">
                <span className="mr-2.5">•</span>
                <span>
                  Tous les tarifs sont indicatifs et peuvent varier selon la complexité
                  et l'envergure de votre projet.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2.5">•</span>
                <span>
                  Un devis personnalisé gratuit vous sera proposé après notre premier
                  échange.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2.5">•</span>
                <span>
                  Les prestations peuvent être adaptées selon vos besoins spécifiques.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2.5">•</span>
                <span>
                  Zone d'intervention : Hauts-de-France et Île-de-France (déplacements
                  possibles ailleurs selon le projet).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 bg-gray-900 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Appel à l'action - Discutons de votre projet d'événement avec Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre avec transparence */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

        {/* Contenu */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-3">
            Discutons de votre projet
          </h2>
          <p className="text-base text-gray-200 mb-6 leading-relaxed">
            Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins.
          </p>
          <Link
            href="/contact"
            onClick={() => trackCTA("Demander un devis gratuit", "Tarifs CTA")}
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Demander un devis gratuit</span>
            {/* Effet glow */}
            <span className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></span>
          </Link>
        </div>
      </section>
    </div>
  );
}

