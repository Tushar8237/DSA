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
