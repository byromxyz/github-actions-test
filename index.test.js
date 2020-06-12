const index = require('./index.js');

describe('doSomething', () => {
  it('covers both branches', () => {
    expect(index.doSomething(true, false)).toEqual({ boolOne: true, boolTwo: false }); // Stmts 60%; Branch 33.33%; Funcs 100%; Lines 60%;
    // expect(index.doSomething(true, true)).toEqual({ boolOne: true, boolTwo: true }); // Stmts 70%; Branch 50%; Funcs 100%; Lines 70%;
    // expect(index.doSomething(false, false)).toEqual({ boolOne: false, boolTwo: false }); // Stmts 90%; Branch 83.33%; Funcs 100%; Lines 90%;
    // expect(index.doSomething(false, true)).toEqual({ boolOne: false, boolTwo: true }); // 100%
  })
})
