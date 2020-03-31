const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = (arr) => { const [a, b, c] = arr; return [c, b, a]; };

const swappedList = swap(myList);

console.log(swappedList[0]);;

// assert.equal(swappedList[0], 3)
// assert.equal(swappedList[1], 2)
// assert.equal(swappedList[2], 1)
