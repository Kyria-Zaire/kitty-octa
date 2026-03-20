import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  style: "normal",
});

const SITE_URL = "https://kitty-octa.com";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&h=630&auto=format&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OctaviEvent by Kitty-Octa | Wedding Planner & Événementiel de Luxe",
    template: "%s | OctaviEvent by Kitty-Octa",
  },
  description:
    "OctaviEvent, branche événementielle de Kitty-Octa. Wedding planning haut de gamme, organisation d’événements sur mesure, décoration élégante et création de layer cakes artisanaux. Hauts-de-France & Île-de-France.",
  keywords: [
    "wedding planner",
    "wedding planning luxe",
    "événementiel haut de gamme",
    "organisation événements sur mesure",
    "layer cakes artisanaux",
    "mariage",
    "décoration événements",
    "Kitty-Octa",
    "OctaviEvent",
    "papeterie personnalisée",
    "wedding planner Hauts-de-France",
    "organisatrice mariage Picardie",
  ],
  authors: [{ name: "Octavie MAMBU DIEMFUKA" }],
  creator: "Octavie MAMBU DIEMFUKA",
  openGraph: {
    title: "OctaviEvent by Kitty-Octa | Wedding Planner & Événementiel de Luxe",
    description:
      "Un univers façonné par la passion de célébrer les moments de vie avec élégance, émotion et authenticité.",
    type: "website",
    locale: "fr_FR",
    siteName: "OctaviEvent by Kitty-Octa",
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "OctaviEvent — Événementiel sur mesure & Wedding Planning de luxe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaviEvent by Kitty-Octa | Wedding Planner & Événementiel de Luxe",
    description:
      "Organisation d’événements sur mesure, wedding planning et création de layer cakes.",
    images: [OG_IMAGE],
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
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "OctaviEvent by Kitty-Octa",
      description:
        "Wedding planning haut de gamme et organisation d’événements sur mesure. Mariages, séminaires, layer cakes artisanaux.",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.webp`,
      image: OG_IMAGE,
      telephone: "+33761796628",
      email: "kitty-octa@outlook.fr",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Hauts-de-France" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
      priceRange: "€€",
      sameAs: ["https://www.instagram.com/kitty__octa"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "OctaviEvent — Wedding Planning & Événementiel",
      serviceType: [
        "Wedding Planning",
        "Organisation d’événements",
        "Décoration Événementielle",
        "Layer Cakes sur mesure",
        "Papeterie personnalisée",
      ],
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Hauts-de-France" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-dm-sans bg-ivory text-taupe">
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
