"use client";

import {
    Building2,
    Mail,
    Phone,
    User,
    Send,
} from "lucide-react";

export default function ContactSection() {
    return (
        <section className=" relative overflow-hiddenbg-gradient-to-b from-[#F7FCFB] via-white to-[#F3F9F8] py-6 lg:py-6">
            <div className="container-custom">
                <div
                    className="mx-auto max-w-3xl text-center">
                   <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold tracking-wide"
            style={{
              backgroundColor: "rgba(42,159,142,0.1)",
              border: "1px solid rgba(42,159,142,0.28)",
              color: "#1A7A6A",
            }}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: "#2A9F8E" }} />
            Contactez-nous
          </span>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] ">
                        Discutons de votre projet
                    </h2>

                    <p className="mt-6 text-lg text-slate-600">
                        Notre équipe vous répond dans les
                        meilleurs délais.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 lg:grid-cols-[420px_1fr]">
                    {/* Infos */}

                    <div className="rounded-[32px] bg-[#0F172A] p-8 text-white ">
                        <h3 className="text-2xl font-bold ">
                            Besoin d'un accompagnement ?
                        </h3>

                        <p className=" mt-4 text-white/80">
                            Formation, audit, certification
                            ou amélioration des systèmes
                            de management.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex gap-4">
                                <Phone />
                                <span>+261 32 46 139 49</span>
                            </div>

                            <div className="flex gap-4">
                                <Mail />
                                <span>
                                    info.conformind@gmail.com
                                </span>
                            </div>

                            <div className="flex gap-4">
                                <Building2 />
                                <span>
                                    Antananarivo,
                                    Madagascar
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}

                    <form
                        className="
              rounded-[32px]

              border
              border-slate-200

              bg-white/95
                backdrop-blur-sm

                p-8
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
                    >
                        <div
                            className="
                grid
                gap-6

                md:grid-cols-2
              "
                        >
                            <div>
                                <label className="mb-2 block font-medium">
                                    Nom complet *
                                </label>

                                <div className="relative">
                                    <User
                                        size={18}
                                        className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2

                      text-slate-400
                    "
                                    />

                                    <input
                                        type="text"
                                        className="
                      w-full

                      rounded-xl

                      border
                      border-slate-200

                      py-3
                      pl-11
                      pr-4

                      outline-none

                      focus:border-[#2A9F8E]
                    "
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Organisation *
                                </label>

                                <input
                                    type="text"
                                    className="
                    w-full

                    rounded-xl

                    border
                    border-slate-200

                    px-4
                    py-3

                    outline-none

                    focus:border-[#2A9F8E]
                  "
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Email *
                                </label>

                                <input
                                    type="email"
                                    className="
                    w-full

                    rounded-xl

                    border
                    border-slate-200

                    px-4
                    py-3

                    outline-none

                    focus:border-[#2A9F8E]
                  "
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Téléphone
                                </label>

                                <input
                                    type="tel"
                                    className="
                    w-full

                    rounded-xl

                    border
                    border-slate-200

                    px-4
                    py-3

                    outline-none

                    focus:border-[#2A9F8E]
                  "
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="mb-2 block font-medium">
                                Type de demande
                            </label>

                            <select
                                className="
                  w-full

                  rounded-xl

                  border
                  border-slate-200

                  px-4
                  py-3
                "
                            >
                                <option>
                                    Formation
                                </option>
                                <option>
                                    Audit
                                </option>
                                <option>
                                    Certification
                                </option>
                                <option>
                                    Conseil
                                </option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <label className="mb-2 block font-medium">
                                Votre besoin
                            </label>

                            <textarea
                                rows={6}
                                className="
                  w-full

                  rounded-xl

                  border
                  border-slate-200

                  px-4
                  py-3

                  resize-none
                "
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                mt-8

                inline-flex

                items-center
                gap-2

                rounded-xl

                bg-[#2A9F8E]

                px-8
                py-4

                font-semibold
                text-white

                transition-all

                hover:bg-[#248A7B]
              "
                        >
                            Envoyer ma demande

                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}