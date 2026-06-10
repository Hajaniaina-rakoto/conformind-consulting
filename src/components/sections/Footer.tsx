"use client";

import Link from "next/link";
import Image from "next/image";

import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
        relative
        overflow-hidden

        bg-[#0F172A]

        text-white
      "
        >
            {/* Background Effects */}

            <div className="absolute inset-0 -z-10">
                <div
                    className="
            absolute
            top-0
            right-0

            h-[400px]
            w-[400px]

            rounded-full

            bg-[#2A9F8E]/10

            blur-3xl
          "
                />

                <div
                    className="
            absolute
            bottom-0
            left-0

            h-[350px]
            w-[350px]

            rounded-full

            bg-[#35B3A1]/10

            blur-3xl
          "
                />
            </div>

            <div className="container-custom">
                <div
                    className="
            grid
            gap-12

            py-20

            md:grid-cols-2
            xl:grid-cols-4
          "
                >
                    {/* Company */}

                    <div>
                        <Link
                            href="/"
                            className="flex items-center shrink-0"
                        >
                            <Image
                                src="/images/logof.png"
                                alt="ConforMind"
                                width={180}
                                height={60}
                                priority
                                className="
                                  h-20
                                  w-auto
                                  lg:h-12
                                "
                            />
                        </Link>

                        <p
                            className="
                mt-5

                leading-relaxed

                text-slate-300
              "
                        >
                            Cabinet de conseil, audit,
                            formation et accompagnement
                            en conformité, qualité,
                            sécurité, environnement
                            et performance durable.
                        </p>

                        <div
                            className="
                mt-6

                flex
                gap-4
              "
                        >
                            <Link
                                href="#"
                                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-white/10

                  transition-all

                  hover:bg-[#2A9F8E]
                "
                            >
                                <FaLinkedinIn size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-white/10

                  transition-all

                  hover:bg-[#2A9F8E]
                "
                            >
                                <FaFacebookF size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}

                    <div>
                        <h4
                            className="
                text-lg
                font-semibold
                text-white
              "
                        >
                            Expertises
                        </h4>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    href="/services/quality"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Qualité & ISO
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services/hse"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    HSE
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services/food-safety"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Food Safety
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services/organic-agriculture"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Agriculture Durable
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services/environment-social"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Environnement & Social
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Formations */}

                    <div>
                        <h4
                            className="
                text-lg
                font-semibold

                text-white
              "
                        >
                            Ressources
                        </h4>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    href="/formations"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Formations
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/bibliotheque"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Bibliothèque
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/blog"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    À propos
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-slate-300 hover:text-[#8FC7C0]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}

                    <div>
                        <h4
                            className="
                text-lg
                font-semibold

                text-white
              "
                        >
                            Contact
                        </h4>

                        <div className="mt-5 space-y-5">
                            <div
                                className="
                  flex
                  gap-3
                "
                            >
                                <Phone
                                    size={18}
                                    className="mt-1 text-[#2A9F8E]"
                                />

                                <span className="text-slate-300">
                                    +261 32 46 139 49
                                </span>
                            </div>

                            <div
                                className="
                  flex
                  gap-3
                "
                            >
                                <Mail
                                    size={18}
                                    className="mt-1 text-[#2A9F8E]"
                                />

                                <span className="text-slate-300">
                                    info.conformind@gmail.com
                                </span>
                            </div>

                            <div
                                className="
                  flex
                  gap-3
                "
                            >
                                <MapPin
                                    size={18}
                                    className="mt-1 text-[#2A9F8E]"
                                />

                                <span className="text-slate-300">
                                    Antananarivo,
                                    Madagascar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}

                <div
                    className="
            flex
            flex-col

            gap-4

            border-t
            border-white/10

            py-6

            text-sm

            text-slate-400

            md:flex-row
            md:items-center
            md:justify-between
          "
                >
                    <p>
                        © 2026 ConforMind Consulting.
                        Tous droits réservés.
                    </p>

                    <div
                        className="
              flex
              gap-6
            "
                    >
                        <Link href="#">
                            Mentions légales
                        </Link>

                        <Link href="#">
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}