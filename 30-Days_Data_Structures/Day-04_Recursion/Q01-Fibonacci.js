// In fibonaci
// f(n) = f(n-1) + f(n-2)

const fibonacci = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// 👆The above method has 2^n time complexity.
// Learn in detail about the time complexity how it is calculated.
