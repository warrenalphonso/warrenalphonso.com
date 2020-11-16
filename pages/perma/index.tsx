import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import fs from "fs"
import matter from "gray-matter"

import { Perma } from "types/Perma.types"

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
  const files = fs.readdirSync(`${process.cwd()}/content/perma`)
  const permas = files
    .map((fn) => {
      const mdWithMetadata = fs.readFileSync(`content/perma/${fn}`).toString()
      const { data } = matter(mdWithMetadata)

      return {
        slug: fn.replace(".md", ""),
        ...data,
      } as Perma
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
