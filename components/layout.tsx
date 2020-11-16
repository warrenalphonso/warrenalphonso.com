import React from "react"
import { useRouter } from "next/router"

import Header from "components/Header"
import Footer from "components/Footer"

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
      <main style={styles}>{children}</main>
      <footer>{<Footer />}</footer>
    </div>
  )
}

export default Layout
