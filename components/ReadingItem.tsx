import React, { useEffect, useState } from "react"
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
  const Notes = slug && dynamic(() => import(`content/reading/${slug}.mdx`))

  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Dynamically importing content means running useColors on load doesn't
    // work. setTimeout has a tiny, tiny delay which is necessary for this to
    // run *after* content is placed so jQuery can find it.
    setTimeout(() => {
      setColors(`#notes-${slug}`)
    })
  })

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
          // Load all posts on initial page load because jQuery is annoying
          style={{ display: open ? "block" : "none" }}
        >
          <blockquote>
            <Notes />
          </blockquote>
        </div>
      ) : null}
    </li>
  )
}

export default ReadingItem
