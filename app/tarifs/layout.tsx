import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Kitty-Octa - Devis personnalisé",
  description: "Découvrez nos tarifs pour wedding planning, organisation d'événements et layer cakes. Des prestations sur mesure adaptées à vos besoins et à votre budget.",
  openGraph: {
    title: "Tarifs | Kitty-Octa - Devis personnalisé",
    description: "Découvrez nos tarifs pour wedding planning, organisation d'événements et layer cakes.",
    type: "website",
  },
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

