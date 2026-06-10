"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Clock, BookOpen } from "lucide-react";

const trainings = [
  {
    category: "Qualité",
    title: "ISO 9001",
    description:
      "Maîtrisez les exigences du management de la qualité et préparez votre organisation à la certification.",
    duration: "2 jours",
    level: "Fondamental",
    image: "/images/trainings/qualite.png",
    accent: "#0B4F43",
    accentLight: "#D4F0EB",
  },
  {
    category: "Audit",
    title: "Audit Interne",
    description:
      "Techniques d'audit interne ISO : planification, conduite et rédaction de rapports conformes.",
    duration: "2 jours",
    level: "Intermédiaire",
    image: "/images/trainings/audit.png",
    accent: "#1A3C5E",
    accentLight: "#D4E6F6",
  },
  {
    category: "Sécurité",
    title: "ISO 45001",
    description:
      "Management de la santé et sécurité au travail — réduisez les risques et protégez vos équipes.",
    duration: "3 jours",
    level: "Avancé",
    image: "/images/trainings/securite.png",
    accent: "#4A1942",
    accentLight: "#EDD9EC",
  },
  {
    category: "Agroalimentaire",
    title: "HACCP",
    description:
      "Maîtrise des dangers biologiques, chimiques et physiques pour garantir la sécurité sanitaire des aliments.",
    duration: "3 jours",
    level: "Avancé",
    image: "/images/trainings/haccp.png",
    accent: "#7C4A00",
    accentLight: "#FAE3C0",
  },
  {
    category: "Environnement",
    title: "Agriculture BIO",
    description:
      "Référentiels BIO, agriculture durable et certifications pour une production responsable et traçable.",
    duration: "2 jours",
    level: "Fondamental",
    image: "/images/trainings/environnement.png",
    accent: "#0F3D1A",
    accentLight: "#D4EDD9",
  },
];

/** Returns how many cards to show based on viewport width */
function getVisibleCount(width: number): number {
  if (width < 640) return 1;   // mobile
  if (width < 1024) return 2;  // tablet
  return 3;                    // desktop
}

export default function TrainingSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
const trackRef = useRef<HTMLDivElement>(null);

const [activeIndex, setActiveIndex] = useState(0);
const [cardWidth, setCardWidth] = useState(0);
const [visibleCount, setVisibleCount] = useState(3);
const [isHovered, setIsHovered] = useState(false);

const GAP = 24;

const total = trainings.length;

const maxIndex = Math.max(
  0,
  total - visibleCount
);

const measure = useCallback(() => {
  if (!viewportRef.current) return;

  const viewportWidth =
    viewportRef.current.offsetWidth;

  const visible = getVisibleCount(
    window.innerWidth
  );

  const width = Math.floor(
    (
      viewportWidth -
      GAP * (visible - 1)
    ) / visible
  );

  setVisibleCount(visible);
  setCardWidth(width);

  setActiveIndex((prev) =>
    Math.min(
      prev,
      Math.max(
        0,
        total - visible
      )
    )
  );
}, [total]);

useEffect(() => {
  measure();

  window.addEventListener(
    "resize",
    measure
  );

  return () =>
    window.removeEventListener(
      "resize",
      measure
    );
}, [measure]);

/* Auto Slide */

useEffect(() => {
  if (isHovered) return;

  const interval = setInterval(() => {
    setActiveIndex((current) =>
      current >= maxIndex
        ? 0
        : current + 1
    );
  }, 4500);

  return () =>
    clearInterval(interval);
}, [maxIndex, isHovered]);

const goTo = useCallback(
  (index: number) => {
    setActiveIndex(
      Math.max(
        0,
        Math.min(maxIndex, index)
      )
    );
  },
  [maxIndex]
);

const goPrevious = () => {
  if (activeIndex <= 0) return;

  goTo(activeIndex - 1);
};

const goNext = () => {
  if (activeIndex >= maxIndex) return;

  goTo(activeIndex + 1);
};

const canLeft =
  activeIndex > 0;

const canRight =
  activeIndex < maxIndex;

const offset =
  activeIndex *
  (cardWidth + GAP);

  return (
    <section
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
      style={{
        background: `
    radial-gradient(circle at top right,
      rgba(42,159,142,0.12) 0%,
      transparent 30%),
    radial-gradient(circle at bottom left,
      rgba(42,159,142,0.08) 0%,
      transparent 35%),
    linear-gradient(
      180deg,
      #F9FCFB 0%,
      #F3F8F7 50%,
      #EDF5F3 100%
    )
  `,
      }}
    >
      {/* Background blobs */}
      <div
        className="
    absolute
    top-0
    right-0
    h-[600px]
    w-[600px]
    rounded-full
    blur-3xl
    opacity-50
  "
        style={{
          background:
            "radial-gradient(circle, rgba(42,159,142,0.18) 0%, transparent 70%)",
        }}
      />

      <div
        className="
    absolute
    bottom-0
    left-0
    h-[450px]
    w-[450px]
    rounded-full
    blur-3xl
    opacity-40
  "
        style={{
          background:
            "radial-gradient(circle, rgba(143,199,192,0.25) 0%, transparent 70%)",
        }}
      />

      <div
        className="
    absolute
    inset-0
    opacity-[0.03]
  "
        style={{
          backgroundImage:
            "linear-gradient(#2A9F8E 1px, transparent 1px), linear-gradient(90deg, #2A9F8E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Decorative shapes */}
      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center mb-10 md:mb-16 px-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold tracking-wide"
            style={{
              backgroundColor: "rgba(42,159,142,0.1)",
              border: "1px solid rgba(42,159,142,0.28)",
              color: "#1A7A6A",
            }}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: "#2A9F8E" }} />
            Nos formations
          </span>

          <h2
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
            style={{ color: "#0B1F3A" }}
          >
            Développez les compétences
            <br className="hidden sm:block" />
            {" "}
            <span style={{ color: "#2A9F8E" }}>de vos équipes</span>
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#64748B" }}>
            Des formations pratiques adaptées aux réalités du terrain.
          </p>
        </div>

        {/* ── Slider row ── */}
        {/* <div className="flex items-center gap-2 sm:gap-3 md:gap-5"> */}
        <div
  className="flex items-center gap-2 sm:gap-3 md:gap-5"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>

          {/* ← Left button */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={!canLeft}
            aria-label="Précédent"
            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 active:scale-90"
            style={{
              width: "clamp(40px, 5vw, 56px)",
              height: "clamp(40px, 5vw, 56px)",
              backgroundColor: canLeft ? "#ffffff" : "rgba(255,255,255,0.45)",
              boxShadow: canLeft
                ? "0 6px 28px rgba(11,31,58,0.14), 0 2px 8px rgba(11,31,58,0.07)"
                : "none",
              border: `1.5px solid ${canLeft ? "rgba(42,159,142,0.3)" : "rgba(203,213,225,0.4)"}`,
              color: canLeft ? "#2A9F8E" : "#CBD5E1",
              cursor: canLeft ? "pointer" : "not-allowed",
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Viewport — no scrollbar */}
          <div ref={viewportRef} className="flex-1 overflow-hidden">
            {/* Track — CSS transform slide */}
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: cardWidth > 0 ? `translateX(-${offset}px)` : "none",
                transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {trainings.map((item) => (
                <div
                  key={item.title}
                  className="group flex-shrink-0 rounded-2xl md:rounded-3xl bg-white overflow-hidden"
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : "100%",
                    boxShadow: "0 4px 24px rgba(11,31,58,0.06), 0 1px 4px rgba(11,31,58,0.04)",
                    transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-10px)";
                    el.style.boxShadow = "0 28px 56px rgba(42,159,142,0.16), 0 8px 16px rgba(11,31,58,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 4px 24px rgba(11,31,58,0.06), 0 1px 4px rgba(11,31,58,0.04)";
                  }}
                >
                  {/* Cover */}
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 flex items-center justify-between">
                      <span
                        className="inline-flex items-center px-2.5 py-1 md:px-3 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.category}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 md:gap-1.5 px-2.5 py-1 md:px-3 rounded-full text-[9px] md:text-[10px] font-semibold text-white"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <Clock size={9} />
                        {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 md:px-5 md:pb-5">
                      <p
                        className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest mb-1 md:mb-1.5 flex items-center gap-1 md:gap-1.5"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      >
                        <BookOpen size={9} />
                        {item.level}
                      </p>
                      <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-5">
                    <p
                      className="text-xs md:text-sm leading-relaxed min-h-[48px] md:min-h-[60px] line-clamp-3"
                      style={{ color: "#64748B" }}
                    >
                      {item.description}
                    </p>

                    <div className="h-px" style={{ backgroundColor: "#F1F5F9" }} />

                    <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                      <span
                        className="text-[10px] md:text-xs font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: item.accentLight, color: item.accent }}
                      >
                        {item.level}
                      </span>

                      <Link
                        href="#"
                        className="group/btn inline-flex items-center gap-1.5 md:gap-2 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-white whitespace-nowrap"
                        style={{
                          backgroundColor: "#2A9F8E",
                          boxShadow: "0 4px 16px rgba(42,159,142,0.38)",
                          transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.backgroundColor = "#1F8070";
                          el.style.boxShadow = "0 8px 24px rgba(42,159,142,0.55)";
                          el.style.transform = "scale(1.06)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.backgroundColor = "#2A9F8E";
                          el.style.boxShadow = "0 4px 16px rgba(42,159,142,0.38)";
                          el.style.transform = "scale(1)";
                        }}
                      >
                        Voir la formation
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* → Right button */}
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={!canRight}
            aria-label="Suivant"
            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 active:scale-90"
            style={{
              width: "clamp(40px, 5vw, 56px)",
              height: "clamp(40px, 5vw, 56px)",
              backgroundColor: canRight ? "#2A9F8E" : "rgba(203,213,225,0.45)",
              boxShadow: canRight
                ? "0 6px 28px rgba(42,159,142,0.45), 0 2px 8px rgba(42,159,142,0.2)"
                : "none",
              border: `1.5px solid ${canRight ? "rgba(42,159,142,0.4)" : "rgba(203,213,225,0.4)"}`,
              color: canRight ? "#ffffff" : "#CBD5E1",
              cursor: canRight ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (!canRight) return;
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#1F8070";
              el.style.boxShadow = "0 12px 40px rgba(42,159,142,0.55)";
              el.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              if (!canRight) return;
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#2A9F8E";
              el.style.boxShadow = "0 6px 28px rgba(42,159,142,0.45), 0 2px 8px rgba(42,159,142,0.2)";
              el.style.transform = "scale(1)";
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Dots ── */}
        <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Page ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full"
              style={{
                width: i === activeIndex ? "28px" : "8px",
                height: "8px",
                backgroundColor: i === activeIndex ? "#2A9F8E" : "rgba(42,159,142,0.25)",
                boxShadow: i === activeIndex ? "0 2px 8px rgba(42,159,142,0.4)" : "none",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}