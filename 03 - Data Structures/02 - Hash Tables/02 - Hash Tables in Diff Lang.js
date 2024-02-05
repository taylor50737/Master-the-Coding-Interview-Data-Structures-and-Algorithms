let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)
console.log(user);

// If you have collision, it slows down reading and writing with a hash table with O(n/k) = O(n)
// * k is the size of the hash table

const a = new Map(); // the difference between a map and an object is the map allows us to save any data type
const b = new Sets(); // similar to Map(), but only storing the key;
