const ex001 = require('./ex001');
const ex002 = require('./ex002');

describe('String to uppercase', () => {
  it(`uppercase 'test' to equal 'TEST'`, (done) => {
    expect.assertions(2);
    ex001.uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
    ex001.uppercase('11', (str) => {
      expect(str).toBe('11');
      done();
    });
  });
});

describe('Database tests', () => {
  it('Case id exists', () => {
    ex002.findUserById(4)
    .then(data => expect(data.name).toEqual('Mark'))
  })
  it('Case id is false', () => {
    ex002.findUserById(1)
    .catch(data => expect(data.error).toEqual('User with 1 not found.'))
  })
})
