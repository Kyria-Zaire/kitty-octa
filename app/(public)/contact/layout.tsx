import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kitty-Octa - Demandez votre devis",
  description: "Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. Réponse sous 24-48h. Devis gratuit et sans engagement.",
  openGraph: {
    title: "Contact | Kitty-Octa - Demandez votre devis",
    description: "Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

