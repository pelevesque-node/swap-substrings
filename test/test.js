/* global describe, it */
'use strict'

const expect = require('chai').expect
const swapSubstrings = require('../index')

describe('#swapSubstrings()', () => {
  it('should swap two single characters', () => {
    const str = '12'
    const result = swapSubstrings(str, '1', '2')
    const expected = '21'
    expect(result).to.equal(expected)
  })

  it('should swap many single characters repeated contiguously', () => {
    const str = '111222'
    const result = swapSubstrings(str, '1', '2')
    const expected = '222111'
    expect(result).to.equal(expected)
  })

  it('should swap many single characters repeated non-contiguously', () => {
    const str = '121212'
    const result = swapSubstrings(str, '1', '2')
    const expected = '212121'
    expect(result).to.equal(expected)
  })

  it('should swap many single characters and keep other characters intact', () => {
    const str = '011202141220'
    const result = swapSubstrings(str, '1', '2')
    const expected = '022101242110'
    expect(result).to.equal(expected)
  })

  it('should swap two substrings', () => {
    const str = 'doggycat'
    const result = swapSubstrings(str, 'doggy', 'cat')
    const expected = 'catdoggy'
    expect(result).to.equal(expected)
  })

  it('should swap two substrings and keep other characters intact', () => {
    const str = 'my doggy your cat'
    const result = swapSubstrings(str, 'doggy', 'cat')
    const expected = 'my cat your doggy'
    expect(result).to.equal(expected)
  })

  it('should swap two substrings many times and keep other characters intact', () => {
    const str = 'a2222b4444c4444d2222e2222'
    const result = swapSubstrings(str, '2222', '4444')
    const expected = 'a4444b2222c2222d4444e4444'
    expect(result).to.equal(expected)
  })

  it('should swap a substring with one that is not in the original string', () => {
    const str = 'my little dog'
    const result = swapSubstrings(str, 'dog', 'squirrel')
    const expected = 'my little squirrel'
    expect(result).to.equal(expected)
  })
})
