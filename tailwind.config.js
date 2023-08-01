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

