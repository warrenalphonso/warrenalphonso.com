import React, { useState } from "react"
import dynamic from "next/dynamic"

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

  const [open, setOpen] = useState(false)
  return (
    <li>
      <p>
        {children}{" "}
        <a onClick={() => setOpen(!open)} className="cursor-pointer">
          {open ? "[-]" : "[+]"}
        </a>
      </p>
      <br />
      {open ? (
        <div className="text-sm no-upper-margin">
          <Notes />
        </div>
      ) : null}
    </li>
  )
}

export default ReadingItem
