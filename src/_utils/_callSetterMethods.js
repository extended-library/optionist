'use strict'

/**
 * @module optionry/_utils/_callSetterMethods
 */

const getDescriptorMap = require('./_getDescriptorMap')

/**
 * Calls the setter methods of the given class based on the given options.
 *
 * @private
 * @param {Object} class_  - The class instance, which setter methods will be called.
 * @param {Object} options - The options to use to determine which setter methods will be called.
 */
module.exports = (class_, options) => {
  const methodMap = getDescriptorMap(class_, (name, descriptor) => {
    // only allow methods at first
    if (typeof descriptor.value !== 'function') {
      return false
    }

    // only add methods that start with 'set...'
    if (name.substring(0, 3) === 'set') {
      return true
    }
  })

  // call setter methods only if the corresponding options were passed, e.g.:
  // in case of the given option object { name: 'John', age: 10 }, call "setName('John')" and "setAge(10)"
  // if, and only if these setter methods are present in the given class itself
  for (let [ name, value ] of Object.entries(options)) {
    const methodName = 'set' + name.substring(0, 1).toUpperCase() + name.substring(1)

    if (methodName in methodMap) {
      class_[methodName].call(class_, value) // eslint-disable-line no-useless-call
    }
  }
}
