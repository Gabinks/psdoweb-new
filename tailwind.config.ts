import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #1A78A8, #0C364B)',
        'custom-image': "url('/images/fondForm.svg')",
      },
      screens: {
        'below-lg': { 'max': '1024px' },
        'below-xg': { 'max': '573px' },
      },
      colors: {
        "yellow": "#FFF502",
        'yellowPSDO': '#FFF60D',
        "yellow-hover": "#f3e500"
      },
      fontFamily: {
        'almarai': ['Almarai', 'sans-serif'], // Tu mets juste la famille ici
      },
      fontWeight: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        'light': 300,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        'regular': 400,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        'bold': 700,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        'extra-bold': 800,
      },
      animation: {
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-32%)',
          },
          '50%, 70%': {
            transform: 'translateY(-67%)',
          }
        },
      }
    },
  },
  plugins: [],
};
export default config;
