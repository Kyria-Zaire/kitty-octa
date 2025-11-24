import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Illustration ou image décorative */}
        <div className="mb-8 relative">
          <div className="text-9xl font-serif font-bold text-primary-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary-100/50 blur-3xl"></div>
          </div>
        </div>

        {/* Message principal */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          <br />
          Revenons ensemble sur le bon chemin.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Retour à l'accueil</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-full font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Nous contacter</span>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Liens rapides */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Ou explorez nos pages principales :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/portfolio"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/tarifs"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Tarifs
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/a-propos"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              À propos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

