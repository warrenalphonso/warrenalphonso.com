import React from "react"
import { useRouter } from "next/router"
import { MDXProvider } from "@mdx-js/react"

import Header from "components/Header"
import Footer from "components/Footer"
import CodeBlock from "components/CodeBlock"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props): JSX.Element => {
  const { pathname } = useRouter()
  const styles =
    pathname === "/courses"
      ? {
          padding: "0 0",
        }
      : {}

  return (
    <div>
      <header>{<Header />}</header>
      {/* For syntax highlighting: https://mdxjs.com/guides/syntax-highlighting */}
      <MDXProvider
        components={{
          code: function code(props) {
            return <CodeBlock {...props} />
          },
        }}
      >
        <main style={styles}>{children}</main>
      </MDXProvider>
      <footer>{<Footer />}</footer>
    </div>
  )
}

export default Layout
