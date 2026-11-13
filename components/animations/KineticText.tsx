"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./Variants";

type Props = { lines: string[]; className?: string; stagger?: number };

/** Заголовок, де слова по черзі виїжджають знизу (0.05с між словами) */
export function KineticText({ lines, className, stagger = 0.05 }: Props) {
  const reduce = useReducedMotion();
  let idx = 0;
  return (
    <h1 className={className} aria-label={lines.join(" ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.split(" ").map((word) => {
            const i = idx++;
            return (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * stagger, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
