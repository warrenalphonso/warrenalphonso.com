import React from "react"
import Head from "next/head"

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>

      <p>
        My name is Warren Alphonso. I&apos;m an undergrad EECS major at UC
        Berkeley. Find me on{" "}
        <a href="https://github.com/warrenalphonso">GitHub</a>. Reach me at
        warrenalphonso <i>[at]</i> berkeley <i>[dot]</i> edu.
      </p>
    </div>
  )
}

export default Home
