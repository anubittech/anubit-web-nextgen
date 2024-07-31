import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,mdx,ts,tsx}',
    './components/**/*.{js,jsx,mdx,ts,tsx}',
    './app/**/*.{js,jsx,mdx,ts,tsx}',
    './src/**/*.{js,jsx,mdx,ts,tsx}',
  ],
  prefix: "",
  theme: {
   screens:{
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }
    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }
    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
   },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config