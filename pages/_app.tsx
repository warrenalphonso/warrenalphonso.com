// _app.tsx overrides Next.js' `App` component to initialize pages:
// https://nextjs.org/docs/advanced-features/custom-app
import React, { AppProps } from "next/app"

import Layout from "components/Layout"

import "styles/tailwind.css"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
