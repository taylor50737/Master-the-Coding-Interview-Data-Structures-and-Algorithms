console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  // check input
  newArr = [];
  if (!arr1 || !arr2 || typeof arr1 !== "object" || typeof arr2 !== "object") {
    console.log("Please input arr!")
  }
  arr1.push(arr2);
  return arr1;
}
