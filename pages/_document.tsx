// _document.tsx overrides Next.js' `Document` component to augment <html> and
// <body> tags: https://nextjs.org/docs/advanced-features/custom-document
import React from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { GoogleFont, TypographyStyle } from "react-typography"
import typography from "utils/typography"
import { GA_TRACKING_ID } from "utils/gtag"

const isProduction = process.env.NODE_ENV == "production"

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Creates <style> element to insert generated CSS. */}
          <TypographyStyle typography={typography} />
          {/* Creates <link> element to include Google Fonts and weights specified in theme. */}
          <GoogleFont typography={typography} />

          {/* Google Analytics: https://stackoverflow.com/a/65081431/13697995 */}
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                `,
                }}
              />
            </>
          )}
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
