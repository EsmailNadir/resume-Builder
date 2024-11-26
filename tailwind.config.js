/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JavaScript and TypeScript files in the 'src' directory
    "./app/**/*.{js,ts,jsx,tsx}", // If using the App Router in Next.js
    "./pages/**/*.{js,ts,jsx,tsx}", // If using the Pages Router in Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Scan all files in the 'components' folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
