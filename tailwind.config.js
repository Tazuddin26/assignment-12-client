/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "serif"],
        tauri: ["Tauri", "serif"],
      },
      colors: {
        "custom-light": "#4B5563", // লাইট রং
        "custom-dark": "#F3F4F6", // ডার্ক রং
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Configure DaisyUI themes
  },
};
