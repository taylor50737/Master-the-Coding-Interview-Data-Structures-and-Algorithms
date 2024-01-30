// Allocating memory
const a = 1;
const b = 10;
const c = 100;

// Call stack
console.log("1");
console.log("2");
console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

// CALL STACK

// JavaScript is a single threaded language that can be non blocking?
// Single threaded means that it has only one call stack, can only do one thing at a time
// Call stack is first in, last out

// Why JavaScript designed to be single threaded?
// Don't have to deal with the complicated scenarios that arise in multi threaded environment
// Only one thing to worry about, avoid deadlocks

// Synchronous programming: run code one by one

// Stack overthrow

// Recursion: a function that calls itself
function foo() {
  foo();
}

foo(); // keep calling itself lead to stack overthrow, RangeError: Maximum call stack size exceeded

// async
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP