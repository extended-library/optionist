'use strict'

/**
 * @module optionist
 */

const merge = require('./_utils/_merge')

/**
 * Copies and merges options and default options into a new object.
 * If no options and defaultOptions were passed, or they are both null, or falsy,
 * an empty Object will be returned (e.g.: {}).
 *
 * @param {Object} [options]        - The options to use to merge into a new object.
 * @param {Object} [defaultOptions] - The default options to use to merge into a new object.
 *
 * @returns {Object} The new object with the merged options.
 *
 * @example <caption>simple options object handling for functions with default options</caption>
 * const optionist = require('optionist')
 *
 * function myFunction (options = null) {
 *   options = optionist(options, { value: 42, flag: false })
 *
 *   // assing to "private" properties...
 *   this._value = options.value
 *   this._flag = options.flag
 *
 *   // ...or handle the specific options
 *   if (options.value > 0) {
 *     // handle value
 *   }
 *
 *   if (options.flag) {
 *     // handle flag
 *   }
 * }
 *
 * // calling without passing the options will result the default options, in this case options will be:
 * // { value: 42, flag: false }
 * myFunction()
 *
 * // calling with some of the options will result a merged options object
 * // extended by the defaults options, when needed, in this case the options will be:
 * // { value: 0, flag: false }
 * myFunction({ value: 0 })
 *
 * @example <caption>simple options object handling for classes with default options</caption>
 * const optionist = require('optionist')
 *
 * class MyClass {
 *   constructor (options = null) {
 *     options = optionist(options, { data: null, settings: null })
 *
 *     // assing to "private" properties...
 *     this._data = options.data
 *     this._settings = options.settings
 *
 *     // ...or handle the specific options
 *     if (!options.data) {
 *       // handle data
 *     }
 *
 *     if (!options.settings) {
 *       // handle settings
 *     }
 *   }
 * }
 *
 * // no options parameter - the default options will be used, in this case the options will be:
 * // { data: null, settings: null }
 * const c1 = new MyClass()
 *
 * // custom options were passed - when some/all options are passed, only missing options
 * // will be used from the default options, in this case the options will be:
 * // { data: [1, 2, 3], settings: null }
 * const c2 = new MyClass({ data: [1, 2, 3] })
 *
 * @example <caption>simple options object handling **best practices** - use a **const** for defaults</caption>
 * // store your default values here
 * const DEFAULTS = {
 *   value: 0,
 *   flag: false,
 *   data: null
 *   // etc...
 * }
 *
 * // with functions:
 * function myFunction (options = null) {
 *   options = optionist(options, DEFAULTS)
 *   // ...
 * }
 *
 * // with classes:
 * class MyClass {
 *   constructor (options = null) {
 *     options = optionist(options, DEFAULTS)
 *     // ...
 *   }
 * }
 *
 * @example <caption>simple options object handling **best practices** - use **only for simpler** options</caption>
 * // simple, non-deep, trivial options:
 * function myFunction (options = null) {
 *   options = optionist(options, DEFAULTS)
 *
 *   // no deeply nested Objects, etc.
 *   this._value = options.value
 *   this._flag = options.flag
 *
 *   if (options.value > 0) {
 *     // handle value
 *   }
 *
 *   if (options.flag) {
 *     // handle flag
 *   }
 * }
 *
 * @example <caption>simple options object handling **best practices** - use **optionist/process** for complex options</caption>
 * // for more complex, deeply nested options, use 'optionist/process' with 'optionist/process/get',
 * // as they provide a convenient way via recursive Proxy to get specific options,
 * // without constantly checking whether a key exists in the current object
 * const process = require('optionist/process')
 * const get = require('optionist/process/get')
 *
 * function myFunction (options = null) {
 *   options = process(options, DEFAULTS)
 *
 *   // handle complex, deeply nested Objects without 'Uncaught ReferenceError'
 *   // and constant "key within object" checking, e.g.:
 *   // note: key existence checking isn't needed (e.g.: if (options.settings && 'data' in options.settings && ...))
 *   this._value = get(options.settings.deeply.nested.data.value)
 *   // note: per-option default option is also possible, when the specific option doesn't exist
 *   this._flag = get(options.settings.burried.deeply.flag, true)
 *
 *   // also possible in conditions...
 *   if (get(options.deeply.nested.settings.value) > 0) {
 *     // handle value
 *   }
 *
 *   // ...with per-option default option, when the specific option doesn't exist
 *   if (get(options.some.other.deeply.nested.flag, false)) {
 *     // handle flag
 *   }
 * }
 */
module.exports = (options = null, defaultOptions = null) => {
  if (!options && !defaultOptions) {
    return {}
  }

  if (options && !defaultOptions) {
    return options
  }

  return merge(options, defaultOptions)
}
