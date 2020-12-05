import React from "react"
import Head from "next/head"
import Link from "next/link"

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-8 flex flex-1 flex-col">
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
        <div className="space-y-10">
          <h2>Projects</h2>
          <div>
            <h3 className="my-2">
              <a href="https://warrenalphonso.github.io/qc/hubbard">
                Investigating the Hubbard model with variational algorithms
              </a>
            </h3>
            <p className="float-right text-right">
              A blogpost written as part of my 3-month mentorship with the{" "}
              <a href="https://qosf.org/qc_mentorship/">
                Quantum Open Source Foundation
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="my-2">
              <Link href="/projects/mealt">
                <a>Mealt</a>
              </Link>
            </h3>
            <p className="float-right text-right">
              A React Native app I built over a few months and incorporated.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
