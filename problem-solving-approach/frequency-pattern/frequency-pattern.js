/**************************************************************************************
Write a function called same, which accepts two arrays. The function should return true
if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
**************************************************************************************/

// O(N^2)
function same(arr1, arr2) {
  // if the two arrays have different lengths - there's no way for this to be true
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop over first array
  for (let i = 0; i < arr1.length; i++) {
    // check if there is an index of a number, squared
    // indexOf is a 2nd loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if the correct index returns -1 - the number is not in there
    if (correctIndex === -1) {
      return false;
    }
    console.log(`Array2 before slice: [${arr2}]`);
    // removes the index from the 2nd array
    arr2.splice(correctIndex, 1);
    console.log(`Array2 after slice: [${arr2}]`);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

// Refactored - O(N)
function sameRefactored(arr1, arr2) {
  // if the two arrays have different lengths - there's no way for this to be true
  if (arr1.length !== arr2.length) {
    return false;
  }
  // objects to hold data
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // constructs the first object with keys and values
  for (let val of arr1) {
    // add 1 occurrence if the value is already in the object || initialize it to 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // constructs the second object with keys and values
  for (let val of arr2) {
    // add 1 occurrence if the value is already in the object || initialize it to 1
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // loop over the objects (both)
  for (let key in frequencyCounter1) {
    // check if the squared key in object1 is a key in object2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // check if the squared value (occurrence/count) in object1 is in object2
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(`First object: ${frequencyCounter1}`);
  console.log(`Second object: ${frequencyCounter2}`);
  return true;
}

console.log(sameRefactored([1, 2, 3], [4, 1, 9])); // true
console.log(sameRefactored([1, 2, 3], [1, 9])); // false
console.log(sameRefactored([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
