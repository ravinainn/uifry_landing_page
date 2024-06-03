/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        hfull: "80vh",
      },
      animation: {
        pulseS: "animation: pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      transitionDelay: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
    },
  },
  plugins: [],
};
