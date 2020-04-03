const exercise001 = require('./001-jest_exercises');
const exercise002 = require('./002-jest_exercises');

describe('Exercise 01 tests', () => {
  test('Numbers and strings sum', () => {
    expect(exercise001(9, 2)).toEqual(11);
    expect(exercise001(-250, 2)).toEqual(-248);
    expect(exercise001(330, -332)).toEqual(-2);
    expect(exercise001(-2, -2)).toEqual(-4);
    expect(() => { exercise001(1, '2'); })
      .toThrow(new Error('parameters must be numbers'));
  });
});


describe('Exercise 02 tests', () => {
  test('Numbers and strings sum', () => {
    expect(exercise002([1, 2, 3, 4], 3)).toBe(2);
  });
});
