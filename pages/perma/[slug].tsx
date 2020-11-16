import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

import { Perma as PermaType } from "types/Perma.types"

type Props = PermaType & { content: string }

const Perma = ({
  slug,
  content,
  title,
  author,
  dateAccessed,
  url,
}: Props): JSX.Element => {
  return (
    <div>
      <p className="permalink-title">
        <a href={url}>{title}</a>
      </p>
      <div className="flex items-end justify-between">
        <p className="permalink-author float-left">by {author}</p>
        <p>Date accessed: {dateAccessed}</p>
      </div>
      {content}
    </div>
  )
}

export default Perma

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    const { slug } = context?.params
    const mdWithMetadata = fs.readFileSync(
      path.join("content/perma", slug + ".md").toString()
    )
    const { data, content } = matter(mdWithMetadata)
    return {
      props: {
        slug,
        content,
        ...data,
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
    params: { slug: fn.replace(".md", "") },
  }))
  return {
    paths,
    fallback: false, // fallback: false means any other routes 404
  }
}
