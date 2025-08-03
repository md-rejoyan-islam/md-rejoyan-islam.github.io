"use client";

import { Attribute, ThemeProvider as NextThemesProvider } from "next-themes";

import { ReactNode } from "react";

interface ThemeProviderProps {
  readonly children: ReactNode;
  readonly enableSystem?: boolean;
  readonly attribute?: Attribute;
  readonly defaultTheme?: string;
  readonly themes?: string[];
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
