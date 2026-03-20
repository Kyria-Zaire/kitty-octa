import { z } from "zod";

/**
 * Contact Form — Zod Schema
 *
 * Shared between the API route (server-side validation)
 * and the client form (react-hook-form resolver).
 */

/* ── Step 1: Identity ── */

export const step1Schema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom ne doit pas dépasser 100 caractères."),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide."),
  phone: z
    .string()
    .regex(
      /^(\+33|0)[1-9](\d{2}){4}$/,
      "Veuillez entrer un numéro de téléphone français valide."
    )
    .optional()
    .or(z.literal("")),
});

/* ── Step 2: Event Details ── */

export const step2Schema = z.object({
  eventType: z
    .string()
    .min(1, "Veuillez sélectionner un type d'événement.")
    .refine(
      (value) =>
        [
          "wedding",
          "corporate",
          "private",
          "cake",
          "decoration",
          "training",
          "other",
          "Mariage",
          "Corporate",
          "Privé",
          "Prive",
          "Autre",
        ].includes(value),
      "Type d'événement non reconnu."
    ),
  eventDate: z
    .string()
    .optional()
    .or(z.literal("")),
  guestCount: z
    .string()
    .optional()
    .or(z.literal("")),
  budget: z
    .string()
    .optional()
    .or(z.literal("")),
});

/* ── Step 3: Message ── */

export const step3Schema = z.object({
  message: z
    .string()
    .min(20, "Votre message doit contenir au moins 20 caractères.")
    .max(5000, "Votre message ne doit pas dépasser 5 000 caractères."),
  rgpd: z
    .boolean()
    .default(true)
    .refine((value) => value === true, "Vous devez accepter le traitement RGPD."),
});

/* ── Full Contact Form Schema ── */

export const contactFormSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type ContactFormData = z.input<typeof contactFormSchema>;
