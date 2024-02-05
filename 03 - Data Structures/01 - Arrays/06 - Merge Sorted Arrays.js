console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  // check input
  newArr = [];
  if (!arr1 || !arr2 || typeof arr1 !== "object" || typeof arr2 !== "object") {
    console.log("Please input arr!");
  }
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > newArr[i + 1]) {
        newArr[i] = newArr[i + 1]
    }
  }
  return newArr;
}
