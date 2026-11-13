"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { KineticText } from "../animations/KineticText";
import { Button } from "../ui/Button";

/** Абстрактна SVG: чашка в центрі + 3 орбіти зі «зернами». Анімація — CSS */
function OrbitArt() {
  const orbits = [
    { r: 90, d: "22s", rev: false, dots: [0, 180] },
    { r: 140, d: "36s", rev: true, dots: [60, 200, 300] },
    { r: 185, d: "54s", rev: false, dots: [120] },
  ];
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Чашка кави в центрі та три орбіти із зернами" className="h-full w-full">
      <defs>
        <radialGradient id="cup" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#E0A07A" />
          <stop offset="100%" stopColor="#C67B4C" />
        </radialGradient>
        <radialGradient id="halo"><stop offset="0%" stopColor="#7BFFD4" stopOpacity="0.18" /><stop offset="100%" stopColor="#7BFFD4" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="200" cy="200" r="195" fill="url(#halo)" />
      {orbits.map((o) => (
        <g key={o.r} className={`orbit ${o.rev ? "orbit-rev" : ""}`} style={{ ["--d" as string]: o.d }}>
          <circle cx="200" cy="200" r={o.r} fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="2 6" />
          {o.dots.map((a) => {
            const rad = (a * Math.PI) / 180;
            return <circle key={a} cx={200 + o.r * Math.cos(rad)} cy={200 + o.r * Math.sin(rad)} r="5" fill="#7BFFD4" />;
          })}
        </g>
      ))}
      <g className="cup-spin">
        <circle cx="200" cy="200" r="52" fill="url(#cup)" />
        <circle cx="200" cy="200" r="36" fill="#0A0A0F" />
        <circle cx="200" cy="200" r="28" fill="#14141C" stroke="rgba(198,123,76,0.5)" />
        <path d="M200 180 q10 20 0 40 q-10 -20 0 -40z" fill="#C67B4C" opacity="0.8" />
      </g>
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-neon">// space coffee station</p>
          <KineticText lines={["ТВОЯ ОРБІТА", "ПОЧИНАЄТЬСЯ ТУТ"]} className="font-display text-[clamp(2.5rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-tighter" />
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 max-w-md text-lg text-muted"
          >
            Спешелті-кава, яка виводить тебе на нову висоту.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#booking" variant="primary">Забронювати столик</Button>
            <Button href="#menu" variant="ghost">Дивитись меню</Button>
          </motion.div>
        </div>
        <div className="mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-none"><OrbitArt /></div>
      </div>
      <a href="#menu" aria-label="Прокрутити до меню" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-neon">
        <ArrowDown className="scroll-arrow" size={24} />
      </a>
    </section>
  );
}
