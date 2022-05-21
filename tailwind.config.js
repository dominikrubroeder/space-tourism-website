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
        'space-accent': '#D0D6F9',
      },
      backgroundImage: {
        'home-desktop': 'url("/assets/home/background-home-desktop.jpg")',
        'home-tablet': 'url("/assets/home/background-home-tablet.jpg")',
        'home-mobile': 'url("/assets/home/background-home-mobile.jpg")',
        'destination-desktop':
          'url("/assets/destination/background-destination-desktop.jpg")',
        'destination-tablet':
          'url("/assets/destination/background-destination-tablet.jpg")',
        'destination-mobile':
          'url("/assets/destination/background-destination-mobile.jpg")',
        'crew-desktop': 'url("/assets/crew/background-crew-desktop.jpg")',
        'crew-tablet': 'url("/assets/crew/background-crew-tablet.jpg")',
        'crew-mobile': 'url("/assets/crew/background-crew-mobile.jpg")',
        'technology-desktop':
          'url("/assets/technology/background-technology-desktop.jpg")',
        'technology-tablet':
          'url("/assets/technology/background-technology-tablet.jpg")',
        'technology-mobile':
          'url("/assets/technology/background-technology-mobile.jpg")',
        'technology-launch-vehicle-portrait':
          'url("/assets/technology/image-launch-vehicle-portrait.jpg")',
        'technology-launch-vehicle-landscape':
          'url("/assets/technology/image-launch-vehicle-landscape.jpg")',
        'technology-spaceport-portrait':
          'url("/assets/technology/image-spaceport-portrait.jpg")',
        'technology-space-capsule-portrait':
          'url("/assets/technology/image-space-capsule-portrait.jpg")',
      },
    },
  },
  plugins: [],
};
