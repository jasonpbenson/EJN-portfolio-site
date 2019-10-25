import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.2,
  googleFonts: [
    { name: "Archivo Black", styles: ["Regular"] },
    { name: "Anton", styles: ["Regular"] },
    { name: "Enriqueta", styles: ["Regular"] },
  ],
  headerFontFamily: ["Archivo Black", "sans-serif", "Anton", "sans-serif"],
  bodyFontFamily: ["Enriqueta", "serif"],
})

export default typography
