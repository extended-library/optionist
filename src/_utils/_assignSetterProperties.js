'use strict'

const getDescriptorMap = require('./_getDescriptorMap')

module.exports = function (class_, options) {
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
