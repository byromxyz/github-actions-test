const index = require('./index.js');

describe('doSomething', () => {
  it('covers both branches', () => {
    expect(index.doSomething(true)).toBe('bool is true');
  })
})
