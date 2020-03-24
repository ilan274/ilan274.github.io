const assert = require( 'assert' );

const factorial = n => {
  if ( n < 0 ) throw new Error( 'Factorials must be positive numbers' );
  return ( n === 0 || n === 1 ? 1 : n * factorial( n - 1 ) );
};

assert.strictEqual( factorial( 0 ), 1 );
assert.strictEqual( factorial( 1 ), 1 );
assert.strictEqual( factorial( 2 ), 2 );
assert.strictEqual( factorial( 3 ), 6 );
assert.strictEqual( factorial( 4 ), 24 );
assert.throws( () => {
  factorial( -1 );
}, /^Error: Factorials must be positive numbers$/ );

