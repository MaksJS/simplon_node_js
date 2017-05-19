const {readFile, readFileSync} = require('fs')
const {join} = require('path')
const {hrtime} = require('process')

const PATH = 'misc/foo.txt'
const filename = join(__dirname, PATH)

let time;

time = hrtime()

readFile(filename, 'utf8', (err, data) => {
    if (err) throw err
    let diff = hrtime(time)
    console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`)
    console.log("Content:", data)
});

time = hrtime()
const data = readFileSync(filename, 'utf8')
let diff = hrtime(time)
console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`)