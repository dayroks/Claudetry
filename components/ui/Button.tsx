import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "solid";
const base =
  "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-display text-sm font-medium tracking-tight transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";
const variants: Record<Variant, string> = {
  primary: "border border-neon text-neon hover:bg-neon hover:text-bg hover:shadow-glow",
  ghost: "border border-line text-text hover:border-text/40 hover:bg-white/5",
  solid: "bg-neon text-bg hover:shadow-glow",
};

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };
type BtnProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: BtnProps | LinkProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const cls = cn(base, variants[variant], className);
  if ("href" in rest && rest.href) {
    return <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
  }
  return <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
