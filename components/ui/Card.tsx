"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Картка: hover scale 1.02 + glow-border + неонова риска зверху */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      whileHover={reduce ? undefined : { scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-elevated p-6 transition-[border-color,box-shadow] duration-300 hover:border-neon/50 hover:shadow-glow focus-within:border-neon/50",
        className
      )}
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-neon transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100" />
      {children}
    </motion.article>
  );
}
