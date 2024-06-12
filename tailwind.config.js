/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark_grey: '#313131',
        grey: '#EBEEEE',
        modal_black: '#111111',
        dark_blue: "#11ABB0",
        bg_black: "#151515",
      },
      fontWeight: {
        bold_650: '630',
        bold_800: '800',
        bold_700: '700',
      },
      fontFamily: {
        sans: ['sans-serif'],
        open_sans: ['opensans-regular', 'sans-serif'],
        open_sans_light: ['opensans-light', 'sans-serif'],
        open_sans_bold: ['opensans-bold', 'sans-serif'],
        lora_regular: ['lora-regular', 'serif'],
        poppins: ['poppins-regular', 'sans-serif']
      },
      textColor: {
        orange: "#F06000",
        grey: "#888888",
        blue: "#27ABB0",
        light_grey: '#838C95',
        verlight_grey: '#CCCCCC',
        dark_grey: '#313131',
        light_blue: "#84D5D8",
        light_black: "#838C95"


      },
      borderColor: {
        verlight_grey: '#CCCCCC',
        light_blue: '#84D5D8'
      },
      letterSpacing: {
        spacewider: '.25em',
        spacewide: '.20em',
      },
      fontSize: {
        'custom-sx': '0.2rem',
        'custom-s': '0.8rem',
        'custom-sm': '1.025rem',
        'custom-xsm': '1.42rem',
        'custom-lg': '1.0625rem',
        'custom-xlg': '1.2625rem',
        'custom-xxlg': '1.3625rem',
        'custom-xxxlg': '1.465rem',
        'custom-xxxxlg': '1.465rem',
        'custom-xl': '1.35rem',
      },
      lineHeight: {
        linetight: '1.25',
        linesnug: '1.9',
      },
      borderWidth: {
        '1.5': '1.989px',
        '5': '5px',
      },
    },
  },
  plugins: [],
};
