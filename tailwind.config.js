module.exports = {
  content: ["./src/**/*.{twig,js,html}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0a16", surface: "#120f2a", card: "#1a1638",
        text: "#f0eaff", muted: "#c3b8ff", primary: "#b076ff", accent: "#ff6ad5",
      },
      borderRadius: { xl: "16px" }
    },
  },
  plugins: [],
};