/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import dynamic from "next/dynamic"
import fs from "fs"

import { Frontmatter } from "types/Perma.types"

type Props = {
  slug: string
}

const Perma = ({ slug }: Props): JSX.Element => {
  const {
    title,
    author,
    dateAccessed,
    url,
  } = require(`content/perma/${slug}.mdx`).metadata as Frontmatter
  try {
    require(`content/perma/${slug}.mdx`)
  } catch (err) {
    throw new Error(`Path content/perma/${slug}.mdx doesn't exist!`)
  }
  const Content = dynamic(() => import(`content/perma/${slug}.mdx`))
  return (
    <>
      <Head>
        <title>{title} | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className="permalink-title">
          <a href={url}>{title}</a>
        </p>
        <div className="flex items-end justify-between">
          <p className="permalink-author float-left">by {author}</p>
          <p>Date accessed: {dateAccessed}</p>
        </div>
        <Content />
      </div>
    </>
  )
}

export default Perma

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    const { slug } = context?.params
    return {
      props: {
        slug,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/perma`)
  const paths = files.map((fn) => ({
    params: { slug: fn.replace(".mdx", "") },
  }))
  return {
    paths,
    fallback: false, // fallback: false means any other routes 404
  }
}
