// Mostly because Dynamic imports don't yell at me if I give wrong path
const checkPath = (path: string): void => {
  try {
    require(path)
  } catch (err) {
    throw new Error(`Path ${path} doesn't exist!`)
  }
}

export default checkPath
