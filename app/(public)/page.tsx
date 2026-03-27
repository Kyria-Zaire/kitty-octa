import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { PourquoiNousChoisir } from "@/components/sections/PourquoiNousChoisir";
import { ProcessusTeaser } from "@/components/sections/ProcessusTeaser";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "OctaviEvent by Kitty-Octa — Événementiel haut de gamme à Amiens",
  description:
    "Organisatrice d’événements haut de gamme à Amiens. Mariages, événements d’entreprise, événements privés en Hauts-de-France. Consultation gratuite.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesTeaser />
      <PortfolioPreview />
      <PourquoiNousChoisir />
      <ProcessusTeaser />
      <TestimonialsSection />
      <CTAFinal />
    </main>
  );
}
