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
