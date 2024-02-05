// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

const str = "Hi My name is Taylor!";

function reverse(str) {
  const reverseStr = [];
  for (let i = 0; i < str.length; i++) {
    reverseStr[i] = str[str.length - 1 - i];
    str.length--;
  }
  return reverseStr.join("");
}

console.log(reverse(str));
