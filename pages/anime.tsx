import React, { useEffect } from "react"
import Head from "next/head"
import anime from "animejs"

const Anime = (): JSX.Element => {
  useEffect(() => {
    anime({
      targets: "#animate",
      translateX: 100,
      borderRadius: 50,
      duration: 2000,
      easing: "linear",
      direction: "alternate",
    })
  })

  return (
    <>
      <Head>
        <title>AnimeJS | Warren Alphonso</title>
      </Head>
      <h1>AnimeJS</h1>
      <div
        id="animate"
        style={{ width: "100px", height: "100px", backgroundColor: "green" }}
      ></div>
    </>
  )
}

export default Anime
