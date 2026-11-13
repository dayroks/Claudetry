"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Велике фонове слово з паралаксом (opacity 0.03) */
export function ParallaxBlock({ word }: { word: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.span
        style={{ y: reduce ? 0 : y }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[32vw] font-bold leading-none tracking-tighter text-text opacity-[0.03]"
      >
        {word}
      </motion.span>
    </div>
  );
}
