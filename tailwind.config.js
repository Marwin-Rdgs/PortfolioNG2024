/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
 "colors": {
  "jaune": "#f0a500",
  "bleu": "#2c3236",
  "noir": "#131517",
  "blanc": "#f2f4f7",
  "cyan": "#258bce"
 },
 "fontSize": {
  "base": "1rem",
  "lg": "1.5rem",
  "xl": "1.75rem",
  "2xl": "2.8125rem"
 },
 "fontFamily": {
  "julius-sans-one": "Julius Sans One",
  "inter": "Inter",
  "roboto": "Roboto"
 },
 "screens": {
  phone: '274px',
  // tablette: '425px',
  desktop: '1024px'
},
 "borderRadius": {
  "none": "0",
  "xs": "0.46525049209594727rem",
  "sm": "0.5625rem",
  "default": "0.625rem",
  "lg": "0.630303144454956rem",
  "xl": "0.875rem",
  "2xl": "0.9375rem",
  "3xl": "0.951923131942749rem",
  "4xl": "1.125rem",
  "5xl": "1.3039772510528564rem",
  "6xl": "1.5845071077346802rem",
  "7xl": "1.8125rem",
  "8xl": "2.375rem"
 }
  },
  plugins: [],
}
}