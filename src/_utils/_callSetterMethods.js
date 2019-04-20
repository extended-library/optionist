'use strict'

const getDescriptorMap = require('./_getDescriptorMap')

module.exports = function (class_, options) {
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

  for (let [ name, value ] of Object.entries(options)) {
    const methodName = 'set' + name.substring(0, 1).toUpperCase() + name.substring(1)

    if (methodName in methodMap) {
      class_[methodName].call(class_, value) // eslint-disable-line no-useless-call
    }
  }
}
