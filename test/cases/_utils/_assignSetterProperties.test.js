'use strict'

const assert = require('assert')
const AssignTestClass = require('../../helpers/AssignTestClass')
const _assignSetterProperties = require('../../../src/_utils/_assignSetterProperties')

describe('optionry/_utils/_assignSetterProperties', () => {
  it('should call only the setter properties (e.g.: name = "name", text = "text", etc.)', () => {
    const methods = []
    const c = new AssignTestClass(
      (instance, type, name, value) => {
        if (type === 'setter property') {
          methods.push({ [name]: value })
        }
      }
    )

    _assignSetterProperties(c, { name: 'Arnold', text: 'I\'ll be back!' })

    assert.deepStrictEqual(methods, [ { name: 'Arnold' }, { text: 'I\'ll be back!' } ])
    assert.strictEqual(c.name, 'Arnold')
    assert.strictEqual(c.text, 'I\'ll be back!')
  })
})
