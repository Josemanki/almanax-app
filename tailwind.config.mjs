/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'wow-green': '#1eff00',
        'wow-blue': '#0070dd',
        'wow-purple': '#a335ee',
        'wow-orange': '#ff8000',
      },
    },
  },
  plugins: [],
};
