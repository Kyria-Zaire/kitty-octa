"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Suggestions d'onglets pour le dashboard admin
const adminTabs = [
  {
    id: "overview",
    title: "Vue d'ensemble",
    icon: "📊",
    sections: [
      {
        title: "Statistiques générales",
        description: "Aperçu des performances globales du site",
      },
      {
        title: "Activité récente",
        description: "Dernières actions et événements trackés",
      },
      {
        title: "Indicateurs clés",
        description: "KPIs principaux à surveiller",
      },
    ],
  },
  {
    id: "traffic",
    title: "Trafic & Conversions",
    icon: "👥",
    sections: [
      {
        title: "Vue d'ensemble",
        description: "Statistiques principales du trafic et des conversions",
      },
      {
        title: "Sources & Comportement",
        description: "Origine du trafic et comportement des visiteurs",
      },
      {
        title: "Conversions",
        description: "Formulaires, événements et taux de conversion",
      },
    ],
  },
  {
    id: "content",
    title: "Contenu",
    icon: "📝",
    sections: [
      {
        title: "Pages populaires",
        description: "Les pages les plus visitées et performantes",
      },
      {
        title: "Portfolio",
        description: "Statistiques de vues et interactions sur les projets",
      },
      {
        title: "Services",
        description: "Quels services intéressent le plus vos visiteurs",
      },
    ],
  },
  {
    id: "audience",
    title: "Audience",
    icon: "🌍",
    sections: [
      {
        title: "Géolocalisation",
        description: "Origine géographique de vos visiteurs",
      },
      {
        title: "Appareils",
        description: "Répartition mobile, desktop, tablette",
      },
      {
        title: "Démographie",
        description: "Informations sur votre audience cible",
      },
    ],
  },
  {
    id: "settings",
    title: "Paramètres",
    icon: "⚙️",
    sections: [
      {
        title: "Configuration",
        description: "Paramètres du dashboard et préférences",
      },
      {
        title: "Intégrations",
        description: "Google Analytics, autres outils de tracking",
      },
      {
        title: "Sécurité",
        description: "Gestion du mot de passe et accès",
      },
    ],
  },
];

// Données mockées pour l'onglet Trafic
const trafficData = {
  visitors: {
    today: 124,
    yesterday: 98,
    thisWeek: 856,
    thisMonth: 3421,
    change: "+12.5%",
  },
  sessions: {
    today: 156,
    thisWeek: 1023,
    thisMonth: 4123,
    change: "+8.3%",
  },
  pageViews: {
    today: 342,
    thisWeek: 2456,
    thisMonth: 9876,
    change: "+14.8%",
  },
  sources: [
    { name: "Direct", visits: 1234, percentage: 45.6, change: "+5.2%" },
    { name: "Google", visits: 856, percentage: 31.7, change: "+12.1%" },
    { name: "Instagram", visits: 423, percentage: 15.7, change: "+18.5%" },
    { name: "Autres", visits: 198, percentage: 7.0, change: "-2.3%" },
  ],
  topPages: [
    { path: "/", views: 1245, title: "Accueil", avgTime: "2m 15s" },
    { path: "/services", views: 856, title: "Services", avgTime: "3m 42s" },
    { path: "/portfolio", views: 642, title: "Portfolio", avgTime: "4m 18s" },
    { path: "/contact", views: 423, title: "Contact", avgTime: "1m 55s" },
    { path: "/tarifs", views: 389, title: "Tarifs", avgTime: "2m 30s" },
  ],
  behavior: {
    avgSessionDuration: "2m 34s",
    bounceRate: 42.3,
    pagesPerSession: 2.8,
    newVisitors: 68.5,
    returningVisitors: 31.5,
  },
};

// Données mockées pour l'onglet Conversions
const conversionsData = {
  forms: {
    total: 45,
    thisMonth: 23,
    thisWeek: 8,
    today: 2,
    change: "+12%",
    byType: [
      { type: "Contact", count: 18, percentage: 40 },
      { type: "Devis", count: 15, percentage: 33.3 },
      { type: "Newsletter", count: 12, percentage: 26.7 },
    ],
    recent: [
      { date: "Aujourd'hui", time: "14:32", type: "Devis", name: "Marie D." },
      { date: "Aujourd'hui", time: "11:15", type: "Contact", name: "Jean P." },
      { date: "Hier", time: "16:45", type: "Devis", name: "Sophie L." },
      { date: "Hier", time: "09:20", type: "Contact", name: "Pierre M." },
    ],
  },
  events: [
    { name: "Clics CTA", count: 234, change: "+18%", trend: "up" },
    { name: "Vues Portfolio", count: 189, change: "+25%", trend: "up" },
    { name: "Onglets Services", count: 156, change: "+8%", trend: "up" },
    { name: "Téléchargements", count: 45, change: "-5%", trend: "down" },
    { name: "Partages", count: 32, change: "+12%", trend: "up" },
  ],
  conversionRates: {
    overall: 3.2,
    forms: 2.1,
    cta: 5.8,
    portfolio: 4.3,
    change: "+0.5%",
  },
  funnel: [
    { stage: "Visiteurs", count: 3421, percentage: 100 },
    { stage: "Pages vues", count: 2456, percentage: 71.8 },
    { stage: "Interactions", count: 856, percentage: 25.0 },
    { stage: "Formulaires", count: 72, percentage: 2.1 },
  ],
};

// Données mockées pour l'onglet Contenu
const contentData = {
  topPages: [
    { path: "/", views: 1245, title: "Accueil", avgTime: "2m 15s", bounceRate: 38.5, change: "+12%" },
    { path: "/services", views: 856, title: "Services", avgTime: "3m 42s", bounceRate: 32.1, change: "+8%" },
    { path: "/portfolio", views: 642, title: "Portfolio", avgTime: "4m 18s", bounceRate: 28.9, change: "+25%" },
    { path: "/contact", views: 423, title: "Contact", avgTime: "1m 55s", bounceRate: 45.2, change: "+5%" },
    { path: "/tarifs", views: 389, title: "Tarifs", avgTime: "2m 30s", bounceRate: 35.7, change: "+15%" },
    { path: "/a-propos", views: 234, title: "À propos", avgTime: "2m 10s", bounceRate: 42.3, change: "+3%" },
  ],
  portfolio: {
    totalViews: 189,
    totalProjects: 6,
    avgViewsPerProject: 31.5,
    topProjects: [
      { name: "Mariage champêtre élégant", views: 45, interactions: 12, change: "+18%" },
      { name: "Layer Cake nuptial artisanal", views: 38, interactions: 8, change: "+25%" },
      { name: "Bal masqué thématique", views: 32, interactions: 15, change: "+12%" },
      { name: "Demande en mariage scénarisée", views: 28, interactions: 10, change: "+8%" },
      { name: "Séminaire d'entreprise créatif", views: 24, interactions: 6, change: "+5%" },
      { name: "Layer Cake végane thématique", views: 22, interactions: 4, change: "+3%" },
    ],
  },
  services: {
    totalInteractions: 156,
    topServices: [
      { name: "Wedding Planning", views: 68, clicks: 45, conversion: 12.3, change: "+15%" },
      { name: "Organisation d'événements", views: 52, clicks: 38, conversion: 10.8, change: "+12%" },
      { name: "Décoration d'événements", views: 48, clicks: 35, conversion: 9.5, change: "+18%" },
      { name: "Layer Cakes", views: 42, clicks: 28, conversion: 8.2, change: "+8%" },
      { name: "Formation", views: 28, clicks: 10, conversion: 5.1, change: "+5%" },
    ],
  },
};

// Données mockées pour l'onglet Audience
const audienceData = {
  geolocation: [
    { country: "France", visits: 2456, percentage: 85.2, change: "+8%" },
    { country: "Belgique", visits: 234, percentage: 8.1, change: "+12%" },
    { country: "Suisse", visits: 123, percentage: 4.3, change: "+5%" },
    { country: "Autres", visits: 68, percentage: 2.4, change: "-2%" },
  ],
  cities: [
    { city: "Paris", visits: 856, percentage: 29.7 },
    { city: "Amiens", visits: 423, percentage: 14.7 },
    { city: "Lille", visits: 234, percentage: 8.1 },
    { city: "Lyon", visits: 189, percentage: 6.6 },
    { city: "Marseille", visits: 156, percentage: 5.4 },
  ],
  devices: [
    { type: "Mobile", visits: 1672, percentage: 58.0, change: "+5%" },
    { type: "Desktop", visits: 1008, percentage: 35.0, change: "-3%" },
    { type: "Tablet", visits: 201, percentage: 7.0, change: "+2%" },
  ],
  browsers: [
    { name: "Chrome", visits: 1456, percentage: 50.5 },
    { name: "Safari", visits: 723, percentage: 25.1 },
    { name: "Firefox", visits: 345, percentage: 12.0 },
    { name: "Edge", visits: 234, percentage: 8.1 },
    { name: "Autres", visits: 123, percentage: 4.3 },
  ],
  demographics: {
    ageGroups: [
      { range: "18-24", percentage: 12.5 },
      { range: "25-34", percentage: 35.8 },
      { range: "35-44", percentage: 28.3 },
      { range: "45-54", percentage: 15.2 },
      { range: "55+", percentage: 8.2 },
    ],
    gender: [
      { type: "Femme", percentage: 68.5 },
      { type: "Homme", percentage: 28.3 },
      { type: "Non spécifié", percentage: 3.2 },
    ],
  },
};

// Composant pour l'onglet Vue d'ensemble
function OverviewTabContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="space-y-6">
      {/* Section 1: Statistiques générales */}
      <div className={`rounded-xl shadow-sm p-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
        <h3 className={`font-serif text-lg font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Statistiques générales
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Visiteurs</p>
            <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>1,234</p>
            <p className="text-xs text-green-600 mt-1">+12%</p>
          </div>
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Pages vues</p>
            <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>3,456</p>
            <p className="text-xs text-green-600 mt-1">+8%</p>
          </div>
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Formulaires</p>
            <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>45</p>
            <p className="text-xs text-green-600 mt-1">+15%</p>
          </div>
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Taux conversion</p>
            <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>3.6%</p>
            <p className="text-xs text-green-600 mt-1">+0.5%</p>
          </div>
        </div>
      </div>

      {/* Section 2: Activité récente */}
      <div className={`rounded-xl shadow-sm p-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
        <h3 className={`font-serif text-lg font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Activité récente
        </h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`flex items-center justify-between p-2.5 rounded-lg border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Nouveau formulaire de contact</p>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Il y a {i} heure{i > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Indicateurs clés */}
      <div className={`rounded-xl shadow-sm p-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
        <h3 className={`font-serif text-lg font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Indicateurs clés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Durée moyenne</p>
            <p className={`text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>2m 45s</p>
          </div>
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Taux de rebond</p>
            <p className={`text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>38.5%</p>
          </div>
          <div className={`rounded-lg p-3 border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
            <p className={`text-xs mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Pages/session</p>
            <p className={`text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>2.8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour l'onglet Trafic
function TrafficTabContent() {
  return (
    <div className="space-y-6">
      {/* Section 1: Visiteurs */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Visiteurs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Visiteurs uniques */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-medium text-gray-600">Visiteurs uniques</h4>
              <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl font-bold text-gray-900">{trafficData.visitors.thisMonth.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Ce mois</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Aujourd'hui</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-900">{trafficData.visitors.today}</span>
                  <span className="text-xs font-medium text-green-600">{trafficData.visitors.change}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sessions */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-medium text-gray-600">Sessions</h4>
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl font-bold text-gray-900">{trafficData.sessions.thisMonth.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Ce mois</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Aujourd'hui</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-900">{trafficData.sessions.today}</span>
                  <span className="text-xs font-medium text-green-600">{trafficData.sessions.change}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pages vues */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-medium text-gray-600">Pages vues</h4>
              <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl font-bold text-gray-900">{trafficData.pageViews.thisMonth.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Ce mois</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Aujourd'hui</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-900">{trafficData.pageViews.today}</span>
                  <span className="text-xs font-medium text-green-600">{trafficData.pageViews.change}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Sources de trafic */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Sources de trafic
        </h3>
        <div className="space-y-3">
          {trafficData.sources.map((source, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-700">{source.name}</span>
                  <span className="text-xs text-gray-500">({source.percentage}%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900">{source.visits.toLocaleString()}</span>
                  <span className={`text-xs font-medium ${source.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {source.change}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-primary-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${source.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Comportement */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Comportement
        </h3>
        
        {/* Métriques de comportement */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Durée moyenne</p>
            <p className="text-base font-bold text-gray-900">{trafficData.behavior.avgSessionDuration}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Taux de rebond</p>
            <p className="text-base font-bold text-gray-900">{trafficData.behavior.bounceRate}%</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Pages/session</p>
            <p className="text-base font-bold text-gray-900">{trafficData.behavior.pagesPerSession}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Nouveaux visiteurs</p>
            <p className="text-base font-bold text-gray-900">{trafficData.behavior.newVisitors}%</p>
          </div>
        </div>

        {/* Pages les plus visitées */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Pages les plus visitées</h4>
          <div className="space-y-2">
            {trafficData.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-xs">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-900">{page.title}</p>
                    <p className="text-xs text-gray-500">{page.path}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">{page.views.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">vues</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">{page.avgTime}</p>
                    <p className="text-xs text-gray-500">temps moyen</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour l'onglet Trafic & Conversions (fusionné et simplifié)
function TrafficAndConversionsTabContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="space-y-6">
      {/* Section 1: Vue d'ensemble */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Vue d'ensemble
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Visiteurs</p>
            <p className="text-xl font-bold text-gray-900">{trafficData.visitors.thisMonth.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">{trafficData.visitors.change}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Pages vues</p>
            <p className="text-xl font-bold text-gray-900">{trafficData.pageViews.thisMonth.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">{trafficData.pageViews.change}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Formulaires</p>
            <p className="text-xl font-bold text-gray-900">{conversionsData.forms.thisMonth}</p>
            <p className="text-xs text-green-600 mt-1">{conversionsData.forms.change}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Taux conversion</p>
            <p className="text-xl font-bold text-gray-900">{conversionsData.conversionRates.overall}%</p>
            <p className="text-xs text-green-600 mt-1">{conversionsData.conversionRates.change}</p>
          </div>
        </div>
      </div>

      {/* Section 2: Sources & Comportement */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Sources & Comportement
        </h3>
        
        {/* Sources de trafic */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Sources de trafic</h4>
          <div className="space-y-2">
            {trafficData.sources.map((source, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-700">{source.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-900">{source.visits.toLocaleString()}</span>
                    <span className={`text-xs font-medium ${source.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {source.change}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-primary-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comportement */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Comportement</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Durée moyenne</p>
              <p className="text-base font-bold text-gray-900">{trafficData.behavior.avgSessionDuration}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Taux de rebond</p>
              <p className="text-base font-bold text-gray-900">{trafficData.behavior.bounceRate}%</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Pages/session</p>
              <p className="text-base font-bold text-gray-900">{trafficData.behavior.pagesPerSession}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Nouveaux</p>
              <p className="text-base font-bold text-gray-900">{trafficData.behavior.newVisitors}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Conversions */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Conversions
        </h3>
        
        {/* Événements trackés */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Événements trackés</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {conversionsData.events.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    event.trend === "up" ? "bg-green-50" : "bg-red-50"
                  }`}>
                    {event.trend === "up" ? (
                      <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : (
                      <svg className="w-2.5 h-2.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-900">{event.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{event.count}</p>
                  <p className={`text-xs font-medium ${event.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {event.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaires récents */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Formulaires récents</h4>
          <div className="space-y-2">
            {conversionsData.forms.recent.slice(0, 3).map((form, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">{form.name}</p>
                    <p className="text-xs text-gray-500">{form.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-gray-900">{form.date}</p>
                  <p className="text-xs text-gray-500">{form.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour l'onglet Contenu
function ContentTabContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="space-y-6">
      {/* Section 1: Pages populaires */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Pages populaires
        </h3>
        <div className="space-y-2">
          {contentData.topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-xs">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">{page.title}</p>
                  <p className="text-xs text-gray-500">{page.path}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">{page.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">vues</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">{page.avgTime}</p>
                  <p className="text-xs text-gray-500">temps</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">{page.bounceRate}%</p>
                  <p className="text-xs text-gray-500">rebond</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-green-600">{page.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Portfolio */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Portfolio
        </h3>
        
        {/* Statistiques générales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Vues totales</p>
            <p className="text-xl font-bold text-gray-900">{contentData.portfolio.totalViews}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Projets</p>
            <p className="text-xl font-bold text-gray-900">{contentData.portfolio.totalProjects}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Moyenne/projet</p>
            <p className="text-xl font-bold text-gray-900">{contentData.portfolio.avgViewsPerProject}</p>
          </div>
        </div>

        {/* Top projets */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Projets les plus vus</h4>
          <div className="space-y-2">
            {contentData.portfolio.topProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-900">{project.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">{project.views}</p>
                    <p className="text-xs text-gray-500">vues</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">{project.interactions}</p>
                    <p className="text-xs text-gray-500">interactions</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-green-600">{project.change}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Services */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Services
        </h3>
        
        {/* Statistiques générales */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 inline-block">
            <p className="text-xs text-gray-600 mb-1">Interactions totales</p>
            <p className="text-xl font-bold text-gray-900">{contentData.services.totalInteractions}</p>
          </div>
        </div>

        {/* Top services */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Services les plus consultés</h4>
          <div className="space-y-2">
            {contentData.services.topServices.map((service, index) => (
              <div key={index} className="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-900">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900">{service.views}</p>
                      <p className="text-xs text-gray-500">vues</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900">{service.clicks}</p>
                      <p className="text-xs text-gray-500">clics</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900">{service.conversion}%</p>
                      <p className="text-xs text-gray-500">conversion</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-green-600">{service.change}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1">
                  <div
                    className="bg-primary-600 h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(service.views / contentData.services.topServices[0].views) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour l'onglet Audience
function AudienceTabContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="space-y-6">
      {/* Section 1: Géolocalisation */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Géolocalisation
        </h3>
        
        {/* Pays */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Pays</h4>
          <div className="space-y-2">
            {audienceData.geolocation.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-700">{item.country}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-900">{item.visits.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">({item.percentage}%)</span>
                    <span className={`text-xs font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-primary-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Villes */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Villes principales</h4>
          <div className="space-y-2">
            {audienceData.cities.map((city, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-900">{city.city}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">{city.visits.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">visites</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">{city.percentage}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Appareils */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Appareils
        </h3>
        
        {/* Types d'appareils */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Types d'appareils</h4>
          <div className="space-y-2">
            {audienceData.devices.map((device, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-700">{device.type}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-900">{device.visits.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">({device.percentage}%)</span>
                    <span className={`text-xs font-medium ${device.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {device.change}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-primary-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigateurs */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Navigateurs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {audienceData.browsers.map((browser, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-900">{browser.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">{browser.visits.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">({browser.percentage}%)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Démographie */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Démographie
        </h3>
        
        {/* Tranches d'âge */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Tranches d'âge</h4>
          <div className="space-y-2">
            {audienceData.demographics.ageGroups.map((age, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-700">{age.range} ans</span>
                  <span className="text-xs font-bold text-gray-900">{age.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-primary-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${age.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Genre */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Répartition par genre</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {audienceData.demographics.gender.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">{item.type}</p>
                <p className="text-xl font-bold text-gray-900">{item.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour l'onglet Paramètres
function SettingsTabContent({ theme, setTheme, isDark }: { theme: "light" | "dark" | "auto"; setTheme: (theme: "light" | "dark" | "auto") => void; isDark: boolean }) {
  const [settings, setSettings] = useState({
    notifications: true,
    autoRefresh: true,
    refreshInterval: 30,
  });

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    if (newPassword.length < 6) {
      setPasswordError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas");
      return;
    }

    // Simulation de changement de mot de passe
    setPasswordSuccess("Mot de passe modifié avec succès");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="space-y-6">
      {/* Section 1: Configuration */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <div className="mb-4">
          <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
            Configuration
          </h3>
          <p className="text-xs text-gray-600">
            Personnalisez l'apparence et le comportement de votre dashboard pour une expérience optimale.
          </p>
        </div>
        
        <div className="space-y-4">
          {/* Thème */}
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900 mb-1">Thème</p>
                <p className="text-xs text-gray-500 mb-2">
                  Choisissez l'apparence du dashboard selon vos préférences visuelles
                </p>
                <p className="text-xs text-gray-400 italic">
                  • Clair : Interface lumineuse pour un usage en journée<br />
                  • Sombre : Interface sombre pour réduire la fatigue oculaire<br />
                  • Automatique : S'adapte selon l'heure de la journée
                </p>
              </div>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as "light" | "dark" | "auto")}
                className={`text-xs px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ml-4 ${
                  isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                }`}
              >
                <option value="light">Clair</option>
                <option value="dark">Sombre</option>
                <option value="auto">Automatique</option>
              </select>
            </div>
          </div>

          {/* Notifications */}
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900 mb-1">Notifications par email</p>
                <p className="text-xs text-gray-500 mb-2">
                  Recevez des alertes automatiques lorsque des événements importants se produisent
                </p>
                <p className="text-xs text-gray-400 italic">
                  Vous serez notifié par email en cas de : nouveaux formulaires de contact, pics de trafic inhabituels, erreurs techniques, etc.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => handleSettingChange("notifications", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>

          {/* Actualisation automatique */}
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900 mb-1">Actualisation automatique</p>
                <p className="text-xs text-gray-500 mb-2">
                  Les statistiques se mettent à jour automatiquement sans avoir à recharger la page
                </p>
                <p className="text-xs text-gray-400 italic">
                  Utile pour surveiller le trafic en temps réel. Désactivez pour économiser les ressources si vous consultez occasionnellement.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={settings.autoRefresh}
                  onChange={(e) => handleSettingChange("autoRefresh", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>

          {/* Intervalle de rafraîchissement */}
          {settings.autoRefresh && (
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900 mb-1">Intervalle de rafraîchissement</p>
                  <p className="text-xs text-gray-500 mb-2">
                    Définissez la fréquence de mise à jour des données
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    • 15-30 secondes : Pour un suivi en temps réel (consomme plus de ressources)<br />
                    • 1-5 minutes : Pour un suivi régulier sans surcharger le système
                  </p>
                </div>
                <select
                  value={settings.refreshInterval}
                  onChange={(e) => handleSettingChange("refreshInterval", parseInt(e.target.value))}
                  className="text-xs px-3 py-1.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-primary-600 focus:border-transparent ml-4"
                >
                  <option value="15">15 secondes</option>
                  <option value="30">30 secondes</option>
                  <option value="60">1 minute</option>
                  <option value="300">5 minutes</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Intégrations */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <div className="mb-4">
          <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
            Intégrations
          </h3>
          <p className="text-xs text-gray-600">
            Gérez vos connexions aux outils de tracking et d'analyse pour centraliser toutes vos données.
          </p>
        </div>
        
        <div className="space-y-3">
          {/* Google Analytics */}
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">Google Analytics</p>
                  <p className="text-xs text-gray-500 mb-1">Outil d'analyse de trafic web</p>
                  <p className="text-xs text-gray-400 italic">
                    Collecte et analyse les données de visiteurs de votre site. Le dashboard affiche un résumé, mais vous pouvez accéder à Google Analytics pour des analyses détaillées, rapports personnalisés et données historiques complètes.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Connecté</span>
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ouvrir
                </a>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                ID de mesure: <span className="font-medium">{process.env.NEXT_PUBLIC_GA_ID || "Non configuré"}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Cet ID permet au site de communiquer avec Google Analytics pour collecter les statistiques.
              </p>
            </div>
          </div>

          {/* Autres intégrations */}
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">Autres outils</p>
                  <p className="text-xs text-gray-500 mb-1">Intégrations supplémentaires</p>
                  <p className="text-xs text-gray-400 italic">
                    D'autres outils de tracking pourront être ajoutés ici à l'avenir (Facebook Pixel, outils CRM, etc.) pour centraliser toutes vos données marketing au même endroit.
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 ml-4">Bientôt disponible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Sécurité */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
          Sécurité
        </h3>
        
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-xs font-medium text-gray-700 mb-1.5">
              Mot de passe actuel
            </label>
            <input
              type="password"
              id="currentPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Entrez votre mot de passe actuel"
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-xs font-medium text-gray-700 mb-1.5">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Minimum 6 caractères"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1.5">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Répétez le nouveau mot de passe"
            />
          </div>

          {passwordError && (
            <div className="text-xs text-red-600 bg-red-50 p-2 rounded-lg">
              {passwordError}
            </div>
          )}

          {passwordSuccess && (
            <div className="text-xs text-green-600 bg-green-50 p-2 rounded-lg">
              {passwordSuccess}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold text-xs hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
          >
            Modifier le mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("light");
  const [isDark, setIsDark] = useState(false);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "kitty-octa-2025";

  // Gérer le thème
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("admin_theme") as "light" | "dark" | "auto" | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("admin_theme", theme);
      
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else if (theme === "auto") {
        const hour = new Date().getHours();
        if (hour >= 20 || hour < 6) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  // Déterminer le thème actuel pour les classes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDark = () => {
        if (theme === "dark") {
          setIsDark(true);
        } else if (theme === "auto") {
          const hour = new Date().getHours();
          setIsDark(hour >= 20 || hour < 6);
        } else {
          setIsDark(false);
        }
      };
      checkDark();
      if (theme === "auto") {
        const interval = setInterval(checkDark, 60000); // Vérifier chaque minute
        return () => clearInterval(interval);
      }
    }
  }, [theme]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      if (typeof window !== "undefined") {
        sessionStorage.setItem("admin_authenticated", "true");
      }
    } else {
      setError("Mot de passe incorrect");
    }
  };

  useEffect(() => {
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
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 relative">
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
              Dashboard de surveillance
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
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
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Header Admin */}
      <header className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/e6de5d03-0703-4070-a882-7a88bb7bdf60-removebg-preview.png"
                  alt="Kitty-Octa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className={`font-serif text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Dashboard Admin
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className={`text-sm ${isDark ? "text-gray-300 hover:text-primary-400" : "text-gray-600 hover:text-primary-600"} transition-colors`}
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
                className={`text-sm ${isDark ? "text-gray-300 hover:text-red-400" : "text-gray-600 hover:text-red-600"} transition-colors`}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <section className={`py-4 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {adminTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 text-xs ${
                  activeTab === index
                    ? "bg-primary-600 text-white shadow-md scale-105"
                    : isDark
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Tab Content */}
      <section className={`py-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {activeTab === 0 ? (
             // Onglet Vue d'ensemble
             <OverviewTabContent isDark={isDark} />
           ) : activeTab === 1 ? (
             // Onglet Trafic & Conversions - Fusionné et simplifié
             <TrafficAndConversionsTabContent isDark={isDark} />
           ) : activeTab === 2 ? (
             // Onglet Contenu - Développé
             <ContentTabContent isDark={isDark} />
           ) : activeTab === 3 ? (
             // Onglet Audience - Développé
             <AudienceTabContent isDark={isDark} />
           ) : activeTab === 4 ? (
             // Onglet Paramètres - Développé
             <SettingsTabContent theme={theme} setTheme={setTheme} isDark={isDark} />
           ) : (
            // Autres onglets - Page vierge
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">{adminTabs[activeTab].icon}</div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {adminTabs[activeTab].title}
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Cette section sera développée avec 3 sections dédiées
                </p>

                {/* Aperçu des 3 sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {adminTabs[activeTab].sections.map((section, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
