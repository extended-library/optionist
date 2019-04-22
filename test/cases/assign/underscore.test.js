'use strict'

const assert = require('assert')
const underscore = require('../../../src/assign/underscore')

describe('optionist/assign/underscore', () => {
  it('should throw an error, when called improperly', () => {
    let message

    try {
      underscore()
    } catch (error) {
      message = error.message
    }

    assert.strictEqual(message, 'class_ must be an object, instead got: undefined')
  })

  it('should not modify the class, when no options and defaultOptions were passed', () => {
    const c = new class {
      constructor () {
        this._name = 'John'
        this._text = 'We got Skynet by the balls now, don\'t we?'
      }
    }()

    underscore(c)

    assert.strictEqual(c._name, 'John')
    assert.strictEqual(c._text, 'We got Skynet by the balls now, don\'t we?')
  })

  it('should set properties with undescores based on given options only', () => {
    class TestClass {
      constructor () {
        this._name = 'John'
        this._text = 'We got Skynet by the balls now, don\'t we?'
      }
    }

    // -------------------------------------------------------------------------

    const c1 = new TestClass()
    underscore(c1, { name: 'T800', text: 'I\'ll be back!' })

    assert.strictEqual(c1._name, 'T800')
    assert.strictEqual(c1._text, 'I\'ll be back!')

    // -------------------------------------------------------------------------

    const c2 = new TestClass()
    underscore(c2, {}, { name: 'Sarah', text: 'There is no fate but what we make for ourselves.' })

    assert.strictEqual(c2._name, 'Sarah')
    assert.strictEqual(c2._text, 'There is no fate but what we make for ourselves.')

    // -------------------------------------------------------------------------

    const c3 = new TestClass()
    underscore(c3,
      { name: 'John', text: 'We got Skynet by the balls now, don\'t we?' },
      { name: 'Sarah', text: 'There is no fate but what we make for ourselves.' }
    )

    assert.strictEqual(c3._name, 'John')
    assert.strictEqual(c3._text, 'We got Skynet by the balls now, don\'t we?')
  })
})
