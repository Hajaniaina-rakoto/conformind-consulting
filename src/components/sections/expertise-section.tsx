"use client";

import Link from "next/link";

const expertises = [
  {
    title: "Qualité",
    description:
      "ISO 9001, SMQ, audits internes, amélioration continue et accompagnement à la certification.",
    href: "/services/quality",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    title: "Hygiène · Santé · Sécurité",
    description:
      "ISO 45001, SST et systèmes de prévention pour protéger les personnes et les organisations.",
    href: "/services/hse",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Food Safety",
    description:
      "HACCP, ISO 22000, FSSC 22000 et maîtrise de la sécurité sanitaire des aliments.",
    href: "/services/food-safety",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    title: "Agriculture Durable",
    description:
      "BIO, NOP, JAS, Naturland et référentiels agricoles responsables.",
    href: "/services/organic-agriculture",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 22c1.25-1.25 2.5-3.5 2.5-7.5 0-4.5 3-6.5 5.5-6.5s2.5 1.5 2.5 3.5c0 3-2 4-3 4-1 0-2-.5-2-2" />
        <path d="M12 22V8.5M20 8c-2 2-4.5 3.5-8 3.5M20 8c0-3-2-6-2-6s-4 1-6 6" />
      </svg>
    ),
  },
  {
    title: "Environnement & Social",
    description:
      "ISO 14001, RSE et développement durable adaptés aux enjeux actuels.",
    href: "/services/environment-social",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Performance Organisationnelle",
    description:
      "Leadership, stratégie et amélioration durable de la performance.",
    href: "/services/performance",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const ArrowRight = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ExpertiseSection() {
  return (
    <section
      className="relative overflow-hidden py-10 lg:py-20"
      style={{ background: "#F7FAF9" }}
    >
      {/* Ambient glow — top right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-180px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,159,142,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Ambient glow — bottom left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "80px",
          left: "-100px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,159,142,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              border: "1px solid rgba(42,159,142,0.3)",
              background: "rgba(42,159,142,0.06)",
              color: "#1A7A6D",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2A9F8E",
                animation: "expertise-pulse 2s ease-in-out infinite",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Nos domaines d'expertise
          </span>

          <h2
              className="
              mt-6
              text-3xl
              md:text-4xl
              max-w-2xl
              font-bold
              leading-tight
              text-[#0F172A]
            "
          >
            Des solutions{" "}
            <span style={{ color: "#2A9F8E" }}>exigeantes</span>
            <br />
            et sur mesure
          </h2>

          <p
            className="mt-5 text-base leading-relaxed"
            style={{ color: "#4A6962", fontWeight: 300 }}
          >
            ConforMind accompagne entreprises, ONG, institutions et
            coopératives vers la conformité, la performance et la durabilité.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {expertises.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="expertise-card group block rounded-3xl p-8"
              style={{
                background: "#fff",
                border: "1px solid rgba(42,159,142,0.12)",
                transition:
                  "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease",
                textDecoration: "none",
                animationDelay: `${index * 90}ms`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card number watermark */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 18,
                  right: 22,
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(42,159,142,0.22)",
                  letterSpacing: "0.05em",
                }}
              >
                0{index + 1}
              </span>

              {/* Icon */}
              <div
                className="expertise-icon-wrap flex items-center justify-center"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: "#EAF7F4",
                  transition:
                    "background 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <span
                  style={{
                    color: "#2A9F8E",
                    stroke: "#2A9F8E",
                    display: "flex",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <h3
                className="mt-5 font-bold tracking-tight"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 17,
                  color: "#0D1F1C",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#5A7571", fontWeight: 300 }}
              >
                {item.description}
              </p>

              {/* CTA */}
              <div
                className="mt-5 flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#2A9F8E" }}
              >
                En savoir plus
                <span
                  className="expertise-arrow"
                  style={{
                    display: "inline-flex",
                    transition:
                      "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                >
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Banner ── */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-10 rounded-[28px] p-10 text-white lg:flex-row lg:p-14"
          style={{
            background:
              "linear-gradient(135deg, #1A8A7B 0%, #2A9F8E 50%, #35B3A1 100%)",
            position: "relative",
            overflow: "hidden",
            animation: "expertise-fade-up 0.55s 0.54s both",
          }}
        >
          {/* Decorative circles */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
              pointerEvents: "none",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "42%",
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }}
          />

          {/* Text block */}
          <div className="relative z-10">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Approche intégrée
            </p>
            <h3
              className="font-extrabold leading-tight tracking-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(22px, 3vw, 30px)",
                letterSpacing: "-0.02em",
              }}
            >
              6 domaines d'expertise,
              <br />
              un accompagnement sur mesure
            </h3>
            <p
              className="mt-3 max-w-lg text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
            >
              De l'audit à la certification, nous accompagnons votre
              organisation vers la conformité, la performance et
              l'amélioration continue.
            </p>
          </div>

          {/* CTA button */}
          <Link
            href="/contact"
            className="expertise-banner-btn relative z-10 inline-flex shrink-0 items-center gap-3 rounded-2xl px-7 py-4 font-bold text-sm"
            style={{
              background: "#fff",
              color: "#1A7A6D",
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition:
                "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
            }}
          >
            Demander un accompagnement
            <span
              className="expertise-arrow"
              style={{
                display: "inline-flex",
                transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}