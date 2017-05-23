/**
 * var/let/const keyword differences
 */
var foo = 1
let bar = 2
const baz = 3

console.log(foo, bar, baz)

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log('var ', i), 100)
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() { }, 100)
}

/**
 * Iterate array with array.forEach
 */
const arr = [0, 1, 2, 3, 4, 5]

arr.forEach((value) => console.log(value))

/**
 * "this" difference with arrow function and classic function
 */
this.foo = 2;

setTimeout(function() { console.log('fonction classique', this) }, 100);
setTimeout(() => console.log('fonction fléchée', this), 100);

/**
 * Javascript class with prototype syntax
 */
function Player() {
    this.hp = 100
    this.name = 'max'
}

Player.prototype.move = function() {
    console.log(this.name + ' move');
}

var p = new Player();
p.move();

/**
 * Javascript class with "class-like" syntax
 */
class Player2 {
    constructor() {
        this.hp = 100
        this.name = 'max'
    }

    move() {
        /**
         * Backticks multi-line strings
         */
        console.log(`
                ${this.name} move
        `);
        console.log(this.name + ' move');
    }
}

const p2 = new Player2();
p2.move();