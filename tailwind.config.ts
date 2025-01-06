import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'background': '#1c1c27',
        'dark-purple': '#2D2D3F',
        'light-purple': '#6366f1',
        'pink': '#FF5C93',
        'pink-dark': '#FF1168',
        'error': '#ef4444',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
