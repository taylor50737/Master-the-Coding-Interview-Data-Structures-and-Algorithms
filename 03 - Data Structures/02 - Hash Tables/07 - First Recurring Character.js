// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Brute force approach
function firstRecurringCharacter1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}
// O(n^2) in time complexity
// O(1) in space complexity

// Using Hash Table
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined; // in case there is no match
}
// O(n) in space complexity

// console.log(firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
