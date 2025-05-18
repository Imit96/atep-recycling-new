"use client";

import { motion } from "framer-motion";
import React from "react";

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function StaggeredList({
  children,
  className = "",
  delay = 0.1,
  staggerDelay = 0.1,
}: StaggeredListProps) {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
