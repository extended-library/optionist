'use strict'

const assert = require('assert')
const optionary = require('../../src')

describe('optionary', () => {
  it('should return an empty object, when called improperly', () => {
    assert.deepStrictEqual(optionary(), {})
    assert.deepStrictEqual(optionary(null), {})
    assert.deepStrictEqual(optionary(null, null), {})
    assert.deepStrictEqual(optionary(undefined), {})
    assert.deepStrictEqual(optionary(undefined, undefined), {})
  })

  it('should return an the options object untouched, when no defaultOptions was passed', () => {
    assert.deepStrictEqual(optionary({}), {})
    assert.deepStrictEqual(optionary({ a: 1 }), { a: 1 })
    assert.deepStrictEqual(optionary(
      { a: 1, b: { c: 3 } }
    ),
    { a: 1, b: { c: 3 } }
    )
  })

  it('should return merge the defaultOptions with the options, when no property exists', () => {
    assert.deepStrictEqual(optionary({}, { a: 1 }), { a: 1 })
    assert.deepStrictEqual(optionary({ a: 1 }, { a: 2 }), { a: 1 })
    assert.deepStrictEqual(optionary(
      { a: 1, d: 4 },
      { a: 2, b: { c: 3 } }
    ),
    { a: 1, b: { c: 3 }, d: 4 })
  })
})
