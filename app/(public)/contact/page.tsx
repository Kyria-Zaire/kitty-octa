"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  type ContactFormData,
} from "@/lib/validations/contact";

/* ── Steps Definition ── */

const steps = [
  { id: 1, title: "Identité", description: "Vos coordonnées" },
  { id: 2, title: "Événement", description: "Détails du projet" },
  { id: 3, title: "Message", description: "Votre vision" },
] as const;

/* ── Event Type Options ── */

const eventTypeOptions = [
  { value: "", label: "Sélectionnez un type" },
  { value: "wedding", label: "Mariage" },
  { value: "corporate", label: "Événement professionnel" },
  { value: "private", label: "Événement privé" },
  { value: "cake", label: "Gâteau à étages / Pâtisserie" },
  { value: "decoration", label: "Décoration" },
  { value: "training", label: "Formation" },
  { value: "other", label: "Autre" },
] as const;

const budgetOptions = [
  { value: "", label: "Sélectionnez une fourchette" },
  { value: "<1000", label: "Moins de 1 000\u202F\u20AC" },
  { value: "1000-3000", label: "1 000\u202F\u20AC \u2013 3 000\u202F\u20AC" },
  { value: "3000-5000", label: "3 000\u202F\u20AC \u2013 5 000\u202F\u20AC" },
  { value: "5000-10000", label: "5 000\u202F\u20AC \u2013 10 000\u202F\u20AC" },
  { value: ">10000", label: "Plus de 10 000\u202F\u20AC" },
] as const;

/**
 * Contact Page — Multi-step form with react-hook-form + Zod
 *
 * Step 1: Identity (name, email, phone)
 * Step 2: Event details (type, date, guests, budget)
 * Step 3: Message
 */
export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: undefined,
      eventDate: "",
      guestCount: "",
      budget: "",
      message: "",
    },
  });

  /* ── Step Validation ── */

  const validateStep = async (): Promise<boolean> => {
    if (currentStep === 1) {
      const values = getValues();
      const result = step1Schema.safeParse(values);
      if (!result.success) {
        await trigger(["name", "email", "phone"]);
        return false;
      }
      return true;
    }
    if (currentStep === 2) {
      const values = getValues();
      const result = step2Schema.safeParse(values);
      if (!result.success) {
        await trigger(["eventType", "eventDate", "guestCount", "budget"]);
        return false;
      }
      return true;
    }
    if (currentStep === 3) {
      const values = getValues();
      const result = step3Schema.safeParse(values);
      if (!result.success) {
        await trigger(["message"]);
        return false;
      }
      return true;
    }
    return false;
  };

  const goNext = async () => {
    const valid = await validateStep();
    if (valid && currentStep < 3) {
      setCurrentStep((s) => s + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  /* ── Form Submission ── */

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.error || "Une erreur est survenue.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setServerError("Impossible de contacter le serveur. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success State ── */

  if (isSuccess) {
    return (
      <>
        <PageHero
          variant="compact"
          title="Contactez-nous"
          subtitle="Discutons de votre projet et créons ensemble un événement inoubliable."
          backgroundImage="https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=1170&auto=format&fit=crop"
          backgroundAlt="Contact OctaviEvent"
        />
        <SectionWrapper variant="ivory" size="lg">
          <div className="mx-auto max-w-lg text-center motion-safe:animate-fade-in-up">
            {/* Checkmark */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <svg
                className="h-10 w-10 text-success"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-charcoal md:text-heading-1">
              Merci pour votre confiance
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-taupe">
              Votre demande a bien été envoyée. Nous vous répondrons sous 48 heures
              ouvrables. En attendant, n&apos;hésitez pas à consulter notre portfolio.
            </p>
            <Divider variant="ornamental" className="mx-auto my-8 max-w-xs" />
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="primary" href="/portfolio">
                Voir le portfolio
              </Button>
              <Button variant="ghost" href="/">
                Retour à l&apos;accueil
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </>
    );
  }

  /* ── Main Form ── */

  return (
    <>
      <PageHero
        variant="compact"
        title="Contactez-nous"
        subtitle="Discutons de votre projet et créons ensemble un événement inoubliable."
        backgroundImage="https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=1170&auto=format&fit=crop"
        backgroundAlt="Contact OctaviEvent"
      />

      <SectionWrapper variant="ivory" size="lg">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          {/* ── Left Column: Info ── */}
          <aside className="lg:col-span-2">
            <h2 className="font-serif text-xl font-bold text-charcoal md:text-heading-2">
              Parlons de votre projet
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-taupe">
              Remplissez le formulaire ci-contre et nous vous répondrons sous 48 heures.
              Vous pouvez également nous contacter directement.
            </p>

            <Divider variant="default" className="my-6" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <a href="mailto:kitty-octa@outlook.fr" className="text-sm text-taupe transition-colors hover:text-gold">
                    kitty-octa@outlook.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-charcoal">WhatsApp</p>
                  <a href="https://wa.me/33761796628" target="_blank" rel="noopener noreferrer" className="text-sm text-taupe transition-colors hover:text-gold">
                    +33 7 61 79 66 28
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-charcoal">Instagram</p>
                  <a href="https://www.instagram.com/kitty__octa" target="_blank" rel="noopener noreferrer" className="text-sm text-taupe transition-colors hover:text-gold">
                    @kitty__octa
                  </a>
                </div>
              </li>
            </ul>
          </aside>

          {/* ── Right Column: Form ── */}
          <div className="lg:col-span-3">
            {/* Progress Indicator */}
            <nav aria-label="Étapes du formulaire" className="mb-8">
              <ol className="flex items-center">
                {steps.map((step, index) => (
                  <li key={step.id} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300",
                          currentStep > step.id
                            ? "bg-success text-white"
                            : currentStep === step.id
                              ? "bg-charcoal text-white shadow-sm"
                              : "bg-beige text-taupe"
                        )}
                        aria-current={currentStep === step.id ? "step" : undefined}
                      >
                        {currentStep > step.id ? (
                          <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          step.id
                        )}
                      </div>
                      <span className={cn(
                        "mt-1.5 text-xs font-medium",
                        currentStep >= step.id ? "text-charcoal" : "text-taupe-light"
                      )}>
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "h-0.5 flex-1 rounded transition-all duration-300",
                          currentStep > step.id ? "bg-success" : "bg-beige"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Form Card */}
            <div className="rounded-md border border-gold/10 bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-1 font-serif text-lg font-bold text-charcoal">
                {steps[currentStep - 1].title}
              </h3>
              <p className="mb-6 text-sm text-taupe">
                {steps[currentStep - 1].description}
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Formulaire de contact"
              >
                {/* ── Step 1: Identity ── */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <Input
                      label="Nom complet"
                      placeholder="Votre nom"
                      error={errors.name?.message}
                      {...register("name")}
                      aria-required="true"
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="votre@email.com"
                      error={errors.email?.message}
                      {...register("email")}
                      aria-required="true"
                    />
                    <Input
                      label="Téléphone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      hint="Optionnel"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </div>
                )}

                {/* ── Step 2: Event Details ── */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="eventType"
                        className="mb-1.5 block text-sm font-medium text-charcoal"
                      >
                        Type d&apos;événement
                      </label>
                      <select
                        id="eventType"
                        {...register("eventType")}
                        className={cn(
                          "w-full rounded-md border bg-ivory px-4 py-2.5 text-sm text-charcoal transition-all duration-200",
                          "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30",
                          errors.eventType
                            ? "border-error focus:border-error focus:ring-error/30"
                            : "border-gold/20"
                        )}
                        aria-required="true"
                        aria-invalid={!!errors.eventType}
                        aria-describedby={errors.eventType ? "eventType-error" : undefined}
                      >
                        {eventTypeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p id="eventType-error" className="mt-1 text-xs text-error" role="alert">
                          {errors.eventType.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Date prévue"
                        type="date"
                        hint="Optionnel"
                        error={errors.eventDate?.message}
                        {...register("eventDate")}
                      />
                      <Input
                        label="Nombre d&apos;invités"
                        type="number"
                        placeholder="Ex: 100"
                        hint="Optionnel"
                        error={errors.guestCount?.message}
                        {...register("guestCount")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-1.5 block text-sm font-medium text-charcoal"
                      >
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        {...register("budget")}
                        className="w-full rounded-md border border-gold/20 bg-ivory px-4 py-2.5 text-sm text-charcoal transition-all duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1 text-xs text-taupe-light">Optionnel</p>
                    </div>
                  </div>
                )}

                {/* ── Step 3: Message ── */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <Textarea
                      label="Décrivez votre projet"
                      placeholder="Parlez-nous de votre événement, vos envies, votre vision\u2026"
                      rows={7}
                      error={errors.message?.message}
                      {...register("message")}
                      aria-required="true"
                    />

                    {/* Summary */}
                    <div className="rounded-md bg-beige p-4">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-taupe">
                        Récapitulatif
                      </h4>
                      <dl className="space-y-1 text-sm text-taupe">
                        <div className="flex justify-between">
                          <dt>Nom</dt>
                          <dd className="font-medium text-charcoal">{getValues("name") || "\u2014"}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt>Email</dt>
                          <dd className="font-medium text-charcoal">{getValues("email") || "\u2014"}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt>Type</dt>
                          <dd className="font-medium text-charcoal">
                            {eventTypeOptions.find((o) => o.value === getValues("eventType"))?.label || "\u2014"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                )}

                {/* ── Server Error ── */}
                {serverError && (
                  <div className="mt-4 rounded-md bg-error/10 p-3 text-sm text-error" role="alert">
                    {serverError}
                  </div>
                )}

                {/* ── Navigation Buttons ── */}
                <div className="mt-6 flex items-center justify-between border-t border-gold/10 pt-6">
                  {currentStep > 1 ? (
                    <Button type="button" variant="ghost" onClick={goPrev}>
                      &larr; Précédent
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <Button type="button" variant="primary" onClick={goNext}>
                      Suivant &rarr;
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Envoyer ma demande
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
