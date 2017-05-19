const fs = require('fs')

console.log(`Current directory is ${__dirname}`)

const PATH = 'misc/foo.txt'

fs.readFile(`${__dirname}/${PATH}`, 'utf8', (err, data) => {
    if (err) throw err
    console.log("Content:", data)
});