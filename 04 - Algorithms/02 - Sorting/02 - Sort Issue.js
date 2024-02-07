const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

console.log(
  basket.sort(function (a, b) {
    return a - b;
  })
);
