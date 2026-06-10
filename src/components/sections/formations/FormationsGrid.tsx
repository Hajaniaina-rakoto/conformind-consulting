import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const formations = [
  {
    slug: "decouverte",
    title: "Découverte",
    duration: "1 jour",
    price: "150 000 Ar",
    description:
      "Acquérir les fondamentaux des référentiels qualité, sécurité et environnement.",
  },
  {
    slug: "expert",
    title: "Expert",
    duration: "2 jours",
    price: "350 000 Ar",
    description:
      "Maîtriser les exigences des référentiels et leur application opérationnelle.",
  },
  {
    slug: "auditeur-interne",
    title: "Auditeur Interne",
    duration: "2 jours",
    price: "350 000 Ar",
    description:
      "Conduire efficacement des audits internes et préparer les certifications.",
  },
  {
    slug: "etudiants",
    title: "Spécial Étudiants",
    duration: "Flexible",
    price: "À partir de 50 000 Ar",
    description:
      "Préparer son insertion professionnelle et découvrir les métiers QHSE.",
  },
];

export default function FormationsGrid() {
  return (
    <section
      id="formations"
      className="bg-white py-24"
    >
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {formations.map((formation) => (
            <article
              key={formation.slug}
              className="
                group

                rounded-[32px]

                border
                border-slate-200

                bg-white

                p-8

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-[#2A9F8E]/30
                hover:shadow-xl
              "
            >
              <div
                className="
                  inline-flex

                  rounded-full

                  bg-[#EAF7F4]

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-[#2A9F8E]
                "
              >
                {formation.price}
              </div>

              <h3
                className="
                  mt-6

                  text-2xl
                  font-bold

                  text-[#0F172A]
                "
              >
                {formation.title}
              </h3>

              <p
                className="
                  mt-4

                  leading-relaxed

                  text-slate-600
                "
              >
                {formation.description}
              </p>

              <div
                className="
                  mt-6

                  flex
                  items-center

                  gap-2

                  text-sm

                  text-slate-500
                "
              >
                <Clock size={16} />
                {formation.duration}
              </div>

              <Link
                href={`/formations/${formation.slug}`}
                className="
                  mt-8

                  inline-flex

                  items-center
                  gap-2

                  font-semibold

                  text-[#2A9F8E]
                "
              >
                Découvrir

                <ArrowRight
                  size={18}
                  className="
                    transition-transform

                    group-hover:translate-x-1
                  "
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}