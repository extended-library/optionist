'use strict'

const assert = require('assert')
const AssignTestClass = require('../../helpers/AssignTestClass')
const _callSetterMethods = require('../../../src/_utils/_callSetterMethods')

describe('optionry/_utils/_callSetterMethods', () => {
  it('should call only the setter methods (e.g.: setName("name"), setText("text"), etc.)', () => {
    const methods = []
    const c = new AssignTestClass(
      (instance, type, name, value) => {
        if (type === 'setter method') {
          methods.push({ [name]: value })
        }
      }
    )

    _callSetterMethods(c, { name: 'Arnold', text: 'I\'ll be back!' })

    assert.deepStrictEqual(methods, [ { setName: 'Arnold' }, { setText: 'I\'ll be back!' } ])
    assert.strictEqual(c.getName(), 'Arnold')
    assert.strictEqual(c.getText(), 'I\'ll be back!')
  })
})
