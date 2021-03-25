import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

// Here's the default theme style settings:
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-st-annes/src/index.js

// I like bold being 600 font weight with 14px font size.
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
