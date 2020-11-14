import React from "react"
import Link from "next/link"

const Header = (): JSX.Element => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/courses">
        <a>Courses</a>
      </Link>
    </div>
  )
}

export default Header
