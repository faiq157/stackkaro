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
        "rgba-blue-600": "rgba(10, 86, 241, 0.15)",
      },
      backgroundImage: (theme) => ({
        "gradient-to-b":
          "linear-gradient(180deg, rgba(10, 86, 241, 0.15) 0%, rgba(10, 86, 241, 0) 100%)",
        "radial-gradient":
          "radial-gradient(90deg, rgba(10, 86, 241, 0.15) 0%, rgba(255, 255, 255, 0.15) 52.6%, rgba(10, 86, 241, 0.15) 100%)",
      }),
    },
  },
  variants: {
    extend: {},
  },
};
