"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      {/* Background */}

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

      {/* Glow Effects */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0

            h-[400px]
            w-[400px]

            -translate-x-1/2

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            h-[250px]
            w-[250px]

            rounded-full

            bg-cyan-300/10

            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-0
            bottom-0

            h-[220px]
            w-[220px]

            rounded-full

            bg-white/5

            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">

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
          <span
            className="
              inline-flex

              rounded-full

              border
              border-white/20

              bg-white/10

              px-5
              py-2

              text-sm
              font-semibold

              text-white
            "
          >
            Construisons ensemble votre réussite
          </span>

          <h2
            className="
              mt-6

              text-4xl
              md:text-5xl
              lg:text-6xl

              font-bold

              leading-tight

              text-white
            "
          >
            Prêt à faire évoluer
            <br />
            votre organisation ?
          </h2>

          <p
            className="
              mx-auto
              mt-6

              max-w-3xl

              text-lg
              leading-8

              text-white/80
            "
          >
            ConforMind Consulting vous accompagne dans
            vos projets de conformité, certification,
            amélioration continue et développement
            des compétences.
          </p>

          {/* Actions */}

          <div
            className="
              mt-10

              flex
              flex-col
              items-center
              justify-center
              gap-4

              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                group

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
                hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)]
              "
            >
              Demander un accompagnement

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/services"
              className="
                inline-flex
                items-center
                gap-3

                rounded-2xl

                border
                border-white/20

                bg-white/5

                px-8
                py-4

                font-semibold

                text-white

                backdrop-blur-sm

                transition-all
                duration-300

                hover:bg-white/10
                hover:border-white/40
              "
            >
              <Phone size={18} />

              Découvrir nos services
            </Link>
          </div>

          {/* Bottom note */}

          <p
            className="
              mt-8

              text-sm

              text-white/60
            "
          >
            Réponse rapide • Accompagnement personnalisé • Expertise reconnue
          </p>

        </div>

      </div>
    </section>
  );
}