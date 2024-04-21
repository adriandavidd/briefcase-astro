const { nextui } = require("@nextui-org/react");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Onest: ["Onest Variable"],
      },
    },
  },
  plugins: [require("daisyui")],
};
