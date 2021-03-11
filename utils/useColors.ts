import { useEffect } from "react"
import $ from "jquery"

const numColors = 6
const wordsNums = ["zero", "one", "two", "three", "four", "five"]

export const aColors = (ancestor = ""): void => {
  let counter = Math.floor(Math.random() * numColors)
  $(`${ancestor} a`).each((i, elem) => {
    // Remove any "link-" classes so we don't end up at "link-five" which
    // takes precedence over the rest
    const classes = $(elem).attr("class")
    if (classes) {
      $(elem).removeClass(
        classes.split(" ").filter((c) => c.indexOf("link-") >= 0)
      )
    }

    $(elem).addClass("link-" + wordsNums[counter % numColors])
    counter += 1
  })
}

export const blockquoteColors = (ancestor = ""): void => {
  let counter = Math.floor(Math.random() * numColors)
  $(`${ancestor} blockquote`).each((i, elem) => {
    elem.style["border-color"] = `var(--${wordsNums[counter % numColors]})`
    counter += 1
  })
}

export const clusterColors = (ancestor = ""): void => {
  let counter = Math.floor(Math.random() * numColors)
  $(`${ancestor} .cluster`).each((i, elem) => {
    elem.style["background-color"] = `var(--${wordsNums[counter % numColors]})`
    counter += 1
  })
}

export const setColors = (ancestor = ""): void => {
  aColors(ancestor)
  blockquoteColors(ancestor)
  clusterColors(ancestor)
}

const useColors = (ancestor = ""): void => {
  useEffect(() => {
    aColors(ancestor)
  })

  useEffect(() => {
    blockquoteColors(ancestor)
  })

  useEffect(() => {
    clusterColors(ancestor)
  })
}

export default useColors
