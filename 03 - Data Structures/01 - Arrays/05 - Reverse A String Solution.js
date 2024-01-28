// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// Solution 1
function reverse1(str) {
  //check input
  if (!str | (str.length < 2) || typeof str !== "string") {
    return "hmm that is not good, please input a string!";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

// Solution 2
function reverse2(str) {
  return str.split("").reverse().join("");
}

// Solution 3
const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse1("Hi My Name is Taylor Lo"));
console.log(reverse2("Hi My Name is Taylor Lo"));
console.log(reverse3("Hi My Name is Taylor Lo"));
