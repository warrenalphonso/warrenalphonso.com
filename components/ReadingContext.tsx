import React, { createContext, useContext, useReducer } from "react"

export type OpenSlugs = string[]
export type Action = {
  type: "slug"
  slug: string
}
export type ReadingState = {
  openSlugs: OpenSlugs
  toggle: (slug: Action["slug"]) => void
}

const defaultReducer = (openSlugs: OpenSlugs, action: Action) => {
  switch (action.type) {
    case "slug": {
      const expanded = openSlugs.includes(action.slug)
      return expanded
        ? openSlugs.filter((slug) => slug !== action.slug)
        : [...openSlugs, action.slug]
      break
    }
    default: {
      throw new Error("Unhandled action: " + action)
    }
  }
}

const ReadingContext = createContext<ReadingState | null>(null)

type Props = {
  children: React.ReactNode
  reducer?: (openSlugs: OpenSlugs, action: Action) => string[]
}

export const ReadingProvider = ({
  children,
  reducer = defaultReducer,
}: Props): JSX.Element => {
  const [openSlugs, dispatch] = useReducer(reducer, [])
  const toggle = (slug: string) => {
    dispatch({ type: "slug", slug })
  }
  return (
    <ReadingContext.Provider value={{ openSlugs, toggle }}>
      {children}
    </ReadingContext.Provider>
  )
}

export const useReadingState = (): ReadingState => {
  const context = useContext(ReadingContext)
  if (context === null) {
    throw new Error("useReadingState must be used within a ReadingProvider!")
  }
  return context
}
