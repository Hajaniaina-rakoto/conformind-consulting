"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
} from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-24
        lg:py-32
      "
    >
      <div className="container-custom">
        <div
          className="
            relative
            overflow-hidden

            rounded-[40px]

            bg-gradient-to-r
            from-[#2A9F8E]
            via-[#31AA99]
            to-[#35B3A1]

            px-8
            py-16

            lg:px-16
            lg:py-20

            text-center
          "
        >
          {/* Decorations */}

          <div
            className="
              absolute
              -top-24
              -right-24

              h-64
              w-64

              rounded-full

              bg-white/10

              blur-2xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-24

              h-72
              w-72

              rounded-full

              bg-white/10

              blur-3xl
            "
          />

          {/* Content */}

          <div className="relative z-10">
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
              Prêt à passer à l'action ?
            </span>

            <h2
              className="
                mx-auto
                mt-6

                max-w-4xl

                text-3xl
                md:text-5xl

                font-bold

                leading-tight

                text-white
              "
            >
              Donnez à votre organisation
              les moyens d'atteindre ses
              objectifs de conformité,
              qualité et performance
            </h2>

            <p
              className="
                mx-auto
                mt-6

                max-w-3xl

                text-lg
                leading-relaxed

                text-white/90
              "
            >
              Que ce soit pour une formation,
              un audit, un accompagnement à la
              certification ou l'amélioration
              de vos systèmes de management,
              notre équipe est prête à vous accompagner.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-10

                flex
                flex-col

                justify-center

                gap-4

                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-white

                  px-8
                  py-4

                  font-semibold

                  text-[#2A9F8E]

                  shadow-lg

                  transition-all
                  duration-300

                  hover:-translate-y-1
                "
              >
                Demander un accompagnement

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  border
                  border-white/25

                  bg-white/10

                  px-8
                  py-4

                  font-semibold

                  text-white

                  backdrop-blur-sm

                  transition-all
                  duration-300

                  hover:bg-white/20
                "
              >
                <Phone size={18} />

                Nous contacter
              </Link>
            </div>

            {/* Trust Indicators */}

            <div
              className="
                mt-12

                flex
                flex-wrap

                justify-center

                gap-8

                text-sm

                text-white/85
              "
            >
              <span>✓ Accompagnement personnalisé</span>
              <span>✓ Formateurs certifiés</span>
              <span>✓ Référentiels internationaux</span>
              <span>✓ Présence nationale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}