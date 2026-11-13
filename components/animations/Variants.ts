import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Спрацьовує, коли секція заходить у в'юпорт на ~30%
export const viewportOnce = { once: true, margin: "0px 0px -30% 0px" } as const;
