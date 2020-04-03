const assert = require('assert');

const myIndexOf = (arr, item) => {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
};
console.log(myIndexOf([1, 2, 3, 4], 4));

module.exports = myIndexOf;
