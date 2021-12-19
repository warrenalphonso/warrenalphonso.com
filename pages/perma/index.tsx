/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import fs from "fs"

import { Frontmatter, Perma } from "types/Perma.types"

type Props = {
  permas: Perma[]
}

const PermaHome = ({ permas }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Permalinks | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Permalinks</h1>
        <p className="text-xl text-gray-700">
          <span className="font-extrabold">Disclaimer: </span>None of the
          content linked below is originally by me.
        </p>
        {permas.map((perma) => {
          return (
            <p key={perma.title} className="permalink">
              <Link href={"/perma/" + perma.slug}>
                <a>{perma.title}</a>
              </Link>
              <br />
              by {perma.author}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default PermaHome

export const getStaticProps: GetStaticProps = async () => {
  const slugs = fs
    .readdirSync(`${process.cwd()}/content/perma`)
    .map((fn) => fn.replace(".mdx", ""))
  // Get metadata too
  const permas = slugs
    .map((slug) => {
      const { title, author, dateAccessed, url } =
        require(`content/perma/${slug}.mdx`).metadata as Frontmatter
      return { title, author, dateAccessed, url, slug }
    })
    .sort((a, b) => {
      // Convert date string to Date
      return new Date(a.dateAccessed) > new Date(b.dateAccessed) ? -1 : 1
    })
  return {
    props: {
      permas,
    },
  }
}
