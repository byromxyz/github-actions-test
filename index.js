console.log('Hello, world');

function log(boolOne, boolTwo) {
  return { boolOne, boolTwo }
}

function doSomething(boolOne, boolTwo) {
  if (boolOne) {
    if (boolTwo) {
      return log(boolOne, boolTwo);
    } else {
      return log(boolOne, boolTwo);
    }
  } else {
    if (boolTwo) {
      return log(boolOne, boolTwo);
    } else {
      return log(boolOne, boolTwo);
    }
  }
}

module.exports = {
  doSomething: doSomething
}