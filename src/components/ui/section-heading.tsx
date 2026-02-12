"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex flex-col items-center gap-3 retro-panel-soft px-5 py-4">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--foreground)]">
          {title}
        </h2>
        <div className="h-1.5 w-24 bg-[var(--primary)] border-2 border-black rounded-full" />
      </div>

      {subtitle && (
        <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
