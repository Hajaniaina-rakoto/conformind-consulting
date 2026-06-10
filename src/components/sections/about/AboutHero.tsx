"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAF9] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2A9F8E]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A9F8E]/20 bg-[#2A9F8E]/5 px-5 py-2">
            <ShieldCheck
              size={16}
              className="text-[#2A9F8E]"
            />

            <span className="text-sm font-medium text-[#1A7A6A]">
              Conseil • Audit • Formation • Certification
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-4xl font-bold leading-tight text-[#0F172A] md:text-6xl">
            À propos de{" "}
            <span className="text-[#2A9F8E]">
              ConforMind Consulting
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Nous accompagnons les organisations dans leurs démarches
            de conformité, de performance et d'amélioration continue
            à travers des solutions adaptées, durables et orientées
            résultats.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#2A9F8E] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#248A7B]"
            >
              Demander un accompagnement

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#2A9F8E] hover:text-[#2A9F8E]"
            >
              Découvrir nos expertises
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}