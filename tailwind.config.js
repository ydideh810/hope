/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      llama: "url('https://i.postimg.cc/yYHg04Gt/bigspace.png')",
    },
    extend: {},
  },
  plugins: [],
};
