'use strict'

const path = require('path')
const gulp = require('gulp')
const del = require('del')
const glob = require('fast-glob')
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs-extra')

const root = path.resolve(__dirname, '../')

gulp.task('docs:clear', async () => {
  // delete /docs
  await del(`${root}/docs`, { force: true })
})

/**
 * Sorts the given list of files so, that every file called "index.js"
 * within its directory will be the 1st of the list.
 *
 * @param {string[]} files - The array of files.
 *
 * @returns {string[]} The sorted list of files.
 */
function sortFiles (files) {
  const store = []

  // iterate over files
  files.forEach(filePath => {
    const fileName = path.basename(filePath)
    const dirName = path.dirname(filePath)

    // check whether the dir exists in the store
    const index = store.findIndex(entry => entry.dir === dirName)

    // if exists
    if (index > -1) {
      store[index].files.push(fileName)
    // if doesn't exist
    } else {
      store.push({ dir: dirName, files: [fileName] })
    }
  })

  // sort the files, then reconstruct them
  const sortedFiles = []

  store.forEach(entry => {
    entry.files.sort((a, b) => {
      // make sure every file called "index.js" will be the 1st of its list
      if (b === 'index.js') {
        return true
      }

      return a > b
    })

    // reconstruct each
    entry.files.forEach(file => sortedFiles.push(path.join(entry.dir, file)))
  })

  return sortedFiles
}

gulp.task('docs:build', async () => {
  const files = await glob.async(path.join(root, '/src/**/*.js'))
  const output = await jsdoc2md.render({
    files: sortFiles(files),
    // https://github.com/jsdoc2md/jsdoc-to-markdown/issues/110
    'no-gfm': true
  })

  // create /docs and create the API documentation
  await fs.mkdir(path.join(root, '/docs'))
  await fs.writeFile(path.join(root, '/docs/API.md'), output)
})

gulp.task('docs', gulp.series('docs:clear', 'docs:build'))
