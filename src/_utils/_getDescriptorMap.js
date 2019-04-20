'use strict'

module.exports = function (class_, converter) {
  const descriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(class_))
  const map = {}

  for (let [ name, descriptor ] of Object.entries(descriptors)) {
    if (converter(name, descriptor)) {
      map[name] = true
    }
  }

  return map
}
