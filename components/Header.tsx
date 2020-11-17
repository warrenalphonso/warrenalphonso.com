import React from "react"
import Link from "next/link"

const Header = (): JSX.Element => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navlinks">Home</a>
      </Link>
      <Link href="/courses">
        <a className="navlinks">Courses</a>
      </Link>
    </nav>
  )
}

export default Header
