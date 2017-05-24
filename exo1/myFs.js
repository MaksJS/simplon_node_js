const {readFile, appendFile} = require('fs')

exports.readFileUtf8 = (filename, callback) => readFile(filename, 'utf8', callback)
exports.appendFileUtf8 = (filename, content, callback) => appendFile(filename, content, callback)