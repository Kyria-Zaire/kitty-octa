import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Kitty-Octa",
  description: "Mentions légales du site Kitty-Octa - OctaviEvent.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mentions légales
          </h1>

          <div className="prose prose-sm max-w-none">
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                1. Éditeur du site
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Dénomination :</strong> Kitty-Octa - OctaviEvent</p>
                <p><strong>Forme juridique :</strong> Micro-entreprise</p>
                <p><strong>Dirigeante :</strong> Octavie MAMBU DIEMFUKA</p>
                <p><strong>Email :</strong> <a href="mailto:kitty-octa@outlook.fr" className="text-primary-600 hover:text-primary-700">kitty-octa@outlook.fr</a></p>
                <p><strong>Zone d'intervention :</strong> Hauts-de-France & Île-de-France</p>
                <p><strong>Date de création :</strong> 4 octobre 2025</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                2. Hébergement
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">vercel.com</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est la propriété exclusive 
                de <strong>Kitty-Octa - OctaviEvent</strong> ou de ses partenaires et est protégé par les lois françaises 
                et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments 
                du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                4. Données personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les informations collectées via le formulaire de contact sont nécessaires pour répondre à vos demandes 
                et organiser vos événements. Elles sont conservées de manière sécurisée et ne sont jamais vendues ou 
                partagées avec des tiers à des fins commerciales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
                sur vos données personnelles. Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:kitty-octa@outlook.fr" className="text-primary-600 hover:text-primary-700">
                  kitty-octa@outlook.fr
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour plus d'informations, consultez notre{" "}
                <Link href="/politique-de-confidentialite" className="text-primary-600 hover:text-primary-700 underline">
                  Politique de confidentialité
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                5. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. Les cookies nécessaires 
                sont toujours actifs. Les cookies d'analyse (Google Analytics) ne sont activés qu'avec votre consentement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vous pouvez gérer vos préférences de cookies à tout moment via la bannière de cookies ou en nous contactant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                6. Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Kitty-Octa - OctaviEvent</strong> s'efforce de fournir des informations exactes et à jour sur ce site. 
                Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
              </p>
              <p className="text-gray-700 leading-relaxed">
                L'utilisation du site se fait sous votre propre responsabilité. Nous ne pourrons être tenus responsables 
                des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité de l'utiliser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                7. Liens externes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site peut contenir des liens vers des sites externes. Nous n'exerçons aucun contrôle sur ces sites 
                et déclinons toute responsabilité quant à leur contenu ou leur politique de confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                8. Droit applicable
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français 
                seront seuls compétents.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                9. Contact
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <p className="text-gray-700">
                  <strong>Email :</strong>{" "}
                  <a href="mailto:kitty-octa@outlook.fr" className="text-primary-600 hover:text-primary-700">
                    kitty-octa@outlook.fr
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

