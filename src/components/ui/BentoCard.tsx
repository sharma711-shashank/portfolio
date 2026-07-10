"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { scaleIn } from "@/lib/animations";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  delay?: number;
}

export function BentoCard({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
}: BentoCardProps) {
  const colClass =
    colSpan === 3
      ? "md:col-span-3"
      : colSpan === 2
      ? "md:col-span-2"
      : "col-span-1";
  const rowClass = rowSpan === 2 ? "md:row-span-2" : "row-span-1";

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={`bento-glow rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/5 hover:-translate-y-1 ${colClass} ${rowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
