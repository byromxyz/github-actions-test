console.log('Hello, world');

function log(boolOne, boolTwo) {
  console.log(`boolOne: ${boolOne}, boolTwo: ${boolTwo}`)
}

function doSomething(boolOne, boolTwo) {
  if (boolOne) {
    if (boolTwo) {
      log(boolOne, boolTwo);
    } else {
      log(boolOne, boolTwo);
    }
  } else {
    if (boolTwo) {
      log(boolOne, boolTwo);
    } else {
      log(boolOne, boolTwo);
    }
  }
}

module.exports = {
  doSomething: doSomething
}