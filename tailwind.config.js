/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebarDesktop': "url('./src/assets/images/bg-sidebar-desktop.svg')",
        'sidebarMobile': "url('./src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
    fontFamily:{
      ubuntu_regular:["ubuntu-regular", "san-serif" ],
      ubuntu_medium:["ubuntu-medium", "san-serif" ],
      ubuntu_bold:["ubuntu-bold", "san-serif" ],
    }
  },
  plugins: [],
}

