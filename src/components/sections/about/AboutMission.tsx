"use client";

import {
  Rocket,
  Eye,
  ShieldCheck,
} from "lucide-react";

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-20 lg:py-28">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#2A9F8E]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#5EDFD2] backdrop-blur-sm">
            Notre engagement
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Une vision durable de la conformité et de la performance
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Nous aidons les organisations à construire des systèmes
            performants, durables et alignés aux standards
            internationaux.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#2A9F8E]/50 hover:bg-white/10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#2A9F8E]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2A9F8E]/20" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A9F8E]/15">
                <Rocket
                  size={28}
                  className="text-[#5EDFD2]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Notre mission
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Accompagner les organisations dans leurs démarches
                qualité, sécurité, environnement et performance afin
                de garantir leur conformité et leur croissance durable.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#2A9F8E]/50 hover:bg-white/10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Eye
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Notre vision
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Devenir une référence en accompagnement stratégique
                et opérationnel en Afrique dans les domaines QHSE,
                conformité et développement durable.
              </p>
            </div>
          </div>

          {/* Engagement */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#2A9F8E]/50 hover:bg-white/10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/20" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10">
                <ShieldCheck
                  size={28}
                  className="text-emerald-300"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Notre engagement
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Fournir des solutions concrètes, personnalisées et
                orientées résultats tout en garantissant proximité,
                expertise et amélioration continue.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}