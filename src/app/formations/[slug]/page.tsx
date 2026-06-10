// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";

// import {
//   Clock,
//   BookOpen,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// import { formations } from "@/data/formations";
// import RelatedTrainings from "@/components/sections/formations/RelatedTrainings";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {

//   const { slug } = await params;

//   const formation = formations.find(
//     (item) => item.slug === slug
//   );

//   if (!formation) {
//     return {
//       title: "Formation introuvable",
//     };
//   }

//   return {
//     title: `${formation.title} | ConforMind`,
//     description: formation.description,
//   };
// }

// export default async function FormationDetailsPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {

//   const { slug } = await params;

//   const formation = formations.find(
//     (item) => item.slug === slug
//   );

//   if (!formation) {
//     notFound();
//   }

//   return (
//     <main className="pt-24">
//       {/* HERO */}

//       <section
//         className="
//           relative
//           overflow-hidden

//           bg-gradient-to-b
//           from-[#F4FBFA]
//           to-white

//           py-24
//         "
//       >
//         <div className="container-custom">
//           <div
//   className="
//     mb-8

//     flex
//     flex-wrap
//     items-center

//     gap-2

//     text-sm

//     text-slate-500
//   "
// >
//   <Link href="/">
//     Accueil
//   </Link>

//   <span>/</span>

//   <Link href="/formations">
//     Formations
//   </Link>

//   <span>/</span>

//   <span className="text-[#2A9F8E]">
//     {formation.title}
//   </span>
// </div>
//           <div
//             className="
//               grid
//               gap-12

//               lg:grid-cols-2
//               lg:items-center
//             "
//           >
//             <div>
//               <span
//                 className="
//                   inline-flex

//                   rounded-full

//                   bg-[#EAF7F4]

//                   px-4
//                   py-2

//                   text-sm
//                   font-semibold

//                   text-[#2A9F8E]
//                 "
//               >
//                 {formation.category}
//               </span>

//               <h1
//                 className="
//                   mt-6

//                   text-4xl
//                   md:text-5xl

//                   font-bold

//                   text-[#0F172A]
//                 "
//               >
//                 {formation.title}
//               </h1>

//               <p
//                 className="
//                   mt-6

//                   text-lg

//                   leading-relaxed

//                   text-slate-600
//                 "
//               >
//                 {formation.description}
//               </p>

//               <div
//                 className="
//                   mt-8

//                   flex
//                   flex-wrap
//                   gap-4
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2

//                     rounded-xl

//                     bg-white

//                     px-4
//                     py-3

//                     shadow-sm
//                   "
//                 >
//                   <Clock size={18} />
//                   {formation.duration}
//                 </div>

//                 <div
//                   className="
//                     rounded-xl

//                     bg-[#2A9F8E]

//                     px-5
//                     py-3

//                     font-semibold

//                     text-white
//                   "
//                 >
//                   {formation.price}
//                 </div>
//               </div>
//             </div>

//             <div
//               className="
//                 relative

//                 h-[350px]
//                 md:h-[500px]
//                 lg:h-[600px]
//                 shadow-[0_30px_80px_rgba(15,23,42,0.15)]
//                 overflow-hidden
//                 rounded-[32px]
//               "
//             >
//               <Image
//                 src={formation.image}
//                 alt={formation.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OBJECTIFS */}

//       <section className="py-24">
//         <div className="container-custom">
//           <h2
//             className="
//               text-3xl
//               font-bold

//               text-[#0F172A]
//             "
//           >
//             Objectifs de la formation
//           </h2>

//           <div
//             className="
//               mt-10

//               grid
//               gap-6

//               md:grid-cols-2
//             "
//           >
//             {formation.objectifs.map(
//               (objectif) => (
//                 <div
//                   key={objectif}
//                   className="
//                     flex
//                     gap-3

//                     rounded-2xl

//                     border
//                     border-slate-200

//                     p-5
//                   "
//                 >
//                   <CheckCircle2
//                     className="
//                       mt-1

//                       text-[#2A9F8E]
//                     "
//                   />

//                   <p>{objectif}</p>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {/* PROGRAMME */}

//       <section
//         className="
//           bg-[#F8FCFB]

//           py-24
//         "
//       >
//         <div className="container-custom">
//           <h2
//             className="
//               text-3xl
//               font-bold

//               text-[#0F172A]
//             "
//           >
//             Programme
//           </h2>

//           <div
//             className="
//               mt-10

//               grid
//               gap-6

//               md:grid-cols-2
//               xl:grid-cols-3
//             "
//           >
//             {formation.programmes.map(
//               (programme) => (
//                 <div
//                   key={programme}
//                   className="
//                     rounded-2xl

//                     bg-white

//                     p-6

//                     shadow-sm
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                     "
//                   >
//                     <BookOpen
//                       className="
//                         text-[#2A9F8E]
//                       "
//                     />

//                     <span
//                       className="
//                         font-medium
//                       "
//                     >
//                       {programme}
//                     </span>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}

//       <section className="py-24">
//         <div className="container-custom">
//           <div
//             className="
//               rounded-[32px]

//               bg-gradient-to-r
//               from-[#2A9F8E]
//               to-[#39B7A4]

//               px-8
//               py-16

//               text-center
//               text-white
//             "
//           >
//             <h2
//               className="
//                 text-4xl
//                 font-bold
//               "
//             >
//              Prêt à développer vos compétences ?
//             </h2>

//             <p
//               className="
//                 mt-5

//                 text-white/90
//               "
//             >
//               Nos experts vous accompagnent dans le choix du programme le plus adapté à vos objectifs.
//             </p>

//             <Link
//               href="/contact"
//               className="
//                 mt-8

//                 inline-flex

//                 items-center
//                 gap-2

//                 rounded-xl

//                 bg-white

//                 px-8
//                 py-4

//                 font-semibold

//                 text-[#2A9F8E]
//               "
//             >
//               Nous contacter

//               <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </section>
//       <RelatedTrainings
//   currentSlug={formation.slug}
// />
//     </main>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  Users,
  ChevronRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { formations } from "@/data/formations";
import RelatedTrainings from "@/components/sections/formations/RelatedTrainings";

type Props = { params: Promise<{ slug: string }> };

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  teal:   { bg: "bg-[#EAF7F4]",  text: "text-[#2A9F8E]",  border: "border-[#B8DDD7]" },
  blue:   { bg: "bg-[#EBF4FD]",  text: "text-[#2563EB]",  border: "border-[#BFDBFE]" },
  amber:  { bg: "bg-[#FEF9EC]",  text: "text-[#B45309]",  border: "border-[#FDE68A]" },
  purple: { bg: "bg-[#F3F0FE]",  text: "text-[#7C3AED]",  border: "border-[#DDD6FE]" },
};

export async function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = formations.find((item) => item.slug === slug);
  if (!f) return { title: "Formation introuvable" };
  return {
    title: `${f.title} | ConforMind Consulting`,
    description: f.description,
    openGraph: {
      title: `${f.title} | ConforMind Consulting`,
      description: f.description,
      images: [{ url: f.image }],
    },
  };
}

export default async function FormationDetailsPage({ params }: Props) {
  const { slug } = await params;
  const formation = formations.find((item) => item.slug === slug);
  if (!formation) notFound();

  const col = categoryColors[formation.categoryColor];

  return (
    <main className="pt-24">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4FBFA] to-white py-20">

        {/* Decorative bg blob */}
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-28 h-[420px] w-[420px] rounded-full bg-[#2A9F8E]/5" />

        <div className="container-custom">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#2A9F8E]">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/formations" className="hover:text-[#2A9F8E]">Formations</Link>
            <ChevronRight size={14} />
            <span className={col.text}>{formation.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>
              <span className={`inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${col.bg} ${col.text} ${col.border}`}>
                {formation.category}
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl">
                {formation.title}
              </h1>

              <p className="mt-2 text-lg font-medium text-slate-400 italic">{formation.tagline}</p>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">{formation.description}</p>

              {/* Meta chips */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm">
                  <Clock size={16} className="text-slate-400" />
                  <span className="font-medium text-slate-700">{formation.duration}</span>
                </div>
                <div className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${col.bg} ${col.text} ${col.border}`}>
                  {formation.price}
                </div>
                {formation.priceDetail && (
                  <div className="flex items-center rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-xs text-slate-500 shadow-sm">
                    {formation.priceDetail}
                  </div>
                )}
              </div>

              {/* Audience preview */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Users size={15} className="text-slate-400" />
                <span className="text-xs text-slate-400 font-medium">Pour :</span>
                {formation.audience.slice(0, 3).map((a) => (
                  <span key={a} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {a}
                  </span>
                ))}
                {formation.audience.length > 3 && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">
                    +{formation.audience.length - 3}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2A9F8E] px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[#248A7B] hover:-translate-y-0.5"
                >
                  S'inscrire à cette formation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#programme"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-all hover:border-[#2A9F8E] hover:text-[#2A9F8E]"
                >
                  Voir le programme
                </Link>
              </div>
            </div>

            {/* Right — image */}
            <div className="relative h-[340px] overflow-hidden rounded-[32px] shadow-2xl md:h-[480px] lg:h-[520px]">
              <Image
                src={formation.image}
                alt={formation.title}
                fill
                priority
                className="object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-white/90 px-4 py-3 backdrop-blur-sm shadow-lg">
                <Sparkles size={16} className={col.text} />
                <div>
                  <p className="text-xs font-semibold text-[#0F172A]">{formation.avantages[0]}</p>
                  <p className="text-[11px] text-slate-400">{formation.avantages[1]}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── AVANTAGES STRIP ── */}
      <section className={`${col.bg} border-y ${col.border} py-7`}>
        <div className="container-custom">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {formation.avantages.map((av) => (
              <li key={av} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 size={16} className={col.text} />
                {av}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-10">
            <span className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ${col.bg} ${col.text}`}>
              Ce que vous apprendrez
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A]">
              Objectifs de la formation
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {formation.objectifs.map((obj, i) => (
              <div
                key={obj}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${col.bg} ${col.text}`}>
                  {i + 1}
                </div>
                <p className="text-slate-700 leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section id="programme" className="bg-[#F8FCFB] py-20">
        <div className="container-custom">
          <div className="mb-10">
            <span className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ${col.bg} ${col.text}`}>
              Contenu détaillé
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A]">Programme</h2>
            <p className="mt-2 text-slate-500">
              {formation.programmes.length} thématiques · {formation.programmes.reduce((acc, p) => acc + p.items.length, 0)} modules au total
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {formation.programmes.map((prog) => (
              <div
                key={prog.theme}
                className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${col.bg}`}>
                    <BookOpen size={16} className={col.text} />
                  </div>
                  <h3 className="font-semibold text-[#0F172A]">{prog.theme}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {prog.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <ChevronRight size={14} className={`mt-0.5 shrink-0 ${col.text}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTICIPANTS ── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

            <div>
              <span className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ${col.bg} ${col.text}`}>
                Public visé
              </span>
              <h2 className="mt-3 text-3xl font-bold text-[#0F172A]">
                À qui s'adresse cette formation ?
              </h2>
              <p className="mt-3 text-slate-500">
                Cette formation est adaptée aux profils suivants :
              </p>
              <ul className="mt-6 space-y-3">
                {formation.audience.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className={col.text} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Promo card */}
            <div className={`rounded-[24px] border ${col.border} ${col.bg} p-8`}>
              <h3 className="text-xl font-bold text-[#0F172A]">Profitez de nos offres groupes</h3>
              <p className="mt-2 text-sm text-slate-600">
                Des réductions exclusives pour les entreprises envoyant plusieurs participants.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "3 participants", reduction: "10 % de réduction" },
                  { label: "5 participants", reduction: "15 % de réduction" },
                  { label: "Accompagnement signé", reduction: "50 % déduit sur l'audit" },
                ].map(({ label, reduction }) => (
                  <li key={label} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span className="text-sm font-medium text-slate-600">{label}</span>
                    <span className={`text-sm font-bold ${col.text}`}>{reduction}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2A9F8E] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#248A7B]"
              >
                Demander un devis groupe
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="rounded-[32px] bg-gradient-to-r from-[#2A9F8E] to-[#39B7A4] px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              Prêt à développer vos compétences ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Nos experts vous accompagnent dans le choix du programme le plus adapté à vos objectifs et votre réalité terrain.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#2A9F8E] shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Nous contacter
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/formations"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Voir toutes les formations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <RelatedTrainings currentSlug={formation.slug} />

    </main>
  );
}