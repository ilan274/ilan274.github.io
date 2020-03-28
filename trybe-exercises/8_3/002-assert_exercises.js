const assert = require('assert');

function myIndexOf (arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implement your tests below

const sent = [1, 2, 3, 4];
assert.deepStrictEqual(myIndexOf(sent), 3, 'Expected 3 as a return.');
assert.deepStrictEqual(myIndexOf(sent), 5, 'Expected 5 as a return.');
