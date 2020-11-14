import React from "react"
import Head from "next/head"
import Image from "next/image"

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-16">
        <h1>Welcome</h1>
        <div className="flex flex-col items-center">
          <Image
            src="/splash.jpg"
            alt="Berkeley rooftop"
            width={3662 / 5}
            height={1827 / 5}
            layout="intrinsic"
          />
        </div>
        <p>
          My name is Warren Alphonso. Find me on{" "}
          <a href="https://github.com/warrenalphonso">GitHub</a>. Reach me at
          warrenalphonso <i>[at]</i> berkeley <i>[dot]</i> edu.
        </p>
      </div>
    </div>
  )
}

export default Home
