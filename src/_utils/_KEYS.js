'use strict'

/**
 * @module optionry/_utils/_KEYS
 */

/**
 * @private
 * @static
 * @const
 */
module.exports = {
  /**
   * The Symbol for storing the options (e.g.: { useFlag: true }) in the Proxy.
   *
   * @const
   * @type {Symbol}
   */
  OPTIONS: Symbol('The Symbol for the options array'),

  /**
   * The Symbol for storing the key (e.g.: option.useFlag) in the Proxy.
   *
   * @const
   * @type {Symbol}
   */
  KEY: Symbol('The Symbol for the key array')
}
