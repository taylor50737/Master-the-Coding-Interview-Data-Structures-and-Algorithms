// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ----------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// brute force solution
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// function isContainCommonItems(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(isContainCommonItems(array1, array2));

// O(a * b) Time Complexity
// O(1) - Space Complexity

// Better solution:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true,
// }
// array2[index] === obj.properties

function containsCommonItem2(array1, array2) {
  // loop through first array and create object where properties === items in the array
  // can we always assume 2 parameters?
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(containsCommonItem2(array1, array2));

// O(a + b) Time Complexity
// O(a) Space Complexity

// JavaScript built-in functions Solution
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
function containsCommonItem3(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

containsCommonItem3(array1, array2);
