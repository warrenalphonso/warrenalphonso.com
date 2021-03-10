// _document.tsx overrides Next.js' `Document` component to augment <html> and
// <body> tags: https://nextjs.org/docs/advanced-features/custom-document
import React from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { GoogleFont, TypographyStyle } from "react-typography"
import typography from "utils/typography"

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Creates <style> element to insert generated CSS. */}
          <TypographyStyle typography={typography} />
          {/* Creates <link> element to include Google Fonts and weights specified in theme. */}
          <GoogleFont typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
