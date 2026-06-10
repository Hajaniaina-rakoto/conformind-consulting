"use client";

import {
  MapPin,
  Navigation,
  Building2,
} from "lucide-react";

export default function ContactMap() {
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
            Notre localisation
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
            Venez nous rencontrer
          </h2>

          <p
            className="
              mt-5

              text-lg

              leading-8

              text-slate-600
            "
          >
            Nous accompagnons nos clients partout
            à Madagascar et à l'international.
          </p>
        </div>

        <div
          className="
            mt-16

            grid
            gap-8

            lg:grid-cols-[380px_1fr]
          "
        >
          {/* Infos */}

          <div
            className="
              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-sm
            "
          >
            <div
              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-[#2A9F8E]/10
              "
            >
              <Building2
                size={28}
                className="text-[#2A9F8E]"
              />
            </div>

            <h3
              className="
                mt-6

                text-2xl
                font-bold

                text-slate-900
              "
            >
              ConforMind Consulting
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <MapPin
                  size={20}
                  className="
                    mt-1
                    text-[#2A9F8E]
                  "
                />

                <div>
                  <p className="font-semibold text-slate-900">
                    Adresse
                  </p>

                  <p className="mt-1 text-slate-600">
                    Antananarivo,
                    Madagascar
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Navigation
                  size={20}
                  className="
                    mt-1
                    text-[#2A9F8E]
                  "
                />

                <div>
                  <p className="font-semibold text-slate-900">
                    Zone d'intervention
                  </p>

                  <p className="mt-1 text-slate-600">
                    Madagascar • Afrique • International
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8

                inline-flex
                items-center

                rounded-xl

                bg-[#2A9F8E]

                px-5
                py-3

                font-semibold

                text-white

                transition-all
                duration-300

                hover:bg-[#248A7B]
              "
            >
              Ouvrir Google Maps
            </a>
          </div>

          {/* Map */}

          <div
            className="
              overflow-hidden

              rounded-[32px]

              border
              border-slate-200

              shadow-sm
            "
          >
            <iframe
              title="ConforMind Location"
              src="https://maps.google.com/maps?q=Antananarivo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="
                h-[500px]
                w-full
              "
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}