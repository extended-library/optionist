'use strict'

module.exports = function (object, key, fallback = null) {
  if (key in object) {
    return object[key]
  }

  const parts = key.split('.')
  let value = fallback
  let part

  for (let i = 0, len = parts.length; i < len; i++) {
    part = parts[i]

    if (part === '') {
      continue
    }

    if (typeof object !== 'object') {
      value = fallback
      break
    }

    if (part in object) {
      object = object[part]
    } else {
      break
    }

    value = object
  }

  return value
}
