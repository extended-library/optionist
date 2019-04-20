'use strict'

const assert = require('assert')
const _KEYS = require('../../../src/_utils/_KEYS')

describe('optionry/_utils/_KEYS', () => {
  it('should have 2 properties', () => {
    assert.deepStrictEqual(Object.keys(_KEYS), ['OPTIONS', 'KEY'])
  })

  it('should have different Symbol properties', () => {
    assert.strictEqual(typeof _KEYS.OPTIONS, 'symbol')
    assert.strictEqual(typeof _KEYS.KEY, 'symbol')
    assert.notStrictEqual(_KEYS.OPTIONS, _KEYS.KEY)
  })
})
