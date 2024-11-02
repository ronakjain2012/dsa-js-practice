const { prompt } = require('./input');
const util = require('util');
const hrtime = process.hrtime;

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let Xn = String(x);
  let Xnr = ``;
  for (let i = Xn.length-1; i >= 0; i--) {

    Xnr = `${Xnr}${Xn[i]}`;
  }
  console.log(Xnr,Xn);
  return Xnr===Xn;
  /* 
  11ms Beats 37.96%
  59.06MB Beats 16.37%
  */
};

var isPalindrome1 = function (x) {
  let isPalindrome = true;
  let Xn = String(x);
  let j = Xn.length - 1;
  for (let i = 0; i < Xn.length; i++) {
    if (Xn[i] != Xn[j]) {
      isPalindrome = false;
      break;
    }
    if (i === j) {
      break;
    }
    j--;
  }
  return isPalindrome;

  /* 
    7ms Beats 72.80%
    59.84MB Beats 6.38%
  */
};

(async () => {
  let data = await prompt('Enter a number: ');
  const start = hrtime();
  console.log(isPalindrome(data));
  const end = hrtime(start);
  const elapsedTime = end[0] * 1000 + end[1] / 1000000; // milliseconds
  const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // MB
  console.log(`\n\nExecution time: ${elapsedTime.toFixed(2)} ms`);
  console.log(`Memory usage: ${usedMemory.toFixed(2)} MB`);
  process.exit(0);
})();
