// const user = {
//   name: "tushar",
//   age: 25,
//   mobile: 8237379235,
//   isTotallyAwesome: true,
// };

// for (key in user) {
//   console.log(user[key]);
// }

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };

// console.log(obj);

// let num = {
//   a: 200,
//   b: 300,
//   title: "my num",
// };
// multiplyByTwo(num);

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(num);

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// let userData = {
//   name: "tushar",
//   age: 24,
//   fullName: {
//     first: "tushar",
//     lart: "suryawanshi",
//   },
// };

// const name = "msture bor";

// const {
//   fullName: { first },
// } = userData;

// console.log(first);

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "john",
//     agee: 25,
//   };

//   return person;
// }

// const personObj1 = {
//   name: "alex",
//   age: 30,
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);
// console.log(personObj2);

//  most repeating word

var details = {
  data: [],
  addStudent: function (nm, math, sci, eng) {
    var student = {
      name: nm,
      maths: math,
      science: sci,
      english: eng,
    };
    this.data.push(student);
  },
};

details.addStudent("tushar", 66, 75, 60);
details.addStudent("varun", 47, 70, 65);
details.addStudent("anil", 45, 65, 50);
details.addStudent("akki", 75, 70, 50);

for (let i = 0; i < details.data.length; i++) {
  console.log(details.data[i].name);
}
