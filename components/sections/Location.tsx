"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { CONTACTS, HOURS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, viewportOnce } from "../animations/Variants";

/** Абстрактна «карта»: сітка, вулиці й пульсуюча точка (не реальна мапа) */
function AbstractMap() {
  return (
    <svg viewBox="0 0 400 320" role="img" aria-label="Схематична карта з позначкою кав'ярні" className="h-full w-full">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.05)" />
        </pattern>
      </defs>
      <rect width="400" height="320" fill="url(#grid)" />
      <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2">
        <path d="M0 220 C100 200 160 120 260 130 S380 60 400 40" />
        <path d="M120 0 C140 100 120 200 180 320" />
        <path d="M0 90 H400" strokeDasharray="4 8" />
        <path d="M300 0 V320" strokeDasharray="4 8" />
      </g>
      <circle cx="210" cy="148" r="70" fill="none" stroke="rgba(123,255,212,0.15)" strokeDasharray="2 6" />
      <circle className="pulse-ring" cx="210" cy="148" r="4" fill="none" stroke="#7BFFD4" strokeWidth="1.5" />
      <circle cx="210" cy="148" r="6" fill="#7BFFD4" />
      <text x="224" y="144" fill="#F5F3EF" fontSize="11" fontFamily="monospace">ORBITA</text>
    </svg>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="loc-title" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionTitle kicker="/ координати" title="ТОЧКА ПОСАДКИ" id="loc-title" />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="aspect-[5/4] overflow-hidden rounded-card border border-line bg-elevated">
          <AbstractMap />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col justify-center gap-8 font-mono">
          <div className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-neon" size={20} aria-hidden="true" />
            <address className="not-italic"><p className="text-lg">{CONTACTS.address}</p><p className="mt-1 text-sm text-muted">{CONTACTS.addressNote}</p></address>
          </div>
          <div className="flex gap-4">
            <Clock className="mt-1 shrink-0 text-neon" size={20} aria-hidden="true" />
            <ul className="space-y-1">
              {HOURS.map((h) => (
                <li key={h.days} className="flex gap-6"><span className="w-24 text-muted">{h.days}</span><span>{h.time}</span></li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-1 shrink-0 text-neon" size={20} aria-hidden="true" />
            <a href={CONTACTS.phoneHref} className="text-lg transition-colors hover:text-neon">{CONTACTS.phone}</a>
          </div>
          <div><Button href={CONTACTS.mapsUrl} target="_blank" rel="noopener noreferrer" variant="primary">Прокласти маршрут</Button></div>
        </motion.div>
      </div>
    </section>
  );
}
