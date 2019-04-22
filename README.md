# optionist

[![GitHub Release][badge-github]][url-github]
[![Travis CI][badge-travis]][url-travis]
[![Coverage Status][badge-coverage]][url-coverage]
[![Greenkeeper][badge-greenkeeper]][url-greenkeeper]
[![Inline Docs][badge-docs]][url-docs]

[![Code Style Guide][badge-style]][url-style]
[![Commit Style Guide][badge-commit]][url-commit]
[![Release Workflow][badge-release]][url-release]
[![ISC License][badge-license-isc]][url-license-doc-isc]
[![PRs Welcome][badge-contrib]][url-contrib-doc]

A powerful **options object parser utility**, a.k.a. ***Options Specialist***.

## Why optionist?

 - Easy [options object](https://www.codereadability.com/what-are-javascript-options-objects/) parsing
 - A better alternative to [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
 - Get every possible option without checking for ```key``` existence via recursive [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## Installation

```
npm install optionist --save
```

## Usage

### Easy ```options``` Object Parsing

```javascript
const optionist = require('optionist')

// with a dedicated defaults object --------------------------------------------
const DEFAULTS = { 
  value: 7, 
  flag: true, 
  callback: null
  /* etc. */
}

function testFuncion1 (options) {
  options = optionist(options, DEFAULTS)

  this._value = options.value
  this._flag = options.flag
  this._callback = options.callback  
}

testFunction1({ value: 42 })

// with inline defaults --------------------------------------------------------
function testFuncion2 (options) {
  options = optionist(options, { 
    value: 7, 
    flag: true, 
    callback: null
    /* etc. */
  })

  this._value = options.value
  this._flag = options.flag
  this._callback = options.callback
}

testFunction2({ value: 42 })
```

### A Better ```Object.assign``` Alternative

```javascript
// with underscored properties (e.g.: this._value = 42) ------------------------
const underscore = require('optionist/assign/underscore')

function testFuncion1 (options) {
  // the properties will be set automatically based on the options
  // that are merged with the passed options and with the default options
  underscore(options, DEFAULTS)  
  
  /*
    the following properties will be set automatically
    based on the options and default options:

     - this._value
     - this._flag
     - this._callback
  */

  this._value = options.value
  this._flag = options.flag
  this._callback = options.callback  
}

testFunction1({ value: 42 })




const optionist = require('optionist')

// with a dedicated defaults object --------------------------------------------
const DEFAULTS = { 
  value: 7, 
  flag: true, 
  callback: null
  /* etc. */
}

function testFuncion1 (options) {
  options = optionist(options, DEFAULTS)

  this._value = options.value
  this._flag = options.flag
  this._callback = options.callback  
}

testFunction1({ value: 42 })

// with inline defaults --------------------------------------------------------
function testFuncion2 (options) {
  options = optionist(options, { 
    value: 7, 
    flag: true, 
    callback: null
    /* etc. */
  })

  this._value = options.value
  this._flag = options.flag
  this._callback = options.callback
}

testFunction2({ value: 42 })
```

### Get any option without errors via recursive ```Proxy```

## Contribution

**Any contribution is appreciated**. To get going, check out the 
[**contribution guidelines**][url-contrib-doc]. ***Thank you and have fun!***

## License

[ISC][url-license-doc-isc] @ [Richard King](www.richrdkng.com)


  <!--- References ============================================================================ -->

  <!--- Badges -->
  [badge-github]:      https://img.shields.io/github/release/nodewell/optionist.svg?style=social
  [badge-travis]:      https://img.shields.io/travis/nodewell/optionist.svg?style=flat-square
  [badge-coverage]:    https://img.shields.io/coveralls/github/nodewell/optionist.svg?style=flat-square
  [badge-greenkeeper]: https://badges.greenkeeper.io/nodewell/optionist.svg?style=flat-square  
  [badge-docs]:        https://inch-ci.org/github/nodewell/optionist.svg?branch=master&style=flat-square
  [badge-license-isc]: https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square  
  [badge-contrib]:     https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
  [badge-style]:       https://img.shields.io/badge/style-standardjs-f3df49.svg?style=flat-square
  [badge-commit]:      https://img.shields.io/badge/commit-commitizen-fe7d37.svg?style=flat-square
  [badge-release]:     https://img.shields.io/badge/release-semantic--release-e10079.svg?style=flat-square
  
  <!--- URLs -->
  [url-github]:          https://github.com/nodewell/optionist
  [url-travis]:          https://travis-ci.org/nodewell/optionist
  [url-coverage]:        https://coveralls.io/github/nodewell/optionist?branch=master
  [url-greenkeeper]:     https://greenkeeper.io
  [url-docs]:            https://inch-ci.org/github/nodewell/optionist
  [url-style]:           https://standardjs.com
  [url-commit]:          http://commitizen.github.io/cz-cli
  [url-release]:         https://semantic-release.gitbook.io/semantic-release
  [url-license-doc]:     LICENSE.md
  [url-license-doc-isc]: https://github.com/nodewell/optionist/blob/master/LICENSE.md#isc-license  
  [url-contrib-doc]:     https://github.com/nodewell/optionist/blob/master/.github/CONTRIBUTING.md
