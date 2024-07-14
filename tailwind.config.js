/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Noto:["Noto Serif", "serif"],
    },
    backgroundImage:{
      'footer_bg': "url('Assets/footerbg.svg')",
      'expert_bg': "url('Assets/expertbg.svg')",
      'program_bg': "url('Assets/programbg.svg')",
      'hero_bg': "url('Assets/herosectionbg.svg')",
      'border': "url('Assets/border.svg')",

      'footer_bgmobile': "url('Assets/footerbgmobile.svg')",
      'expert_bgmobile': "url('Assets/expertbgmobile.svg')",
      'program_bgmobile': "url('Assets/programbgmobile.svg')",
      'hero_bgmobile': "url('Assets/herobgmobile.svg')",
    },
    border:{
      'border': "url('Assets/border.svg')",
    }
  },
  plugins: [],
}

