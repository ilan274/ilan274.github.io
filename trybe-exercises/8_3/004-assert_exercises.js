const assert = require('assert');

function myRemove (arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implement your tests below
let expected = [1, 2, 4];
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), expected, 'Expected [1, 2, 4] as a return');
expected = [1, 2, 3, 4];
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), expected, 'Not expected [1, 2, 3, 4] as a return');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], -2), expected, 'Expected [1, 2, 3, 4] as a return');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), expected, 'Expected [1, 2, 3, 4] as a return')