"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GridAnimationProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  columns?: number;
  gap?: number;
}

export function AnimatedGrid({
  children,
  className = "",
  itemClassName = "",
  columns = 3,
  gap = 8,
}: GridAnimationProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-${gap} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Special image reveal animation
interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
}: ImageRevealProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-accent/80 z-10 origin-left"
        initial={{ scaleX: 1 }}
        whileInView={{
          scaleX: 0,
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        }}
        viewport={{ once: true }}
      />
      
      {/* You'll need to import and use next/image here */}
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
