/* global describe, it */
'use strict'

const expect = require('chai').expect
const swapSubstrings = require('../index')

describe('#swapSubstrings()', () => {
  it('should return an empty string if the string is empty', () => {
    const str = ''
    const swaps = ['1', '2']
    const result = swapSubstrings(str, swaps)
    const expected = ''
    expect(result).to.equal(expected)
  })

  it('should make no changes if swaps is an empty array', () => {
    const str = '12345'
    const swaps = []
    const result = swapSubstrings(str, swaps)
    const expected = '12345'
    expect(result).to.equal(expected)
  })

  it('should swap two single characters', () => {
    const str = '12'
    const swaps = ['1', '2']
    const result = swapSubstrings(str, swaps)
    const expected = '21'
    expect(result).to.equal(expected)
  })

  it('should swap many single characters repeated contiguously', () => {
    const str = '111222'
    const swaps = ['1', '2']
    const result = swapSubstrings(str, swaps)
    const expected = '222111'
    expect(result).to.equal(expected)
  })

  it('should swap many single characters repeated non-contiguously', () => {
    const str = '121212'
    const swaps = ['1', '2']
    const result = swapSubstrings(str, swaps)
    const expected = '212121'
    expect(result).to.equal(expected)
  })

  it('should swap many single characters and keep other characters intact', () => {
    const str = '011202141220'
    const swaps = ['1', '2']
    const result = swapSubstrings(str, swaps)
    const expected = '022101242110'
    expect(result).to.equal(expected)
  })

  it('should swap two substrings', () => {
    const str = 'doggy and kitty'
    const swaps = ['doggy', 'kitty']
    const result = swapSubstrings(str, swaps)
    const expected = 'kitty and doggy'
    expect(result).to.equal(expected)
  })

  it('should swap two substrings and keep other characters intact', () => {
    const str = 'my doggy your kitty'
    const swaps = ['doggy', 'kitty']
    const result = swapSubstrings(str, swaps)
    const expected = 'my kitty your doggy'
    expect(result).to.equal(expected)
  })

  it('should swap two substrings many times and keep other characters intact', () => {
    const str = 'a2222b4444c4444d2222e2222'
    const swaps = ['2222', '4444']
    const result = swapSubstrings(str, swaps)
    const expected = 'a4444b2222c2222d4444e4444'
    expect(result).to.equal(expected)
  })

  it('should swap a substring with one that is not in the original string', () => {
    const str = 'my little dog'
    const swaps = ['dog', 'squirrel']
    const result = swapSubstrings(str, swaps)
    const expected = 'my little squirrel'
    expect(result).to.equal(expected)
  })

  it('should handle many substitution pairs', () => {
    const str = 'a fairly large man says oh oh oh to the bird'
    const swaps = [
      ['a ', 'the '],
      ['man', 'bird'],
      ['large', 'small'],
      ['oh', 'tweet']
    ]
    const result = swapSubstrings(str, swaps)
    const expected = 'the fairly small bird says tweet tweet tweet to a man'
    expect(result).to.equal(expected)
  })

  it('should substitute pairs in chronological order', () => {
    const str = 'abc'
    const swaps = [
      ['a', 'd'],
      ['d', 'a']
    ]
    const result = swapSubstrings(str, swaps)
    const expected = 'abc'
    expect(result).to.equal(expected)
  })
})
