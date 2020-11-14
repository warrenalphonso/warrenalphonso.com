import React from "react"

import Header from "components/header"
import Footer from "components/footer"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <header>{<Header />}</header>
      <main>{children}</main>
      <footer>{<Footer />}</footer>
    </div>
  )
}

export default Layout
