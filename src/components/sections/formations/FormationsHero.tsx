// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function FormationsHero() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden

//         bg-gradient-to-b
//         from-[#F4FBFA]
//         to-white

//         pt-36
//         pb-24
//       "
//     >
//       <div className="container-custom">
//         <div className="mx-auto max-w-4xl text-center">

//           <span
//             className="
//               inline-flex
//               rounded-full

//               border
//               border-[#CFEAE5]

//               bg-white

//               px-5
//               py-2

//               text-sm
//               font-semibold

//               text-[#2A9F8E]
//             "
//           >
//             E-learning • Formations
//           </span>

//           <h1
//             className="
//               mt-8

//               text-4xl
//               md:text-5xl
//               lg:text-6xl

//               font-bold

//               leading-tight

//               text-[#0F172A]
//             "
//           >
//             Développez vos compétences
//             en conformité, qualité
//             et performance durable
//           </h1>

//           <p
//             className="
//               mx-auto
//               mt-8
//               max-w-3xl

//               text-lg

//               leading-relaxed

//               text-slate-600
//             "
//           >
//             Des formations conçues pour les professionnels,
//             entreprises et étudiants souhaitant maîtriser
//             les référentiels internationaux et renforcer
//             leurs compétences opérationnelles.
//           </p>

//           <div
//             className="
//               mt-10

//               flex
//               flex-col

//               justify-center
//               gap-4

//               sm:flex-row
//             "
//           >
//             <Link
//               href="#formations"
//               className="
//                 inline-flex

//                 items-center
//                 justify-center

//                 gap-2

//                 rounded-xl

//                 bg-[#2A9F8E]

//                 px-8
//                 py-4

//                 font-semibold
//                 text-white

//                 transition-all

//                 hover:bg-[#248A7B]
//               "
//             >
//               Découvrir les formations

//               <ArrowRight size={18} />
//             </Link>

//             <Link
//               href="/contact"
//               className="
//                 inline-flex

//                 items-center
//                 justify-center

//                 rounded-xl

//                 border
//                 border-slate-200

//                 bg-white

//                 px-8
//                 py-4

//                 font-semibold

//                 text-[#0F172A]

//                 transition-all

//                 hover:border-[#2A9F8E]
//                 hover:text-[#2A9F8E]
//               "
//             >
//               Nous contacter
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const stats = [
  { value: "4", label: "Formules adaptées", icon: BookOpen },
  { value: "20+", label: "Thématiques couvertes", icon: Award },
  { value: "150+", label: "Participants formés", icon: Users },
];

export default function FormationsHero() {
  return (
    <>
      <style>{`
        @keyframes fhFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fhFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .fh-a1 { animation: fhFadeUp 0.6s ease forwards; opacity: 0; animation-delay: 0.1s; }
        .fh-a2 { animation: fhFadeUp 0.6s ease forwards; opacity: 0; animation-delay: 0.25s; }
        .fh-a3 { animation: fhFadeUp 0.6s ease forwards; opacity: 0; animation-delay: 0.4s; }
        .fh-a4 { animation: fhFadeUp 0.6s ease forwards; opacity: 0; animation-delay: 0.55s; }
        .fh-a5 { animation: fhFadeUp 0.6s ease forwards; opacity: 0; animation-delay: 0.7s; }
        .fh-stat { animation: fhFadeUp 0.5s ease forwards; opacity: 0; }
        .fh-stat:nth-child(1) { animation-delay: 0.8s; }
        .fh-stat:nth-child(2) { animation-delay: 0.95s; }
        .fh-stat:nth-child(3) { animation-delay: 1.1s; }
        .fh-badge-float { animation: fhFloat 4s ease-in-out infinite; }
        .fh-cta-primary {
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
        }
        .fh-cta-primary:hover {
          background-color: #248A7B;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(42,159,142,0.3);
        }
        .fh-cta-secondary {
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .fh-cta-secondary:hover {
          border-color: #2A9F8E;
          color: #2A9F8E;
          transform: translateY(-2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .fh-a1,.fh-a2,.fh-a3,.fh-a4,.fh-a5,.fh-stat,.fh-badge-float {
            animation: none !important; opacity: 1 !important;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#EDF9F7] via-[#F4FBFA] to-white pt-36 pb-20">

        {/* Decorative blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-32 h-[480px] w-[480px] rounded-full bg-[#2A9F8E]/6" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-20 h-[320px] w-[320px] rounded-full bg-[#2A9F8E]/5" />

        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">

            {/* Eyebrow */}
            <div className="fh-a1 fh-badge-float inline-flex items-center rounded-full border border-[#CFEAE5] bg-white px-5 py-2 text-sm font-semibold text-[#2A9F8E] shadow-sm">
              <BookOpen size={14} className="mr-2" />
              Formations professionnelles & étudiants
            </div>

            {/* Headline */}
            <h1 className="fh-a2 mt-8 text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl lg:text-6xl">
              Développez vos compétences
              <br />
              <span className="text-[#2A9F8E]">en conformité & performance</span>
            </h1>

            {/* Description */}
            <p className="fh-a3 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Des formations conçues pour les professionnels, entreprises et étudiants
              souhaitant maîtriser les référentiels internationaux — HACCP, ISO, RSE, ESG —
              et renforcer leurs compétences opérationnelles.
            </p>

            {/* CTAs */}
            <div className="fh-a4 mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#formations"
                className="fh-cta-primary inline-flex items-center gap-2 rounded-xl bg-[#2A9F8E] px-7 py-3.5 font-semibold text-white shadow-lg"
              >
                Voir les formations
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="fh-cta-secondary inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-[#0F172A]"
              >
                Nous contacter
              </Link>
            </div>

            {/* Stats row */}
            <div className="fh-a5 mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-100 pt-10">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="fh-stat text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7F4]">
                    <Icon size={20} className="text-[#2A9F8E]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2A9F8E]">{value}</div>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}