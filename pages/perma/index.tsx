import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import fs from "fs"
import matter from "gray-matter"

import { Perma as PermaType } from "types/Perma.types"

type Props = {
  permas: PermaType[]
}

const Perma = ({ permas }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Permalinks | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Permalinks</h1>
        {permas.map((perma) => {
          console.log(perma)
          return (
            <Link key={perma.title} href={"/perma/" + perma.slug}>
              <a>{perma.title}</a>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Perma

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/perma`)
  const permas = files.map((fn) => {
    const mdWithMetadata = fs.readFileSync(`content/perma/${fn}`).toString()
    const { data } = matter(mdWithMetadata)
    return {
      slug: fn.replace(".md", ""),
      ...data,
    }
  })
  return {
    props: {
      permas,
    },
  }
}
