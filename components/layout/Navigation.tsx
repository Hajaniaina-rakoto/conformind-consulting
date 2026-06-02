import Link from "next/link";

const navLinks = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "E-learning",
    href: "/e-learning",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "À propos",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-medium transition-colors hover:text-(--primary)"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}