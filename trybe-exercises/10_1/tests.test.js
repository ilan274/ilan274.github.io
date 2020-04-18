const ex001 = require('./001-jest_exercises');
const ex002 = require('./002-jest_exercises');
const ex003 = require('./003-jest_exercises');
const ex004 = require('./004-jest_exercises');
const ex005 = require('./005-jest_exercises');
const ex006 = require('./006-jest_exercises');
const ex007 = require('./007-jest_exercises');
const ex008 = require('./008-jest_exercises');

describe('Exercise 01 tests', () => {
  test('Numbers and strings sum', () => {
    expect(ex001.sum(9, 2)).toEqual(11);
    expect(ex001.sum(-250, 2)).toEqual(-248);
    expect(ex001.sum(330, -332)).toEqual(-2);
    expect(ex001.sum(-2, -2)).toEqual(-4);
    expect(() => { ex001.sum(1, '2'); })
      .toThrow(new Error('parameters must be numbers'));
  });
});


describe('Exercise 02 tests', () => {
  test('Numbers and strings sum', () => {
    expect(ex002.myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
});

describe('Exercise 03 - sum array', () => {
  it('Verify if returns as expected', () => {
    expect(ex003.mySum([1, 2, 3, 4])).toBe(10);
    expect(ex003.mySum([1, -2, -3, 4])).toBe(0);
  });
});

describe('Exercise 04 - Array tests', () => {
  it('Remove specified number', () => {
    expect(ex004.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(ex004.myRemove([1, 2, 3, 4], 2)).not.toEqual([1, 2, 3, 4]);
    expect(ex004.myRemove([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    const arr = [1, 2, 3, 4];
    ex004.myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercise 05 - Array copy tests', () => {
  it('Array tests', () => {
    expect(ex005.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(ex005.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(ex005.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(ex005.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});;

describe('Exercise 06 - FizzBuzz tests', () => {
  it('Fizz/buzz numbers', () => {
    expect(ex006.myFizzBuzz(15)).toBe('fizzbuzz');
    expect(ex006.myFizzBuzz(9)).toBe('fizz');
    expect(ex006.myFizzBuzz(20)).toBe('buzz');
    expect(ex006.myFizzBuzz(11)).toBe(11);
    expect(ex006.myFizzBuzz('11')).toBe(false);
  });
});

describe('Exercise 07 - String existance', () => {
  it('Verify if variable was defined / exists', () => {
    expect(typeof ex007.thereIs).toBe('string');
  });
});

describe('Exercise 08 - Function existance', () => {
  it('Verify if function was defined / exists', () => {
    expect(typeof ex008.thereIs).toBe('function');
  });
});
