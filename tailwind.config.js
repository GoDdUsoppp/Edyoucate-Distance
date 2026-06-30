/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#171731",
          darker: "#232347",
          red: "#E50000",
          redHover: "#C70000",
          light: "#F4F5F8",
          text: "#1A1A1A",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "glow-spin": "glowSpin 10s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-delayed": "float-slow 10s ease-in-out infinite 2s",
      },
      keyframes: {
        glowSpin: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float-slow": {
          "0%,100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};