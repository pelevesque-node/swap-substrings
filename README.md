[![Build Status](https://travis-ci.org/pelevesque/swap-substrings.svg?branch=master)](https://travis-ci.org/pelevesque/swap-substrings)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/swap-substrings/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/swap-substrings?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# swap-substrings

Swaps substrings.

## Node Repository

https://www.npmjs.com/package/@pelevesque/swap-substrings

## Installation

`npm install @pelevesque/swap-substrings`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring

```js
const swapSubstrings = require('@pelevesque/swap-substrings')
```

### Two Substrings that are in the String

```js
const str = 'bad bed led lad'
const swap = ['a', 'e']
const result = swapSubstrings(str, swap)
// result === 'bed bad lad led'
```

```js
const str = 'dog treats for dogs, cat treats for cats'
const swap = ['dog', 'cat']
const result = swapSubstrings(str, swap)
// result === 'cat treats for cats, dog treats for dogs'
```

### One Substring in the String, one that is not

```js
const str = 'I like hamsters'
const swap = ['hamsters', 'squirrels']
const result = swapSubstrings(str, swap)
// result === 'I like squirrels'
```

### Many Swaps at Once

```js
const str = 'a fairly large man says oh oh oh'
const swap = [
  ['a ', 'the '],
  ['man', 'bird'],
  ['large', 'small'],
  ['oh', 'tweet']
]
const result = swapSubstrings(str, swap)
// result === 'the fairly small bird says tweet tweet tweet'
```
