import { notFound } from "next/navigation";
import type { Metadata } from "next";

import QualityPage from "@/components/sections/services/quality/page"
import HSEPage from "@/components/sections/services/hse/page";
import FoodSafetyPage from "@/components/sections/services/food-safety/page";
import AgriculturePage from "@/components/sections/services/agriculture/page";
import EnvironmentPage from "@/components/sections/services/environment/page";
import PerformancePage from "@/components/sections/services/performance/page";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const services = {
  quality: {
    title: "Qualité",
    description:
      "Mise en place d'un système de management de la qualité conforme aux exigences ISO 9001.",
    component: QualityPage,
  },

  hse: {
    title: "Hygiène - Santé - Sécurité",
    description:
      "Prévention des risques professionnels et conformité ISO 45001.",
    component: HSEPage,
  },

  "food-safety": {
    title: "Food Safety",
    description:
      "HACCP, ISO 22000 et sécurité sanitaire des aliments.",
    component: FoodSafetyPage,
  },

  "organic-agriculture": {
    title: "Agriculture Biologique & Durable",
    description:
      "Accompagnement BIO, NOP, JAS et agriculture durable.",
    component: AgriculturePage,
  },

  "environment-social": {
    title: "Environnement & Social",
    description:
      "ISO 14001, ISO 26000, ESG et RSE.",
    component: EnvironmentPage,
  },

  performance: {
    title: "Management & Performance",
    description:
      "Leadership, stratégie et performance organisationnelle.",
    component: PerformancePage,
  },
} as const;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    return {
      title: "Service introuvable",
    };
  }

  return {
    title: `${service.title} | ConforMind Consulting`,
    description: service.description,
  };
}

export default async function ServiceSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  const Component = service.component;

  return <Component />;
}