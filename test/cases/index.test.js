'use strict'

const assert = require('assert')
const optionist = require('../../index')

describe('optionist', () => {
  it('should return an empty object, when called improperly', () => {
    assert.deepStrictEqual(optionist(), {})
    assert.deepStrictEqual(optionist(null), {})
    assert.deepStrictEqual(optionist(null, null), {})
    assert.deepStrictEqual(optionist(undefined), {})
    assert.deepStrictEqual(optionist(undefined, undefined), {})
  })

  it('should return an the options object untouched, when no defaultOptions was passed', () => {
    assert.deepStrictEqual(optionist({}), {})
    assert.deepStrictEqual(optionist({ a: 1 }), { a: 1 })
    assert.deepStrictEqual(optionist(
      { a: 1, b: { c: 3 } }
    ),
    { a: 1, b: { c: 3 } }
    )
  })

  it('should return merge the defaultOptions with the options, when no property exists', () => {
    assert.deepStrictEqual(optionist({}, { a: 1 }), { a: 1 })
    assert.deepStrictEqual(optionist({ a: 1 }, { a: 2 }), { a: 1 })
    assert.deepStrictEqual(optionist(
      { a: 1, d: 4 },
      { a: 2, b: { c: 3 } }
    ),
    { a: 1, b: { c: 3 }, d: 4 })
  })
})
