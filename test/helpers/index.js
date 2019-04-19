'use strict'

module.exports = {
  getModule: () => {
    const module = process.env.MODULE

    switch (module) {
      case 'src': return require('../../src')
      case 'dist': return require('../../dist')
      default: throw new Error(`process.env.MODULE is unproper: ${module}`)
    }
  }
}
