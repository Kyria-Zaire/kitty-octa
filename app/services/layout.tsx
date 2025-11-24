import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | Kitty-Octa - Événementiel sur mesure",
  description: "Découvrez nos services : Wedding Planning, Organisation d'événements, Layer Cakes sur mesure et Formation. Une offre complète et personnalisée pour tous vos événements.",
  openGraph: {
    title: "Nos Services | Kitty-Octa",
    description: "Découvrez nos services : Wedding Planning, Organisation d'événements, Layer Cakes sur mesure et Formation.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

