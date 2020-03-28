const assert = require('assert');

function myFizzBuzz (num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implement your tests below

let expected = 'fizzbuzz';
assert(myFizzBuzz(15) === expected, "Should return 'fizzbuzz'");
expected = 'fizz';
assert(myFizzBuzz(9) === expected, "Should return 'fizz'");
expected = 'buzz';
assert(myFizzBuzz(20) === expected, "Should return 'buzz'");
expected = 8;
assert(myFizzBuzz(8) === expected, "Should return 8");
expected = false;
assert(myFizzBuzz('8') === expected, "Should return 'false'");
