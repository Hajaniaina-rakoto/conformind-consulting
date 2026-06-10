"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Award,
  Briefcase,
  FileCheck,
  Lightbulb,
  Users,
  TrendingUp,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description:
      "Consultants expérimentés et certifiés sur les référentiels HACCP, ISO 9001, 14001, 45001, 22000, RSE, ESG et filières agricoles.",
    color: { bg: "bg-[#EAF7F4]", text: "text-[#2A9F8E]" },
  },
  {
    icon: Briefcase,
    title: "Cas pratiques terrain",
    description:
      "Chaque formation s'appuie sur des exercices et études de cas issus de situations réelles rencontrées en entreprise à Madagascar et à l'international.",
    color: { bg: "bg-[#EBF4FD]", text: "text-[#2563EB]" },
  },
  {
    icon: Lightbulb,
    title: "Outils immédiatement applicables",
    description:
      "Vous repartez avec des méthodes, modèles et outils opérationnels à déployer dès le lendemain dans votre organisation.",
    color: { bg: "bg-[#FEF9EC]", text: "text-[#B45309]" },
  },
  {
    icon: FileCheck,
    title: "Attestation officielle",
    description:
      "Une attestation de participation remise à chaque participant à l'issue de la formation, valorisable sur votre CV ou dossier professionnel.",
    color: { bg: "bg-[#F3F0FE]", text: "text-[#7C3AED]" },
  },
  {
    icon: Users,
    title: "Groupes restreints",
    description:
      "Sessions en petits groupes pour favoriser les échanges, le suivi individuel et une pédagogie vraiment active.",
    color: { bg: "bg-[#EAF7F4]", text: "text-[#2A9F8E]" },
  },
  {
    icon: TrendingUp,
    title: "Montée en compétences durable",
    description:
      "Nos formations s'inscrivent dans une logique d'autonomie : vos équipes progressent et restent performantes bien après la session.",
    color: { bg: "bg-[#FEF9EC]", text: "text-[#B45309]" },
  },
  {
    icon: ShieldCheck,
    title: "Compréhension des réalités locales",
    description:
      "Nous allions expertise technique internationale et connaissance approfondie du contexte malgache pour des solutions vraiment adaptées.",
    color: { bg: "bg-[#EBF4FD]", text: "text-[#2563EB]" },
  },
  {
    icon: Handshake,
    title: "Accès au réseau ConforMind",
    description:
      "Rejoignez une communauté de professionnels et d'étudiants QHSE accompagnés par ConforMind, et bénéficiez de conseils personnalisés.",
    color: { bg: "bg-[#F3F0FE]", text: "text-[#7C3AED]" },
  },
];

export default function TrainingBenefits() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes tbCardIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tb-card { opacity: 0; }
        .tb-card.visible { animation: tbCardIn 0.5s ease forwards; }
        .tb-card.visible:nth-child(1) { animation-delay: 0.05s; }
        .tb-card.visible:nth-child(2) { animation-delay: 0.12s; }
        .tb-card.visible:nth-child(3) { animation-delay: 0.19s; }
        .tb-card.visible:nth-child(4) { animation-delay: 0.26s; }
        .tb-card.visible:nth-child(5) { animation-delay: 0.33s; }
        .tb-card.visible:nth-child(6) { animation-delay: 0.40s; }
        .tb-card.visible:nth-child(7) { animation-delay: 0.47s; }
        .tb-card.visible:nth-child(8) { animation-delay: 0.54s; }
        @media (prefers-reduced-motion: reduce) {
          .tb-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F8FCFB] py-24">
        <div className="container-custom">

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-[#EAF7F4] px-4 py-1.5 text-sm font-semibold text-[#2A9F8E]">
              Nos engagements
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] md:text-4xl">
              Pourquoi choisir ConforMind ?
            </h2>
            <p className="mt-4 text-slate-500">
              Parce qu'une norme n'est pas une finalité — c'est un levier de croissance,
              de crédibilité et de performance durable.
            </p>
          </div>

          {/* Benefits grid */}
          <div
            ref={ref}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`tb-card group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${visible ? "visible" : ""}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color.bg}`}>
                    <Icon className={`h-6 w-6 ${item.color.text}`} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Quote block */}
          <div className="mt-14 rounded-[24px] border border-[#B8DDD7] bg-white px-8 py-8 text-center">
            <p className="mx-auto max-w-2xl text-lg font-medium italic text-slate-700">
              « Nous ne vous accompagnons pas uniquement vers la conformité. Nous vous aidons
              à bâtir une organisation plus forte, plus résiliente et prête à saisir de
              nouvelles opportunités. »
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#2A9F8E]/30" />
              <span className="text-sm font-semibold text-[#2A9F8E]">ConforMind Consulting</span>
              <div className="h-px w-12 bg-[#2A9F8E]/30" />
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2A9F8E] px-7 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-[#248A7B] hover:-translate-y-0.5"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}