/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Onest: ["Onest Variable"],
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        carousel: 'carousel 40s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
};
