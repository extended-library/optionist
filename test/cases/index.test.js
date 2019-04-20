'use strict'

const assert = require('assert')
const optionry = require('../../src')

describe('optionry', () => {
  it('should return an empty object, when called improperly', () => {
    assert.deepStrictEqual(optionry(), {})
    assert.deepStrictEqual(optionry(null), {})
    assert.deepStrictEqual(optionry(null, null), {})
    assert.deepStrictEqual(optionry(undefined), {})
    assert.deepStrictEqual(optionry(undefined, undefined), {})
  })

  it('should return an the options object untouched, when no defaultOptions was passed', () => {
    assert.deepStrictEqual(optionry({}), {})
    assert.deepStrictEqual(optionry({ a: 1 }), { a: 1 })
    assert.deepStrictEqual(optionry(
      { a: 1, b: { c: 3 } }
    ),
    { a: 1, b: { c: 3 } }
    )
  })

  it('should return merge the defaultOptions with the options, when no property exists', () => {
    assert.deepStrictEqual(optionry({}, { a: 1 }), { a: 1 })
    assert.deepStrictEqual(optionry({ a: 1 }, { a: 2 }), { a: 1 })
    assert.deepStrictEqual(optionry(
      { a: 1, d: 4 },
      { a: 2, b: { c: 3 } }
    ),
    { a: 1, b: { c: 3 }, d: 4 })
  })
})
