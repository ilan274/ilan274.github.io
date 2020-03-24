const assert = require( 'assert' );
// write solution below

const addOne = arr => arr.map( num => num + 1 );

// write solution above

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne( myArray );

assert.strictEqual( typeof addOne, 'function' );
assert.deepEqual( output, expected );
assert.deepEqual( myArray, unchanged );
