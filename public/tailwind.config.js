// tailwind.config.js
module.exports = {
  darkMode: 'class', // This enables class-based dark mode (critical for our theme toggle)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}" // Add this if you have components folder
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors that work in both light/dark modes
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa'   // blue-400
        }
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color' // Smooth theme transitions
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // (Optional) For better blog-style content
  ],
}