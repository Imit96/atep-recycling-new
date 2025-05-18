"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageTransition } from "@/components/motion/page-transition";
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  
  // Configure transition type based on the current path
  // You can customize this logic to apply different transitions to different sections
  const getTransitionType = () => {
    if (pathname === "/") return "fancy";
    if (pathname.includes("/products")) return "zoom";
    if (pathname.includes("/contact")) return "slide";
    if (pathname.includes("/certifications")) return "fancy";
    if (pathname.includes("/mission-vision-values")) return "fade";
    if (pathname.includes("/collection-process")) return "zoom";
    if (pathname.includes("/reach-in-nigeria")) return "slide";
    if (pathname.includes("/terms-and-conditions")) return "slide-up";
    if (pathname.includes("/privacy-policy")) return "zoom";
    if (pathname.includes("/associations")) return "fancy";
    return "fade";
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TooltipProvider>
        <PageTransition transitionType={getTransitionType()}>
          {children}
        </PageTransition>
      </TooltipProvider>
    </ThemeProvider>
  );
}