// _app.tsx overrides Next.js' `App` component to initialize pages:
// https://nextjs.org/docs/advanced-features/custom-app
import React, { useEffect } from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"

import Layout from "components/Layout"
import useColors from "utils/useColors"
import { pageview } from "utils/gtag"

import "styles/tailwind.css"

const isProduction = process.env.NODE_ENV == "production"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Choose colors whenever page is loaded
  useColors()

  // Google Analytics: https://stackoverflow.com/a/65081431/13697995
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

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
