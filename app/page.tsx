import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
  description: "Organisation d'événements sur mesure, wedding planning et création de layer cakes artisanaux. Créativité, rigueur et sens du détail pour sublimer vos moments précieux.",
  openGraph: {
    title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
    description: "Organisation d'événements sur mesure, wedding planning et création de layer cakes artisanaux. Créativité, rigueur et sens du détail pour sublimer vos moments précieux.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
    </>
  );
}

