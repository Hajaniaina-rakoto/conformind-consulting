"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormValues,
} from "@/validations/contact.schema";

import Button from "@/components/ui/button";

import Input from "@/components/ui/input";

import Label from "@/components/ui/label";

import Textarea from "@/components/ui/textarea";

export default function ContactForm() {
  const {
    register,

    handleSubmit,

    formState: { errors, isSubmitting },

    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(
    values: ContactFormValues
  ) {
    console.log(values);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">
            Nom complet
          </Label>

          <Input
            id="fullName"
            placeholder="Votre nom"
            error={errors.fullName?.message}
            {...register("fullName")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Adresse email
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="Votre email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            Téléphone
          </Label>

          <Input
            id="phone"
            placeholder="Votre numéro"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">
            Organisation
          </Label>

          <Input
            id="company"
            placeholder="Nom de l'organisation"
            error={errors.company?.message}
            {...register("company")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          Message
        </Label>

        <Textarea
          id="message"
          placeholder="Votre message..."
          error={errors.message?.message}
          {...register("message")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        isLoading={isSubmitting}
      >
        Envoyer le message
      </Button>
    </form>
  );
}