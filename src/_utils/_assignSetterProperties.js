'use strict'

/**
 * @module optionry/_utils/_assignSetterProperties
 */

const getDescriptorMap = require('./_getDescriptorMap')

/**
 * Calls the setter properties (e.g.: "this.name = 'John'") of the given class based on the given options.
 *
 * @private
 * @param {Object} class_  - The class instance, which setter properties will be called.
 * @param {Object} options - The options to use to determine which setter properties will be called.
 */
module.exports = (class_, options) => {
  const descriptors = getDescriptorMap(class_, (name, descriptor) => {
    // only setter properties
    if (typeof descriptor.set !== 'undefined') {
      return true
    }
  })

  for (let [ name, value ] of Object.entries(options)) {
    if (name in descriptors) {
      class_[name] = value
    }
  }
}
