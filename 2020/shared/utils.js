const fs = require('fs');

/**
 * Returns the contents, split oin every newline, of the given filename.
 *
 * @param   {string} filename
 * @param   {RegExp} splitter
 * @param   {string} encoding
 * @returns {string[]}
 */
module.exports.readInputSync = (filename, splitter = /\r?\n/, encoding = 'UTF-8') => (
    fs.readFileSync(filename, encoding)
        .split(splitter)
        .filter(Boolean)
)
