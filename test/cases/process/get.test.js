'use strict'

const assert = require('assert')
const process = require('../../../src/process')
const get = require('../../../src/process/get')

const DEFAULTS = { a: 1, b: { c: 2 }, d: [3, 4, 5] }

describe('optionry/process/get', () => {
  it('should throw an error, when unprocessed object was passed', () => {
    let message

    try {
      get({})
    } catch (error) {
      message = error.message
    }

    assert.strictEqual(message, 'Object has to be processed using .process() before using .get() on the object!')
  })

  it('should return null, when called without arguments', () => {
    const option = get()

    assert.strictEqual(option, null)
  })

  it('should return the whole options object, when no key was specified', () => {
    const options = process({}, DEFAULTS)
    const option = get(options)

    assert.deepStrictEqual(option, DEFAULTS)
  })

  it('should return the specific option, when it\'s present in the options object', () => {
    const options = process(
      { a: 5, b: { c: 6, d: 7 }, d: [7, 8, 9] },
      DEFAULTS
    )

    assert.strictEqual(get(options.a), 5)
    assert.deepStrictEqual(get(options.b), { c: 6, d: 7 })
    assert.strictEqual(get(options.b.c), 6)
    assert.strictEqual(get(options.b.d), 7)
    assert.deepStrictEqual(get(options.d), [7, 8, 9])
  })

  it('should return the default option, when it is not present in the options object, ' +
     'but there is a default option for it', () => {
    const options = process(
      { x: 1, y: { z: 2, i: 3 } },
      DEFAULTS
    )

    assert.strictEqual(get(options.a), 1)
    assert.deepStrictEqual(get(options.b), { c: 2 })
    assert.strictEqual(get(options.b.c), 2)
    assert.deepStrictEqual(get(options.d), [3, 4, 5])
  })

  it('should return the default passed option, when it is not present in the options object ' +
     'and no default options were passed to the process() function, ' +
     'but a default option was passed to the get() function', () => {
    const options = process({ x: 10, y: { z: 15, i: 20 } })

    assert.strictEqual(get(options.a, 1), 1)
    assert.deepStrictEqual(get(options.b, { c: 2 }), { c: 2 })
    assert.strictEqual(get(options.b.c, 2), 2)
    assert.deepStrictEqual(get(options.d, [3, 4, 5]), [3, 4, 5])
  })
})
