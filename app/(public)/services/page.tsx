"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import CTABanner from "@/components/layout/CTABanner";
import { cn } from "@/lib/utils";

/* ── Services Data ── */

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "mariage",
    title: "Organisation de mariage",
    description:
      "Accompagnement complet des futurs mariés pour créer le mariage de leurs rêves.",
    details: [
      "Accompagnement personnalisé du concept à la réalisation",
      "Sélection et coordination des prestataires",
      "Gestion complète du budget et suivi des dépenses",
      "Scénographie et décoration sur mesure",
      "Coordination le jour J pour un déroulement parfait",
      "Gestion du planning et des imprévus",
    ],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
  {
    id: "events",
    title: "Organisation d\u2019événements",
    description:
      "Conception et gestion d\u2019événements privés et professionnels sur mesure.",
    details: [
      "Mariages, anniversaires, cérémonies",
      "Séminaires d\u2019entreprise et cohésion d’équipe",
      "Manifestations culturelles et professionnelles",
      "Escape games immersifs et soirées thématiques",
      "Planification complète : timing, logistique, coordination",
      "Gestion des prestataires et des artistes",
    ],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    ),
  },
  {
    id: "cakes",
    title: "Gâteaux à étages sur mesure",
    description:
      "Création artisanale de pâtisseries décoratives pour sublimer vos événements.",
    details: [
      "Gâteaux à étages personnalisés selon vos goûts et votre thème",
      "Options véganes et sans allergènes disponibles",
      "Pâtisseries thématiques et artistiques",
      "Association parfaite entre esthétique et goût",
      "Consultation préalable pour comprendre vos attentes",
      "Livraison et installation sur site",
    ],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10m16 10V10M6 10V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4M2 10h20" /></svg>
    ),
  },
  {
    id: "decoration",
    title: "Décoration d\u2019événements",
    description:
      "Création d\u2019univers visuels sur mesure pour sublimer chaque occasion.",
    details: [
      "Décoration florale et végétale",
      "Scénographie personnalisée",
      "Accessoires et mobilier décoratif",
      "Ambiance lumineuse et atmosphérique",
      "Décoration thématique",
      "Installation et démontage complets",
    ],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
    ),
  },
  {
    id: "stationery",
    title: "Papeterie personnalisée",
    description:
      "Création de papeterie sur mesure pour une identité unique à votre événement.",
    details: [
      "Invitations personnalisées",
      "Marque-places élégants",
      "Menus de table sur mesure",
      "Filtres Snapchat et réseaux sociaux",
      "Design cohérent avec votre thème",
      "Impression de qualité premium",
    ],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    ),
  },
  {
    id: "training",
    title: "Formation et accompagnement",
    description:
      "Transmission d\u2019expertise en gestion de projet, communication et interculturalité.",
    details: [
      "Formations en gestion de projet événementiel",
      "Ateliers de communication et storytelling",
      "Formation en interculturalité et diversité",
      "Accompagnement méthodologique pour associations",
      "Transmission d\u2019outils pratiques et efficaces",
      "Sessions sur mesure selon vos besoins",
    ],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
    ),
  },
];

/**
 * Page Prestations — 6 catégories
 *
 * Sélecteur d’onglets interactif + fiche détaillée.
 * 'use client' requis pour l’état des onglets.
 */
export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <>
      <PageHero
        variant="compact"
        title="Nos Prestations"
        subtitle="Une offre complète alliant créativité, rigueur et sens du détail pour transformer vos événements en moments inoubliables."
        backgroundImage="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1171&auto=format&fit=crop"
        backgroundAlt="Organisation d&apos;événements sur mesure par OctaviEvent"
      />

      {/* ── Tab Navigation ── */}
      <div className="border-b border-gold/10 bg-ivory">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200",
                  activeIndex === index
                    ? "bg-charcoal text-white shadow-sm"
                    : "text-taupe hover:bg-beige hover:text-charcoal"
                )}
              >
                <span className="text-gold">{service.icon}</span>
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Active Service Detail ── */}
      <SectionWrapper variant="ivory" size="lg">
        <div className="mx-auto max-w-4xl">
          <Card variant="default" className="bg-white p-8 shadow-md md:p-10">
            <CardHeader className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                {active.icon}
              </div>
              <div>
                <CardTitle as="h2" className="text-charcoal text-2xl md:text-heading-2">
                  {active.title}
                </CardTitle>
                <CardDescription className="mt-1 text-taupe">
                  {active.description}
                </CardDescription>
              </div>
            </CardHeader>

            <Divider variant="default" className="my-6" />

            <CardContent>
              <h3 className="mb-4 text-sm font-semibold text-charcoal">
                Ce que nous proposons :
              </h3>
              <ul className="space-y-3">
                {active.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <svg
                        className="h-3 w-3 text-gold"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-taupe">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <div className="mt-8">
              <Button variant="ghost" href="/contact">
                Demander un devis &rarr;
              </Button>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <CTABanner variant="charcoal" />
    </>
  );
}
