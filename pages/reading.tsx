import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import fs from "fs"
import matter from "gray-matter"

import ReadingList from "components/ReadingList"
import ReadingItem from "components/ReadingItem"

import { ReadingNotes } from "types/Reading.types"

type Props = {
  notes: Record<string, string>
}

const Reading = ({ notes }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Reading | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Reading</h1>
        <div className="reading-header favorites">
          <p className="font-extrabold text-lg m-0">Favorites</p>
        </div>
        <ReadingList notes={notes}>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
        </ReadingList>

        <div className="reading-header now-reading">
          <p className="font-extrabold text-lg m-0">Now Reading</p>
        </div>
        <ReadingList notes={notes}>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
        </ReadingList>
      </div>

      <div className="reading-header finished">
        <p className="font-extrabold text-lg m-0">Finished</p>
      </div>

      <div className="reading-header anti-library">
        <p className="font-extrabold text-lg m-0">Anti-Library</p>
      </div>
    </>
  )
}

export default Reading

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/reading`)
  const notes = files
    .map((fn) => {
      const mdWithMetadata = fs.readFileSync(`content/reading/${fn}`).toString()
      const { content } = matter(mdWithMetadata)

      return {
        slug: fn.replace(".md", ""),
        content,
      } as ReadingNotes
    })
    // Creates an object
    .reduce((o, note) => ({ ...o, [note.slug]: note.content }), {})
  return {
    props: {
      notes,
    },
  }
}
