"use client";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-36 pb-24 lg:pt-44 lg:pb-32">

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#2A9F8E]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <span
          className="
            inline-flex

            rounded-full

            border
            border-white/10

            bg-white/5

            px-5
            py-2

            text-sm
            font-semibold

            text-[#5EDFD2]
          "
        >
          Contactez-nous
        </span>

        <h1
          className="
            mt-8

            text-4xl
            md:text-5xl
            lg:text-7xl

            font-bold

            text-white
          "
        >
          Discutons de votre projet
        </h1>

        <p
          className="
            mx-auto
            mt-8

            max-w-3xl

            text-lg
            md:text-xl

            leading-8

            text-slate-300
          "
        >
          Notre équipe est à votre disposition pour
          répondre à vos questions et vous accompagner
          dans vos projets de conformité, qualité,
          sécurité et performance.
        </p>

      </div>
    </section>
  );
}