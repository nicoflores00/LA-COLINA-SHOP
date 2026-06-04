import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: "#FBF7EF",
        verde: {
          DEFAULT: "#15803d",
          claro: "#22c55e",
          oscuro: "#14532d",
        },
        naranja: {
          DEFAULT: "#F2641A",
          claro: "#FF8A3D",
        },
        tinta: "#1A2E22",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        suave: "0 2px 20px -8px rgba(20, 83, 45, 0.25)",
        flota: "0 12px 40px -12px rgba(20, 83, 45, 0.35)",
      },
      keyframes: {
        subir: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulso: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        subir: "subir 0.5s ease-out both",
        pulso: "pulso 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
