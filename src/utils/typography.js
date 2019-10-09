import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1,
  headerFontFamily: ["Archivo Black", "sans-serif", "Anton", "sans-ferif"],
  bodyFontFamily: ["Enriqueta", "serif"],
})

export default typography

export const headerSub = typography.options.headerFontFamily[2]
