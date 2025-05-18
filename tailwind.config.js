import { defineConfig } from "tailwindcss";
import colors from "tailwindcss/colors.js";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors, // <-- voeg ALLE standaardkleuren toe!
      tungtung: "#FACC15",
      asf: "#1686FF",
    },
    extend: {},
  },
});
