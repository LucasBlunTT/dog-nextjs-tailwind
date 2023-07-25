/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        user: "url('../assets/usuario.svg')",
      },
      transitionDuration: {
        default: '250ms',
      },
      transitionProperty: {
        default: 'ease-in-out',
      },
    },
  },
  plugins: [],
};
