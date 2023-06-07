/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        '2xl': ["1.75rem", "2.25rem"],
        '3xl': ["2rem", "2.5rem"],
        '4xl': ["2.25rem", "2.75rem"],
        '5xl': ["2.75rem", "3rem"],
      }
    },
  },
  plugins: [],
}
