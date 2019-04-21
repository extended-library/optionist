'use strict'

/**
 * @module optionry/_utils/_assignUnderscoreProperties
 */

/**
 * Sets the underscored properties (e.g.: "this._name") of the given class based on the given options.
 *
 * @private
 * @param {Object} class_  - The class instance, which properties will be set.
 * @param {Object} options - The options to use to determine which properties will be set.
 */
module.exports = (class_, options) => {
  for (let [ name, value ] of Object.entries(options)) {
    class_[`_${name}`] = value
  }
}
