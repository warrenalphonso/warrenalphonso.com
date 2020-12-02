import React from "react"
import Head from "next/head"

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-16 flex flex-1 flex-col">
        <h1>Welcome</h1>
        <div className="flex flex-col items-center">
          <img
            src="/splash.jpg"
            alt="Berkeley rooftop"
            width="90%"
            height="auto"
          />
        </div>
        <p>
          My name is Warren Alphonso. Find me on{" "}
          <a href="https://github.com/warrenalphonso">GitHub</a>. Reach me at
          warrenalphonso <i>[at]</i> berkeley <i>[dot]</i> edu.
        </p>
      </div>
    </>
  )
}

export default Home
