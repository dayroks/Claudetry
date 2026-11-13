import type { Config } from "tailwindcss";

// Токени дизайну беремо з CSS-змінних (globals.css)
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        elevated: "var(--bg-elevated)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        coffee: "var(--accent-coffee)",
        neon: "var(--accent-neon)",
        line: "var(--border)",
      },
      borderRadius: { sm: "4px", card: "16px", pill: "999px" },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: { glow: "0 0 40px -8px rgba(123,255,212,0.35)" },
    },
  },
  plugins: [],
};
export default config;
