import React from "react"
import Head from "next/head"
import Link from "next/link"

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
          <ReadingItem>
            <i>Harry Potter and the Methods of Rationality</i> by Eliezer
            Yudkowsky
          </ReadingItem>
          <ReadingItem>
            <i>When Breath Becomes Air</i> by Paul Kalanithi
          </ReadingItem>
          <ReadingItem>
            <i>Shoe Dog</i> by Phil Knight
          </ReadingItem>
          <ReadingItem>
            <i>The Way to Love</i> by Anthony De Mello
          </ReadingItem>
          <ReadingItem>Scott Alexander&apos;s posts</ReadingItem>
          <ReadingItem slug="the-one">
            <Link href="/perma/the-one">
              <a>
                &quot;Read This If You&apos;re Worried That You&apos;ll Never
                Find &apos;The One&apos;&quot;
              </a>
            </Link>{" "}
            by Heidi Priebe
          </ReadingItem>
          <ReadingItem>
            &quot;Humans are not automatically strategic&quot; by Anna Salamon
          </ReadingItem>
          <ReadingItem>
            <Link href="/perma/meaning-and-writing">
              <a>&quot;Thoughts on Meaning and Writing&quot;</a>
            </Link>{" "}
            by Dormin
          </ReadingItem>
          <ReadingItem>&quot;If&quot; by Rudyard Kipling</ReadingItem>
        </ReadingList>

        <div className="reading-header now-reading">
          <p className="font-extrabold text-lg m-0">Now Reading</p>
        </div>
        <ReadingList>
          <ReadingItem>
            <i>The Fifteen Decisive Battles of the World</i> by Sir Edward
            Shepherd Creasy{" "}
          </ReadingItem>
        </ReadingList>
      </div>

      <div className="reading-header finished">
        <p className="font-extrabold text-lg m-0">Finished</p>
      </div>
      <ReadingList>
        <ReadingItem>&quot;When We Build&quot; by Wilson Miner</ReadingItem>
      </ReadingList>

      <div className="reading-header anti-library">
        <p className="font-extrabold text-lg m-0">Anti-Library</p>
      </div>
      <ReadingList>
        <ReadingItem>
          <i>The Evolving Self: Problem and Process in Human Development</i> by
          Robert Kegan
        </ReadingItem>
      </ReadingList>
    </>
  )
}

export default Reading
