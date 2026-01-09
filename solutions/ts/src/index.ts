import { MAX_BYTE_COLOR_VALUE } from './constants'

import { Color } from './types'

const decrementColorNumber = (colorNumber: number): number => {
  return MAX_BYTE_COLOR_VALUE - colorNumber
}

export const getIttenColor = (color: Color) => {
  return {
    b: decrementColorNumber(color.b),
    g: decrementColorNumber(color.g),
    r: decrementColorNumber(color.r),
  }
}
