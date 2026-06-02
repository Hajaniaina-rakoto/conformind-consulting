import Link from "next/link";
import Container from "./Container";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            ConforMind
          </Link>

          <Navigation />

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-lg bg-(--primary) px-5 py-3 text-white transition hover:opacity-90"
            >
              Demander un accompagnement
            </Link>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}