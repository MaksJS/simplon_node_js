const {readFile, appendFile} = require('fs')
const EventEmitter = require('events');
const fileEmitter = require('./fileEmitter')

exports.readFileUtf8 = (filename) => {
    readFile(filename, 'utf8', (err, data) => {
        if (err) {
            fileEmitter.emit('read:error', err, filename)
        }
        else {
            fileEmitter.emit('read:success', data)
        }
    })
}

exports.appendFileUtf8 = (filename, content) => {
    appendFile(filename, content, (err) => {
        if (err) {
            fileEmitter.emit('write:error', err, filename)
        }
        else {
            fileEmitter.emit('write:success')
        }
    })
}