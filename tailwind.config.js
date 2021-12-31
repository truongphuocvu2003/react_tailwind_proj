module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'Helvetica', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-1': 'spin 1s linear infinite',
        'spin-2': 'spin 2s linear infinite',
        'spin-3': 'spin 3s linear infinite',
        'spin-5': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}

