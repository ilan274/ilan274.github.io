const assert = require( 'assert' );

function sum ( a, b )
{
  if ( typeof a !== 'number' || typeof b !== 'number' ) {
    throw new Error( 'parameters must be numbers' );
  }
  return a + b;
}

assert( sum( 4, 5 ) === 9, '4 + 9 should equal 9' );
assert( sum( 0, 0 ) === 0, '0 + 0 should equal 0' );
assert( sum( 0, 0 ) === 0, '0 + 0 should equal 0' );
assert.throws( () =>
{
  sum( 4, 'cinco' );
}, /^Error: parameters must be numbers$/ );