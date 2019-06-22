'use strict'

module.exports = (str, swaps) => {
  if (!Array.isArray(swaps[0])) swaps = [swaps]
  for (let i = 0, len = swaps.length; i < len; i++) {
    const a = swaps[i][0]
    const b = swaps[i][1]
    const pattern = '(' + a + '|' + b + ')'
    const regex = new RegExp(pattern, 'g')
    str = str.replace(regex, $1 => $1 === a ? b : a)
  }
  return str
}
