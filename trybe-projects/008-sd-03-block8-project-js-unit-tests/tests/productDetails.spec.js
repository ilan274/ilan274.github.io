/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // WRITE YOUR TESTS BELOW:
    // Test that the function's return is an array.
    assert(Array.isArray(productDetails()) === true);
    // Test that the array returned by the function contains two items inside.
    assert(productDetails('Alcool gel', 'Máscara').length === 2);
    // Test that the two items inside the array returned by the function are objects.
    assert(typeof Object.entries(productDetails('Alcool gel', 'Máscara') === 'object'));
    // Test that the two objects are different from each other.
    assert.deepStrictEqual(Object.is(productDetails()[0], productDetails()[1]), false);
    // (hard) test that both ends with productIds 123.
    assert.deepStrictEqual(productDetails('a', 'b')[0].details.productId.endsWith('123'), true);
    assert.deepStrictEqual(productDetails('a', 'b')[1].details.productId.endsWith('123'), true);
  });
});
