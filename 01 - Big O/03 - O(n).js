const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  " hank",
];
const large = new Array(100000).fill('nemo');
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(large); // O(n) --> it takes Linear Time to find nemo
