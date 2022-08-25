"use strict";

const fibonacciDp = (num) => {
  const ht = {
    0: 0,
    1: 1,
  };
  if (num in ht) {
    return ht[num];
  } else {
    ht[num] = fibonacciDp(num - 1) + fibonacciDp(num - 2);
    return ht[num];
  }
};

fibonacciDp(4);
