export type Frontmatter = {
  title: string
  author: string
  dateAccessed: string
  url: string
}

export type Perma = Frontmatter & {
  slug: string
}
