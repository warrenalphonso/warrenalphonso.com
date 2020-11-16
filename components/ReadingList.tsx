import React from "react"
import { ReadingProvider } from "components/ReadingContext"

type Props = {
  children: React.ReactNode
}

const ReadingList = ({ children }: Props): JSX.Element => {
  return (
    <ul className="list-decimal list-outside">
      <ReadingProvider>{children}</ReadingProvider>
    </ul>
  )
}

export default ReadingList
