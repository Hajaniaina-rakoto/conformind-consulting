"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import MegaMenu from "./mega-menu";
import { useNavigationStore } from "@/store/use-navigation-store";

// Classe utilitaire pour les liens nav avec underline animé
const navLinkClass = `
  relative

  text-white
  font-medium
  tracking-wide

  transition-all
  duration-300

  hover:text-black

  after:absolute
  after:left-0
  after:-bottom-1.5

  after:h-[2px]
  after:w-0

  after:rounded-full

  after:bg-black

  after:transition-all
  after:duration-300

  hover:after:w-full
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isServicesMenuOpen,
    setServicesMenuOpen,
  } = useNavigationStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={` fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md transition-all duration-500 bg-[#2A9F8E] ${scrolled ? "h-16 shadow-[0_12px_40px_rgba(0,0,0,0.15)]" : "h-20"}`}>
      <div className="w-full h-full px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

        <div className="flex h-full items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="ConforMind"
              width={200}
              height={70}
              priority
              className="h-11 w-auto lg:h-14 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ── DESKTOP NAVIGATION ── */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-10 px-6">

            <Link href="/" className={navLinkClass}>Accueil</Link>

            {/* SERVICES avec MegaMenu */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button className={`${navLinkClass} flex items-center gap-1`}>
                <span>Services</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 mt-0.5 ${isServicesMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div className="absolute top-full left-0 h-4 w-full" />
              <MegaMenu isOpen={isServicesMenuOpen} />
            </div>

            {/* E-LEARNING */}
            <div className="relative group">
              <button className={`${navLinkClass} flex items-center gap-1`}>
                E-learning
                <ChevronDown size={15} className="transition-transform duration-300 mt-0.5 group-hover:rotate-180" />
              </button>
              <div className="invisible opacity-0 translate-y-2 absolute left-0 top-full mt-4 w-60 rounded-2xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                <Link href="/formations" className="flex items-center gap-2 px-5 py-3 text-[#2D3138] text-sm font-medium hover:bg-[#EAF6F4] hover:text-[#2A9F8E] transition-all duration-150 hover:pl-6">
                  Formations
                </Link>
              </div>
            </div>

            <Link href="/blog" className={navLinkClass}>Blog</Link>
            <Link href="/about" className={navLinkClass}>À propos</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div className="hidden lg:flex shrink-0 items-center gap-3 xl:gap-4 ml-4">

            {/* LANGUE */}
            <button className="group flex items-center gap-2 h-10 rounded-xl border border-white/40 px-3 text-sm text-white hover:bg-white/15 hover:border-white/70 transition-all duration-200">
              <Globe size={16} className="transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-medium">FR</span>
              <span className="text-white/40">|</span>
              <span className="font-medium text-white/70 hover:text-white">EN</span>
            </button>

            {/* CTA avec shimmer */}
            <Link
              href="/contact"
              className="relative overflow-hidden inline-flex items-center justify-center h-10 px-5 rounded-xl bg-white text-sm font-semibold text-[#2A9F8E] shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-[1.03] active:scale-[0.98] group"
            >
              <span className="relative z-10">Demander un accompagnement</span>
              {/* shimmer effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#2A9F8E]/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>
          </div>

          {/* ── MOBILE BURGER ── */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-all duration-200 active:scale-90"
          >
            <span className={`block transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}>
              <Menu size={26} />
            </span>
            <span className={`block transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}>
              <X size={26} />
            </span>
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 px-4 py-5">

              <Link href="/" onClick={closeMobileMenu} className="rounded-xl px-4 py-3 font-medium text-[#2D3138] transition-all duration-150 hover:bg-[#EAF6F4] hover:text-[#2A9F8E] hover:pl-5">
                Accueil
              </Link>

              {/* SERVICES */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-2">
                <Link href="/services" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 font-semibold text-[#2D3138] transition-all duration-150 hover:bg-white hover:text-[#2A9F8E]">
                  Services
                </Link>
                <div className="ml-5 flex flex-col border-l-2 border-[#2A9F8E]/30 pl-2">
                  {[
                    { href: "/services/quality", label: "Qualité" },
                    { href: "/services/hse", label: "Hygiène - Santé - Sécurité" },
                    { href: "/services/food-safety", label: "Food Safety" },
                    { href: "/services/organic-agriculture", label: "Agriculture Biologique & Durable" },
                    { href: "/services/environment-social", label: "Environnement & Social" },
                    { href: "/services/performance", label: "Management & Performance" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} onClick={closeMobileMenu} className="rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-all duration-150 hover:bg-white hover:text-[#2A9F8E] hover:pl-5">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* E-LEARNING */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-2">
                <Link href="/formations" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 font-semibold text-[#2D3138] transition-all duration-150 hover:bg-white hover:text-[#2A9F8E]">
                  E-learning
                </Link>
                <div className="ml-5 flex flex-col border-l-2 border-[#2A9F8E]/30 pl-2">
                  <Link href="/formations" onClick={closeMobileMenu} className="rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-all duration-150 hover:bg-white hover:text-[#2A9F8E] hover:pl-5">
                    Formations
                  </Link>
                  <Link href="/bibliotheque" onClick={closeMobileMenu} className="rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-all duration-150 hover:bg-white hover:text-[#2A9F8E] hover:pl-5">
                    Bibliothèque
                  </Link>
                </div>
              </div>

              {[
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={closeMobileMenu} className="rounded-xl px-4 py-3 font-medium text-[#2D3138] transition-all duration-150 hover:bg-[#EAF6F4] hover:text-[#2A9F8E] hover:pl-5">
                  {label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200" />

              {/* LANGUE mobile */}
              <div className="px-4">
                <button className="group flex items-center gap-2 h-11 rounded-xl border border-white/25 bg-white/5 px-4 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  <Globe size={16} className="transition-transform duration-300 group-hover:rotate-12" />

                  <span className="font-medium">
                    FR
                  </span>
                  <span className="text-white/30">|</span>
                  <span className="font-medium text-white/70 transition-colors group-hover:text-white">
                    EN
                  </span>
                </button>
              </div>

              {/* CTA mobile */}
              <Link href="/contact" className=" relative overflow-hidden inline-flex items-center justify-center h-11 rounded-xl bg-white px-6 text-sm font-semibold text-[#2A9F8E] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.25)] active:scale-[0.98] group">
                <span className="relative z-10">
                  Demander un accompagnement
                </span>

                <span
                  className=" absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#2A9F8E]/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}