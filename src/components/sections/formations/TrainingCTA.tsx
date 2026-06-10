// import Link from "next/link";

// export default function TrainingCTA() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden

//         py-24
//       "
//     >
//       <div className="container-custom">
//         <div
//           className="
//             rounded-[40px]

//             bg-gradient-to-r
//             from-[#1F8A7B]
//             via-[#2A9F8E]
//             to-[#43C3B1]

//             px-8
//             py-16

//             text-center

//             text-white
//           "
//         >
//           <h2
//             className="
//               text-3xl
//               md:text-5xl

//               font-bold
//             "
//           >
//             Prêt à développer vos compétences ?
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-6
//               max-w-2xl

//               text-white/90
//             "
//           >
//             Découvrez nos parcours de formation
//             et échangeons sur vos besoins.
//           </p>

//           <Link
//             href="/contact"
//             className="
//               mt-10

//               inline-flex

//               rounded-xl

//               bg-white

//               px-8
//               py-4

//               font-semibold

//               text-[#2A9F8E]

//               transition-all

//               hover:scale-105
//             "
//           >
//             Nous contacter
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Award, Briefcase, FileCheck, Lightbulb, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description:
      "Consultants expérimentés et certifiés sur les référentiels HACCP, ISO, RSE, ESG et filières agricoles.",
    color: "bg-[#EAF7F4] text-[#2A9F8E]",
  },
  {
    icon: Briefcase,
    title: "Cas pratiques terrain",
    description:
      "Chaque formation s'appuie sur des exercices et études de cas issus de situations réelles en entreprise.",
    color: "bg-[#EBF4FD] text-[#2563EB]",
  },
  {
    icon: Lightbulb,
    title: "Outils immédiatement applicables",
    description:
      "Vous repartez avec des méthodes, modèles et outils opérationnels à déployer dès le lendemain.",
    color: "bg-[#FEF9EC] text-[#B45309]",
  },
  {
    icon: FileCheck,
    title: "Attestation officielle",
    description:
      "Une attestation de participation remise à chaque participant à l'issue de la formation.",
    color: "bg-[#F3F0FE] text-[#7C3AED]",
  },
  {
    icon: Users,
    title: "Groupes restreints",
    description:
      "Sessions en petits groupes pour favoriser les échanges, le suivi individuel et la pédagogie active.",
    color: "bg-[#EAF7F4] text-[#2A9F8E]",
  },
  {
    icon: TrendingUp,
    title: "Montée en compétences durable",
    description:
      "Nos formations s'inscrivent dans une logique d'autonomie : vos équipes progressent et restent performantes.",
    color: "bg-[#FEF9EC] text-[#B45309]",
  },
];

export default function TrainingBenefits() {
  return (
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
            de crédibilité et de performance.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote block */}
        <div className="mt-14 rounded-[24px] border border-[#B8DDD7] bg-white px-8 py-8 text-center">
          <p className="mx-auto max-w-2xl text-lg font-medium italic text-slate-700">
            « Nous ne vous accompagnons pas uniquement vers la conformité. Nous vous aidons à bâtir une organisation plus forte, plus résiliente et prête à saisir de nouvelles opportunités. »
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
  );
}