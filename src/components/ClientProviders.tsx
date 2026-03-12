"use client";

import { LangProvider } from "@/lib/i18n";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
