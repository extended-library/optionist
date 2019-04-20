'use strict'

const assert = require('assert')
const property = require('../../../src/assign/property')

describe('optionary/assign/property', () => {
  it('should throw an error, when called improperly', () => {
    let message

    try {
      property()
    } catch (error) {
      message = error.message
    }

    assert.strictEqual(message, 'class_ must be an object, instead got: undefined')
  })

  it('should not modify the class, when no options and defaultOptions were passed', () => {
    const c = new class {
      constructor () {
        this._name = '-'
        this._text = '-'
      }
      get name () { return this._name }
      set name (name) { this._name = name }
      get text () { return this._text }
      set text (text) { this._text = text }
    }()

    property(c)

    assert.strictEqual(c.name, '-')
    assert.strictEqual(c.text, '-')
  })

  it('should call setter properties based on given options only', () => {
    class TestClass {
      constructor () {
        this._called = []
        this._name = 'John'
        this._text = 'We got Skynet by the balls now, don\'t we?'
      }
      get name () { return this._name }
      set name (name) {
        this._called.push({ name: name })
        this._name = name
      }
      get text () { return this._text }
      set text (text) {
        this._called.push({ text: text })
        this._text = text
      }
    }

    // -------------------------------------------------------------------------

    const c1 = new TestClass()
    property(c1, { name: 'T800', text: 'I\'ll be back!' })

    assert.strictEqual(c1.name, 'T800')
    assert.strictEqual(c1.text, 'I\'ll be back!')
    assert.deepStrictEqual(c1._called, [
      { name: 'T800' },
      { text: 'I\'ll be back!' }
    ])

    // -------------------------------------------------------------------------

    const c2 = new TestClass()
    property(c2, {}, { name: 'Sarah', text: 'There is no fate but what we make for ourselves.' })

    assert.strictEqual(c2.name, 'Sarah')
    assert.strictEqual(c2.text, 'There is no fate but what we make for ourselves.')
    assert.deepStrictEqual(c2._called, [
      { name: 'Sarah' },
      { text: 'There is no fate but what we make for ourselves.' }
    ])

    // -------------------------------------------------------------------------

    const c3 = new TestClass()
    property(c3,
      { name: 'John', text: 'We got Skynet by the balls now, don\'t we?' },
      { name: 'Sarah', text: 'There is no fate but what we make for ourselves.' }
    )

    assert.strictEqual(c3.name, 'John')
    assert.strictEqual(c3.text, 'We got Skynet by the balls now, don\'t we?')
    assert.deepStrictEqual(c3._called, [
      { name: 'John' },
      { text: 'We got Skynet by the balls now, don\'t we?' }
    ])
  })
})
