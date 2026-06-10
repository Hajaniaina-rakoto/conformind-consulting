import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom est requis"),

  email: z
    .email("Adresse email invalide"),

  phone: z
    .string()
    .min(8, "Numéro invalide"),

  company: z.string().optional(),

  message: z
    .string()
    .min(10, "Message trop court"),
});

export type ContactFormValues = z.infer<
  typeof contactSchema
>;