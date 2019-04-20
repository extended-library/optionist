'use strict'

const merge = require('./_utils/_merge')

/**
 * Copies and merges options and default options into a new object.
 *
 * @param {Object} [options]        - The options to process.
 * @param {Object} [defaultOptions] - The default options to process.
 *
 * @returns {Object} The new object with the processed options.
 */
module.exports = function (options = null, defaultOptions = null) {
  if (!options && !defaultOptions) {
    return {}
  }

  if (options && !defaultOptions) {
    return options
  }

  return merge(options, defaultOptions)
}
