'use strict'

class AssignTestClass {
  constructor (hook) {
    this._hook = hook
  }

  // getter/setter properties ------------------------------------------------------------------------------------------

  get name () {
    return this._name
  }

  set name (name) {
    this._hook(this, 'setter property', 'name', name)
    this._name = name
  }

  get text () {
    return this._text
  }

  set text (text) {
    this._hook(this, 'setter property', 'text', text)
    this._text = text
  }

  // getter/setter methods ---------------------------------------------------------------------------------------------

  getName () {
    return this._name
  }

  setName (name) {
    this._hook(this, 'setter method', 'setName', name)
    this._name = name
  }

  getText () {
    return this._text
  }

  setText (text) {
    this._hook(this, 'setter method', 'setText', text)
    this._text = text
  }
}

module.exports = AssignTestClass
