/**************************************************************************************
Given two strings, write a function to determine if the second string is an anagram of 
the first. An anagram is a word, phrase, or name formed by rearranging the letters of 
another, such as cinema, formed from iceman.
**************************************************************************************/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (frequency1[char] > 0) {
      frequency1[char]++;
      console.log("String1: " + frequency1[char]++);
    } else {
      frequency1[char] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (frequency2[char] > 0) {
      frequency2[char]++;
      console.log("String2: " + frequency2[char]++);
    } else {
      frequency2[char] = 1;
    }
  }
  for (let key in frequency1) {
    console.log("Key: " + key);
    if (!key in frequency2) {
      return false;
    }
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Refactored
function refactoredValidAnagram(first, second) {
  // if the two strings have different lengths - there's no way for this to be true
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 3, n: 1, g: 1, r: 1, m: 1, s:1}
console.log(refactoredValidAnagram("anagrams", "nagaramm"));
// {a: 0, n: 0, g: 0, r: 0, m: 0, s:1}
console.log(refactoredValidAnagram("anagram", "nagaram")); // true
