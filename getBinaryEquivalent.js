const { prompt } = require('./input');
const util = require('util');
const hrtime = process.hrtime;

/**
 * @param {number} x
 * @return {boolean}
 */

var decToBinary = (x) => {
  let bin = [],
    n = x;
  while (n > 0) {
    bin.push(~~(n % 2));
    n = ~~ (n / 2);
  }
  return bin.reverse().join('');
};

var getBinaryEquivalent = function (x) {
  let number = x,
    binArr = [];
  while (number > 0) {
    binArr[number - 1] = decToBinary(number);
    number--;
  }
  return binArr;
};

var getDecimalEquivalent = function (x) {
  let number = x,
    binArr = [];
  while (number > 0) {
    binArr[number - 1] = decToBinary(number);
    number--;
  }
  return binArr;
};

(async () => {
  let data = await prompt('Enter a number: ');
  const start = hrtime();
  console.log(getBinaryEquivalent(data));
  const end = hrtime(start);
  const elapsedTime = end[0] * 1000 + end[1] / 1000000; // milliseconds
  const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // MB
  console.log(`\n\nExecution time: ${elapsedTime.toFixed(2)} ms`);
  console.log(`Memory usage: ${usedMemory.toFixed(2)} MB`);
  process.exit(0);
})();
