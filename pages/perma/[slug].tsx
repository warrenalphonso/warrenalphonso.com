/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState } from "react"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import dynamic from "next/dynamic"
import fs from "fs"
import Elevator from "elevator.js"

import { Frontmatter } from "types/Perma.types"

type Props = {
  slug: string
}

const Perma = ({ slug }: Props): JSX.Element => {
  const { title, author, dateAccessed, url } =
    require(`content/perma/${slug}.mdx`).metadata as Frontmatter
  try {
    require(`content/perma/${slug}.mdx`)
  } catch (err) {
    throw new Error(`Path content/perma/${slug}.mdx doesn't exist!`)
  }
  const Content = dynamic(() => import(`content/perma/${slug}.mdx`))

  const [elevator, setElevator] = useState<Elevator | null>(null)
  // Run on window load
  useEffect(() => {
    setElevator(
      new Elevator({
        mainAudio: "/elevator.mp3",
        endAudio: "/ding.mp3",
        duration: 5000,
      })
    )
  }, [])

  return (
    <>
      <Head>
        <title>{title} | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="permalink-title">
          <a href={url}>{title}</a>
        </h1>
        <div className="flex items-end justify-between">
          <p className="permalink-author float-left">by {author}</p>
          <p>Date accessed: {dateAccessed}</p>
        </div>
        <Content />
        <div
          id="elevator"
          className="text-center	cursor-pointer m-auto w-140 hover:opacity-70"
          onClick={() => {
            elevator?.elevate()
          }}
        >
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            height="50px"
            width="50px"
            display="block"
            className="m-auto mb-5"
          >
            <path d="M70,47.5H30c-1.4,0-2.5,1.1-2.5,2.5v40c0,1.4,1.1,2.5,2.5,2.5h40c1.4,0,2.5-1.1,2.5-2.5V50C72.5,48.6,71.4,47.5,70,47.5z   M47.5,87.5h-5v-25h5V87.5z M57.5,87.5h-5v-25h5V87.5z M67.5,87.5h-5V60c0-1.4-1.1-2.5-2.5-2.5H40c-1.4,0-2.5,1.1-2.5,2.5v27.5h-5  v-35h35V87.5z" />
            <path d="M50,42.5c1.4,0,2.5-1.1,2.5-2.5V16l5.7,5.7c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5l-10-10  c-1-1-2.6-1-3.5,0l-10,10c-1,1-1,2.6,0,3.5c1,1,2.6,1,3.5,0l5.7-5.7v24C47.5,41.4,48.6,42.5,50,42.5z" />
          </svg>
          Back to Top
        </div>
        <br />
      </div>
    </>
  )
}

export default Perma

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
  const files = fs.readdirSync(`${process.cwd()}/content/perma`)
  const paths = files.map((fn) => ({
    params: { slug: fn.replace(".mdx", "") },
  }))
  return {
    paths,
    fallback: false, // fallback: false means any other routes 404
  }
}
