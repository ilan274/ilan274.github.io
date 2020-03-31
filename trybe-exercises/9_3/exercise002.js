const assert = require('assert');

// Write function below


const sum = (...n) => {
  return n.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

// Write function above

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);
