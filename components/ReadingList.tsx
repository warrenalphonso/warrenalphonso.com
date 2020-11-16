import React from "react"

type Props = {
  children: React.ReactNode
}

const ReadingList = ({ children }: Props): JSX.Element => {
  return <ul className="list-decimal list-outside">{children}</ul>
}

export default ReadingList
