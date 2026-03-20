import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const luxuryEasing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FDF8F2",
        beige: "#F5F1E8",
        gold: "#C9A84C",
        "gold-light": "#E8D5A3",
        charcoal: "#1A1A1A",
        taupe: "#6B5C4A",
        muted: "#9E8E7E",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "ui-serif", "serif"],
        "dm-sans": ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: luxuryEasing,
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": `fade-in-up 0.8s ${luxuryEasing} forwards`,
      },
      animationDelay: {
        "stagger-1": "0.1s",
        "stagger-2": "0.2s",
        "stagger-3": "0.3s",
        "stagger-4": "0.4s",
        "stagger-5": "0.5s",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const delays = theme("animationDelay") as Record<string, string>;
      const utilities = Object.entries(delays).reduce(
        (acc, [key, value]) => {
          acc[`.${key}`] = { animationDelay: value };
          return acc;
        },
        {} as Record<string, { animationDelay: string }>
      );

      addUtilities(utilities);
    }),
  ],
};

export default config;
