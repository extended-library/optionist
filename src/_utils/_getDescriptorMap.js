'use strict'

/**
 * @module optionry/_utils/_getDescriptorMap
 */

/**
 * @typedef {Object} DescriptorObject
 *
 * @property {*}        [value]       - The value associated with the property (data descriptors only).
 * @property {boolean}  [writable]    - true if and only if the value associated with the property may be changed
 *                                      (data descriptors only).
 * @property {Function} [get]         - A function which serves as a getter for the property,
 *                                      or undefined if there is no getter (accessor descriptors only).
 * @property {Function} [set]         - A function which serves as a setter for the property,
 *                                      or undefined if there is no setter (accessor descriptors only).
 * @property {boolean} [configurable] - true if and only if the type of this property descriptor may be changed
 *                                      and if the property may be deleted from the corresponding object.
 * @property {boolean} [enumerable]   - true if and only if this property shows up during enumeration
 *                                      of the properties on the corresponding object.
 */

/**
 * The converter function to check and process the specific name and descriptor.
 *
 * @callback DescriptorConverter
 *
 * @param {string}           name       - The name of the property.
 * @param {DescriptorObject} descriptor - The descriptor of the property.
 */

/**
 * Returns a value using a key to search the given object.
 *
 * @private
 * @param {Object}              class_    - The object to search for the given key.
 * @param {DescriptorConverter} converter - The key to use to search in the given object (e.g.: 'object.key').
 *
 * @returns {Object} A map with property names (e.g.: { setName: true, setText: true, etc. })
 *                   filtered by the converter function.
 */
module.exports = (class_, converter) => {
  const descriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(class_))
  const map = {}

  // iterate over the descriptors and filter them using the converter function
  for (let [ name, descriptor ] of Object.entries(descriptors)) {
    if (converter(name, descriptor)) {
      map[name] = true
    }
  }

  return map
}
