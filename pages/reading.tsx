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
        <ReadingList>
          <ReadingItem contents={notes["test"]}>
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem contents={notes["test"]}>
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem contents={notes["test"]}>
            <i>HI</i> by Joe
          </ReadingItem>
        </ReadingList>

        <ReadingList>
          <ReadingItem contents={notes["test"]}>
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem contents={notes["test"]}>
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem contents={notes["test"]}>
            <i>HI</i> by Joe
          </ReadingItem>
        </ReadingList>
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
