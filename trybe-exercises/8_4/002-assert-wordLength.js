const assert = require( 'assert' );

// write solution below

const wordLengths = arr => arr.map( arr => arr.length );

// write solution above
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual( typeof wordLengths, 'function' );
const output = wordLengths( words );
assert.deepEqual( output, expected );
