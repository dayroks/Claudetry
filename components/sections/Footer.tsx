"use client";
import { ArrowUp } from "lucide-react";
import { CONTACTS, NAV, SITE, SOCIALS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const h = "mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted";
  const a = "text-text transition-colors hover:text-neon";
  return (
    <footer id="footer" className="border-t border-line px-6 pt-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-[clamp(3.5rem,18vw,16rem)] font-bold leading-[0.85] tracking-tighter">{SITE.name}</p>
        <p className="mt-4 font-mono text-sm text-muted">{SITE.tagline}</p>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <nav aria-label="Навігація у футері">
            <h2 className={h}>Навігація</h2>
            <ul className="space-y-2">{NAV.map((n) => <li key={n.href}><a className={a} href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className={h}>Соцмережі</h2>
            <ul className="space-y-2">{SOCIALS.map((s) => <li key={s.label}><a className={a} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
          </div>
          <div>
            <h2 className={h}>Контакти</h2>
            <ul className="space-y-2">
              <li><a className={a} href={CONTACTS.phoneHref}>{CONTACTS.phone}</a></li>
              <li><a className={a} href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a></li>
              <li className="text-muted">{CONTACTS.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line py-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">© {year} ORBITA. Made with gravity.</p>
          <button onClick={top} className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:text-neon">
            На орбіту
            <span className="grid h-10 w-10 place-items-center rounded-pill border border-line transition-all group-hover:-translate-y-1 group-hover:border-neon">
              <ArrowUp size={16} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
