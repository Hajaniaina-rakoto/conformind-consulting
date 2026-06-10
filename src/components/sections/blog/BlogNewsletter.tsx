"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function BlogNewsletter() {
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

      {/* Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0

            h-[350px]
            w-[350px]

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
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">

        <div
          className="
            rounded-[40px]

            border
            border-white/10

            bg-white/10

            p-8
            md:p-12
            lg:p-16

            text-center

            backdrop-blur-xl
          "
        >
          {/* Icon */}

          <div
            className="
              mx-auto

              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-2xl

              bg-white/10
            "
          >
            <Mail
              size={30}
              className="text-white"
            />
          </div>

          {/* Title */}

          <h2
            className="
              mt-8

              text-4xl
              md:text-5xl

              font-bold

              text-white
            "
          >
            Recevez nos dernières publications
          </h2>

          {/* Description */}

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
            Inscrivez-vous à notre newsletter
            pour recevoir nos conseils,
            actualités et analyses sur la qualité,
            la conformité et la performance.
          </p>

          {/* Form */}

          <form
            className="
              mx-auto
              mt-10

              flex
              max-w-3xl

              flex-col
              gap-4

              sm:flex-row
            "
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              className="
                h-14
                flex-1

                rounded-2xl

                border
                border-white/10

                bg-white/10

                px-5

                text-white

                backdrop-blur-md

                outline-none

                placeholder:text-white/50

                focus:border-white/30
              "
            />

            <button
              type="submit"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-2xl

                bg-white

                px-8

                font-semibold

                text-[#2A9F8E]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)]
              "
            >
              S'abonner

              <ArrowRight size={18} />
            </button>
          </form>

          {/* Bottom text */}

          <p
            className="
              mt-6

              text-sm

              text-white/60
            "
          >
            Aucun spam • Désinscription à tout moment
          </p>

        </div>

      </div>
    </section>
  );
}