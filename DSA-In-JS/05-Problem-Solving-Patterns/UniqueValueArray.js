function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let lastDigit = arr[0];
  if (arr.length === 0) {
    return 0;
  }
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != lastDigit) {
      count++;
      lastDigit = arr[i];
    }
  }
  return count;

  //   const obj = {};
  //    for(let num of arr){
  //        if(obj.hasOwnProperty(num)){
  //            obj[num] += 1
  //        } else{
  //            obj[num] = 1
  //        }
  //    }

  //    const objKey = Object.keys(obj)

  //    return objKey.length;
}
