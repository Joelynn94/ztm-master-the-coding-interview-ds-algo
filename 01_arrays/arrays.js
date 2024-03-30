const strings = ["a", "b", "c", "d"]; // 4*4 = 16 bytes of storage
const numbers = [1, 2, 3, 4, 5]; // 4*5 = 20 bytes of storage

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// push
strings.push("e"); // O(1)
console.log(strings);

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)
console.log(strings);

// unshift
strings.unshift("x"); // O(n)
console.log(strings);
// loop through all the items and move them one position to the right, this changes the index of all the items in the array.

// splice
strings.splice(2, 0, "alien"); // O(n)
console.log(strings);
