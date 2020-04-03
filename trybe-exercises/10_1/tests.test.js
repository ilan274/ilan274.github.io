const exercise001 = require('./001-jest_exercises');

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

// assert(sum(4, 5) === 9, '4 + 9 equals 9');
// assert(sum(0, 0) === 0, '0 + 0 equals 0');
// assert(sum(0, 0) === 0, '0 + 0 equals 0');