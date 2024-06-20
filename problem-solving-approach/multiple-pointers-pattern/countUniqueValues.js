/**************************************************************************************
Implement a function called countUniqueValues, which accepts a sorted array, and counts 
the unique values in the array. There can be negative numbers in the array, but it will 
always be sorted.
**************************************************************************************/

// Time Complexity - O(N)
function countUniqueValues(arr) {
  // short circuit by checking array length
  if (arr.length === 0) {
    return 0;
  }
  // set starting index
  let i = 0;
  // setup loop for j pointer
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // move the left index up to next index
      i++;
      // set the value of arr[j] to arr[i]
      arr[i] = arr[j];
    }
    console.log(`i=${i}, j=${j}`);
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
