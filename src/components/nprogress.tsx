"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";

// Configure NProgress
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 300,
  showSpinner: false,
});

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return null;
}
