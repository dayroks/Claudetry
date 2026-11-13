"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { ParallaxBlock } from "../animations/ParallaxBlock";
import { fadeUp, stagger, viewportOnce } from "../animations/Variants";

/** Лічильник: рахує від 0 до value, коли блок у в'юпорті */
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) { ref.current.textContent = String(value); return; }
    const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = String(Math.round(v)); } });
    return () => c.stop();
  }, [inView, value, reduce]);
  return <span ref={ref}>{reduce ? value : 0}</span>;
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden border-y border-line bg-elevated/40 py-24 md:py-32">
      <ParallaxBlock word="ORBITA" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <motion.div variants={fadeUp}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">/ про нас</p>
          <h2 id="about-title" className="font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
            Ми не варимо каву. Ми <span className="text-coffee">запускаємо</span> тебе.
          </h2>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col gap-12 lg:pt-8">
          <p className="text-lg leading-relaxed text-muted">
            ORBITA почалась з простої думки: кава має бути подією, а не звичкою. Ми самі підбираємо зерно, самі калібруємо кожен помол і не підпускаємо до машини нічого випадкового.
            Тут немає кави «на швидку руку». Є точний рецепт, чесна температура і напій, після якого хочеться почати щось нове.
          </p>
          <dl className="grid grid-cols-3 gap-4 border-t border-line pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-2 font-mono text-[11px] uppercase leading-snug tracking-wider text-muted sm:text-xs">{s.label}</dt>
                <dd className="font-display text-5xl font-bold tracking-tighter text-neon sm:text-6xl"><Counter value={s.value} /></dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  );
}
