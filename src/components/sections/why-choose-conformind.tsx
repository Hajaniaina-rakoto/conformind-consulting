"use client";

import Image from "next/image";
import Link from "next/link";
import {
    GraduationCap,
    Briefcase,
    MapPinned,
    BadgeCheck,
    Users,
    Target,
    ArrowRight,
} from "lucide-react";

const advantages = [
    {
        icon: GraduationCap,
        title: "Formateurs certifiés",
        description:
            "Des experts expérimentés capables de transmettre des compétences directement applicables sur le terrain.",
    },
    {
        icon: Briefcase,
        title: "Expertise multisectorielle",
        description:
            "Industrie, agroalimentaire, agriculture, coopératives, ONG et institutions.",
    },
    {
        icon: MapPinned,
        title: "Présence nationale",
        description:
            "Interventions dans toutes les régions de Madagascar, même dans les zones isolées.",
    },
    {
        icon: BadgeCheck,
        title: "Normes internationales",
        description:
            "ISO, HACCP, FSSC 22000, BIO, IFS, BRC, SMETA et autres référentiels reconnus.",
    },
    {
        icon: Users,
        title: "Approche terrain",
        description:
            "Des méthodes participatives adaptées aux réalités des organisations et des producteurs.",
    },
    {
        icon: Target,
        title: "Accompagnement complet",
        description:
            "Diagnostic, formation, audit, accompagnement et préparation à la certification.",
    },
];

export default function WhyChooseConformind() {
    return (
        <section
            className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#F8FCFB]
        via-white
        to-[#F5F8F9]
        py-24
        lg:py-6
      "
        >
            {/* Background Blur */}

            <div className="absolute inset-0 -z-10">
                <div
                    className="
            absolute
            top-0
            right-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#2A9F8E]/10
            blur-3xl
          "
                />

                <div
                    className="
            absolute
            bottom-0
            left-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#8FC7C0]/15
            blur-3xl
          "
                />
            </div>

            <div className="container-custom">
                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">
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
                        Pourquoi choisir ConforMind ?
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
                        Une expertise de terrain
                        au service de votre conformité
                        et de votre performance
                    </h2>

                    <p
                        className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
            "
                    >
                        Nous accompagnons les entreprises,
                        coopératives, ONG et institutions avec
                        une approche pragmatique adaptée aux
                        réalités du terrain et aux exigences
                        des référentiels internationaux.
                    </p>
                </div>

                {/* Content */}
                <div
                    className="
            mt-14
    grid
    gap-10
    lg:grid-cols-[1.1fr_1fr]
    items-start
  "
>
                    {/* Image */}
                    <div className="relative">
  <div
    className="
      h-[320px]
      sm:h-[400px]
      md:h-[500px]
      lg:h-[640px]

      overflow-hidden
      rounded-3xl

      shadow-[0_30px_80px_rgba(15,23,42,0.12)]
    "
  >
    <Image
      src="/images/whyconformind/team.png"
      alt="Équipe ConforMind"
      fill
      className="
      rounded-3xl
        object-cover
        transition-transform
        duration-700
        hover:scale-105
      "
    />
  </div>
</div>

                    {/* Advantages */}

                    <div
                        className="
              grid
              gap-5
              sm:grid-cols-2
            "
                    >
                        {advantages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                    slide-up-soft
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white/90
                    p-5
                    backdrop-blur-sm
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#2A9F8E]/30
                    hover:shadow-xl
                  "
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div
                                        className="
                    why-icon
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EAF7F4]
                      transition-all
                      duration-300
                      group-hover:bg-[#2A9F8E]
                    "
                                    >
                                        <Icon
                                            className="
                        h-7
                        w-7
                        text-[#2A9F8E]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                                        />
                                    </div>

                                    <h3
                                        className="
                      mt-1
                      text-base
                      xl:text-lg
                      font-semibold
                      text-[#0F172A]
                    "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-slate-600
                    "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}

                <div
                    className="
            mt-24
            rounded-[32px]
            bg-gradient-to-r
            from-[#2A9F8E]
            to-[#35B3A1]
            p-10
            lg:p-14
            text-center
          "
                >
                    <h3
                        className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
            "
                    >
                        Ensemble, donnons vie à vos ambitions
                    </h3>

                    <p
                        className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              text-white
            "
                    >
                        De la formation à la certification,
                        nous vous accompagnons vers une
                        conformité durable, une meilleure
                        organisation et une performance renforcée.
                    </p>

                    <Link
                        href="/contact"
                        className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-8
              py-4
              font-semibold
              text-[#2A9F8E]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
                    >
                        Demander un accompagnement

                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}