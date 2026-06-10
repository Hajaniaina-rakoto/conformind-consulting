"use client";

import Link from "next/link";
import {
  Award,
  Shield,
  Utensils,
  Leaf,
  Globe,
  TrendingUp,
} from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
}

const serviceLinks = [
  {
    icon: Award,
    title: "Qualité",
    description: "ISO 9001, SMQ, Audit qualité",
    href: "/services/quality",
  },
  {
    icon: Shield,
    title: "Hygiène - Santé - Sécurité",
    description: "ISO 45001, SST, HSE",
    href: "/services/hse",
  },
  {
    icon: Utensils,
    title: "Food Safety",
    description: "HACCP, ISO 22000, FSSC 22000",
    href: "/services/food-safety",
  },
  {
    icon: Leaf,
    title: "Agriculture Biologique & Durable",
    description: "BIO, NOP, JAS, NATURLAND",
    href: "/services/organic-agriculture",
  },
  {
    icon: Globe,
    title: "Environnement & Social",
    description: "ISO 14001, ISO 26000, RSE",
    href: "/services/environment-social",
  },
  {
    icon: TrendingUp,
    title: "Management & Performance Organisationnelle",
    description:
      "Leadership, Stratégie, Performance",
    href: "/services/performance",
  },
];

export default function MegaMenu({
  isOpen,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
  absolute
  top-[calc(100%+16px)]
  left-1/2
  -translate-x-1/2

  w-[850px]
  max-w-[90vw]

  rounded-[30px]

  bg-white

  border
  border-[#F1F5F9]

  p-8

  shadow-[0_10px_40px_rgba(0,0,0,0.06)]

  z-50
">
      <div className="mb-8 border-b border-slate-200 pb-5">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9" >
          Nos domaines d'expertise
        </p>

        <h3
          className="
      mt-2
      text-2xl
      font-semibold
      text-slate-900
    "
        >
          Conseil, audit et accompagnement
        </h3>

        <p
          className="
      mt-2
      max-w-xl
      text-sm
      leading-relaxed
      text-slate-600
    "
        >
          Nous accompagnons les organisations dans
          leurs démarches qualité, sécurité,
          environnement, conformité et performance.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {serviceLinks.map((service) => {
          const Icon = service.icon;

          return (
            <Link key={service.title} href={service.href} className=" flex items-start gap-4 rounded-2xl p-4 border border-transparent transition-all duration-300 hover:bg-whit hover:border-[#619e91] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div
                className="
  flex
  h-12
  w-12
  shrink-0
  items-center
  justify-center
  rounded-xl
  bg-[#E7F5F2]
">
                <Icon
                  className="
    h-6
    w-6
    text-[#2A9F8E]
  "
                />
              </div>

              <div>
                <div className="
  mb-1
  text-[17px]
  font-semibold
  leading-tight
  text-slate-900
">
                  {service.title}
                </div>

                <p className="
  text-sm
  leading-relaxed
  text-slate-500
">
                  {service.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}