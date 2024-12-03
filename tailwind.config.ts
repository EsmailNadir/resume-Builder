import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JavaScript and TypeScript files in the 'src' directory
    "./app/**/*.{js,ts,jsx,tsx}", // If using the App Router in Next.js
    "./pages/**/*.{js,ts,jsx,tsx}", // If using the Pages Router in Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Scan all files in the 'components' folder
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#628B48",
        secondary: "#181D27",
        tertiary: "#F5CDA7",
      },
    },
  },
  plugins: [],
} satisfies Config;
