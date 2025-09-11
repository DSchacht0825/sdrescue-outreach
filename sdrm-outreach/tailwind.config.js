/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sdrm-blue': '#1E3A8A',
        'sdrm-navy': '#0F172A',
        'sdrm-gold': '#F59E0B',
        'sdrm-gray': '#6B7280',
        'sdrm-light': '#F3F4F6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}