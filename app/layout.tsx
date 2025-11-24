import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  description: "Organisation d'événements sur mesure, wedding planning et création de layer cakes. Créativité, rigueur et sens du détail pour sublimer vos moments précieux.",
  keywords: ["événementiel", "wedding planning", "organisation d'événements", "layer cakes", "mariage", "événements sur mesure", "Kitty-Octa", "OctaviEvent"],
  authors: [{ name: "Octavie MAMBU DIEMFUKA" }],
  creator: "Octavie MAMBU DIEMFUKA",
  openGraph: {
    title: "Kitty-Octa | Événementiel sur mesure & Wedding Planning",
    description: "Organisation d'événements sur mesure, wedding planning et création de layer cakes. Créativité, rigueur et sens du détail pour sublimer vos moments précieux.",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

