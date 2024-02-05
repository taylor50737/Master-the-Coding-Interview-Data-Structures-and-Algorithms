class HashTable {
  constructor(size) {
    // size => The size of the memory
    this.data = new Array(size);
    [["grapes", 100000]];
  }

  _hash(key) {
    // _underscore means this is a private property, a developer standard in JS community
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key); // where we want to store the info
    // if the address space is empty, we insert the key and value to this address to avoid collision
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
console.log(myHashTable.get("apples"));
