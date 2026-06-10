"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-[#0F5F54]
          via-[#1B7A6D]
          to-[#2A9F8E]
        "
      />

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <div
          className="
            rounded-[40px]

            border
            border-white/10

            bg-white/10

            p-10
            md:p-14

            text-center

            backdrop-blur-xl
          "
        >
          <h2
            className="
              text-4xl
              md:text-5xl

              font-bold

              text-white
            "
          >
            Transformons vos défis
            en opportunités
          </h2>

          <p
            className="
              mx-auto
              mt-6

              max-w-2xl

              text-lg

              leading-8

              text-white/80
            "
          >
            Notre équipe est prête à vous accompagner
            dans vos projets de qualité, conformité,
            certification et amélioration continue.
          </p>

          <Link
            href="/services"
            className="
              mt-8

              inline-flex
              items-center
              gap-3

              rounded-2xl

              bg-white

              px-8
              py-4

              font-semibold

              text-[#2A9F8E]

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >
            Découvrir nos services

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}