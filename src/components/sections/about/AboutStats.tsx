"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Missions réalisées",
  },
  {
    value: 20,
    suffix: "+",
    label: "Référentiels maîtrisés",
  },
  {
    value: 100,
    suffix: "%",
    label: "Accompagnement personnalisé",
  },
  {
    value: 6,
    suffix: "",
    label: "Domaines d'expertise",
  },
];

function Counter({
  end,
  suffix,
}: {
  end: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#0F5F54]
          via-[#1B7A6D]
          to-[#2A9F8E]
        "
      />

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0

            h-[350px]
            w-[350px]

            -translate-x-1/2

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            h-[250px]
            w-[250px]

            rounded-full

            bg-white/5

            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full

              border
              border-white/20

              bg-white/10

              px-4
              py-2

              text-sm
              font-semibold

              text-white
            "
          >
            Nos chiffres clés
          </span>

          <h2
            className="
              mt-6

              text-4xl
              lg:text-5xl

              font-bold

              text-white
            "
          >
            Des résultats qui parlent
          </h2>

          <p
            className="
              mt-6

              text-lg

              leading-8

              text-white/80
            "
          >
            Chaque mission contribue à renforcer
            la conformité, la performance et la
            croissance durable de nos partenaires.
          </p>
        </div>

        {/* Stats */}

        <div
          className="
            mt-16

            grid
            gap-6

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group

                rounded-[30px]

                border
                border-white/10

                bg-white/10

                p-8

                text-center

                backdrop-blur-md

                transition-all
                duration-500

                hover:-translate-y-2
                hover:bg-white/15
              "
            >
              <div
                className="
                  text-5xl
                  lg:text-6xl

                  font-extrabold

                  text-white
                "
              >
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <div
                className="
                  mx-auto
                  my-4

                  h-px
                  w-16

                  bg-white/30
                "
              />

              <p
                className="
                  text-sm
                  lg:text-base

                  font-medium

                  text-white/85
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}