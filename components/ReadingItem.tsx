import React, { useState } from "react"
import $ from "jquery"
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
        // on content that was loaded. Instead, run it again after 30ms.
        setTimeout(() => {
          setColors(`#notes-${slug}`)
        }, 30)
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
      {slug && Notes && open ? (
        <div id={`notes-${slug}`} className="text-sm notes">
          <blockquote style={{ fontSize: 12 }}>
            <Notes />
          </blockquote>
        </div>
      ) : null}
    </li>
  )
}

export default ReadingItem
