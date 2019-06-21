'use strict'

module.exports = (str, a, b) => {
  const pattern = '(' + a + '|' + b + ')'
  const regex = new RegExp(pattern, 'g')
  return str.replace(regex, $1 => $1 === a ? b : a)
}
