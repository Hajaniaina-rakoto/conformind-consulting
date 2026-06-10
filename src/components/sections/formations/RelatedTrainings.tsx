// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { formations } from "@/data/formations";

// type Props = {
//   currentSlug: string;
// };

// export default function RelatedTrainings({
//   currentSlug,
// }: Props) {

//   const related = formations
//     .filter(
//       (item) => item.slug !== currentSlug
//     )
//     .slice(0, 3);

//   return (
//     <section
//       className="
//         bg-[#F8FCFB]
//         py-24
//       "
//     >
//       <div className="container-custom">
//         <h2
//           className="
//             text-3xl
//             font-bold

//             text-[#0F172A]
//           "
//         >
//           Formations similaires
//         </h2>

//         <div
//           className="
//             mt-10

//             grid
//             gap-8

//             md:grid-cols-3
//           "
//         >
//           {related.map((item) => (
//             <Link
//               key={item.slug}
//               href={`/formations/${item.slug}`}
//               className="
//                 group

//                 rounded-[28px]

//                 bg-white

//                 p-6

//                 shadow-sm

//                 transition-all

//                 hover:-translate-y-2
//                 hover:shadow-xl
//               "
//             >
//               <h3
//                 className="
//                   text-xl
//                   font-semibold
//                 "
//               >
//                 {item.title}
//               </h3>

//               <p
//                 className="
//                   mt-3

//                   text-slate-600
//                 "
//               >
//                 {item.description}
//               </p>

//               <div
//                 className="
//                   mt-5

//                   flex
//                   items-center

//                   gap-2

//                   text-[#2A9F8E]
//                   font-semibold
//                 "
//               >
//                 Découvrir

//                 <ArrowRight
//                   size={18}
//                   className="
//                     transition-transform

//                     group-hover:translate-x-1
//                   "
//                 />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formations } from "@/data/formations";

type Props = {
  currentSlug: string;
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  teal:   { bg: "bg-[#EAF7F4]", text: "text-[#2A9F8E]" },
  blue:   { bg: "bg-[#EBF4FD]", text: "text-[#2563EB]" },
  amber:  { bg: "bg-[#FEF9EC]", text: "text-[#B45309]" },
  purple: { bg: "bg-[#F3F0FE]", text: "text-[#7C3AED]" },
};

export default function RelatedTrainings({ currentSlug }: Props) {
  const related = formations.filter((item) => item.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-[#F8FCFB] py-24">
      <div className="container-custom">

        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-[#EAF7F4] px-4 py-1.5 text-sm font-semibold text-[#2A9F8E]">
              Aller plus loin
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A]">Formations similaires</h2>
          </div>
          <Link
            href="/formations"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#2A9F8E] hover:text-[#248A7B] sm:inline-flex"
          >
            Voir toutes
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => {
            const col = categoryColors[item.categoryColor];
            return (
              <Link
                key={item.slug}
                href={`/formations/${item.slug}`}
                className="group rounded-[24px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2A9F8E]/20 border border-slate-100"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${col.bg} ${col.text}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock size={12} />
                    {item.duration}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{item.tagline}</p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className={`text-sm font-bold ${col.text}`}>{item.price}</span>
                  <span className={`flex items-center gap-1 text-sm font-semibold ${col.text}`}>
                    Voir
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/formations" className="text-sm font-semibold text-[#2A9F8E] hover:text-[#248A7B]">
            Voir toutes les formations →
          </Link>
        </div>

      </div>
    </section>
  );
}