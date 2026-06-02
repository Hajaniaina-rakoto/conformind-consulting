import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ConforMind Consulting",
    template: "%s | ConforMind Consulting",
  },

  description:
    "Cabinet spécialisé en audit, formation, conseil, conformité, agriculture biologique, sécurité sanitaire des aliments et performance durable.",

  keywords: [
    "ConforMind",
    "Consulting",
    "Audit",
    "Formation",
    "ISO",
    "HACCP",
    "Food Safety",
    "Agriculture Biologique",
    "QHSE",
    "Certification",
  ],

  authors: [
    {
      name: "ConforMind Consulting",
    },
  ],

  openGraph: {
    title: "ConforMind Consulting",
    description:
      "Votre partenaire en conformité et performance durable.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body>
        <Header />

        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}