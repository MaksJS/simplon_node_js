const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

    addEventListener(event, listener) {
        super.on(event, listener)
    }
}

const window = new MyEmitter()

window.addEventListener('domReady', () => console.log('window is ready'))

window.emit('domReady')

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => console.log("Received a line: ", line))

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit?', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});