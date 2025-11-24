"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Statistiques mockées (à remplacer par de vraies données Google Analytics API)
const mockStats = {
  visitors: {
    today: 124,
    yesterday: 98,
    thisWeek: 856,
    thisMonth: 3421,
    change: "+12.5%",
  },
  pageViews: {
    today: 342,
    yesterday: 298,
    thisWeek: 2456,
    thisMonth: 9876,
    change: "+14.8%",
  },
  topPages: [
    { path: "/", views: 1245, title: "Accueil" },
    { path: "/services", views: 856, title: "Services" },
    { path: "/portfolio", views: 642, title: "Portfolio" },
    { path: "/contact", views: 423, title: "Contact" },
    { path: "/tarifs", views: 389, title: "Tarifs" },
  ],
  events: [
    { name: "CTA Clicks", count: 234, change: "+18%" },
    { name: "Form Submissions", count: 45, change: "+12%" },
    { name: "Portfolio Views", count: 189, change: "+25%" },
    { name: "Service Tabs", count: 156, change: "+8%" },
  ],
  referrers: [
    { source: "Direct", visits: 1234 },
    { source: "Google", visits: 856 },
    { source: "Instagram", visits: 423 },
    { source: "Autres", visits: 198 },
  ],
  devices: [
    { type: "Mobile", percentage: 58 },
    { type: "Desktop", percentage: 35 },
    { type: "Tablet", percentage: 7 },
  ],
};

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Mot de passe simple (à changer en production)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "kitty-octa-2025";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      // Stocker en sessionStorage pour la session
      if (typeof window !== "undefined") {
        sessionStorage.setItem("admin_authenticated", "true");
      }
    } else {
      setError("Mot de passe incorrect");
    }
  };

  useEffect(() => {
    // Vérifier si déjà authentifié
    if (typeof window !== "undefined") {
      const auth = sessionStorage.getItem("admin_authenticated");
      if (auth === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="/images/e6de5d03-0703-4070-a882-7a88bb7bdf60-removebg-preview.png"
                alt="Kitty-Octa Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Accès Admin
            </h1>
            <p className="text-sm text-gray-600">
              Dashboard de surveillance du trafic
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="Entrez le mot de passe"
                required
              />
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Admin */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/e6de5d03-0703-4070-a882-7a88bb7bdf60-removebg-preview.png"
                  alt="Kitty-Octa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-gray-900">
                  Dashboard Admin
                </h1>
                <p className="text-xs text-gray-500">Surveillance du trafic</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                Retour au site
              </Link>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  if (typeof window !== "undefined") {
                    sessionStorage.removeItem("admin_authenticated");
                  }
                }}
                className="text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Visiteurs */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Visiteurs</h3>
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{mockStats.visitors.thisMonth.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">Ce mois</p>
              </div>
              <span className="text-sm font-semibold text-green-600">{mockStats.visitors.change}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Aujourd'hui</span>
                <span className="font-semibold text-gray-900">{mockStats.visitors.today}</span>
              </div>
            </div>
          </div>

          {/* Pages vues */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Pages vues</h3>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{mockStats.pageViews.thisMonth.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">Ce mois</p>
              </div>
              <span className="text-sm font-semibold text-green-600">{mockStats.pageViews.change}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Aujourd'hui</span>
                <span className="font-semibold text-gray-900">{mockStats.pageViews.today}</span>
              </div>
            </div>
          </div>

          {/* Taux de conversion */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Taux de conversion</h3>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">3.2%</p>
                <p className="text-xs text-gray-500 mt-1">Formulaires/Visiteurs</p>
              </div>
              <span className="text-sm font-semibold text-green-600">+0.5%</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Formulaires</span>
                <span className="font-semibold text-gray-900">{mockStats.events[1].count}</span>
              </div>
            </div>
          </div>

          {/* Temps moyen */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Temps moyen</h3>
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">2m 34s</p>
                <p className="text-xs text-gray-500 mt-1">Par session</p>
              </div>
              <span className="text-sm font-semibold text-green-600">+12s</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Rebond</span>
                <span className="font-semibold text-gray-900">42%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Pages */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">
              Pages les plus visitées
            </h2>
            <div className="space-y-4">
              {mockStats.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{page.title}</p>
                      <p className="text-xs text-gray-500">{page.path}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{page.views.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">vues</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Événements */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">
              Événements trackés
            </h2>
            <div className="space-y-4">
              {mockStats.events.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{event.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{event.count}</p>
                    <p className="text-xs text-green-600">{event.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sources & Devices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sources de trafic */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">
              Sources de trafic
            </h2>
            <div className="space-y-3">
              {mockStats.referrers.map((ref, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{ref.source}</span>
                    <span className="text-sm font-bold text-gray-900">{ref.visits.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{
                        width: `${(ref.visits / mockStats.referrers.reduce((acc, r) => acc + r.visits, 0)) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appareils */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">
              Appareils
            </h2>
            <div className="space-y-4">
              {mockStats.devices.map((device, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{device.type}</span>
                    <span className="text-sm font-bold text-gray-900">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Link to Google Analytics */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Accéder à Google Analytics
              </h3>
              <p className="text-sm text-primary-100">
                Pour des statistiques détaillées et en temps réel
              </p>
            </div>
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Ouvrir GA
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

