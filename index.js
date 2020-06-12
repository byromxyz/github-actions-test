console.log('Hello, world');

function doSomething(bool) {
  if (bool) {
    return 'bool is true'
  } else {
    return 'bool is false'
  }
}

module.exports = {
  doSomething: doSomething
}