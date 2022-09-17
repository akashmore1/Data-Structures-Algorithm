const swap = (arr, index) => {
  [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
};

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;

    while (arr[j] < arr[j - 1] && j > 0) {
      swap(arr, j);
      j--;
    }
  }

  return arr;
};

console.log(insertionSort([2, 3, 1, 29, 2, 7, 44, 36]));
