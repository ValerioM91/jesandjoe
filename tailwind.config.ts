import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jes-green": "#77AE92",
      },
      transitionDelay: {
        400: "400ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
      },
      letterSpacing: {
        "ultra-wide": "0.2em",
      },
    },
    fontFamily: {
      inter: ["var(--inter)", ...fontFamily.sans],
      batang: ["var(--batang)", ...fontFamily.sans],
      lavishly: ["var(--lavishly)", ...fontFamily.sans],
    },
  },
  plugins: [],
}
export default config
