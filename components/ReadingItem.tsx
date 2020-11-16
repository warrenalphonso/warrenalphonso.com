import React from "react"
import { useReadingState } from "components/ReadingContext"

type Props = {
  children: React.ReactNode
  slug: string
  content?: string // Optional becausue ReadingList inserts
}

const ReadingItem = ({ children, slug, content }: Props): JSX.Element => {
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
        <div className="text-sm">{content}</div>
      ) : null}
    </li>
  )
}

export default ReadingItem
