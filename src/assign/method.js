'use strict'

/**
 * @module optionry/assign/method
 */

const merge = require('../_utils/_merge')
const callSetterMethods = require('../_utils/_callSetterMethods')

/**
 * Processes the given options and assigns them by calling the setter methods
 * (e.g.: "this.setText('data')") of the given class.
 *
 * @param {Object} class_           - The class to assing the options to via setter methods.
 * @param {Object} [options]        - The options to process and assing.
 * @param {Object} [defaultOptions] - The default options to process and assing.
 *
 * @throws {TypeError} In case the class_ parameter is not present or null or falsy.
 */
module.exports = function (class_, options = null, defaultOptions = null) {
  if (!class_) {
    throw new TypeError(`class_ must be an object, instead got: ${class_}`)
  }

  // noop in case of no options at all
  if (options === null && defaultOptions === null) {
    return
  }

  options = merge(options, defaultOptions)
  callSetterMethods(class_, options)
}
