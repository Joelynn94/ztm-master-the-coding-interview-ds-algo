/**************************************************************************************
Write a function called maxSubarraySum which accepts an array of integers and a number 
called n. The function should calculate the maximum sum of n consecutive elements in
the array.
**************************************************************************************/

// Time Complexity - O(N^2)
function maxSubarraySum(arr, num) {
  // checking if the number passed in is larger than the length of the array
  if (num > arr.length) {
    return null;
  }
  // start max at -Infinity
  var max = -Infinity;
  // the place we have to stop searching for a sum is the size of the number passed in
  for (let i = 0; i < arr.length - num + 1; i++) {
    // temp will store the sum each time thorugh the loop
    temp = 0;
    // loop through subarray
    for (let j = 0; j < num; j++) {
      // add the number of indexes controlled by num
      temp += arr[i + j];
    }
    // check if the temp is greater than max
    if (temp > max) {
      // update max value
      max = temp;
    }
    console.log(`temp: ${temp}, max: ${max}`);
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

// Time Complexity - O(N)
function refactoredMaxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // if the num is larger than the arr
  if (arr.length < num) {
    return null;
  }
  // sum together the number of digits passed as num
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // set the next starting point
  for (let i = num; i < arr.length; i++) {
    // add the new number and subract number at the index we originally started from
    tempSum = tempSum - arr[i - num] + arr[i];
    // check if the temp is greater than max
    if (tempSum > maxSum) {
      // update max value
      maxSum = tempSum;
    }
    console.log(`tempSum: ${tempSum}, maxSum: ${maxSum}`);
  }
  return maxSum;
}

console.log(refactoredMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(refactoredMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(refactoredMaxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(refactoredMaxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(refactoredMaxSubarraySum([], 4)); // null
