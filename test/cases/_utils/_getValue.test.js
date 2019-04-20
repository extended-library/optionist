'use strict'

const assert = require('assert')
const _getValue = require('../../../src/_utils/_getValue')

describe('_utils/_getValue', () => {
  it('should return the property, when exists', () => {
    assert.strictEqual(_getValue({ a: 1 }, 'a'), 1)
    assert.strictEqual(_getValue({ a: 1 }, '.a'), 1)
    assert.strictEqual(_getValue({ a: { b: 2 } }, 'a.b'), 2)

    assert.deepStrictEqual(_getValue({ a: { b: { c: 3 } } }, 'a'), { b: { c: 3 } })
    assert.deepStrictEqual(_getValue({ a: { b: { c: 3 } } }, 'a.b'), { c: 3 })
  })

  it('should return null, when the property doesn\'t exist', () => {
    assert.strictEqual(_getValue({ a: 1 }, 'b'), null)
    assert.strictEqual(_getValue({ a: 1 }, '.b'), null)
    assert.strictEqual(_getValue({ a: 1 }, 'a.b'), null)
    assert.strictEqual(_getValue({ a: { b: 2 } }, 'a.b.c'), null)
    assert.strictEqual(_getValue({ a: { b: 2 } }, 'a.b.c.d'), null)
  })
})
