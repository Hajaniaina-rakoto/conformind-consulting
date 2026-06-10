"use client";

import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-36 pb-24 lg:pt-44 lg:pb-32">

      {/* Glow Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#2A9F8E]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}

          <span
            className="
              inline-flex

              rounded-full

              border
              border-white/10

              bg-white/5

              px-5
              py-2

              text-sm
              font-semibold

              text-[#5EDFD2]

              backdrop-blur-sm
            "
          >
            Ressources & Actualités
          </span>

          {/* Title */}

          <h1
            className="
              mt-8

              text-4xl
              md:text-5xl
              lg:text-7xl

              font-bold

              leading-tight

              text-white
            "
          >
            Le Blog
            <span className="block text-[#5EDFD2]">
              ConforMind
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8

              max-w-3xl

              text-lg
              md:text-xl

              leading-8

              text-slate-300
            "
          >
            Découvrez nos conseils, analyses et
            bonnes pratiques en qualité,
            conformité, sécurité, environnement
            et performance organisationnelle.
          </p>

          {/* Search Bar */}

          <div className="mx-auto mt-12 max-w-2xl">
            <div
              className="
                flex
                items-center

                rounded-2xl

                border
                border-white/10

                bg-white/10

                px-5
                py-4

                backdrop-blur-xl
              "
            >
              <Search
                size={20}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Rechercher un article..."
                className="
                  ml-4
                  w-full

                  bg-transparent

                  text-white

                  outline-none

                  placeholder:text-slate-400
                "
              />
            </div>
          </div>

          {/* Quick Stats */}

          <div
            className="
              mt-14

              flex
              flex-wrap

              items-center
              justify-center

              gap-8
            "
          >
            <div>
              <p className="text-3xl font-bold text-white">
                50+
              </p>

              <p className="text-sm text-slate-400">
                Articles
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                6
              </p>

              <p className="text-sm text-slate-400">
                Domaines
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                100%
              </p>

              <p className="text-sm text-slate-400">
                Expertise
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}