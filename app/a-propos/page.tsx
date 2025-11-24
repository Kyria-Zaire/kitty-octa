"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  "Gestion de projets & coordination",
  "Communication & image",
  "Relation talents & partenaires",
  "Photoshop, Illustrator, Canva",
  "WordPress, Suite Office",
  "Outils de planification",
];

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Courant" },
  { name: "Lingala", level: "Bilingue" },
];

const achievements = [
  {
    title: "Direction artistique d'une campagne",
    description:
      "Campagne 'Inclusion & Citoyenneté' saluée pour sa cohérence visuelle et son impact social.",
  },
  {
    title: "Organisation d'événements d'envergure",
    description:
      "Coordination d'événements à visibilité régionale et nationale avec succès.",
  },
  {
    title: "Demande en mariage scénarisée",
    description:
      "Direction complète d'une demande en mariage scénarisée, créant un moment magique et inoubliable.",
  },
  {
    title: "Bal masqué de 50+ personnes",
    description:
      "Organisation complète d'un bal masqué avec création d'univers visuel cohérent et coordination parfaite.",
  },
];

const tabs = [
  { id: "profil", label: "Profil", icon: "👩‍💼" },
  { id: "parcours", label: "Parcours", icon: "💼" },
  { id: "competences", label: "Compétences", icon: "🎯" },
  { id: "formation", label: "Formation", icon: "📚" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden min-h-[250px] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Section À propos - Découvrez le parcours d'Octavie MAMBU DIEMFUKA, cheffe de projet chez Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-primary-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-lg md:text-xl font-bold text-white mb-1.5 drop-shadow-lg">
            À propos
          </h1>
          <p className="text-xs text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Découvrez qui se cache derrière Kitty-Octa et ce qui nous passionne
            dans l'organisation d'événements.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Tab Content */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Profil Tab */}
            {activeTab === "profil" && (
              <div>
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-200 shadow-lg">
                    <Image
                      src="/images/IMG_9685.jpeg"
                      alt="Octavie - Cheffe de projet communication & talents chez Kitty-Octa"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    Octavie
                  </h2>
                  <p className="text-base text-primary-600 font-semibold">
                    Cheffe de projet communication & talents
                  </p>
                </div>

                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    Cheffe de projet communication et événementiel, spécialisée dans la
                    coordination d'actions à fort rayonnement. Forte de plus de cinq ans
                    d'expérience dans la gestion de projets culturels, éducatifs et créatifs,
                    j'excelle dans la conception de campagnes sur mesure, la relation partenaires
                    et la valorisation d'images.
                  </p>
                  <p>
                    Créative, rigoureuse et orientée résultats, je souhaite aujourd'hui mettre
                    mon sens du détail et du relationnel au service de projets d'envergure
                    impliquant des talents et des marques.
                  </p>
                  <p>
                    Avec <strong>Kitty-Octa</strong>, je propose une approche personnalisée et
                    complète pour transformer vos événements en moments inoubliables, alliant
                    créativité, rigueur et attention aux détails.
                  </p>
                </div>
              </div>
            )}

            {/* Parcours Tab */}
            {activeTab === "parcours" && (
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  Parcours professionnel
                </h2>
                <div className="space-y-5">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-gray-900">
                          Ceméa de Picardie
                        </h3>
                        <p className="text-sm text-primary-600 font-semibold">
                          Cheffe de projet communication & partenariats
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 md:mt-0">2021-2024</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 mt-3">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Élaboration et pilotage de stratégies de communication (digitale, print, événementielle)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Coordination entre équipes, prestataires et partenaires institutionnels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Gestion complète de projets (planification, budgets, reporting, production de contenus)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Organisation d'événements à visibilité régionale et nationale</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-gray-900">
                          Organisatrice d'événements indépendante
                        </h3>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 md:mt-0">2018 – Présent</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 mt-3">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Conception et gestion d'événements privés et professionnels : mariages, séminaires, escape games immersifs, soirées thématiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Coordination logistique, création d'univers visuels, gestion de prestataires et d'artistes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>Développement d'outils de planification et gestion des imprévus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Compétences Tab */}
            {activeTab === "competences" && (
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  Compétences et Faits marquants
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Compétences</h3>
                    <div className="space-y-2">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-50 rounded-lg p-3"
                        >
                          <svg
                            className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-3">Langues</h3>
                      <div className="space-y-1.5">
                        {languages.map((lang, index) => (
                          <div key={index} className="flex justify-between items-center text-xs">
                            <span className="text-gray-700">{lang.name}</span>
                            <span className="text-primary-600 font-semibold">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Faits marquants</h3>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-1.5">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Formation Tab */}
            {activeTab === "formation" && (
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  Formation
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                      DEJEPS - Développement de projets, territoires et réseaux
                    </h3>
                    <p className="text-xs text-gray-600">Ceméa de Picardie</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                      BPJEPS - Loisirs Tous Publics
                    </h3>
                    <p className="text-xs text-gray-600">Ceméa de Picardie</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                      Licence de Droit (niveau L2)
                    </h3>
                    <p className="text-xs text-gray-600">Université de Picardie Jules Verne</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                      Formation en communication
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 bg-gray-900 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Appel à l'action - Contactez Kitty-Octa pour discuter de votre projet d'événement"
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
            Travaillons ensemble
          </h2>
          <p className="text-base text-gray-200 mb-6 leading-relaxed">
            Discutons de votre projet et créons ensemble un événement qui vous ressemble.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Me contacter</span>
            {/* Effet glow */}
            <span className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></span>
          </Link>
        </div>
      </section>
    </div>
  );
}

