"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function AnimatedHeading({
  children,
  className = "",
  delay = 0,
  tag = "h2",
}: AnimatedHeadingProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const Component = motion[tag];

  return (
    <Component
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}

// Split text into individual words with animation
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordClassName?: string;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  wordClassName = "",
}: SplitTextProps) {
  const words = text.split(" ");

  // Container variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  // Child variants (words)
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={`${className} inline-block`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block ${wordClassName}`}
          variants={child}
        >
          {word}
          {index !== words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.div>
  );
}
