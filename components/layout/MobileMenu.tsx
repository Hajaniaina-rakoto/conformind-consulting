"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full bg-white shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/e-learning">E-learning</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">À propos</Link>
            <Link href="/contact">Contact</Link>

            <Link
              href="/contact"
              className="rounded-lg bg-(--primary) px-4 py-3 text-center text-white"
            >
              Demander un accompagnement
            </Link>
          </div>
        </div>
      )}
    </>
  );
}