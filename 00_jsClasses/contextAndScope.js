// context vs scope

// Scope is created when you see cruly brackets.
function scopeCreated() {
  let a = 10;
}

// scopeCreated(a); // => Reference error (doesn't exist in the global scope)

// Context shows where you are in an object
// "this" refers to the object it is inside of

function contextDoesntWork() {
  console.log(this); // => references the window object
}

// To create a new value for "this"
const thisObjectExample = {
  a: function () {
    console.log(this); // => references the object it's inside of
  },
};

thisObjectExample.a(); // => references the "thisObjectExample"

// instantiation (make a copy of an object, and reuse the code)
class Player {
  // the constuctor is the first thing that gets run when making copies of the class
  // creates properties for the object
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

// add on top of player
class Wizard extends Player {
  constructor(name, type) {
    // need to call the constructor function of the PLayer class using super()
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`Awesomeeee, I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Joe", "Healer");
const wizard2 = new Wizard("Sierra", "Dark Magic");

console.log(wizard1);
console.log(wizard2);
