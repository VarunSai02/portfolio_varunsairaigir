import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-faint": "var(--fg-faint)",
        border: "var(--border)",
        accent: "var(--accent)",
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift1: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(4rem, 3rem)" },
        },
        drift2: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-3rem, -4rem)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out both",
        blink: "blink 1.1s steps(1) infinite",
        drift1: "drift1 22s ease-in-out infinite alternate",
        drift2: "drift2 26s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
