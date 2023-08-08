import { breakPoints } from "consts"

export const mediaQueries = (n: keyof typeof breakPoints) => {
  const bpArray = Object.keys(breakPoints).map(key => [key, breakPoints[key]])
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])
  return result
}
