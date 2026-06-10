import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource/inter/400.css";
import "@fontsource/poppins/700.css";

import "@/styles/globals.css";

import AppProvider from "@/providers/app-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/sections/Footer";


type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "ConforMind Consulting",
    template: "%s | ConforMind Consulting",
  },
  description:
    "Votre partenaire en conformité et performance durable",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <Header/>
        <AppProvider>{children}</AppProvider>
        <Footer/>
      </body>
    </html>
  );
}