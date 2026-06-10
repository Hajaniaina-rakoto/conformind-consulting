"use client";

import { Building2, Target, Users } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-[#2A9F8E]/10 px-4 py-2 text-sm font-semibold text-[#2A9F8E]">
              Notre histoire
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              Un partenaire engagé pour la conformité et la performance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ConforMind Consulting accompagne les entreprises,
              institutions et organisations dans leurs démarches de
              mise en conformité, d'amélioration continue et de
              développement durable.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Notre approche repose sur l'écoute, l'expertise terrain
              et la transmission des compétences afin de garantir des
              résultats durables et mesurables.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Building2
                size={34}
                className="text-[#2A9F8E]"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Expertise multisectorielle
              </h3>

              <p className="mt-3 text-slate-600">
                Une expérience couvrant plusieurs secteurs
                d'activité et référentiels internationaux.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Users
                size={34}
                className="text-[#2A9F8E]"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Accompagnement humain
              </h3>

              <p className="mt-3 text-slate-600">
                Une démarche collaborative impliquant les équipes
                pour assurer l'adhésion et la réussite des projets.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Target
                size={34}
                className="text-[#2A9F8E]"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Résultats concrets
              </h3>

              <p className="mt-3 text-slate-600">
                Des solutions pragmatiques orientées
                performance, conformité et amélioration continue.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}