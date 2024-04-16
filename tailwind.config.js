/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "url('/src/assets/nf_bg.jpg')"
      }
    },
  },
  plugins: [],
}