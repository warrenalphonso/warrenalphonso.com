import React from "react"
import { ReadingProvider } from "components/ReadingContext"

type Props = {
  children: React.ReactNode
  notes: Record<string, string>
}

const ReadingList = ({ children, notes }: Props): JSX.Element => {
  return (
    <ul className="list-decimal list-outside">
      <ReadingProvider>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            throw new Error("Child wasn't valid React Element!")
          }
          const { slug } = child.props
          const content = notes[slug]
          if (!content) {
            throw new Error("No notes at slug: " + slug)
          }

          return React.cloneElement(child, {
            content,
          })
        })}
      </ReadingProvider>
    </ul>
  )
}

export default ReadingList
