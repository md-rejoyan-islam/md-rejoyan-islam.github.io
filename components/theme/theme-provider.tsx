"use client";

import { Attribute, ThemeProvider as NextThemesProvider } from "next-themes";

import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  enableSystem?: boolean;
  attribute?: Attribute;
  defaultTheme?: string;
  themes?: string[];
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
