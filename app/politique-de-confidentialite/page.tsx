import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Kitty-Octa",
  description: "Politique de confidentialité et protection des données personnelles de Kitty-Octa - OctaviEvent.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Politique de confidentialité
          </h1>
          
          <p className="text-sm text-gray-600 mb-8">
            <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none">
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La présente politique de confidentialité décrit la manière dont <strong>Kitty-Octa</strong> (OctaviEvent), 
                micro-entreprise dirigée par Octavie MAMBU DIEMFUKA, collecte, utilise et protège vos données personnelles 
                lorsque vous utilisez notre site web.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément au 
                Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                2. Responsable du traitement
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Responsable :</strong> Octavie MAMBU DIEMFUKA</p>
                <p><strong>Entreprise :</strong> Kitty-Octa - OctaviEvent</p>
                <p><strong>Email :</strong> <a href="mailto:kitty-octa@outlook.fr" className="text-primary-600 hover:text-primary-700">kitty-octa@outlook.fr</a></p>
                <p><strong>Zone d'intervention :</strong> Hauts-de-France & Île-de-France</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                3. Données collectées
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3.1. Données collectées via le formulaire de contact</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Type d'événement</li>
                    <li>Date prévue de l'événement</li>
                    <li>Nombre d'invités</li>
                    <li>Budget estimé</li>
                    <li>Message et détails du projet</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3.2. Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
                    <li>Cookies et technologies similaires (avec votre consentement)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                4. Finalités du traitement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Gestion des demandes de contact :</strong> Répondre à vos demandes de devis et questions</li>
                <li><strong>Préparation et organisation d'événements :</strong> Planification et coordination de vos événements</li>
                <li><strong>Communication :</strong> Vous contacter concernant vos projets et événements</li>
                <li><strong>Amélioration du site :</strong> Analyse du trafic et optimisation de l'expérience utilisateur (avec votre consentement)</li>
                <li><strong>Obligations légales :</strong> Respect des obligations comptables et fiscales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                5. Base légale du traitement
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Consentement :</strong> Pour les cookies d'analyse (Google Analytics)</li>
                <li><strong>Exécution d'un contrat :</strong> Pour la gestion de vos demandes et l'organisation d'événements</li>
                <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos services et la communication</li>
                <li><strong>Obligation légale :</strong> Pour la conservation des données comptables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                6. Conservation des données
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>
                  <strong>Données de contact :</strong> Conservées pendant 3 ans à compter du dernier contact, sauf demande de suppression.
                </p>
                <p>
                  <strong>Données comptables :</strong> Conservées pendant 10 ans conformément aux obligations légales.
                </p>
                <p>
                  <strong>Données d'analyse :</strong> Conservées pendant 26 mois maximum (Google Analytics).
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                7. Partage des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles ne sont <strong>jamais vendues</strong> ni partagées avec des tiers à des fins commerciales.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous pouvons partager vos données uniquement avec :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Prestataires de services :</strong> Hébergeur (Vercel), service d'analyse (Google Analytics) - uniquement avec votre consentement</li>
                <li><strong>Autorités compétentes :</strong> En cas d'obligation légale ou de réquisition judiciaire</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience et analyser le trafic. 
                Vous pouvez gérer vos préférences de cookies à tout moment via la bannière de cookies.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Types de cookies utilisés :</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Cookies nécessaires :</strong> Essentiels au fonctionnement du site (toujours actifs)</li>
                  <li><strong>Cookies d'analyse :</strong> Google Analytics pour comprendre l'utilisation du site (avec votre consentement)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                9. Vos droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment pour les cookies</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:kitty-octa@outlook.fr" className="text-primary-600 hover:text-primary-700">
                  kitty-octa@outlook.fr
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                10. Sécurité des données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                personnelles contre tout accès non autorisé, perte, destruction ou altération. Cependant, aucune méthode 
                de transmission sur Internet n'est totalement sécurisée.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                11. Réclamation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de 
                la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>CNIL</strong><br />
                3 Place de Fontenoy - TSA 80715<br />
                75334 Paris Cedex 07<br />
                Téléphone : 01 53 73 22 22<br />
                Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.cnil.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                12. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cette politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour 
                est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                13. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données, 
                contactez-nous :
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-4">
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

