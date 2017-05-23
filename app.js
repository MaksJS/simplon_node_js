const {pow2} = require('./math.js')
// const pow2 = require('./math.js').pow2
// const math = require('./math.js')
// console.log(math.pow2(number));

// console.log(require('./math.js'))
// const path = require('path')
// console.log(path.join('/foo/bar', '..', 'baz'))

const {app_name} = require('./config.json');

console.log("App name is: ", app_name)

const number = 2

console.log(pow2(number))

console.log("current file is:", __filename)

/*process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

throw new Error("foo");*/