import type { ReactNode } from "react";

import Header from "@/components/layout/header";

type LocaleLayoutProps = {
  children: ReactNode;
};

export default function LocaleLayout({
  children,
}: LocaleLayoutProps) {
  return (
    <>
      <Header />

      <main className="pt-20">
        {children}
      </main>
    </>
  );
}