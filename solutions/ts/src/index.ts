import { Color } from './types'
import { MAX_BYTE_COLOR_VALUE } from './constants'

const decrementColorNumber = (colorNumber: number): number => {
  return MAX_BYTE_COLOR_VALUE - colorNumber
}

export const getIttenColor = (color: Color) => {
  return {
    r: decrementColorNumber(color.r),
    g: decrementColorNumber(color.g),
    b: decrementColorNumber(color.b),
  }
}
