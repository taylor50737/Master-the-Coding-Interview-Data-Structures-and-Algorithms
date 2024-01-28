function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers: ");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// O(x^2+3x+100+x/2) = O(x^2)