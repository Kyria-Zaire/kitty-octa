import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Kitty-Octa - Nos Réalisations",
  description: "Découvrez nos réalisations : mariages, événements professionnels, layer cakes artisanaux. Des projets qui illustrent notre savoir-faire et notre créativité.",
  openGraph: {
    title: "Portfolio | Kitty-Octa - Nos Réalisations",
    description: "Découvrez nos réalisations : mariages, événements professionnels, layer cakes artisanaux.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

