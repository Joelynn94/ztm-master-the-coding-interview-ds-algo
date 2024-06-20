/**************************************************************************************
Write a function called sumZero which accepts a sorted array of integers. The function 
should find the first pair where the sum is 0. Return an array that includes both 
values that sum to zero or undefined if a pair does not exist
**************************************************************************************/

// simple solution
// Time Complexity - O(N^2)
// Space Complexity - O(1)
function sumZero(arr) {
  // loop over array
  for (let i = 0; i < arr.length; i++) {
    // do a second loop to compare numbers in the array
    for (let j = i + 1; j < arr.length; j++) {
      // check if the current number minus the second number sum = 0
      if (arr[i] + arr[j] === 0) {
        // return the pair
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

// Refactored
// Time Complexity - O(N)
// Space Complexity - O(1)
function refactoredSumZero(arr) {
  // first index
  let left = 0;
  // last index
  let right = arr.length - 1;

  while (left < right) {
    // check the sum of array left and arr right
    let sum = arr[left] + arr[right];
    // check if the sum is 0
    if (sum === 0) {
      // if the sum is 0 - we are done
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // change the right array position
      right--;
    } else {
      // change the left array position
      left++;
    }
  }
}

console.log(refactoredSumZero([-3, -2, -1, 0, 1, 2, 3, 10])); // [-3,3]
console.log(refactoredSumZero([-2, 0, 1, 3])); // undefined
console.log(refactoredSumZero([1, 2, 3])); // undefined
