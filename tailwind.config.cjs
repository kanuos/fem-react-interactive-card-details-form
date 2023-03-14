/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Grotesk",
      },
    },
    colors: {
      "primary-1": "hsl(249, 99%, 64%)",
      "primary-2": "hsl(278, 94%, 30%)",
      error: "hsl(0, 100%, 66%)",
      "neutral-1": "hsl(0, 0%, 100%)",
      "neutral-2": "hsl(270, 3%, 87%)",
      "neutral-3": "hsl(279, 6%, 55%)",
      "neutral-4": "hsl(278, 68%, 11%)",
    },
  },
  plugins: [],
};
