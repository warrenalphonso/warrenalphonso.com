import React from "react"
import Head from "next/head"

import ReadingList from "components/ReadingList"
import ReadingItem from "components/ReadingItem"

const Reading = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Reading | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Reading</h1>
        <div className="reading-header favorites">
          <p className="font-extrabold text-lg m-0">Favorites</p>
        </div>
        <ReadingList>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="new">HI THERE by Joe</ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
        </ReadingList>

        <div className="reading-header now-reading">
          <p className="font-extrabold text-lg m-0">Now Reading</p>
        </div>
        <ReadingList>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
          <ReadingItem slug="test">
            <i>HI</i> by Joe
          </ReadingItem>
        </ReadingList>
      </div>

      <div className="reading-header finished">
        <p className="font-extrabold text-lg m-0">Finished</p>
      </div>

      <div className="reading-header anti-library">
        <p className="font-extrabold text-lg m-0">Anti-Library</p>
      </div>
    </>
  )
}

export default Reading
