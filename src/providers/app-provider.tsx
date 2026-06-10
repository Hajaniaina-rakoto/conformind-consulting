"use client";

import QueryProvider from "./query-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <QueryProvider>{children}</QueryProvider>
  );
}