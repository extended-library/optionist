'use strict'

const KEYS = require('../_utils/_KEYS')
const merge = require('../_utils/_merge')

module.exports = function (options = null, defaultsOptions = null, processOptions = null) {
  const proxy = new Proxy({
    [KEYS.OPTIONS]: merge(options, defaultsOptions),
    [KEYS.KEY]: []
  }, {
    get (target, property) {
      switch (property) {
        case KEYS.OPTIONS:
        case KEYS.KEY:
          return target[property]
      }

      target[KEYS.KEY].push(property)
      return proxy
    },
    ownKeys () {
      // hide internal data
      return []
    }
  })

  return proxy
}
