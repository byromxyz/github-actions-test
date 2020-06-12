const index = require('./index.js');

describe('doSomething', () => {
  it('covers both branches', () => {
    expect(index.doSomething(true)).toBe('bool is true');
    expect(index.doSomething(false)).toBe('bool is false');
  })
})
