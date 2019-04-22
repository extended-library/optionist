'use strict'

const assert = require('assert')
const process = require('../../../src/process')
const get = require('../../../src/process/get')

describe('optionist/process', () => {
  it('should return empty object of options, when called without arguments', () => {
    const options = process()

    assert.deepStrictEqual(get(options), {})
  })

  it('should not leak internal properties', () => {
    const options = process({ a: 1, b: { c: 2 } })

    assert.deepStrictEqual(options, {})
  })
})
