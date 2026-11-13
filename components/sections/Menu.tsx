"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MENU } from "@/lib/constants";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger, viewportOnce } from "../animations/Variants";

function Strength({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-1" role="img" aria-label={`Міцність ${level} з 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`h-1.5 w-3 rounded-pill ${i < level ? "bg-neon" : "bg-line"}`} />
      ))}
    </span>
  );
}

export function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionTitle kicker="/ орбіти" title="ОБЕРИ СВОЮ ОРБІТУ" id="menu-title" />
      <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MENU.map((d) => (
          <motion.li key={d.id} variants={fadeUp}>
            <Card className="flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between">
                <span className="font-mono text-sm text-neon">{d.id}</span>
                <span className="font-mono text-lg">{d.price} ₴</span>
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tighter">{d.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-coffee">{d.type}</p>
              <p className="mt-4 flex-1 text-muted">{d.desc}</p>
              <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
                <span className="rounded-sm border border-line px-2 py-1 font-mono text-xs text-muted">{d.milk ? "з молоком" : "без молока"}</span>
                <Strength level={d.strength} />
              </div>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
      <div className="mt-12">
        <a href="#menu" className="group inline-flex items-center gap-2 font-mono text-sm text-neon">
          Повне меню <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
