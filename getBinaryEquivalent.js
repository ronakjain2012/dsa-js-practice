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
    n = ~~(n / 2);
  }
  return bin.reverse().join('');
};

var binaryToDec = (x) => {
  let numbers = x.split('').reverse();
  let count = 0;
  let sum = 0;
  if (numbers.length == 1) {
    return 1;
  }
  while (count < numbers.length) {
    sum += Number(numbers[count]) * (2 ** count);
    count++;
  }

  // sum += Number(numbers[count - 1]);
  return sum;
};

function modulo109Plus7(number) {
  return number;
  return (number % 1000000007); 
}

var getBinaryEquivalent = function (x) {
  // let bin = decToBinary(x);
  // console.log('binary ', bin);
  let number = x,
    binArr = [];
  while (number > 0) {
    binArr[number - 1] = decToBinary(number);
    number--;
  }
  return modulo109Plus7(binaryToDec(binArr.join('')));
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
