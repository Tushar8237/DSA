// 1 Given a string reverse each word in the sentence

function reverseString(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not valid";
  }
  //   take empty array revarray
  const revArray = [];
  const length = str.length - 1;

  // looping from the end

  for (let i = length; i >= 0; i--) {
    revArray.push(str[i]);
  }
  //   joing the array elements
  return revArray.join("");
}

// console.log(reverseString("Given a string reverse each word in the sentence"));

// 2 remove duplicate elements from the array

var array = [1, 1, 2, 3, 4, 5, 2, 3, 6, 7, 8];

// let array = ["tushar", "anil", "pradeep", "tushar", "gaurav", "anil"];

function duplicate(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

const result = duplicate(array);

// console.log(result);

// 3 array reverse
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let reverse = array1.reverse();

// console.log(reverse);

// 4 Union and Intersection of two sorted arrays

const intersection = (arr1, arr2, m, n) => {
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) console.log(arr1[i++] + " ");
    else if (arr2[j] < arr1[i]) console.log(arr2[j++] + " ");
    else {
      console.log(arr2[j++] + " ");
      i++;
    }
  }
  //   print remaingin elements of the larger array
  while (i < m) console.log(arr1[i++] + " ");
  while (j < n) console.log(arr2[j++] + " ");
  return 0;
};

let arr1 = [1, 3, 6, 8, 10];
let arr2 = [2, 4, 5, 7, 9];
let m = arr1.length;
let n = arr2.length;

// intersection(arr1, arr2, m, n);

// 5 write a program for all permutations (angrams) of a string

function permute(str, l, r) {
  if (l == r) console.log(str);
  else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}

function swap(a, i, j) {
  let temp;
  let charArray = a.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

let str = "ABCD";
let string = str.length;
permute(str, 0, string - 1);

// explain the callback function and provide a simple example?
// a callback function is a function that is passed to another function as an argument and is execute after some operation has been completed.

// how do you check if number is integer?
// a very simple way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4));
console.log(isInt(12.2));
console.log(isInt(0.3));

// make this work

duplicate([1, 2, 3, 4, 5]);

function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));

// Fizz buzz challenge

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0;
  b = i % 5 == 0;
  console.log(f ? (b ? "Fizzbuzz" : "Fizz") : b ? "Buzz" : i);
}

// what will be the output of the following code?

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
