'use strict'

class DescriptorTestClass {
  // getter/setter properties ------------------------------------------------------------------------------------------

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get text () {
    return this._text
  }

  set text (text) {
    this._text = text
  }

  // getter/setter methods ---------------------------------------------------------------------------------------------

  getName () {
    return this._name
  }

  setName (name) {
    this._name = name
  }

  getText () {
    return this._text
  }

  setText (text) {
    this._text = text
  }
}

module.exports = DescriptorTestClass
