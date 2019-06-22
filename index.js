'use strict'

module.exports = (str, swap) => {
  if (!Array.isArray(swap[0])) swap = [swap]
  for (let i = 0, len = swap.length; i < len; i++) {
    const a = swap[i][0]
    const b = swap[i][1]
    const pattern = '(' + a + '|' + b + ')'
    const regex = new RegExp(pattern, 'g')
    str = str.replace(regex, $1 => $1 === a ? b : a)
  }
  return str
}
