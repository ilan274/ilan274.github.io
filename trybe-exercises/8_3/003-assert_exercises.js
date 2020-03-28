const assert = require('assert');

function mySum (arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implement your tests below
let sent = [1, 2, 3, 4];
assert.deepStrictEqual(mySum(sent), 10);
sent = [1, -2, -3, 4];
assert.deepStrictEqual(mySum(sent), 0, 'Expected 0 as a return.');
