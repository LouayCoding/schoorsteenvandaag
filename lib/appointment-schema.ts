import { z } from "zod";

/** Gedeeld tussen client-formulier en API-route. */
export const appointmentSchema = z.object({
  naam: z
    .string()
    .trim()
    .min(2, "Vul uw naam in")
    .max(100, "Naam is te lang"),
  email: z
    .string()
    .trim()
    .email("Vul een geldig e-mailadres in")
    .max(200),
  telefoon: z
    .string()
    .trim()
    .regex(/^[\d\s+()-]{8,20}$/, "Vul een geldig telefoonnummer in"),
  postcode: z
    .string()
    .trim()
    .regex(/^\d{4}\s?[a-zA-Z]{2}$/, "Vul een geldige postcode in (1234 AB)"),
  huisnummer: z
    .string()
    .trim()
    .min(1, "Vul uw huisnummer in")
    .max(10, "Huisnummer is te lang"),
  opmerking: z.string().trim().max(1000, "Opmerking is te lang").optional().or(z.literal("")),
  stad: z.string().trim().max(100).optional(),
  /** Honeypot — mensen laten dit leeg; bots vullen het in. */
  website: z.string().max(200).optional(),
});

export type AppointmentData = z.infer<typeof appointmentSchema>;
