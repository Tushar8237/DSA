// object
let user = {
  firstName: "Tushar",
  lastName: "Suryawanshi",

  getFunc: function () {
    return `the name of the person is ${user.firstName} ${user.lastName}`;
  },

  phoneNum: {
    mobile: 8237379235,
    landLine: 0712 - 2334345,
  },
};

console.log(user.getFunc());
console.log(user.phoneNum.mobile);

// using a constructor

function person(firstName, lastName, number) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.number = number;
}

// creating new instance of person object
let person1 = new person("Mukul", "Latiyan");
let person2 = new person("Rahul", "Avasthi", 82373739235);

console.log(person1.firstName);
console.log(
  `${person2.firstName} ${person2.lastName} contact number ${person2.number}`
);

// object.create() example

const coder = {
  isStudying: false,
  introduction: function () {
    console.log(`My name is ${this.name}. Am i studying?: ${this.isStudying}.`);
  },
};
// boject.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = "Mukul";

// Inherited properties can be overwritten
me.isStudying = true;

me.introduction();

// Class
/* Classes - classes are blueprint of an object. A class can have many object because class is a templete while object are instances of the class or the concrete implementation */

// Defining class using es6

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}`;
  }
}

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name, bike1.maker, bike1.engine);
console.log(bike2.maker);
console.log(bike2.getDetails());

// Traditional way

// Defing class in a traditional way
function Vehicle1(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}

Vehicle1.prototype.getDetail = function () {
  console.log("The name of the bike is " + this.name);
};

let bike3 = new Vehicle1("Appache RTR", "TVS", "160cc");
let bike4 = new Vehicle1("Activa", "Honda", "125cc");

console.log(bike3.name);
console.log(bike4.maker, bike4.maker, bike4.engine);
console.log(bike3.getDetail());

// Encapsulation
/* Encapsulation – The process of wrapping properties and functions within a single unit is known as encapsulation */

class personData {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  addAddress(add) {
    this.add = add;
  }
  getPersonDetail() {
    console.log(`Name is ${this.name}, Address is :  ${this.add}`);
  }
}

let person3 = new personData("Mukul", 21);
person3.addAddress("Delhi");
person3.getPersonDetail();

// Inheritance
/* Inheritance – It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects.  */

// Inheritance example

class newPerson {
  constructor(name) {
    this.name = name;
  }
  // method to returt the string
  toString() {
    return `Name of the person : ${this.name}`;
  }
}
class student extends newPerson {
  constructor(name, id) {
    // super keyword for calling the above class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()}, Student ID: ${this.id}`;
  }
}

let student1 = new student("Mukul", 22);
console.log(student1.toString());
