/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect } from "react"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import dynamic from "next/dynamic"
import fs from "fs"

import { Frontmatter } from "types/Project.types"
import { setColors } from "utils/useColors"

type Props = {
  slug: string
}

const Project = ({ slug }: Props): JSX.Element => {
  const { title } = require(`content/projects/${slug}.mdx`)
    .metadata as Frontmatter
  try {
    require(`content/projects/${slug}.mdx`)
  } catch (err) {
    throw new Error(`Path content/projects/${slug}.mdx doesn't exist!`)
  }
  const Content = dynamic(() => import(`content/projects/${slug}.mdx`))

  useEffect(() => {
    // Dynamically importing content means running useColors on load doesn't
    // work. setTimeout has a tiny, tiny delay which is necessary for this to
    // run *after* content is placed so jQuery can find it.
    setTimeout(() => {
      setColors(`#project-${slug}`)
    })
  })

  return (
    <>
      <Head>
        <title>{title} | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={`project-${slug}`}>
        <Content />
      </div>
    </>
  )
}

export default Project

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    const { slug } = context.params
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
  const files = fs.readdirSync(`${process.cwd()}/content/projects`)
  const paths = files.map((fn) => ({
    params: { slug: fn.replace(".mdx", "") },
  }))
  return {
    paths,
    fallback: false, // fallback: false means any other routes 404
  }
}
