import React from "react"
import dynamic from "next/dynamic"

import { useReadingState } from "components/ReadingContext"

type Props = {
  children: React.ReactNode
  slug: string
}

const ReadingItem = ({ children, slug }: Props): JSX.Element => {
  try {
    require(`content/reading/${slug}.mdx`)
  } catch (err) {
    throw new Error(`Path content/reading/${slug}.mdx doesn't exist!`)
  }
  const Notes = dynamic(() => import(`content/reading/${slug}.mdx`))

  const { openSlugs, toggle } = useReadingState()
  return (
    <li>
      <p>
        {children}{" "}
        <a onClick={() => toggle(slug)} className="cursor-pointer">
          {!openSlugs.includes(slug) ? "[+]" : "[-]"}
        </a>
      </p>
      <br />
      {openSlugs.includes(slug) ? (
        <div className="text-sm no-upper-margin">
          <Notes />
        </div>
      ) : null}
    </li>
  )
}

export default ReadingItem
