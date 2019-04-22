'use strict'

/**
 * @module optionist/process/get
 */

const KEYS = require('../_utils/_KEYS')
const getValue = require('../_utils/_getValue')

/**
 * Resets the recursive Proxy's key store.
 *
 * @private
 * @param {Object} proxy - The recursive Proxy to reset.
 */
function resetKey (proxy) {
  proxy[KEYS.KEY] = []
}

/**
 * Returns the specific option of the processed options from a recursive Proxy.
 *
 * @param {Object} [option]        - The specific option to return.
 * @param {Object} [defaultOption] - The default option to return in case the specific option is not present.
 *
 * @returns {*} The specific option.
 *
 * @throws {TypeError} In case the option was not previously processed with ".process()".
 *
 * @example <caption>get the processed options - for more examples, check: **optionist/process**</caption>
 * const process = require('optionist/process')
 * const get = require('optionist/process/get')
 *
 * class MyClass {
 *   constructor (options = null) {
 *     options = process(options, DEFAULTS)
 *
 *     // handle complex, deeply nested Objects without 'Uncaught ReferenceError'
 *     // and constant "key within object" checking
 *     // note: key existence checking isn't needed (e.g.:
 *     // if (options.settings && 'data' in options.settings && ...) { ... })
 *     this._value = get(options.settings.deeply.nested.data.value)
 *     // note: per-option default option is also possible, when the specific option doesn't exist
 *     this._flag = get(options.settings.burried.deeply.yet.doesnt.exist.flag, true)
 *
 *     // also possible in conditions...
 *     if (get(options.deeply.nested.settings.value) > 0) {
 *       // handle value
 *     }
 *
 *     // ...with per-option default option, when the specific option doesn't exist
 *     if (!get(options.some.other.deeply.nested.non.existent.flag, false)) {
 *       // handle flag
 *     }
 *   }
 * }
 */
module.exports = (option = null, defaultOption = null) => {
  if (!option || typeof option !== 'object') {
    return defaultOption
  }

  // check for the Proxy
  if (!option[KEYS.OPTIONS] || !option[KEYS.KEY]) {
    throw new TypeError('Object has to be processed using .process() before using .get() on the object!')
  }

  const options = option[KEYS.OPTIONS]
  const key = option[KEYS.KEY]

  // return the whole options object, if no key was specified
  if (key.length === 0) {
    resetKey(option)
    return options
  }

  resetKey(option)
  return getValue(options, key.join('.'), defaultOption)
}
