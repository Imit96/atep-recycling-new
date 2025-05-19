"use client";

import { ThemeProvider } from "next-themes";
import { PageTransition } from "./motion/page-transition";
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PageTransition key={pathname} transitionType="fancy">
        {children}
      </PageTransition>
    </ThemeProvider>
  );
}