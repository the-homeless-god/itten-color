import { describe, expect, it } from 'vitest'
import { getIttenColor } from '../index'

describe('constants', () => {
  it('for red should return aqua', () => {
    // Arrange

    const expected = {
      r: 1,
      g: 256,
      b: 256,
    }

    const payload = {
      r: 255,
      g: 0,
      b: 0,
    }
    // Actual

    const actual = getIttenColor(payload)

    // Assert
    expect(actual).toStrictEqual(expected)
  })
  it('for orange should return dodgerblue', () => {
    // Arrange
    const expected = {
      r: 1,
      g: 91,
      b: 256,
    }
    const payload = {
      r: 255,
      g: 165,
      b: 0,
    }
    // Actual

    const actual = getIttenColor(payload)

    // Assert
    expect(actual).toStrictEqual(expected)
  })
  it('for yellow should return blue', () => {
    // Arrange
    const expected = {
      r: 1,
      g: 1,
      b: 256,
    }

    const payload = {
      r: 255,
      g: 255,
      b: 0,
    }
    // Actual

    const actual = getIttenColor(payload)

    // Assert
    expect(actual).toStrictEqual(expected)
  })
})
