"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  transitionType?: "fade" | "slide" | "slide-up" | "zoom" | "fancy" | "flip";
}

export function PageTransition({ 
  children, 
  transitionType = "fade" 
}: PageTransitionProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Force prefetching
  useEffect(() => {
    // Get all internal links and prefetch them
    const prefetchLinks = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          router.prefetch(href);
        }
      });
    };
    
    // Initial prefetch
    prefetchLinks();
    
    // Setup mutation observer to catch dynamically added links
    const observer = new MutationObserver(prefetchLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [router]);
  
  const getVariants = () => {
    switch(transitionType) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          enter: { opacity: 1, transition: { duration: 0.3 } },
          exit: { opacity: 0, transition: { duration: 0.3 } },
        };
      case "slide":
        return {
          hidden: { x: -300, opacity: 0 },
          enter: { x: 0, opacity: 1, transition: { duration: 0.3 } },
          exit: { x: 300, opacity: 0, transition: { duration: 0.3 } },
        };
      case "slide-up":
        return {
          hidden: { y: 300, opacity: 0 },
          enter: { y: 0, opacity: 1, transition: { duration: 0.3 } },
          exit: { y: -300, opacity: 0, transition: { duration: 0.3 } },
        };
      case "zoom":
        return {
          hidden: { scale: 0.95, opacity: 0 },
          enter: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
          exit: { scale: 1.05, opacity: 0, transition: { duration: 0.3 } },
        };
      case "flip":
        return {
          hidden: { rotateY: 90, opacity: 0 },
          enter: { rotateY: 0, opacity: 1, transition: { duration: 0.3 } },
          exit: { rotateY: -90, opacity: 0, transition: { duration: 0.3 } },
        };
      case "fancy":
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          enter: { y: 0, opacity: 1, transition: { duration: 0.3 } },
          exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
        };
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={getVariants()}
        className="min-h-screen flex flex-col"
        onAnimationComplete={() => {
          // Ensure scroll to top after transition completes
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
