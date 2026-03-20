import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez nos réalisations : mariages, événements professionnels, layer cakes artisanaux. Des projets qui illustrent notre savoir-faire et notre créativité.",
  openGraph: {
    title: "Portfolio | OctaviEvent by Kitty-Octa",
    description:
      "Mariages, événements professionnels, layer cakes artisanaux — notre savoir-faire en images.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
