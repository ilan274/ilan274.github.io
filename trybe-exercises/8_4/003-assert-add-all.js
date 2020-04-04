const assert = require('assert');

// Write your code below

const addAllnumbers = (list) => list.reduce((acc, num) => {
  return acc + num;
}, 0);

// Write your code above


const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
