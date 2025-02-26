/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A6E6',
        'primary-dark': '#0095D1',
        secondary: '#2A3342',
        accent: '#F0F7FF',
        success: '#34D399',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#8B5CF6'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.625rem',
        'xl': '0.75rem',
        '2xl': '1rem'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};