/* eslint-disable @typescript-eslint/no-var-requires */
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")

// From MDX Next.js guide: https://mdxjs.com/getting-started/next
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
})
