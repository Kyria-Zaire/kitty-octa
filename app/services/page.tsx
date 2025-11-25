"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackCTA, trackServiceTab } from "@/lib/analytics";

const services = [
  {
    title: "Wedding Planning",
    icon: "💍",
    description: "Accompagnement complet des futurs mariés pour créer le mariage de leurs rêves.",
    details: [
      "Accompagnement personnalisé du concept à la réalisation",
      "Sélection et coordination des prestataires (traiteurs, photographes, fleuristes, etc.)",
      "Gestion complète du budget et suivi des dépenses",
      "Scénographie et décoration sur mesure",
      "Coordination le jour J pour un déroulement parfait",
      "Gestion du planning et des imprévus",
      "Conseil en choix de tenues et accessoires",
    ],
  },
  {
    title: "Organisation d'événements",
    icon: "🎉",
    description: "Conception et gestion d'événements privés et professionnels sur mesure.",
    details: [
      "Mariages, anniversaires, cérémonies de remise de diplômes",
      "Séminaires d'entreprise et team building",
      "Manifestations culturelles et professionnelles",
      "Escape games immersifs et soirées thématiques",
      "Planification complète : timing, logistique, coordination",
      "Gestion des prestataires et des artistes",
      "Création d'univers visuels cohérents",
      "Gestion des imprévus et solutions adaptatives",
    ],
  },
  {
    title: "Layer Cakes et pâtisseries sur mesure",
    icon: "🎂",
    description: "Création artisanale de pâtisseries décoratives sur mesure pour sublimer vos événements.",
    details: [
      "Layer cakes personnalisés selon vos goûts et votre thème",
      "Options véganes et sans allergènes disponibles",
      "Pâtisseries thématiques et artistiques",
      "Association parfaite entre esthétique et goût",
      "Consultation préalable pour comprendre vos attentes",
      "Livraison et installation sur site",
      "Offre complémentaire à l'événementiel",
    ],
  },
  {
    title: "Décoration d'événements",
    icon: "🎨",
    description: "Création d'univers visuels sur mesure pour sublimer vos événements.",
    details: [
      "Décoration florale et végétale",
      "Scénographie personnalisée",
      "Accessoires et mobilier décoratif",
      "Ambiance lumineuse et atmosphérique",
      "Décoration thématique",
      "Location de matériel décoratif",
      "Installation et démontage",
    ],
  },
  {
    title: "Papeterie personnalisée",
    icon: "✉️",
    description: "Création de papeterie sur mesure pour donner une identité unique à votre événement.",
    details: [
      "Invitations personnalisées",
      "Marque-places élégants",
      "Menus de table sur mesure",
      "Filtres Snapchat et réseaux sociaux",
      "Design cohérent avec votre thème",
      "Impression de qualité",
      "Conseil en design et typographie",
    ],
  },
  {
    title: "Formation et accompagnement",
    icon: "📚",
    description: "Transmission d'expertise en gestion de projet, communication et interculturalité.",
    details: [
      "Formations en gestion de projet événementiel",
      "Ateliers de communication et storytelling",
      "Formation en interculturalité et diversité",
      "Accompagnement méthodologique pour associations",
      "Transmission d'outils pratiques et efficaces",
      "Sessions sur mesure selon vos besoins",
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    trackServiceTab(services[index].title);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden min-h-[250px] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Section Nos Services - Organisation d'événements sur mesure par Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-primary-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-lg md:text-xl font-bold text-white mb-1.5 drop-shadow-lg">
            Nos Services
          </h1>
          <p className="text-xs text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Une offre complète et personnalisée alliant créativité, rigueur et sens du détail
            pour transformer vos événements en moments inoubliables.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeTab === index
                    ? "bg-primary-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"
                }`}
              >
                <span className="text-lg">{service.icon}</span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Tab Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-4xl">{services[activeTab].icon}</div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {services[activeTab].title}
                </h2>
                <p className="text-base text-gray-600">{services[activeTab].description}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-base">
                Ce que nous proposons :
              </h3>
              <ul className="space-y-3">
                {services[activeTab].details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-600 transition-colors">
                      <svg
                        className="w-3 h-3 text-primary-600 group-hover:text-white transition-colors"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
        {/* Formes géométriques en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cercle */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-200 rounded-full opacity-20 blur-3xl"></div>
          
          {/* Formes triangulaires */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-300 opacity-10 rotate-45 transform"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent-300 opacity-10 -rotate-12 transform"></div>
          
          {/* Lignes décoratives */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 400" fill="none">
            <path d="M0,200 Q300,50 600,200 T1200,200" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
            <path d="M0,150 Q400,300 800,150 T1600,150" stroke="currentColor" strokeWidth="2" className="text-accent-600"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Carte avec effet glassmorphism */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Prêt à créer votre événement inoubliable ?
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Demander un devis gratuit</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-2.5 rounded-full text-sm font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Voir nos réalisations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
