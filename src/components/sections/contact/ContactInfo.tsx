"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

const infos = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "+261 XX XX XXX XX",
    description:
      "Disponible du lundi au vendredi",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@conformind.mg",
    description:
      "Réponse sous 24 heures",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Antananarivo, Madagascar",
    description:
      "Interventions nationales et internationales",
  },
  {
    icon: Clock3,
    title: "Horaires",
    value: "08h00 - 17h00",
    description:
      "Du lundi au vendredi",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              rounded-full

              bg-[#2A9F8E]/10

              px-4
              py-2

              text-sm
              font-semibold

              text-[#2A9F8E]
            "
          >
            Nos coordonnées
          </span>

          <h2
            className="
              mt-6

              text-4xl
              lg:text-5xl

              font-bold

              text-slate-900
            "
          >
            Restons en contact
          </h2>

          <p
            className="
              mt-5

              text-lg

              leading-8

              text-slate-600
            "
          >
            Plusieurs moyens sont à votre disposition
            pour échanger avec notre équipe.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-16

            grid
            gap-8

            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {infos.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group

                  rounded-[28px]

                  border
                  border-slate-200

                  bg-white

                  p-8

                  text-center

                  shadow-sm

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#2A9F8E]/30
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    mx-auto

                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#2A9F8E]/10

                    transition-all
                    duration-300

                    group-hover:bg-[#2A9F8E]
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-[#2A9F8E]

                      transition-all
                      duration-300

                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6

                    text-xl
                    font-bold

                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4

                    font-semibold

                    text-[#2A9F8E]
                  "
                >
                  {item.value}
                </p>

                <p
                  className="
                    mt-3

                    text-sm

                    leading-6

                    text-slate-500
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}