'use strict'

const merge = require('../_utils/_merge')
const assignSetterProperties = require('../_utils/_assignSetterProperties')

/**
 * Processes the given options and assigns them to the given class based on the assign options.
 *
 * @param {Object} class_           - The class to assing the options to.
 * @param {Object} [options]        - The options to process and assing.
 * @param {Object} [defaultOptions] - The default options to process and assing.
 */
module.exports = function (class_, options = null, defaultOptions = null) {
  if (!class_) {
    throw new Error(`class_ must be an object, instead got: ${class_}`)
  }

  if (options === null && defaultOptions === null) {
    return
  }

  options = merge(options, defaultOptions)
  assignSetterProperties(class_, options)
}
