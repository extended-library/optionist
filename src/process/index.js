'use strict'

/**
 * @module optionist/process
 */

const KEYS = require('../_utils/_KEYS')
const merge = require('../_utils/_merge')

/**
 * Processes the options and default options and merges them into a new recursive Proxy.
 * This recursive Proxy provides a convenient and short way to handle complex, deeply nested options
 * without getting `Uncaught ReferenceError` and constantly checking whether keys exist in objects
 * (e.g.: `if (options.settings && 'data' in options.settings && ...) { ... }`).
 *
 * @param {Object} [options]        - The options to use to merge into a new recursive Proxy.
 * @param {Object} [defaultOptions] - The default options to use to merge into a new recursive Proxy.
 *
 * @returns {Object} The new recursive Proxy with the processed options.
 *
 * @example <caption>complex/convenient options object handling with default options</caption>
 * // note: when using 'optionist/process', you also need 'optionist/process/get' too
 * const process = require('optionist/process')
 * const get = require('optionist/process/get')
 *
 * function myFunction (options = null) {
 *   options = process(options, DEFAULTS) // best practice: use a constant, when storing your defaults
 *
 *   // handle complex, deeply nested Objects without 'Uncaught ReferenceError'
 *   // and constant "key within object" checking
 *   // note: key existence checking isn't needed (e.g.:
 *   // if (options.settings && 'data' in options.settings && ...) { ... })
 *   this._value = get(options.settings.deeply.nested.data.value)
 *   // note: per-option default option is also possible, when the specific option doesn't exist
 *   this._flag = get(options.settings.burried.deeply.yet.doesnt.exist.flag, true)
 *
 *   // also possible in conditions...
 *   if (get(options.deeply.nested.settings.value) > 0) {
 *     // handle value
 *   }
 *
 *   // ...with per-option default option, when the specific option doesn't exist
 *   if (get(options.some.other.deeply.nested.non.existent.flag, false)) {
 *     // handle flag
 *   }
 * }
 *
 * // or with a class
 * class MyClass {
 *   constructor (options = null) {
 *     options = process(options, DEFAULTS) // best practice: use a constant, when storing your defaults
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

      // store the partial keys (e.g.: for option "a.b.c", it will store them like "a", "b", then "c" separately)
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
