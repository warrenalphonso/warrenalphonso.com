import React, { useState } from "react"
import dynamic from "next/dynamic"

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
  return (
    <li>
      <p>
        {children}{" "}
        {slug ? (
          <a
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
            style={{ background: "none", color: "#fb251b" }}
          >
            {open ? "[-]" : "[+]"}
          </a>
        ) : null}
      </p>
      {slug && Notes && open ? (
        <div className="text-sm notes">
          <br />
          <Notes />
        </div>
      ) : null}
    </li>
  )
}

export default ReadingItem
