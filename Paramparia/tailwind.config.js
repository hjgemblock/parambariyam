module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',  // Include mdx files if needed
    './public/index.html',
    './components/**/*.{js,jsx,ts,tsx}', // Add components directory
    './pages/**/*.{js,jsx,ts,tsx}', // Add pages directory for larger Next.js apps
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-white-black': 'radial-gradient(circle, rgba(2, 26, 64, 1) 0%, rgba(0, 5, 5, 1) 100%)',
        // Extend gradients if needed for more variations
        'radial-white-blue': 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 255, 1) 100%)',
      },
    },
  },
  plugins: [],
};
