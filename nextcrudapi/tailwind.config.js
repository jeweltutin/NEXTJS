/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",      // media or class -- media for device class for manual select
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px"
      },
      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b"
      }
    },
  },
  plugins: [],
}
