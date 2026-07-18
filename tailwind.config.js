/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F4',
        surface: '#FFFFFF',
        ink: '#1A1A1A',
        'ink-muted': '#5C5A56',
        accent: '#2F3E46',
        'accent-soft': '#C9D6D3',
        gold: '#B8935F',
        border: '#E4E0D8',
      },
      fontFamily: {
        script: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
