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
          <ReadingItem slug="scott-alexander">
            Scott Alexander&apos;s posts
          </ReadingItem>
          <ReadingItem>
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
            &quot;Thoughts on Meaning and Writing&quot; by Dormin
          </ReadingItem>
          <ReadingItem>&quot;If&quot; by Rudyard Kipling</ReadingItem>
          <ReadingItem>
            &quot;Is Success the Enemy of Freedom?&quot; by Xiaoyu He
          </ReadingItem>
        </ReadingList>

        {/* 
          NOW READING
        */}
        <div className="reading-header now-reading">
          <p className="font-extrabold text-lg m-0">Now Reading</p>
        </div>
        <ReadingList>
          <ReadingItem>
            <i>The Fifteen Decisive Battles of the World</i> by Sir Edward
            Shepherd Creasy{" "}
          </ReadingItem>
          <ReadingItem>
            <i>Prisons We Choose to Live Inside</i> by Doris Lessing
          </ReadingItem>
          <ReadingItem>
            <i>Rationality: From AI to Zombies</i> by Eliezer Yudkowsky
          </ReadingItem>
          <ReadingItem>
            &quot;Principled Decision Making&quot; by Stepan Parunashvili
          </ReadingItem>
          <ReadingItem>
            <i>The Red Queen</i> by Matt Ridley
          </ReadingItem>
          <ReadingItem>
            <i>How to Change Your Mind</i> by Michael Pollan
          </ReadingItem>
          <ReadingItem>
            <i>Status Anxiety</i> by Alain de Botton
          </ReadingItem>
          <ReadingItem>
            <i>How to Think More about Sex</i> by Alain de Botton
          </ReadingItem>
        </ReadingList>

        {/* 
          ENJOYED
        */}
        <div className="reading-header enjoyed">
          <p className="font-extrabold text-lg m-0">Enjoyed</p>
        </div>
        <ReadingList>
          <ReadingItem>&quot;When We Build&quot; by Wilson Miner</ReadingItem>
          <ReadingItem>
            <i>The Lessons of History</i> by Will and Ariel Durant
          </ReadingItem>
          <ReadingItem>
            <i>Hackers and Painters</i> by Paul Graham
          </ReadingItem>
          <ReadingItem>
            <i>The Innovators</i> by Walter Isaacson
          </ReadingItem>
          <ReadingItem>
            <i>Surely You&apos;re Joking Mr. Feynman</i> by Richard Feynman
          </ReadingItem>
          <ReadingItem>
            &quot;On Reading and Books&quot; by Arthur Schopenhauer
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
            <i>Sum: Forty Tales from the Afterlife</i> by David Eagleman
          </ReadingItem>
          <ReadingItem>
            <i>Zero to One</i> by Peter Thiel
          </ReadingItem>
          <ReadingItem>
            <i>How to Take Smart Notes</i> by Sönke Ahrens
          </ReadingItem>
          <ReadingItem>
            <i>Lifespan: Why We Age and Why We Don&apos;t Have To</i> by David
            Sinclair
          </ReadingItem>
          <ReadingItem>
            <i>Ego is the Enemy</i> by Ryan Holiday
          </ReadingItem>
          <ReadingItem>
            <i>The Rosie Project</i> and <i>The Rosie Effect</i> by Graeme
            Simsion
          </ReadingItem>
          <ReadingItem>
            &quot;Speed matters: Why working quickly is more important than it
            seems&quot; by James Somers
          </ReadingItem>
          <ReadingItem>
            &quot;Principles of Effective Research&quot; by Michael Nielsen
          </ReadingItem>
          <ReadingItem>
            <i>Inadequate Equilibria</i> by Eliezer Yudkowsky
          </ReadingItem>
          <ReadingItem>
            <i>Conspiracy</i> by Ryan Holiday
          </ReadingItem>
          <ReadingItem>
            <i>Early Retirement Extreme</i> by Jacob Lund Fisker
          </ReadingItem>
          <ReadingItem>
            <i>The Precipice: Existential Risk and the Future of Humanity</i> by
            Toby Ord
          </ReadingItem>
          <ReadingItem>
            &quot;Ted Kennedy&apos;s Eulogy for Robert Kennedy&quot;
          </ReadingItem>
          <ReadingItem>
            <i>What Mad Pursuit</i> by Francis Crick
          </ReadingItem>
          <ReadingItem>
            <i>Imperium: A Novel of Ancient Rome</i> by Robert Harris
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
        </ReadingList>

        {/* 
          ANTI-LIBRARY
        */}
        <div className="reading-header anti-library">
          <p className="font-extrabold text-lg m-0">Anti-Library</p>
        </div>
        <ReadingList>
          <ReadingItem>
            <i>Enemies of Promise</i> by Cyril Connolly
          </ReadingItem>
          <ReadingItem>
            <i>So You&apos;ve Been Publicly Shamed</i> by Jon Ronson
          </ReadingItem>
          <ReadingItem>
            <i>Perennial Seller</i> by Ryan Holiday
          </ReadingItem>
          <ReadingItem>
            <i>The Medusa and the Snail</i> by Lewis Thomas
          </ReadingItem>
          <ReadingItem>
            <i>The Blind Watchmaker</i> by Richard Dawkins
          </ReadingItem>
          <ReadingItem>
            <i>The Machinery of Life</i> by David Goodsell
          </ReadingItem>
          <ReadingItem>
            <i>A Computer Scientist&apos;s Guide to Cell Biology</i> by William
            Cohen
          </ReadingItem>
          <ReadingItem>
            <i>
              The Eighth Day of Creation: The Makers of the Revolution in
              Biology
            </i>{" "}
            by Horace Freeland Judson
          </ReadingItem>
          <ReadingItem>
            <i>Lustrum</i> and <i>Dictator</i> by Robert Harris
          </ReadingItem>
          <ReadingItem>
            <i>The Evolving Self: Problem and Process in Human Development</i>{" "}
            by Robert Kegan
          </ReadingItem>
          <ReadingItem>
            <i>In Over Our Heads: The Mental Demands of Modern Life</i> by
            Robert Kegan
          </ReadingItem>
          <ReadingItem>
            <i>Zen and the Art of Motorcycle Maintenance</i> by Robert Pirsig
          </ReadingItem>
          <ReadingItem>
            <i>The Masterpiece of Nature</i> by Graham Bell
          </ReadingItem>
          <ReadingItem>
            <i>Antifragile</i> by Nassim Taleb
          </ReadingItem>
          <ReadingItem>
            <i>Principles</i> by Ray Dalio
          </ReadingItem>
          <ReadingItem>
            <i>Why Liberalism Failed</i> by Patrick Deneen
          </ReadingItem>
          <ReadingItem>
            <i>Should We Eat Meat?</i> by Vaclav Smil
          </ReadingItem>
          <ReadingItem>
            <i>The Better Angels of Our Nature: Why Violence Has Declined</i> by
            Steven Pinker
          </ReadingItem>
          <ReadingItem>
            <i>The Ode Less Travelled</i> by Stephen Fry
          </ReadingItem>
          <ReadingItem>
            <i>Metaphors We Live By</i> by George Lakoff and Mark Johnson
          </ReadingItem>
          <ReadingItem>
            <i>A Sense of Where You Are: Bill Bradley at Princeton</i> by John
            McPhee
          </ReadingItem>
          <ReadingItem>
            <i>Models</i> by Mark Manson
          </ReadingItem>
          <ReadingItem>
            <i>Getting Things Done</i> by David Allen
          </ReadingItem>
          <ReadingItem>
            <i>Feeling Good</i> by David Burns
          </ReadingItem>
          <ReadingItem>
            <i>Focusing</i> by Eugene Gendlin
          </ReadingItem>
          <ReadingItem>
            <i>The Inner Game of Tennis</i> by Timothy Gallwey
          </ReadingItem>
          <ReadingItem>
            <i>Nonviolent Communication</i> by Marshall Rosenberg
          </ReadingItem>
          <ReadingItem>
            <i>Commentariolum Petitionis</i> by Quintus Cicero
          </ReadingItem>
          <ReadingItem>
            <i>Quantum Computing Since Democritus</i> by Scott Aaronson
          </ReadingItem>
          <ReadingItem>
            <i>The Mind Illuminated</i> by Culadasa
          </ReadingItem>
          <ReadingItem>
            <i>The Courage to Be Disliked</i> by Ichiro Kishimi
          </ReadingItem>
          <ReadingItem>
            <i>Sapiens</i> by Yuval Noah Harari
          </ReadingItem>
          <ReadingItem>
            <i>Skin in the Game</i> by Nassim Taleb
          </ReadingItem>
          <ReadingItem>
            <i>The Bed of Procrustes</i> by Nassim Taleb
          </ReadingItem>
          <ReadingItem>
            <i>Striking Thoughts</i> by Bruce Lee
          </ReadingItem>
          <ReadingItem>
            <i>Ficciones</i> by Jorge Luis Borges
          </ReadingItem>
          <ReadingItem>
            <i>Seeking Wisdom: From Darwin to Munger</i> by Peter Bevelin
          </ReadingItem>
          <ReadingItem>
            <i>War and Peace</i> by Leo Tolstoy
          </ReadingItem>
          <ReadingItem>
            <i>Gödel, Escher, Bach: An Eternal Golden Braid</i> by Douglas
            Hofstadter
          </ReadingItem>
          <ReadingItem>
            <i>The End of Time: The Next Revolution in Physics</i> by Julian
            Barbour
          </ReadingItem>
          <ReadingItem>
            <i>Only Words</i> by Catherine MacKinnon
          </ReadingItem>
          <ReadingItem>
            <i>Reasons and Persons</i> by Derek Parfit
          </ReadingItem>
          <ReadingItem>
            <i>On What Matters</i> by Derek Parfit
          </ReadingItem>
          <ReadingItem>
            <i>Give War and Peace a Chance</i> by Andrew Kaufman
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
            <i>Proofs from THE BOOK</i> by Martin Aigner
          </ReadingItem>
          <ReadingItem>
            <i>Spark</i> by John Ratey
          </ReadingItem>
          <ReadingItem>
            <i>The Sense of Style</i> by Steven Pinker
          </ReadingItem>
          <ReadingItem>
            <i>ANSI Common Lisp</i> by Paul Graham
          </ReadingItem>
          <ReadingItem>
            <i>Ideas and Opinions</i> by Einstein
          </ReadingItem>
          <ReadingItem>
            <i>Einstein: His Life and Universe</i> by Walter Isaacson
          </ReadingItem>
          <ReadingItem>
            <i>Linear Operators for Quantum Mechanics</i> by Thomas Jordan
          </ReadingItem>
          <ReadingItem>
            <i>On Writing</i> by Stephen King
          </ReadingItem>
          <ReadingItem>
            <i>Moonwalking with Einstein</i> by Joshua Foer
          </ReadingItem>
          <ReadingItem>
            <i>Story of Philosophy</i> by Will Durant
          </ReadingItem>
          <ReadingItem>
            <i>The Art of Profitability</i> by Adrian Slywotzky
          </ReadingItem>
          <ReadingItem>
            <i>E-Myth Revisited</i> by Michael Gerber (1!)
          </ReadingItem>
          <ReadingItem>
            <i>The Ultimate Sales Machine</i> by Chet Holmes (2!)
          </ReadingItem>
          <ReadingItem>
            <i>On Writing Well</i> by William Zinsser
          </ReadingItem>
          <ReadingItem>
            <i>Thinking Physics</i> by Lewis Carroll Epstein
          </ReadingItem>
          <ReadingItem>
            <i>Benjamin Franklin: An American Life</i> by Walter Isaacson
          </ReadingItem>
          <ReadingItem>
            <i>The Autobiography of Benjamin Franklin</i> by Benjamin Franklin
          </ReadingItem>
          <ReadingItem>
            <i>Meditations</i> by Marcus Aurelius
          </ReadingItem>
          <ReadingItem>
            <i>The Man Who Loved Only Numbers</i> by Paul Hoffman
          </ReadingItem>
          <ReadingItem>
            <i>The Four Steps to the Epiphany</i> by Steve Blank
          </ReadingItem>
          <ReadingItem>
            <i>The Innovator&apos;s Solution</i> by Clayton Christensen
          </ReadingItem>
          <ReadingItem>
            <i>Autobiography of a Yogi</i> by Paramahansa Yogananda
          </ReadingItem>
          <ReadingItem>
            <i>How Buildings Learn</i> by Stewart Brand
          </ReadingItem>
          <ReadingItem>
            <i>How to Read a Book: The Classic Guidie to Intelligent Reading</i>{" "}
            by Mortimer Adler and Charles van Doren
          </ReadingItem>
          <ReadingItem>
            <i>Draft No. 4: On the Writing Process</i> by John McPhee
          </ReadingItem>
          <ReadingItem>
            <i>The Elements of Style [Illustrated]</i> by William Strunk Jr.,
            E.B. White, and Maira Kalman
          </ReadingItem>
          <ReadingItem>
            <i>Man: The Moral Animal</i> by Robert Wright
          </ReadingItem>
          <ReadingItem>
            <i>The Adapted Mind</i> by Jerome Barker, Leda Cosmides, and John
            Tooby
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
