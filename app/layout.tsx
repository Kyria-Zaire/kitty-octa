import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ConditionalLayout from "@/components/ConditionalLayout";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
  description: "OctaviEvent s'inscrit comme l'une des branches de Kitty-Octa, un univers façonné par la passion de célébrer les moments de vie avec élégance, émotion et authenticité. Wedding planning, organisation d'événements, décoration, papeterie personnalisée et création de layer cakes sur mesure.",
  keywords: ["événementiel", "wedding planning", "organisation d'événements", "layer cakes", "mariage", "événements sur mesure", "Kitty-Octa", "OctaviEvent", "papeterie personnalisée", "décoration événements"],
  authors: [{ name: "Octavie MAMBU DIEMFUKA" }],
  creator: "Octavie MAMBU DIEMFUKA",
  openGraph: {
    title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
    description: "OctaviEvent s'inscrit comme l'une des branches de Kitty-Octa, un univers façonné par la passion de célébrer les moments de vie avec élégance, émotion et authenticité.",
    type: "website",
    locale: "fr_FR",
    siteName: "Kitty-Octa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
    description: "Organisation d'événements sur mesure, wedding planning et création de layer cakes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <ConditionalLayout>{children}</ConditionalLayout>
        <CookieBanner />
      </body>
    </html>
  );
}

