import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#FDF8F2",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OctaviEvent by Kitty-Octa | Événementiel & Mariages haut de gamme",
    template: "%s | OctaviEvent by Kitty-Octa",
  },
  description:
    "OctaviEvent, branche événementielle de Kitty-Octa. Organisation de mariages haut de gamme, événements sur mesure, décoration élégante et création de layer cakes artisanaux. Hauts-de-France & Île-de-France.",
  keywords: [
    "organisatrice de mariage",
    "organisation de mariage haut de gamme",
    "événementiel haut de gamme",
    "organisation événements sur mesure",
    "layer cakes artisanaux",
    "mariage",
    "décoration événements",
    "Kitty-Octa",
    "OctaviEvent",
    "papeterie personnalisée",
    "organisatrice de mariage Hauts-de-France",
    "organisatrice mariage Picardie",
  ],
  authors: [{ name: "Octavie MAMBU DIEMFUKA" }],
  creator: "Octavie MAMBU DIEMFUKA",
  openGraph: {
    title: "OctaviEvent by Kitty-Octa | Événementiel & Mariages haut de gamme",
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
        alt: "OctaviEvent — Événementiel sur mesure & organisation de mariages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaviEvent by Kitty-Octa | Événementiel & Mariages haut de gamme",
    description:
      "Organisation d’événements sur mesure, mariages haut de gamme et création de layer cakes.",
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
        "Organisation de mariages haut de gamme et événements sur mesure. Mariages, séminaires, layer cakes artisanaux.",
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
      name: "OctaviEvent — Mariages & Événementiel",
      serviceType: [
        "Organisation de mariages",
        "Organisation d’événements",
        "Décoration événementielle",
        "Gâteaux à étages sur mesure",
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
      <body className="antialiased font-dm-sans bg-ivory text-taupe pt-20">
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
