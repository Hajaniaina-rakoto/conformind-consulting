"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Search, CalendarDays, GraduationCap, Settings2,
  ShieldCheck, TrendingUp, ArrowLeft, ArrowRight, Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────── TYPES ─────────────────────────── */

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: { label: string; icon: LucideIcon }[];
  ariaLabel: string;
}

/* ─────────────────────────── DATA ─────────────────────────── */

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    description:
      "Analyse approfondie de votre organisation : identification des écarts par rapport aux référentiels, évaluation des processus existants et compréhension fine des besoins spécifiques de chaque service.",
    tags: [
      { label: "Audit initial", icon: ShieldCheck },
      { label: "Cartographie", icon: Search },
      { label: "Analyse des écarts", icon: TrendingUp },
    ],
    ariaLabel: "Étape 01 : Diagnostic",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Planification",
    description:
      "Co-construction du plan d'action : définition des objectifs SMART, établissement du calendrier de mise en conformité et priorisation des actions selon leur impact et leur urgence.",
    tags: [
      { label: "Plan d'action", icon: CalendarDays },
      { label: "Calendrier", icon: CalendarDays },
      { label: "Objectifs SMART", icon: TrendingUp },
    ],
    ariaLabel: "Étape 02 : Planification",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Formation",
    description:
      "Renforcement des compétences des équipes par des modules adaptés : sensibilisation aux exigences normatives, ateliers pratiques et accompagnement des référents internes.",
    tags: [
      { label: "Modules sur mesure", icon: GraduationCap },
      { label: "Ateliers pratiques", icon: GraduationCap },
      { label: "Référents internes", icon: ShieldCheck },
    ],
    ariaLabel: "Étape 03 : Formation",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Mise en œuvre",
    description:
      "Déploiement opérationnel des procédures, outils de pilotage et bonnes pratiques. Intégration dans les flux de travail existants pour garantir adoption et pérennité.",
    tags: [
      { label: "Procédures", icon: Settings2 },
      { label: "Outils de pilotage", icon: TrendingUp },
      { label: "Intégration", icon: ShieldCheck },
    ],
    ariaLabel: "Étape 04 : Mise en œuvre",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Audit & Évaluation",
    description:
      "Audit interne de conformité : vérification documentaire, entretiens avec les équipes, tests de processus et mesure de l'efficacité des actions engagées.",
    tags: [
      { label: "Audit interne", icon: Search },
      { label: "Vérification", icon: ShieldCheck },
      { label: "Mesure d'efficacité", icon: TrendingUp },
    ],
    ariaLabel: "Étape 05 : Audit et évaluation",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Certification & Amélioration",
    description:
      "Préparation et accompagnement lors de l'audit de certification. Mise en place d'un cycle d'amélioration continue pour maintenir et élever le niveau de conformité dans la durée.",
    tags: [
      { label: "Certification", icon: Award },
      { label: "Amélioration continue", icon: TrendingUp },
      { label: "Suivi", icon: CalendarDays },
    ],
    ariaLabel: "Étape 06 : Certification et amélioration continue",
  },
];


/* ─────────────────────── useInView HOOK ─────────────────────── */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────── CARD ─────────────────────── */

interface CardProps {
  step: Step;
  index: number;
  isActive: boolean;
  isSide: boolean;
  onClick: () => void;
}

function StepCard({ step, index, isActive, isSide, onClick }: CardProps) {
  const Icon = step.icon;

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={step.ariaLabel}
      aria-current={isActive ? "true" : undefined}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
      className="relative flex-none cursor-pointer select-none rounded-[28px] overflow-hidden transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A9F8E]"
      style={{
        width: isActive ? "clamp(280px, 38vw, 440px)" : "clamp(200px, 22vw, 260px)",
        minHeight: isActive ? 380 : 300,
        opacity: isSide && !isActive ? 0.55 : 1,
        transform: isActive ? "scale(1)" : "scale(0.93)",
        filter: isSide && !isActive ? "blur(0.5px)" : "none",
        transition: "all 0.55s cubic-bezier(.22,1,.36,1)",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: isActive
            ? "linear-gradient(145deg, #0F5F54 0%, #1B7A6D 40%, #2A9F8E 100%)"
            : "linear-gradient(145deg, #1a2e2b 0%, #1d3330 100%)",
          transition: "background 0.55s ease",
        }}
      />

      {/* Glow top-right */}
      {isActive && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full"
          style={{ background: "rgba(255,255,255,0.07)", filter: "blur(24px)" }}
        />
      )}

      {/* Step number watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 font-extrabold leading-none select-none"
        style={{
          fontSize: "clamp(52px,8vw,88px)",
          color: "rgba(255,255,255,0.07)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {step.number}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7">

        {/* Top: badge + icon */}
        <div className="flex items-start justify-between">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{
              background: isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
              color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Étape {step.number}
          </span>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-2xl"
            style={{ background: isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)" }}
          >
            <Icon size={20} strokeWidth={1.6} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h3
            className="text-white font-bold leading-tight"
            style={{ fontSize: isActive ? "clamp(18px,2.2vw,24px)" : "16px" }}
          >
            {step.title}
          </h3>

          {/* Description — only active */}
          <div
            style={{
              maxHeight: isActive ? 120 : 0,
              opacity: isActive ? 1 : 0,
              overflow: "hidden",
              transition: "all 0.45s cubic-bezier(.22,1,.36,1) 0.05s",
            }}
          >
            <p className="mt-3 text-[13px] leading-[1.7] text-white/75">
              {step.description}
            </p>
          </div>

          {/* Tags — only active */}
          <div
            className="mt-4 flex flex-wrap gap-2"
            style={{
              maxHeight: isActive ? 80 : 0,
              opacity: isActive ? 1 : 0,
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(.22,1,.36,1) 0.1s",
            }}
          >
            {step.tags.map(({ label, icon: TagIcon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium text-white/80"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <TagIcon size={10} strokeWidth={2} className="text-[#5EDFD2]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Progress line at bottom */}
        <div className="mt-5 h-[2px] w-full rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="h-full rounded-full"
            style={{
              width: isActive ? "100%" : `${((index + 1) / STEPS.length) * 60}%`,
              background: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)",
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────── MAIN ─────────────────────── */

export default function MethodologySection() {
  const LOOP_STEPS = [
    ...STEPS,
    ...STEPS,
  ];
  const [activeIdx, setActiveIdx] = useState(STEPS.length);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerView = useInView(0.1);
  const statsView = useInView(0.12);

  /* ── scroll active card into view ── */
  const scrollToActive = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (!card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - trackRect.left - (trackRect.width - cardRect.width) / 2;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => {
        const next = prev + 1;

        scrollToActive(next);

        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [
    isHovered,
    isDragging,
    scrollToActive,
  ]);

  useEffect(() => {
    if (activeIdx >= STEPS.length * 2 - 2) {

      setTimeout(() => {

        const resetIndex = STEPS.length;

        setActiveIdx(resetIndex);

        const track = trackRef.current;

        if (!track) return;

        const card =
          track.children[
          resetIndex
          ] as HTMLElement;

        card?.scrollIntoView({
          behavior: "auto",
          inline: "center",
          block: "nearest",
        });

      }, 600);
    }
  }, [activeIdx]);

  const handleSelect = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(STEPS.length - 1, idx));
    setActiveIdx(clamped);
    scrollToActive(clamped);
  }, [scrollToActive]);

  /* initial center */
  useEffect(() => { scrollToActive(0); }, [scrollToActive]);

  /* touch/drag swipe */
  const dragStart = useRef<number | null>(null);
  const onPointerDown = (
    e: React.PointerEvent
  ) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (Math.abs(delta) > 40) handleSelect(activeIdx + (delta > 0 ? 1 : -1));
    dragStart.current = null;
    setIsDragging(false);
  };

  const visible = headerView.visible;

  return (
    <>
      <style>{`
        .ms-track::-webkit-scrollbar { display: none; }
        .ms-track { scrollbar-width: none; -ms-overflow-style: none; }
        @media (prefers-reduced-motion: reduce) {
          .ms-header-anim { opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Notre méthodologie — démarche en 6 étapes"
        className="relative overflow-hidden bg-[var(--color-background-primary)] py-20 lg:py-24"
      >
        {/* Subtle radial bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(42,159,142,.045), transparent)" }}
        />

        <div className="mx-auto w-full max-w-7xl px-6">

          {/* ── HEADER ── */}
          <header
            ref={headerView.ref as React.RefObject<HTMLElement>}
            className="ms-header-anim mx-auto mb-14 max-w-2xl text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(22px)",
              transition: "opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold tracking-wide"
              style={{
                backgroundColor: "rgba(42,159,142,0.1)",
                border: "1px solid rgba(42,159,142,0.28)",
                color: "#1A7A6A",
              }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: "#2A9F8E" }} />
              Notre méthodologie
            </span>

            <h2
              className="mt-5 font-semibold leading-[1.18] tracking-[-0.025em] text-[var(--color-text-primary)]"
              style={{ fontSize: "clamp(26px,3.5vw,42px)" }}
            >
              Une démarche en 6&nbsp;étapes
              <br className="hidden sm:block" />
              pour des résultats durables
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.7] text-[var(--color-text-secondary)]">
              Du diagnostic initial à la certification — un accompagnement
              rigoureux, personnalisé et orienté résultats.
            </p>
          </header>

          {/* ── CAROUSEL TRACK ── */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity .6s .15s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* Left fade */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
              style={{ background: "linear-gradient(to right, var(--color-background-primary), transparent)" }}
            />
            {/* Right fade */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
              style={{ background: "linear-gradient(to left, var(--color-background-primary), transparent)" }}
            />

            <div
              ref={trackRef}
              role="list"
              aria-label="Étapes de la méthodologie"
              className="ms-track flex gap-5 overflow-x-auto px-6 md:px-[15%] lg:px-[22%] py-4"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              style={{ cursor: "grab" }}
            >
              {LOOP_STEPS.map((step, i) => (
                <div
                  key={`${step.number}-${i}`}
                  role="listitem"
                >
                  <StepCard
                    step={step}
                    index={i}
                    isActive={activeIdx === i}
                    isSide={Math.abs(i - activeIdx) === 1}
                    onClick={() => handleSelect(i)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── CONTROLS ── */}
          <div
            className="mt-8 flex items-center justify-center gap-5"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity .6s .25s ease",
            }}
          >
            {/* Prev */}
            <button
              onClick={() => handleSelect(activeIdx - 1)}
              disabled={activeIdx === 0}
              aria-label="Étape précédente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] transition-all hover:border-[#2A9F8E] hover:text-[#2A9F8E] disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A9F8E]"
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>

            {/* Dots */}
            <div role="tablist" aria-label="Navigation par étape" className="flex items-center gap-2">
              {STEPS.map((step, i) => (
                <button
                  key={step.number}
                  role="tab"
                  aria-selected={activeIdx % STEPS.length === i}
                  aria-label={`Aller à l'étape ${step.number}`}
                  onClick={() => handleSelect(i)}
                  className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A9F8E]"
                  style={{
                    height: 8,
                    width: activeIdx % STEPS.length === i ? 28 : 8,
                    background: activeIdx % STEPS.length === i ? "#2A9F8E" : "var(--color-border-secondary)",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => handleSelect(activeIdx + 1)}
              disabled={activeIdx === STEPS.length - 1}
              aria-label="Étape suivante"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] transition-all hover:border-[#2A9F8E] hover:text-[#2A9F8E] disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A9F8E]"
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Step label */}
          <p
            className="mt-4 text-center text-[13px] font-medium text-[var(--color-text-secondary)]"
            aria-live="polite"
          >
            {activeIdx + 1} / {STEPS.length} — {STEPS[activeIdx % STEPS.length].title}
          </p>

          {/* ── STATS BAR ── */}
          <div
            ref={statsView.ref as React.RefObject<HTMLDivElement>}
            role="region"
            aria-label="Chiffres clés"
            className="relative mt-14 overflow-hidden rounded-[32px]"
            style={{
              opacity: statsView.visible ? 1 : 0,
              transform: statsView.visible ? "translateY(0)" : "translateY(20px)",
              transition: "all .8s cubic-bezier(.22,1,.36,1)",
              background: "linear-gradient(135deg,#0F5F54 0%,#1B7A6D 35%,#2A9F8E 65%,#48C7B5 100%)",
              boxShadow: "0 30px 80px rgba(42,159,142,.22)",
            }}
          >
            {/* Glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute left-16 top-10 h-2 w-2 animate-pulse rounded-full bg-white/40" />
              <div className="absolute right-20 top-14 h-3 w-3 animate-pulse rounded-full bg-white/25" />
              <div className="absolute bottom-10 left-1/3 h-2 w-2 animate-pulse rounded-full bg-white/30" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}