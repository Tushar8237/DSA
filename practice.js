// const pyramid = (n) => {
//   for (let i = 0; i < n; i++) {
//     let string = "";
//     for (let j = 0; j < n - i - 1; j++) {
//       string += " ";
//     }
//     for (let k = 0; k < i + 1; k++) {
//       string += "9";
//     }
//     console.log(string);
//   }
// };

// pyramid(6);

// for (let i = 1; i <= 12; i++) {
//   let days = 31;
//   if (i == 2) {
//     days = 28;
//   } else if (i == 4 || i == 6 || i == 9 || i == 11) {
//     days = 30;
//   }
//   for (let j = 1; j <= days; j++) {
//     console.log("month is " + i + " - " + " date is " + j);
//   }
// }

let a = 67;
let b = 100;
let c = 433;

if (a > b) {
  console.log(a);
} else console.log(b);

if (a > c) {
  console.log(true);
} else {
  console.log(false);
}

let array = [1, 2, 3, 4, 5];
let num = 0;
for (let i = 0; i < array.length; i++) {
  if (i == 0) continue;
  if (i == 4) continue;
  num = num + array[i];
}

console.log(num);
// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) sum += array[i];

//   return sum;
// }

// let array = [1, 2, 3, 4, 5];

// console.log(sum(array));

// function sum(arr) {
//   let sum = 0; // initialize sum

//   // Iterate through all elements
//   // and add them to sum
//   for (let i = 0; i < arr.length; i++) sum += arr[i];

//   return sum;
// }

// // Driver code
// let arr = [12, 3, 4, 15];
// console.log("Sum of given array is " + sum(arr));

let y = 1992;

if (y % 400 == 0) {
  console.log("leap year");
} else if (y % 100 == 0) {
  console.log("not leap year");
} else if (y % 4 == 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

let n = 9;
let count = 0;
for (let i = 0; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log("yes");
} else {
  console.log("no");
}

for (let i = 1; i <= 4; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}

let arr = [4, 5, 9, 10, 12, 45, 84, 99, 100, 444];
let sum = 0;
let counter = 0;
let even = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sum = sum + arr[i];
    counter++;

    even = even + arr[i];
  }
}

console.log(sum / counter);
console.log(even);

let user = {
  name: "peter",
  age: 20,
  gender: "male",
  city: "banglore",
  hobbies: ["coding", "reading", "walking", "traveling"],
  smoking: false,
};
// console.log(user);

// user.name = "tom";
// delete user.smoking;
// console.log(user);
// console.log(user.city);
// console.log(user.hobbies[0]);

// for (let key in user) {
//   console.log(key + " : " + user[key]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));

let students = [
  { name: "rahul", age: 23 },
  { name: "rajat", age: 18 },
  { name: "shubham", age: 20 },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, " ", students[i].age);
}

var data = {
  name: "rajat",
  age: 23,
  xyz: function (num1, num2) {
    // console.log(num1 + num2);
    console.log("hello", this.name);
    console.log("age is", this.age);
  },
};

// console.log(data.name);
// let surname = "rawat";
// let name = "subham";
// data.xyz(name, surname);
// data.xyz(57, 78);
data.xyz();
data.name = "varun";
data.xyz();

let details = {
  name: "Earphone",
  quantity: 30,
  buy: function () {
    console.log(" congrats : 1 order is placed");
    this.quantity = this.quantity - 1;
  },
};

details.buy();
details.buy();
details.buy();

console.log(details.quantity);

let ecommerce = {
  name: "vatsal",
  product: ["soap", "shampoo", "phone", "books"],
  cart: [],

  getProduct: function () {
    console.log(this.product);
  },
  getCart: function () {
    console.log(this.cart);
  },

  addProduct: function (x) {
    this.cart.push(x);
  },
};

ecommerce.getProduct();
ecommerce.getCart();
ecommerce.addProduct("soap");
ecommerce.addProduct("phone");
ecommerce.getCart();
ecommerce.getProduct();
