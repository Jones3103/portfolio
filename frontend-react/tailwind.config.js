/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070b13',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(56, 189, 248, 0.15)',
          cyan: '#00f0ff',
          blue: '#3b82f6',
          emerald: '#10b981',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 240, 255, 0.25)',
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.25)'
      }
    },
  },
  plugins: [],
}

