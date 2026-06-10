// const steps = [
//   "Choix de la formation",
//   "Participation à la session",
//   "Travaux pratiques",
//   "Attestation et montée en compétences",
// ];

// export default function TrainingProcess() {
//   return (
//     <section className="bg-white py-24">
//       <div className="container-custom">
//         <div className="text-center">
//           <h2
//             className="
//               text-3xl
//               md:text-4xl

//               font-bold

//               text-[#0F172A]
//             "
//           >
//             Notre approche pédagogique
//           </h2>
//         </div>

//         <div
//           className="
//             mt-16

//             grid
//             gap-8

//             md:grid-cols-4
//           "
//         >
//           {steps.map((step, index) => (
//             <div
//               key={step}
//               className="
//                 text-center
//               "
//             >
//               <div
//                 className="
//                   mx-auto

//                   flex

//                   h-20
//                   w-20

//                   items-center
//                   justify-center

//                   rounded-full

//                   bg-[#2A9F8E]

//                   text-2xl
//                   font-bold
//                   text-white
//                 "
//               >
//                 {String(index + 1).padStart(2, "0")}
//               </div>

//               <p
//                 className="
//                   mt-5

//                   font-medium

//                   text-[#0F172A]
//                 "
//               >
//                 {step}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Search, BookOpen, Wrench, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choix de la formation",
    description:
      "Identifiez la formule adaptée à votre niveau et vos objectifs parmi nos 4 parcours.",
    color: "bg-[#EAF7F4] text-[#2A9F8E] border-[#B8DDD7]",
    accent: "#2A9F8E",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Participation à la session",
    description:
      "Suivez la formation en groupes restreints avec nos consultants certifiés.",
    color: "bg-[#EBF4FD] text-[#2563EB] border-[#BFDBFE]",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Travaux pratiques",
    description:
      "Appliquez les concepts via des cas réels, simulations et outils directement utilisables.",
    color: "bg-[#FEF9EC] text-[#B45309] border-[#FDE68A]",
    accent: "#B45309",
  },
  {
    number: "04",
    icon: Award,
    title: "Attestation & montée en compétences",
    description:
      "Obtenez votre attestation et intégrez vos nouvelles compétences dans votre pratique quotidienne.",
    color: "bg-[#F3F0FE] text-[#7C3AED] border-[#DDD6FE]",
    accent: "#7C3AED",
  },
];

export default function TrainingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes tpSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tp-step { opacity: 0; }
        .tp-step.visible { animation: tpSlideIn 0.5s ease forwards; }
        .tp-step.visible:nth-child(1) { animation-delay: 0.05s; }
        .tp-step.visible:nth-child(2) { animation-delay: 0.2s; }
        .tp-step.visible:nth-child(3) { animation-delay: 0.35s; }
        .tp-step.visible:nth-child(4) { animation-delay: 0.5s; }
        @media (prefers-reduced-motion: reduce) {
          .tp-step { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white py-24">
        <div className="container-custom">

          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full bg-[#EAF7F4] px-4 py-1.5 text-sm font-semibold text-[#2A9F8E]">
              Déroulement
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] md:text-4xl">
              Notre approche pédagogique
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Un parcours structuré et progressif pour garantir une montée en compétences durable.
            </p>
          </div>

          {/* Steps */}
          <div ref={ref} className="relative grid gap-8 md:grid-cols-4">

            {/* Connecting line — desktop */}
            <div
              aria-hidden="true"
              className="absolute top-10 left-0 hidden h-px w-full md:block"
              style={{ background: "linear-gradient(90deg, #2A9F8E22 0%, #2A9F8E66 50%, #7C3AED22 100%)" }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`tp-step relative flex flex-col items-center text-center ${visible ? "visible" : ""}`}
                >
                  {/* Icon circle */}
                  <div
                    className={`relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 ${step.color} bg-white shadow-sm`}
                  >
                    <Icon size={28} />
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white shadow"
                      style={{ background: step.accent }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#0F172A]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}