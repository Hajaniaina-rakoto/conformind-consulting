"use client";

import {
  Award,
  BadgeCheck,
  Users,
  BriefcaseBusiness,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description:
      "Une maîtrise approfondie des référentiels internationaux et des meilleures pratiques sectorielles.",
  },
  {
    icon: ShieldCheck,
    title: "Approche personnalisée",
    description:
      "Chaque mission est adaptée aux réalités, aux contraintes et aux objectifs de votre organisation.",
  },
  {
    icon: Users,
    title: "Accompagnement humain",
    description:
      "Nous travaillons aux côtés de vos équipes pour assurer adhésion, montée en compétence et autonomie.",
  },
  {
    icon: TrendingUp,
    title: "Résultats durables",
    description:
      "Des solutions concrètes orientées amélioration continue et création de valeur.",
  },
];

const stats = [
  {
    value: "6",
    label: "Domaines d'expertise",
  },
  {
    value: "20+",
    label: "Référentiels maîtrisés",
  },
  {
    value: "100%",
    label: "Accompagnement personnalisé",
  },
];

export default function AboutWhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#2A9F8E]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#2A9F8E]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#2A9F8E]/10 px-4 py-2 text-sm font-semibold text-[#2A9F8E]">
            Pourquoi ConforMind ?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Un partenaire fiable pour vos projets de transformation
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nous combinons expertise, proximité et méthodologie
            rigoureuse afin de garantir des résultats concrets
            et durables.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">

          {/* Left */}
          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#2A9F8E]/30
                    hover:shadow-xl
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
                      transition-all
                      duration-300
                      group-hover:bg-[#2A9F8E]
                    "
                  >
                    <Icon
                      size={26}
                      className="
                        text-[#2A9F8E]
                        transition-all
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-gradient-to-br
              from-[#0F5F54]
              via-[#1B7A6D]
              to-[#2A9F8E]
              p-8
              text-white
            "
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <BriefcaseBusiness size={32} />
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                L'excellence au service de votre organisation
              </h3>

              <p className="mt-5 leading-8 text-white/80">
                Notre objectif est de transformer les exigences
                réglementaires et normatives en véritables leviers
                de performance et de croissance.
              </p>

              {/* Stats */}
              <div className="mt-10 space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      backdrop-blur-sm
                    "
                  >
                    <span className="text-white/80">
                      {stat.label}
                    </span>

                    <span className="text-2xl font-bold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#B7FFF3]
                "
              >
                <BadgeCheck size={18} />
                Expertise • Performance • Confiance
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}