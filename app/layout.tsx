import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/constants";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
// У JetBrains Mono є кирилиця
const mono = JetBrains_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: `${SITE.name} — космічна кав'ярня`,
  description: SITE.description,
  openGraph: { title: SITE.name, description: SITE.description, type: "website", locale: "uk_UA" },
};
export const viewport: Viewport = { themeColor: "#0A0A0F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${display.variable} ${mono.variable}`}>
      <body>
        <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-pill focus:bg-neon focus:px-4 focus:py-2 focus:text-bg">
          До змісту
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
