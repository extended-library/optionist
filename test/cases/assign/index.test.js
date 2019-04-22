'use strict'

const assert = require('assert')
const assign = require('../../../src/assign')

describe('optionist/assign', () => {
  it('should have 3 modules exported', () => {
    assert.strictEqual(typeof assign.property, 'function')
    assert.strictEqual(typeof assign.method, 'function')
    assert.strictEqual(typeof assign.underscore, 'function')
  })
})
