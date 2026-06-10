"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Users, TrendingUp } from "lucide-react";

export default function HomeHero() {
  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1.08) translate(0px, 0px); }
          33%  { transform: scale(1.13) translate(-12px, -6px); }
          66%  { transform: scale(1.10) translate(8px, -10px); }
          100% { transform: scale(1.08) translate(0px, 0px); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(42, 159, 142, 0.0); }
          50%       { box-shadow: 0 0 24px 4px rgba(42, 159, 142, 0.18); }
        }

        @keyframes countUp {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }

        .hero-bg-img {
          animation: kenBurns 22s ease-in-out infinite;
          will-change: transform;
        }

        .hero-animate-1 { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; animation-delay: 0.15s; }
        .hero-animate-2 { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; animation-delay: 0.35s; }
        .hero-animate-3 { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; animation-delay: 0.55s; }
        .hero-animate-4 { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; animation-delay: 0.75s; }
        .hero-animate-5 { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; animation-delay: 0.95s; }
        .hero-animate-6 { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; animation-delay: 1.10s; }

        .hero-card-animate {
          animation:
            fadeSlideRight 0.8s ease forwards,
            floatCard 6s ease-in-out 2s infinite;
          opacity: 0;
          animation-delay: 0.6s, 0.6s;
        }

        .hero-stat-animate {
          animation: countUp 0.5s ease forwards;
          opacity: 0;
        }
        .hero-stat-animate:nth-child(1) { animation-delay: 1.2s; }
        .hero-stat-animate:nth-child(2) { animation-delay: 1.35s; }
        .hero-stat-animate:nth-child(3) { animation-delay: 1.50s; }

        .expertise-badge {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .expertise-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(42, 159, 142, 0.18);
        }

        .cta-primary {
          transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          background-color: #248A7B;
          box-shadow: 0 8px 24px rgba(42, 159, 142, 0.35);
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .cta-secondary {
          transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }
        .cta-secondary:hover {
          border-color: #2A9F8E;
          color: #2A9F8E;
          background-color: #F8FCFB;
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-img, .hero-animate-1, .hero-animate-2, .hero-animate-3,
          .hero-animate-4, .hero-animate-5, .hero-animate-6,
          .hero-card-animate, .hero-stat-animate {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <section className="relative overflow-hidden min-h-[88vh] flex items-center pt-16 pb-16 lg:pt-10 lg:pb-10">

        {/* Background image with Ken Burns */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/images/hero/team.png"
            alt="Équipe ConforMind"
            fill
            priority
            className="object-cover hero-bg-img"
          />
        </div>

        {/* Gradient overlay — plus riche que noir uni */}
        <div className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(110deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.72) 55%, rgba(15,23,42,0.45) 100%)",
          }}
        />
        {/* Accent teal subtil en bas à gauche */}
        <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(42,159,142,0.14) 0%, transparent 70%)" }}
        />

        <div className="container-custom w-full">
          <div className="grid items-center gap-10 xl:gap-16 lg:grid-cols-2">

            {/* ── LEFT SIDE ── */}
            <div className="max-w-xl">

              {/* Eyebrow badge */}
              <div className="hero-animate-1 inline-flex items-center rounded-full border border-[#B8DDD7] bg-[#F1FAF8]/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-[#7DDDD2]">
                Conseil • Audit • Formation • Certification
              </div>

              {/* Headline */}
              <h1 className="hero-animate-2 mt-6 text-4xl md:text-5xl xl:text-[54px] font-bold leading-[1.07] tracking-[-0.03em] text-white">
                Votre partenaire en{" "}
                <span
                  className="relative inline-block"
                  style={{
                    color: "#59E5D5",
                    textShadow: "0 0 30px rgba(89,229,213,0.25)",
                  }}
                >
                  conformité
                </span>
                <br />
                et performance durable
              </h1>

              {/* Sub-headline */}
              <p className="hero-animate-3 mt-5 max-w-[540px] text-lg leading-relaxed text-slate-200">
                Nous accompagnons les organisations dans leur démarche de certification,
                d'audit QHSE et de mise en conformité réglementaire — pour une performance
                maîtrisée et durable.
              </p>

              {/* Expertise badges */}
              <div className="hero-animate-4 mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Qualité & ISO",           icon: <ShieldCheck size={14} /> },
                  { label: "Food Safety",              icon: <CheckCircle2 size={14} /> },
                  { label: "Agriculture Durable",      icon: <CheckCircle2 size={14} /> },
                  { label: "Environnement & Social",   icon: <CheckCircle2 size={14} /> },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="expertise-badge flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 cursor-default"
                  >
                    <span className="text-[#59E5D5]">{icon}</span>
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="hero-animate-5 mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="cta-primary inline-flex items-center gap-2 rounded-xl bg-[#2A9F8E] px-6 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  Demander un accompagnement
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="cta-secondary inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Découvrir nos expertises
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-animate-6 mt-10 grid grid-cols-3 gap-8 border-t border-white/15 pt-8">
                {[
                  { value: "150+",  label: "Missions réalisées" },
                  { value: "20+",   label: "Référentiels maîtrisés" },
                  { value: "100%",  label: "Accompagnement" },
                ].map(({ value, label }) => (
                  <div key={label} className="hero-stat-animate">
                    <div className="text-3xl xl:text-4xl font-bold text-[#59E5D5]">{value}</div>
                    <p className="mt-1 text-xs text-slate-300 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT SIDE — floating trust card ── */}
            <div className="hidden lg:flex justify-center items-center">
              <div
                className="hero-card-animate rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-7 w-full max-w-[340px] shadow-2xl"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.35)" }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(42,159,142,0.25)", border: "1px solid rgba(89,229,213,0.3)" }}
                  >
                    <Award size={20} className="text-[#59E5D5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm leading-tight">Expertise certifiée</p>
                    <p className="text-xs text-slate-400 mt-0.5">Auditeurs & Consultants seniors</p>
                  </div>
                </div>

                {/* Services list */}
                <div className="space-y-3">
                  {[
                    { icon: <ShieldCheck size={16} />, title: "Audits & Diagnostics", desc: "ISO 9001 · 14001 · 45001 · FSSC 22000" },
                    { icon: <TrendingUp size={16} />,   title: "Conseil stratégique",  desc: "Conformité réglementaire & SMI" },
                    { icon: <Users size={16} />,        title: "Formations terrain",   desc: "Équipes opérationnelles & dirigeants" },
                  ].map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-xl p-3"
                      style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)" }}
                    >
                      <span className="mt-0.5 flex-shrink-0 text-[#59E5D5]">{icon}</span>
                      <div>
                        <p className="text-sm font-medium text-white">{title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider + bottom cue */}
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="flex -space-x-2">
                    {["JR", "AM", "SL"].map((initials) => (
                      <div
                        key={initials}
                        className="flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold border border-white/20"
                        style={{ background: "rgba(42,159,142,0.4)", color: "#fff" }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300">
                    Équipe pluridisciplinaire · Madagascar & international
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}