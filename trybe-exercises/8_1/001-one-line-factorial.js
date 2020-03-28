const assert = require('assert');

// Write code below

const returnError = () => { throw new Error('Factorials must be positive numbers'); };
const factorial = n => (n < 0) ? returnError() : (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

// Write code above

console.log(factorial(5));

assert.strictEqual(factorial(0), 1);
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(2), 2);
assert.strictEqual(factorial(3), 6);
assert.strictEqual(factorial(4), 24);
assert.throws(() => {
  factorial(-1);
}, /^Error: Factorials must be positive numbers$/);

