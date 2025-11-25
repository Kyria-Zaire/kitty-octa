import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
  description: "OctaviEvent s'inscrit comme l'une des branches de Kitty-Octa, un univers façonné par la passion de célébrer les moments de vie avec élégance, émotion et authenticité. Wedding planning, organisation d'événements, décoration, papeterie personnalisée et création de layer cakes sur mesure.",
  openGraph: {
    title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
    description: "OctaviEvent s'inscrit comme l'une des branches de Kitty-Octa, un univers façonné par la passion de célébrer les moments de vie avec élégance, émotion et authenticité. Wedding planning, organisation d'événements, décoration, papeterie personnalisée et création de layer cakes sur mesure.",
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

