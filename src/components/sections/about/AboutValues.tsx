"use client";

import {
  HeartHandshake,
  Lightbulb,
  Trophy,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Engagement",
    description:
      "Nous nous impliquons pleinement dans chaque mission afin de garantir un accompagnement durable et des résultats mesurables.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "Nous visons les plus hauts standards de qualité dans nos prestations, nos méthodes et notre relation client.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "La transparence, l'éthique et la confidentialité sont au cœur de chacune de nos interventions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous privilégions des approches modernes et adaptées pour répondre aux défis actuels des organisations.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#2A9F8E]/10 px-4 py-2 text-sm font-semibold text-[#2A9F8E]">
            Nos valeurs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Les principes qui guident nos actions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Chaque mission menée par ConforMind repose sur des valeurs
            fortes qui garantissent confiance, professionnalisme et
            performance durable.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#2A9F8E]/30 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A9F8E]/10 transition-all duration-300 group-hover:bg-[#2A9F8E]">
                  <Icon
                    size={30}
                    className="text-[#2A9F8E] transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}