'use strict'

/**
 * @module optionry/_utils/_merge
 */

/**
 * Copies and merges options and default options into a new object.
 *
 * @private
 * @param {Object} options          - The options to use to merge into a new object.
 * @param {Object} [defaultOptions] - The default options to use to merge into a new object.
 *
 * @returns {Object} The new object with the merged options.
 */
module.exports = (options, defaultOptions = null) => {
  return Object.assign({}, defaultOptions, options)
}
