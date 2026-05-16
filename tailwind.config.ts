import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'SF Pro Display'", "'Helvetica Neue'", "Arial", "sans-serif"],
        body: ["'SF Pro Text'", "'Helvetica Neue'", "Arial", "sans-serif"],
        mono: ["'SF Mono'", "Monaco", "monospace"],
      },
      colors: {
        apple: {
          blue: "#0071e3",
          "blue-dark": "#0077ed",
          gray: {
            50: "#f5f5f7",
            100: "#e8e8ed",
            200: "#d2d2d7",
            300: "#b0b0b8",
            400: "#6e6e73",
            500: "#515154",
            600: "#3d3d41",
            700: "#2d2d2f",
            800: "#1d1d1f",
            900: "#111111",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "typewriter": "typewriter 0.5s steps(1) forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" } },
        gradient: { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      backgroundSize: {
        "300%": "300%",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
