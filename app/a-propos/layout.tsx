import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Kitty-Octa - Octavie MAMBU DIEMFUKA",
  description: "Découvrez le parcours d'Octavie MAMBU DIEMFUKA, cheffe de projet communication & talents. Plus de 5 ans d'expérience dans l'organisation d'événements.",
  openGraph: {
    title: "À propos | Kitty-Octa - Octavie MAMBU DIEMFUKA",
    description: "Découvrez le parcours d'Octavie MAMBU DIEMFUKA, cheffe de projet communication & talents.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

