import React, { useState } from "react"
import dynamic from "next/dynamic"

import { setColors } from "utils/useColors"

type Props = {
  children: React.ReactNode
  slug?: string
}

const ReadingItem = ({ children, slug }: Props): JSX.Element => {
  if (slug) {
    try {
      require(`content/reading/${slug}.mdx`)
    } catch (err) {
      throw new Error(`Path content/reading/${slug}.mdx doesn't exist!`)
    }
  }
  const Notes =
    slug &&
    dynamic(() =>
      import(`content/reading/${slug}.mdx`).then((result) => {
        // Dynamically importing content means running useColors on load doesn't work
        // on content that was loaded. Instead, run it again after 10ms.
        setTimeout(() => {
          setColors(`#notes-${slug}`)
        }, 10)
        return result
      })
    )

  const [open, setOpen] = useState(false)

  return (
    <li>
      <p>
        {children}
        {"\t"}
        {slug ? (
          <a onClick={() => setOpen(!open)} className="cursor-pointer expander">
            {open ? "[-]" : "[+]"}
          </a>
        ) : null}
      </p>
      {slug && Notes ? (
        <div
          id={`notes-${slug}`}
          className="notes"
          style={{ display: open ? "block" : "none" }}
        >
          <blockquote style={{ fontSize: 12 }}>
            <Notes />
          </blockquote>
        </div>
      ) : null}
    </li>
  )
}

export default ReadingItem
