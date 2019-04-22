'use strict'

const assert = require('assert')
const AssignTestClass = require('../../helpers/AssignTestClass')
const _assignUnderscoreProperties = require('../../../src/_utils/_assignUnderscoreProperties')

describe('optionist/_utils/_assignUnderscoreProperties', () => {
  it('should set only the properties with underscores (e.g.: _name = "name", _text = "text", etc.)', () => {
    const c = new AssignTestClass(() => {})

    _assignUnderscoreProperties(c, { name: 'Arnold', text: 'I\'ll be back!' })

    assert.strictEqual(c._name, 'Arnold')
    assert.strictEqual(c._text, 'I\'ll be back!')
  })
})
