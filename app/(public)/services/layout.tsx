import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Prestations",
  description:
    "Découvrez nos services : Wedding Planning, Organisation d\u2019événements, Décoration, Layer Cakes sur mesure, Papeterie personnalisée et Formation.",
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
