import React from "react"
import Link from "next/link"

const Header = (): JSX.Element => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navlinks link-zero link-one link-two link-three link-four link-five">
          Home
        </a>
      </Link>
      <Link href="/courses">
        <a className="navlinks">Courses</a>
      </Link>
      <Link href="/reading">
        <a className="navlinks">Reading</a>
      </Link>
    </nav>
  )
}

export default Header
