"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Afficher la bannière après un court délai pour une meilleure UX
        setTimeout(() => setShowBanner(true), 1000);
      } else {
        // Charger les préférences sauvegardées
        const savedPreferences = localStorage.getItem("cookie_preferences");
        if (savedPreferences) {
          setCookiePreferences(JSON.parse(savedPreferences));
        }
      }
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
    };
    savePreferences(preferences);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const preferences = {
      necessary: true,
      analytics: false,
    };
    savePreferences(preferences);
    setShowBanner(false);
  };

  const savePreferences = (preferences: { necessary: boolean; analytics: boolean }) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_consent", "true");
      localStorage.setItem("cookie_preferences", JSON.stringify(preferences));
      setCookiePreferences(preferences);
      
      // Déclencher un événement pour que GoogleAnalytics puisse réagir
      window.dispatchEvent(new CustomEvent("cookieConsentUpdated", { detail: preferences }));
    }
  };

  const handleSavePreferences = () => {
    savePreferences(cookiePreferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Bannière principale */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Nous utilisons des cookies
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic.
                Les cookies nécessaires sont toujours actifs. Vous pouvez choisir d'activer ou non les cookies d'analyse.
                <Link href="/politique-de-confidentialite" className="text-primary-600 hover:text-primary-700 underline ml-1">
                  En savoir plus
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Personnaliser
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Refuser
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de paramètres */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Préférences de cookies
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Fermer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Cookies nécessaires */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Cookies nécessaires</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        Toujours actif
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cookies d'analyse */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">Cookies d'analyse</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site en collectant des informations anonymes.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) =>
                          setCookiePreferences({
                            ...cookiePreferences,
                            analytics: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Utilisé par : Google Analytics
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Enregistrer les préférences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

