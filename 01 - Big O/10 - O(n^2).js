// Log all pairs of array
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

// O(n^2)

// O(a + b) if the for loop are not nested
// O(a * b) if the for loop are nested
