// _app.tsx overrides Next.js' `App` component to initialize pages:
// https://nextjs.org/docs/advanced-features/custom-app
import React, { AppProps } from "next/app"

import Layout from "components/layout"

import "styles/tailwind.css"

// The St. Annes theme uses "Source Serif Pro" and "Source Sans Pro" as per:
// https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-st-annes
import "fontsource-source-serif-pro"
import "fontsource-source-sans-pro"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
