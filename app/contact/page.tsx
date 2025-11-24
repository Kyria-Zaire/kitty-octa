"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackFormSubmit } from "@/lib/analytics";

const steps = [
  { id: 1, title: "Infos", description: "Vos coordonnées" },
  { id: 2, title: "Événement", description: "Détails du projet" },
  { id: 3, title: "Message", description: "Votre vision" },
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Ici, vous pourriez ajouter la logique d'envoi du formulaire
      trackFormSubmit("Contact Form");
      alert("Merci pour votre message ! Nous vous contacterons sous peu.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name && formData.email;
    }
    if (currentStep === 2) {
      return formData.eventType;
    }
    if (currentStep === 3) {
      return formData.message;
    }
    return false;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden min-h-[250px] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Section Contact - Formulaire de devis pour vos événements organisés par Kitty-Octa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-primary-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-lg md:text-xl font-bold text-white mb-1.5 drop-shadow-lg">
            Contactez-nous
          </h1>
          <p className="text-xs text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discutons de votre projet et créons ensemble un événement inoubliable.
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-primary-600 text-white shadow-lg scale-105"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="mt-1.5 text-center">
                    <p
                      className={`text-xs font-semibold ${
                        currentStep >= step.id ? "text-primary-600" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-1.5 rounded transition-all duration-300 ${
                      currentStep > step.id ? "bg-primary-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-5">
              Demandez votre devis
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1: Infos */}
              {currentStep === 1 && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {/* Step 2: Événement */}
              {currentStep === 2 && (
                <>
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Type d'événement *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="wedding">Mariage</option>
                      <option value="corporate">Événement professionnel</option>
                      <option value="private">Événement privé</option>
                      <option value="cake">Layer Cake / Pâtisserie</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-xs font-semibold text-gray-700 mb-1.5"
                      >
                        Date prévue
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guestCount"
                        className="block text-xs font-semibold text-gray-700 mb-1.5"
                      >
                        Nombre d'invités
                      </label>
                      <input
                        type="number"
                        id="guestCount"
                        name="guestCount"
                        min="1"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="<1000">Moins de 1 000€</option>
                      <option value="1000-3000">1 000€ - 3 000€</option>
                      <option value="3000-5000">3 000€ - 5 000€</option>
                      <option value="5000-10000">5 000€ - 10 000€</option>
                      <option value=">10000">Plus de 10 000€</option>
                    </select>
                  </div>
                </>
              )}

              {/* Step 3: Message */}
              {currentStep === 3 && (
                <>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Parlez-nous de votre événement, vos envies, votre vision..."
                    />
                  </div>

                  {/* Contact Info Summary */}
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                    <h3 className="text-xs font-semibold text-gray-900 mb-2">Informations de contact</h3>
                    <div className="space-y-1.5 text-xs text-gray-600">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-primary-600 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a
                          href="mailto:mambuocta@jotmail.com"
                          className="hover:text-primary-600 transition-colors"
                        >
                          mambuocta@jotmail.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-primary-600 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a
                          href="tel:0761796628"
                          className="hover:text-primary-600 transition-colors"
                        >
                          07 61 79 66 28
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <a
                          href="https://wa.me/3361796628"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600 transition-colors"
                        >
                          WhatsApp
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <a
                          href="https://www.instagram.com/kitty_octa?igsh=ZGJnY3pteGtuYmZr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600 transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-2 rounded-full text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Précédent
                  </button>
                ) : (
                  <div></div>
                )}
                <button
                  type="submit"
                  disabled={!isStepValid()}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    isStepValid()
                      ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {currentStep < 3 ? "Suivant" : "Envoyer ma demande"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

