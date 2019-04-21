'use strict'

/**
 * @module optionry/process
 */

const KEYS = require('../_utils/_KEYS')
const merge = require('../_utils/_merge')

/**
 * Processes the options and default options into a new recursive Proxy.
 *
 * @param {Object} [options]        - The options to use to merge into a new recursive Proxy.
 * @param {Object} [defaultOptions] - The default options to use to merge into a new recursive Proxy.
 *
 * @returns {Object} The new recursive Proxy with the processed options.
 */
module.exports = (options = null, defaultOptions = null) => {
  // create a recursive Proxy with Symbol-based keys to store data
  const proxy = new Proxy({
    [KEYS.OPTIONS]: merge(options, defaultOptions),
    [KEYS.KEY]: []
  }, {
    /**
     * A trap for getting property values.
     *
     * @private
     * @param {Object} target   - The target, which was used, when the Proxy was created.
     * @param {string} property - The actual property, that is used, when accessing the Proxy.
     *
     * @returns {Object} - The Proxy, thus creating the recursive functionality.
     */
    get (target, property) {
      // handle access via the Symbol objects from KEYS
      switch (property) {
        case KEYS.OPTIONS:
        case KEYS.KEY:
          return target[property]
      }

      // store the key (e.g.: "option.key.within.deep")
      target[KEYS.KEY].push(property)

      // return the Proxy instance to provide the recursive functionality
      return proxy
    },
    /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     *
     * @private
     */
    ownKeys () {
      // hide internal data
      return []
    }
  })

  return proxy
}
