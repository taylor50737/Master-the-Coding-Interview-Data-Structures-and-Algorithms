// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false

// context vs scope
const object4 = {
  a: function () {
    console.log(this);
  },
};

// instantiation
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); // whenever you extend a class, you need to use super keyword
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

// Classical Inheritance
var Player = function (name, type) {
  this.name = name;
  this.type = type;
};

Player.prototype.introduce = function () {
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
};

var wizard3 = new Player("Shelly", "healer");
var wizard4 = new Player("Shawn", "dark magic");

wizard1.play = function() {
    console.log(`WEEEEEE I'm a ${this.type}`);
}

wizard2.play = function() {
    console.log(`WEEEEEE I'm a ${this.type}`);
}