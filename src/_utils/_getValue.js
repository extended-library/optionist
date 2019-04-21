'use strict'

/**
 * @module optionry/_utils/_getValue
 */

/**
 * Returns a value using a key to search the given object.
 *
 * @private
 * @param {Object} object          - The object to search for the given key.
 * @param {string} key             - The key to use to search in the given object (e.g.: 'object.key').
 * @param {*}      [fallback=null] - The fallback value in case the given key cannot be found in the given object.
 *
 * @returns {*} The specific value, otherwise the fallback in case the given key is not present in the given object.
 */
module.exports = (object, key, fallback = null) => {
  // return early (e.g.: 'object.key')
  if (key in object) {
    return object[key]
  }

  // process the dot-separated key (e.g.: 'object.key.within.key')
  const parts = key.split('.')
  let value = fallback
  let part

  for (let i = 0, len = parts.length; i < len; i++) {
    part = parts[i]

    // don't process improper dot-separated key parts (e.g.: 'object..key' - notice the 2 consecutive dots)
    // after splitting the dot-separated keys, improper key parts will be empty strings
    if (part === '') {
      continue
    }

    // stop, when a non-plain-object will be used (e.g.: Boolean, String, Number, etc.) the check/enter
    // this can occur, when a given key "overshoots" the object e.g.:
    // for object { a: { b: 1 } } with key 'a.b.c' would try to check the presence of property 'c' in Number(1)
    if (typeof object !== 'object') {
      value = fallback
      break
    }

    // check and enter into the next object in case the part is present
    if (part in object) {
      object = object[part]
    } else {
      break
    }

    value = object
  }

  return value
}
