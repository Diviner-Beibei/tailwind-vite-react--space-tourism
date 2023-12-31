/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
    },
    letterSpacing: {
      tiny: '1.25px',
      small: '2.7px',
      medium: '3.38px',
      big: '4.72px',
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'desktop-homebg': "url('/home/background-home-desktop.jpg')",
        'tablet-homebg': "url('/home/background-home-tablet.jpg')",
        'mobile-homebg': "url('/home/background-home-mobile.jpg')",
        'menubg': "url('/home/menubg.png')",
        'desktop-destinationbg': "url('/destination/background-destination-desktop.jpg')",
        'tablet-destinationbg': "url('/destination/background-destination-tablet.jpg')",
        'mobile-destinationbg': "url('/destination/background-destination-mobile.jpg')",

        'desktop-crewbg': "url('/crew/background-crew-desktop.jpg')",
        'tablet-crewbg': "url('/crew/background-crew-tablet.jpg')",
        'mobile-crewbg': "url('/crew/background-crew-mobile.jpg')",

        'desktop-technologybg': "url('/technology/background-technology-desktop.jpg')",
        'tablet-technologybg': "url('/technology/background-technology-tablet.jpg')",
        'mobile-technologybg': "url('/technology/background-technology-mobile.jpg')",
      },
      colors: {
        'primary': "#D0D6F9",
        'divide-color': '#383B4B',
        'selected-color': '#0B0D17',
      },
      height: {
        screen: '100dvh',
      },
      screens: {
        'ty': '375px',
      },
    },
  },
  plugins: [],
}

