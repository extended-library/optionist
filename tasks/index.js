'use strict'

const path = require('path')
const gulp = require('gulp')
const del = require('del')
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs-extra')

const root = path.resolve(__dirname, '../')

gulp.task('docs:clear', async () => {
  // delete /docs
  await del(`${root}/docs`, { force: true })
})

gulp.task('docs:build', async () => {
  const output = await jsdoc2md.render({
    // process main index.js first, then the rest
    files: [
      path.join(root, '/src/*.js'),
      path.join(root, '/src/**/*.js')
    ],
    // https://github.com/jsdoc2md/jsdoc-to-markdown/issues/110
    'no-gfm': true
  })

  // create /docs and create the API documentation
  await fs.mkdir(path.join(root, '/docs'))
  await fs.writeFile(path.join(root, '/docs/API.md'), output)
})

gulp.task('docs', gulp.series('docs:clear', 'docs:build'))
