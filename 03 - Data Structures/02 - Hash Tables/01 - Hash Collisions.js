let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

console.log(user.age); // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)
console.log(user);

// If you have collision, it slows down reading and writing with a hash table with O(n/k) = O(n)
// * k is the size of the hash table