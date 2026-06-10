"use client";

import Image from "next/image";

const partners = [
  "/images/partners/partner-1.png",
  "/images/partners/partner-2.png",
  "/images/partners/partner-3.png",
  "/images/partners/partner-4.png",
  "/images/partners/partner-5.png",
  "/images/partners/partner-6.png",
];

export default function PartnersSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-white
        via-[#F8FCFB]
        to-white

        py-10
        lg:py-12
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute
            top-0
            left-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-[#2A9F8E]/10

            blur-3xl
          "
        />
      </div>

      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold tracking-wide"
            style={{
              backgroundColor: "rgba(42,159,142,0.1)",
              border: "1px solid rgba(42,159,142,0.28)",
              color: "#1A7A6A",
            }}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: "#2A9F8E" }} />
             Partenaires & Références
          </span>

          <h2
            className="
              mt-6

              text-3xl
              md:text-4xl
              lg:text-5xl

              font-bold

              text-[#0F172A]
            "
          >
            Ils nous font confiance
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl

              text-lg
              leading-relaxed

              text-slate-100
            "
          >
            Nous accompagnons des entreprises,
            ONG, coopératives et institutions dans
            leurs démarches de conformité,
            certification et amélioration continue.
          </p>
        </div>

        {/* Logo Slider */}

        <div
          className="
            mt-20

            overflow-hidden

            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >
          <div
            className="
              partners-track

              flex
              w-max
              items-center
              gap-8
            "
          >
            {[...partners, ...partners].map(
              (logo, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-28
                    w-56

                    items-center
                    justify-center

                    rounded-3xl

                    border
                    border-slate-200

                    bg-white

                    px-6

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <Image
                    src={logo}
                    alt="Partenaire"
                    width={160}
                    height={80}
                    className="
                      max-h-16
                      w-auto

                      grayscale

                      transition-all
                      duration-300

                      hover:grayscale-0
                    "
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}