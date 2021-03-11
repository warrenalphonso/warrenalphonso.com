// _app.tsx overrides Next.js' `App` component to initialize pages:
// https://nextjs.org/docs/advanced-features/custom-app
import React, { AppProps } from "next/app"
import { useEffect } from "react"
import $ from "jquery"

import Layout from "components/Layout"

import "styles/tailwind.css"

const numColors = 6
const wordsNums = ["zero", "one", "two", "three", "four", "five"]

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    let counter = Math.floor(Math.random() * numColors)
    $("a").each((i, elem) => {
      // Remove any "link-" classes so we don't end up at "link-five" which
      // takes precedence over the rest
      const classes = $(elem).attr("class")
      if (classes) {
        $(elem).removeClass(
          classes.split(" ").filter((c) => c.indexOf("link-") >= 0)
        )
      }

      $(elem).addClass("link-" + wordsNums[counter % 6])
      counter += 1
    })
  })

  useEffect(() => {
    let counter = Math.floor(Math.random() * numColors)
    $("blockquote").each((i, elem) => {
      elem.style["border-color"] = `var(--${wordsNums[counter % 6]})`
      counter += 1
    })
  })

  useEffect(() => {
    let counter = Math.floor(Math.random() * numColors)
    $(".cluster").each((i, elem) => {
      elem.style["background-color"] = `var(--${wordsNums[counter % 6]})`
      counter += 1
    })
  })

  return (
    <Layout>
      {/* Katex CDN: https://mdxjs.com/guides/math-blocks */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
        integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
