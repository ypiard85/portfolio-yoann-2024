import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';


const customInputPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.input': {
      '@apply font-open-sans bg-blue-light block w-full rounded-md border-0 px-3 py-5 text-zinc-300 outline-none ring-1 placeholder:text-zinc-300 ring-blue': {},
    },
  });
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;',
        'right-to-left' : 'right-to-left linear 20s infinite;',
        'left-to-right' : 'left-to-right  linear 20s infinite;',
        'fadeY': 'fadeY 150ms'
      },
      keyframes: {
        'fadeY': {
          '0%': { transform: 'translateX(-450px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'ping': {
          '75%, 100%': {
            'transform': 'scale(1.3)',
            'opacity': '0'
          }
        },
        'right-to-left': {
          '0%' : { 'transform': 'translate(0)'},
          '100%' : { 'transform': 'translate(-100%)'},
        },
        'left-to-right': {
          '0%' : { 'transform': 'translate(-100%)'},
          '100%' : { 'transform': 'translate(0%)'},
        },

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "open-sans" : ['Open Sans', 'sans-serif'],
        "jost" : ['Jost', 'sans-serif']
      },
      colors:{
        'blue-dark': '#0E0E5F',
        'blue-light': '#191970',
        'blue': '#21b1f4',
        'gold': '#ffc576'
      }
    },
  },
  plugins: [customInputPlugin],
};
export default config;
