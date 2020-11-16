import React from "react"

type Props = {
  children: React.ReactNode
  contents: string
}

const ReadingItem = ({ children, contents }: Props): JSX.Element => {
  return (
    <li>
      <p>{children}</p>
    </li>
  )
}

export default ReadingItem
