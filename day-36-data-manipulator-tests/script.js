'use strict';

if (window.DataManipulator === undefined) window.DataManipulator = {};

(function(DM) {

  function sumFunction(integers) {
    return sum(integers);
  }

  function sumOver10(integers) {
    return sum(integers, 10);
  }

  function sumOverN(integers, n) {
    return sum(integers, n);
  }

  function sum(integers, n) {
    var sum = 0;

    for (var i = 0; i < integers.length; i++) {
      if (n === undefined) {
        sum += integers[i];
      }
      else if (integers[i] > n) {
        sum += integers[i];
      }
    }

    return sum;
  }

  DM.sum = sumFunction;
  DM.sumOfNumbersOver10 = sumOver10;
  DM.sumOfNumbersOverN = sumOverN;

})(window.DataManipulator);
