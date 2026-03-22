import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesTeaser } from '@/components/sections/ServicesTeaser';
import { ChiffresCles } from '@/components/sections/ChiffresCles';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { ProcessusTeaser } from '@/components/sections/ProcessusTeaser';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTAFinal } from '@/components/sections/CTAFinal';

export const metadata = {
  title: 'OctaviEvent by Kitty-Octa — Wedding Planner & Événementiel Amiens',
  description: "Organisatrice d'événements haut de gamme à Amiens. Mariages, corporate, événements privés en Hauts-de-France. Consultation gratuite.",
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesTeaser />
      <ChiffresCles />
      <PortfolioPreview />
      <ProcessusTeaser />
      <TestimonialsSection />
      <CTAFinal />
    </main>
  );
}
