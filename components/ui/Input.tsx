import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldProps = { label: string; id: string; error?: string; children: ReactNode };

/** Обгортка поля: лейбл + повідомлення про помилку (aria-live) */
export function Field({ label, id, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-widest text-muted">{label}</label>
      {children}
      <p id={`${id}-err`} role="alert" className="min-h-[1rem] font-mono text-xs text-coffee">{error}</p>
    </div>
  );
}

const line =
  "w-full border-0 border-b border-line bg-transparent py-3 font-display text-base text-text placeholder:text-muted/60 transition-colors focus:border-neon focus:outline-none focus:ring-0";

export function Input({ className, ...p }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(line, className)} {...p} />;
}

export function Select({ className, children, ...p }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(line, "[&>option]:bg-elevated", className)} {...p}>{children}</select>
  );
}
