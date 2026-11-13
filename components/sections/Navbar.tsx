"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/constants";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Блокуємо скрол під оверлеєм + закриття по Esc
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "bg-transparent")}>
      <nav aria-label="Головна навігація" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <a href="#top" className="font-display text-xl font-bold tracking-tighter">{SITE.name}</a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} className="text-sm text-muted transition-colors hover:text-text">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button href="#booking" variant="primary" className="hidden !px-5 !py-2 md:inline-flex">Забронювати</Button>
          <button onClick={() => setOpen(true)} aria-label="Відкрити меню" aria-expanded={open} aria-controls="mobile-menu" className="rounded-sm p-2 md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu" role="dialog" aria-modal="true" aria-label="Мобільне меню"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg px-6 md:hidden"
          >
            <div className="flex h-16 items-center justify-between">
              <span className="font-display text-xl font-bold tracking-tighter">{SITE.name}</span>
              <button onClick={() => setOpen(false)} aria-label="Закрити меню" className="rounded-sm p-2"><X size={24} /></button>
            </div>
            <ul className="mt-12 flex flex-1 flex-col gap-6">
              {NAV.map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
                  <a href={n.href} onClick={() => setOpen(false)} className="font-display text-5xl font-bold tracking-tighter">{n.label}</a>
                </motion.li>
              ))}
            </ul>
            <div className="pb-12"><Button href="#booking" onClick={() => setOpen(false)} className="w-full">Забронювати</Button></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
