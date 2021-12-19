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

        {/* 
          FAVORITES 
        */}
        <div className="cluster">
          <p className="cluster-text">Favorites</p>
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
          <ReadingItem slug="way-to-love">
            <i>The Way to Love</i> by Anthony De Mello
          </ReadingItem>
          <ReadingItem slug="scott-alexander">
            Scott Alexander&apos;s posts
          </ReadingItem>
          <ReadingItem>
            &quot;Humans are not automatically strategic&quot; by Anna Salamon
          </ReadingItem>
          <ReadingItem>
            <Link href="/perma/if">
              <a>&quot;If&quot;</a>
            </Link>{" "}
            by Rudyard Kipling
          </ReadingItem>
        </ReadingList>

        {/* 
          NOW READING
        */}
        <div className="cluster">
          <p className="cluster-text">Now Reading</p>
        </div>
        <ReadingList>
          <ReadingItem>
            <i>The Red Queen</i> by Matt Ridley
          </ReadingItem>
        </ReadingList>

        {/* 
          ENJOYED
        */}
        <div className="cluster">
          <p className="cluster-text">Enjoyed</p>
        </div>
        <ReadingList>
          <ReadingItem>
            <i>The Lessons of History</i> by Will and Ariel Durant
          </ReadingItem>
          <ReadingItem>
            &quot;Shut up and do the impossible&quot; by Eliezer Yudkowsky
          </ReadingItem>
          <ReadingItem>
            <Link href="/perma/i-wasnt-prepared-to-work">
              <a>&quot;I Wasn&apos;t Prepared to Work&quot;</a>
            </Link>{" "}
            by Robert Smith
          </ReadingItem>
          <ReadingItem>
            &quot;The Fable of the Dragon-Tyrant&quot; by Nick Bostrom
          </ReadingItem>
          <ReadingItem>
            <i>Ego is the Enemy</i> by Ryan Holiday
          </ReadingItem>
          <ReadingItem>
            <i>The Rosie Project</i> and <i>The Rosie Effect</i> by Graeme
            Simsion
          </ReadingItem>
          <ReadingItem>
            <i>Inadequate Equilibria</i> by Eliezer Yudkowsky
          </ReadingItem>
          <ReadingItem>
            <i>Conspiracy</i> by Ryan Holiday
          </ReadingItem>
          <ReadingItem>
            &quot;Ted Kennedy&apos;s Eulogy for Robert Kennedy&quot;
          </ReadingItem>
          <ReadingItem>
            <i>What Mad Pursuit</i> by Francis Crick
          </ReadingItem>
          <ReadingItem>
            <i>Imperium, Lustrum, </i>and <i>Dictator</i> by Robert Harris
          </ReadingItem>
          <ReadingItem>
            <i>A Woman in Berlin</i> by Anonymous
          </ReadingItem>
          <ReadingItem>
            <Link href="/perma/best-general-advice">
              <a>&quot;The best general advice on earth&quot;</a>
            </Link>{" "}
            by James Somers
          </ReadingItem>
          <ReadingItem>
            <a href="https://www.nature.com/articles/436150a">
              &quot;What&apos;s expected of us&quot;
            </a>
            ,{" "}
            <a href="https://www.multivax.com/last_question.html">
              &quot;The last question&quot;
            </a>
            ,{" "}
            <a href="http://www.galactanet.com/oneoff/theegg_mod.html">
              &quot;The egg&quot;
            </a>
            , and{" "}
            <a href="https://www.tor.com/2010/08/05/divided-by-infinity/">
              &quot;Divided by infinity&quot;
            </a>
          </ReadingItem>
        </ReadingList>

        {/* 
          ANTI-LIBRARY
        */}
        <div className="cluster">
          <p className="cluster-text">Anti-Library</p>
        </div>
        <ReadingList>
          <ReadingItem>
            <i>The Blind Watchmaker</i> by Richard Dawkins
          </ReadingItem>
          <ReadingItem>
            <i>The Machinery of Life</i> by David Goodsell
          </ReadingItem>
          <ReadingItem>
            <i>
              The Eighth Day of Creation: The Makers of the Revolution in
              Biology
            </i>{" "}
            by Horace Freeland Judson
          </ReadingItem>
          <ReadingItem>
            <i>The Masterpiece of Nature</i> by Graham Bell
          </ReadingItem>
          <ReadingItem>
            <i>The Ode Less Travelled</i> by Stephen Fry
          </ReadingItem>
          <ReadingItem>
            <i>Metaphors We Live By</i> by George Lakoff and Mark Johnson
          </ReadingItem>
          <ReadingItem>
            <i>Models</i> by Mark Manson
          </ReadingItem>
          <ReadingItem>
            <i>Commentariolum Petitionis</i> by Quintus Cicero
          </ReadingItem>
          <ReadingItem>
            <i>The Mind Illuminated</i> by Culadasa
          </ReadingItem>
          <ReadingItem>
            <i>The Courage to Be Disliked</i> by Ichiro Kishimi
          </ReadingItem>
          <ReadingItem>
            <i>Striking Thoughts</i> by Bruce Lee
          </ReadingItem>
          <ReadingItem>
            <i>Ficciones</i> by Jorge Luis Borges
          </ReadingItem>
          <ReadingItem>
            <i>Reasons and Persons</i> by Derek Parfit
          </ReadingItem>
          <ReadingItem>
            <i>The Death of Ivan Ilyich</i> by Leo Tolstoy
          </ReadingItem>
          <ReadingItem>
            <i>A Confession</i> by Leo Tolstoy
          </ReadingItem>
          <ReadingItem>
            <i>Anna Karenina</i> by Leo Tolstoy
          </ReadingItem>
          <ReadingItem>
            <i>Story of Philosophy</i> by Will Durant
          </ReadingItem>
          <ReadingItem>
            <i>Handbook of the Biology of Aging, Eigth Edition</i> by Matt
            Kaeberlein and George Martin
          </ReadingItem>
        </ReadingList>
      </div>
    </>
  )
}

export default Reading
