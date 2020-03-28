const assert = require('assert');

function myRemoveWithoutCopy (arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implementyour tests below

/* A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */
let expected = [1, 2, 4];
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), expected);
expected = [1, 2, 3, 4];
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), expected);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), expected);