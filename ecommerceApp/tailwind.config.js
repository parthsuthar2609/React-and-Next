// tailwind.config.js
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
          notoSansGujarati: ["Noto Sans Gujarati", "sans-serif"],
          openSans: ["Open Sans", "sans-serif"],
          raleway: ["Raleway", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
      },
    },
    plugins: [],
  }