module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        "darkpurple" : "#4b22ce",
        "lightpurple" : "#aca5f4",
        "lightpink" : "#d0b2fc",
        "bluepurple" : "#2e0ea4",
        "blackpurple" : "#1c1821",
        "mediumpurple" : "#956fa8",
        "mygreen" : "#1DC690",
        "mypink" : "#DB2955",
        "myblue" : "#278AB0"
      },
      
      fontFamily: {
        "readex" : ["'Readex Pro', sans-serif"],
        "roboto" : ["'Roboto Serif', sans-serif"]
      },
      keyframes: {
        float: {
          '0%': {
            opacity: '0',
            transform: 'translatey(0px)'
        },
        '50%': {
          opacity: '0.6',
            transform: 'translatey(-50px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translatey(0px)'
      },
    }
  },
  animation: {
    float: 'float 1.5s ease-in-out',
},
},
  },
  plugins: [],
}
