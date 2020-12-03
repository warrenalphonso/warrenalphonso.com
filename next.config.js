/* eslint-disable @typescript-eslint/no-var-requires */
// This is remark-math@3.0.1 because MDX uses Remark 12 parser.
// See: https://www.npmjs.com/package/remark-math
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")
const remarkFootnotes = require("remark-footnotes")

// From MDX Next.js guide: https://mdxjs.com/getting-started/next
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkFootnotes],
    rehypePlugins: [rehypeKatex],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
})
