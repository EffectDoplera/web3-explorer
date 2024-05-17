import { ELEMENTS_COUNT } from './const'

const getRandomColor = (number: number, colors: string[], range: number) => colors[number % range]

const hashCode = (name: string) => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    let character = name.charCodeAt(i)
    hash = (hash << 5) - hash + character
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

export function generateColors(name: string, colors: string[]) {
  const numFromName = hashCode(name)
  const range = colors && colors.length

  const colorList = Array.from({ length: ELEMENTS_COUNT }, (_, i) =>
    getRandomColor(numFromName % (i + 1), colors, range),
  )

  return colorList
}
