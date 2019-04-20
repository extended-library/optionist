'use strict'

const KEYS = require('../_utils/_KEYS')
const getValue = require('../_utils/_getValue')

function resetKey (option) {
  option[KEYS.KEY] = []
}

/**
 * Returns the specific option of the processed options.
 *
 * @param {Object} [option]        - The options to process.
 * @param {Object} [defaultOption] - The default options to process.
 *
 * @returns {*} The specific option.
 */
module.exports = function (option = null, defaultOption = null) {
  if (!option || typeof option !== 'object') {
    return defaultOption
  }

  if (!option[KEYS.OPTIONS] || !option[KEYS.KEY]) {
    throw new Error('Object has to be processed using .process() before using .get() on the object!')
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
