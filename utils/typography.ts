import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

// Delete Google Fonts reliance. From: https://jfelix.info/blog/how-to-make-a-static-blog-with-next-js
delete stAnnesTheme.googleFonts

const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
