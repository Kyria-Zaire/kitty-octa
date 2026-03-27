import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Prestations",
  description:
    "Découvrez nos services : organisation de mariages, organisation d’événements, décoration, layer cakes sur mesure, papeterie personnalisée et formation.",
  openGraph: {
    title: "Nos Prestations | OctaviEvent by Kitty-Octa",
    description:
      "Une offre complète et personnalisée pour tous vos événements.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
