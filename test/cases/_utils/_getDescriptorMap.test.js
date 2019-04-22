'use strict'

const assert = require('assert')
const DescriptorTestClass = require('../../helpers/DescriptorTestClass')
const _getDescriptorMap = require('../../../src/_utils/_getDescriptorMap')

describe('optionist/_utils/_getDescriptorMap', () => {
  it('should return a map with all the class members', () => {
    const c = new DescriptorTestClass()

    assert.deepStrictEqual(
      _getDescriptorMap(c, () => true),
      { constructor: true,
        name: true,
        text: true,
        getName: true,
        setName: true,
        getText: true,
        setText: true
      }
    )
  })

  it('should return a map with setter methods only', () => {
    const c = new DescriptorTestClass()

    assert.deepStrictEqual(
      _getDescriptorMap(c, (name, descriptor) => {
        // only allow methods at first
        if (typeof descriptor.value !== 'function') {
          return false
        }

        // only add methods that start with 'set...'
        if (name.substring(0, 3) === 'set') {
          return true
        }
      }),
      { setName: true,
        setText: true
      }
    )
  })
})
