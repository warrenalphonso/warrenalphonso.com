import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

stAnnesTheme.baseFontSize = "14px" // was 16px.
// Only downloads a few font weights by default.
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-st-annes/src/index.js
stAnnesTheme.googleFonts = [
  {
    name: "Source Serif Pro",
    styles: ["600"],
  },
  {
    name: "Source Sans Pro",
    styles: ["400", "400i", "600", "600i"],
  },
]
stAnnesTheme.boldWeight = 600 // Defaults to 700

const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
