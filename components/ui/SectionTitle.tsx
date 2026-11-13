"use client";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../animations/Variants";

export function SectionTitle({ kicker, title, id }: { kicker: string; title: string; id?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 md:mb-16">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">{kicker}</p>
      <h2 id={id} className="font-display text-4xl font-bold leading-[0.95] tracking-tighter sm:text-5xl lg:text-7xl">{title}</h2>
    </motion.div>
  );
}
