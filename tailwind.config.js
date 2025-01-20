/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "serif"], // Custom font family
        tauri: ["Tauri", "serif"], // Custom font family
      },
    },
  },
  plugins: [require("daisyui")],
};
