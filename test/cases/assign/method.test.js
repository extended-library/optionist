'use strict'

const assert = require('assert')
const method = require('../../../src/assign/method')

describe('optionary/assign/method', () => {
  it('should throw an error, when called improperly', () => {
    let message

    try {
      method()
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
      getName () { return this._name }
      setName (name) { this._name = name }
      getText () { return this._text }
      setText (text) { this._text = text }
    }()

    method(c)

    assert.strictEqual(c.getName(), '-')
    assert.strictEqual(c.getText(), '-')
  })

  it('should call setter properties based on given options only', () => {
    class TestClass {
      constructor () {
        this._called = []
        this._name = 'John'
        this._text = 'We got Skynet by the balls now, don\'t we?'
      }
      getName () { return this._name }
      setName (name) {
        this._called.push({ name: name })
        this._name = name
      }
      getText () { return this._text }
      setText (text) {
        this._called.push({ text: text })
        this._text = text
      }
    }

    // -------------------------------------------------------------------------

    const c1 = new TestClass()
    method(c1, { name: 'T800', text: 'I\'ll be back!' })

    assert.strictEqual(c1.getName(), 'T800')
    assert.strictEqual(c1.getText(), 'I\'ll be back!')
    assert.deepStrictEqual(c1._called, [
      { name: 'T800' },
      { text: 'I\'ll be back!' }
    ])

    // -------------------------------------------------------------------------

    const c2 = new TestClass()
    method(c2, {}, { name: 'Sarah', text: 'There is no fate but what we make for ourselves.' })

    assert.strictEqual(c2.getName(), 'Sarah')
    assert.strictEqual(c2.getText(), 'There is no fate but what we make for ourselves.')
    assert.deepStrictEqual(c2._called, [
      { name: 'Sarah' },
      { text: 'There is no fate but what we make for ourselves.' }
    ])

    // -------------------------------------------------------------------------

    const c3 = new TestClass()
    method(c3,
      { name: 'John', text: 'We got Skynet by the balls now, don\'t we?' },
      { name: 'Sarah', text: 'There is no fate but what we make for ourselves.' }
    )

    assert.strictEqual(c3.getName(), 'John')
    assert.strictEqual(c3.getText(), 'We got Skynet by the balls now, don\'t we?')
    assert.deepStrictEqual(c3._called, [
      { name: 'John' },
      { text: 'We got Skynet by the balls now, don\'t we?' }
    ])
  })
})
