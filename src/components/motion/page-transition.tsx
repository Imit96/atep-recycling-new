"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
  transitionType?: "fade" | "slide" | "slide-up" | "zoom" | "fancy" | "flip";
}

export function PageTransition({ 
  children, 
  transitionType = "fancy" 
}: PageTransitionProps) {
  const pathname = usePathname();
  
  // Different transition variants based on the selected type
  const getVariants = () => {
    switch(transitionType) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          enter: { 
            opacity: 1,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          },
          exit: { 
            opacity: 0,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
          }
        };
      case "slide":
        return {
          hidden: { opacity: 0, x: -300 },
          enter: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          },
          exit: { 
            opacity: 0, 
            x: 300,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        };
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 200 },
          enter: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          },
          exit: { 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          enter: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          },
          exit: { 
            opacity: 0, 
            scale: 1.05,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        };
      case "flip":
        return {
          hidden: { 
            opacity: 0, 
            rotateY: 90,
            perspective: 1000
          },
          enter: { 
            opacity: 1, 
            rotateY: 0,
            transition: { 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }
          },
          exit: { 
            opacity: 0, 
            rotateY: -90,
            transition: { 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1] 
            }
          }
        };
      case "fancy":
      default:
        return {
          hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.98,
            filter: "blur(8px)"
          },
          enter: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.1,
              when: "beforeChildren",
              delay: 0.1
            }
          },
          exit: { 
            opacity: 0, 
            y: -20,
            scale: 0.98,
            filter: "blur(8px)",
            transition: {
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
    }
  };
  
  const variants = getVariants();

  // Child animations for staggered effects
  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    enter: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className="w-full h-full"
      >
        <motion.div variants={childVariants} className="h-full">
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
