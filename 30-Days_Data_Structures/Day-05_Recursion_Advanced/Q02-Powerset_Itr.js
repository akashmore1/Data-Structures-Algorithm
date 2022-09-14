// A power set is a set which contains all subsets.
// Power set of {1,2,3} = {{}, {1}, {2}, {1, 2}, {3}, {1, 3}, {2, 3}, {1, 2, 3}}
// For n elements = 2^n subsets i.e. powerSet.size = 2^n

// Algorithm:

/*
1. let powerSet = [];
2. push '[]' in powerSet
3. Take 1st element of input array.
4. Add inside every element of power set
5. this new set will be added to powerset
6. repeat this process for every element in input array
*/

// const getPowerSet = (nums) => {
//   const powerSet = [];

//   powerSet.push([]);

//   let tempArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let mockPowerSet = [...powerSet];
//     let length = mockPowerSet.length;
//     for (let j = 0; j < length; j++) {
//       tempArr = [...powerSet[j]];
//       tempArr.push(nums[i]);
//       powerSet.push(tempArr);
//       tempArr = [];
//     }
//   }

//   return powerSet;
// };

// console.log(getPowerSet([1, 2, 3, 4]));
