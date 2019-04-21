'use strict'

/**
 * @module optionry
 */

const merge = require('./_utils/_merge')

/**
 * Copies and merges options and default options into a new object.
 *
 * @param {Object} [options]        - The options to use to merge into a new object.
 * @param {Object} [defaultOptions] - The default options to use to merge into a new object.
 *
 * @returns {Object} The new object with the merged options.
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
