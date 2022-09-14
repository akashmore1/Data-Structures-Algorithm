"use strict";

// Recursive algorithm

/*
1. if i = length then push to result array
2. helperRecursive(i+1, nums, subset) call recursive function
3. push to subset nums[i]
4. helperRecursive(i+1, nums, subset)
5. pop() from subset
6. return result array
*/
