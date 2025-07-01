/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'minecraft': {
          'grass': '#7CB342',
          'dirt': '#8D6E63',
          'stone': '#757575',
          'diamond': '#4FC3F7',
          'gold': '#FFD700',
          'redstone': '#F44336',
        },
        'pokemon': {
          'red': '#FF0000',
          'blue': '#0000FF',
          'yellow': '#FFD700',
          'green': '#00FF00',
          'purple': '#800080',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 