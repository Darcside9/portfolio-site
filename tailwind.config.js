/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}", // Ensure Tailwind purges unused CSS from components
      "./src/app/**/*.{js,ts,jsx,tsx}", // If you're using the new app directory in Next.js 13
    ],
    theme: {
      extend: {
        colors: {
          // You can define custom colors here
          'primary': '#4b0082',
          'secondary': '#1a1a1a',
          'accent': '#4a90e2',
        },
        fontFamily: {
          'space-grotesk': ['Space Grotesk', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
          'inter': ['Inter', 'sana-serif'],
        },
      },
    },
    plugins: [],
  }
  