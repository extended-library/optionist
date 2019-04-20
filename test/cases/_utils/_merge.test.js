'use strict'

const assert = require('assert')
const _merge = require('../../../src/_utils/_merge')

describe('optionry/_utils/_merge', () => {
  it('should return an empty object, when no parameterse were passed', () => {
    assert.deepStrictEqual(_merge(), {})
  })

  it('should return an empty object, when no options were passed', () => {
    assert.deepStrictEqual(_merge({}), {})
  })

  it('should return the passed options, when just the options were passed', () => {
    assert.deepStrictEqual(
      _merge({ a: 1, b: { c: 3 } }),
      { a: 1, b: { c: 3 } }
    )
  })

  it('should return the merged options from passed options and defaultOptions', () => {
    assert.deepStrictEqual(
      _merge({ a: 1, b: { c: 3 } }, { b: { c: 4 }, d: [1, 2, 3] }),
      { a: 1, b: { c: 3 }, d: [1, 2, 3] }
    )
  })
})
