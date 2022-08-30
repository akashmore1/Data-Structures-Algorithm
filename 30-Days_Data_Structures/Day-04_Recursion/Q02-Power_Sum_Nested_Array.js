const findSum = (arr, power = 1) => {
  let sum = 0;
  let index = 0;

  while (index < arr.length) {
    if (typeof arr[index] === "number") {
      sum += arr[index] ** power;
    } else {
      sum += findSum(arr[index], power + 1);
    }

    index++;
  }

  return sum;
};

console.log(findSum([2, [2], [2, [2]]]));
