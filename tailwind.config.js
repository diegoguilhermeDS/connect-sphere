/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        modal: "rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        xs: [".75rem", "1rem"],
        sm: [".875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.25rem", "1.75rem"],
        xl: ["1.5rem", "2rem"],
        "2xl": ["1.75rem", "2.25rem"],
        "3xl": ["2rem", "2.5rem"],
        "4xl": ["2.25rem", "2.75rem"],
        "5xl": ["2.75rem", "3rem"],
      },
      animation: {
        slide_in_top:
          "slide_in_top .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slide_out_top:
          "slide_out_top .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        slit_in_vertical: "slit_in_vertical 0.75s ease-out both",
      },
      keyframes: {
        slide_in_top: {
          from: {
            transform: "translateY(-1000px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(80px)",
            opacity: 1,
          },
        },
        slide_out_top: {
          from: {
            transform: "translateY(80px)",
            opacity: 0.5,
          },
          to: {
            transform: "translateY(-1000px)",
            opacity: 0,
          },
        },
        slit_in_vertical: {
          "0%": {
            transform: "translateZ(-800px) rotateY(90deg)",
            opacity: 0,
          },
          "54%": {
            transform: "translateZ(-160px) rotateY(87deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translateZ(0) rotateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
