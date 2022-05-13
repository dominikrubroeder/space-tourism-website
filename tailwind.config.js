module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow'],
        bellefair: 'Bellefair',
        barlow: 'Barlow',
        'barlow-condensed': 'Barlow Condensed',
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '2rem' }],
      },
      colors: {
        'space-dark': '#0B0D17',
        'space-accent': '#0B0D17',
      },
    },
  },
  plugins: [],
};
