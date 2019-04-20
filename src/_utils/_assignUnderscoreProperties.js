'use strict'

module.exports = function (class_, options) {
  for (let [ name, value ] of Object.entries(options)) {
    class_[`_${name}`] = value
  }
}
