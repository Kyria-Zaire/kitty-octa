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
    .max(20, "Numéro de téléphone trop long.")
    .optional()
    .or(z.literal("")),
});

/* ── Step 2: Event Details ── */

export const step2Schema = z.object({
  eventType: z.enum(
    ["wedding", "corporate", "private", "cake", "decoration", "training", "other"],
    { message: "Veuillez sélectionner un type d\u2019événement." }
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
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(5000, "Votre message ne doit pas dépasser 5 000 caractères."),
});

/* ── Full Contact Form Schema ── */

export const contactFormSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type ContactFormData = z.infer<typeof contactFormSchema>;
