// 1 concat()
// javaScript array concat() method returns a new array comprised of this array joind with two or more array
// the syntax
// array.concat(value1, value2, ..., valueN)
//  output ['a', 'b', 'c', 'd', 1, 2, 3, 4]

var alpha = ["a", "b", "c", "d"];
var numeric = [1, 2, 3, 4];

let alphaNumaric = alpha.concat(numeric);

console.log(alphaNumaric);

let num1 = [11, 12, 13, 14];
let num2 = [15, 16, 17, 18];
let num3 = [19, 20, 21, 22];

let num = num1.concat(num2, num3);

console.log(num);

// console.log(num1.concat(num2, num3));
// 2 every()
// javascript array every() method tests whether all the elements in an array passews the test implemented by the provided function
// syntax
// array.every(callback[, thisObject]);
// callback - Function to test for each elemnet
// thisObject- Object to use as this when executing callback

// function for every() method
function isEven(element) {
  return element % 2 == 0;
}
function funC() {
  var arr = [56, 88, 98, 112, 544, 8];
  var array = [4, 8, 16, 29, 36];

  // check for even number
  var value = arr.every(isEven);
  var value2 = array.every(isEven);
  console.log(value);
  console.log(value2);
}

funC();

// 3 filter()
// Javascript array filter() method creates a new array with all elements that pass the test implemented by the provided function.
// syntax
// array.filter(callback[, thisObject])
// callback − Function to test each element of the array.
// thisObject − Object to use as this when executing callback.

function isBigEnough(element) {
  return element >= 10;
}

let filter = [12, 44, 56, 4, 5, 6, 77, 100].filter(isBigEnough);
console.log(filter);

// 4 forEach()
// Javascript array forEach() method calls a function for each element in the array.
// syntax
// array.forEach(callback[, thisObject]);
// callback − Function to test for each element of an array.
// thisObject − Object to use as this when executing callback.

function printBr(element, index) {
  console.log(index + " is " + element);
}

[12, 5, 8, 130, 44].forEach(printBr);

// 5 indexOf()
// Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
// syntax
// array.indexOf(searchElement[, fromIndex]);

let index = [12, 4, 5, 546, 67, 34, 23].indexOf(546);
console.log("index is : " + index);

let index1 = [3, 45, 67, 76, 34, 324, 46].indexOf(32);
console.log("index is : " + index1);

// 6 join()
// Joins all elements of an array into a string.
// syntax
// array.join(separator);

let arr = new Array("first", "second", "third");

// let str = arr.join();
// let str = arr.join(", ");
let str = arr.join(" + ");

console.log(str);

// 7 lastIndexOf()
// Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
// syntax
// array.lastIndexOf(searchElement[, fromIndex]);

let lastIndex1 = [12, 24, 56, 76, 45, 7, 45].lastIndexOf(56);
console.log(lastIndex1);

let lastIndex2 = [23, 34, 53, 32, 64, 67, 756].lastIndexOf(75);
console.log(lastIndex2);

// 8 map()
// Creates a new array with the results of calling a provided function on every element in this array.
// syntax
// array.map(callback[, thisObject]);
// callback − Function that produces an element of the new Array from an element of the current one.
// thisObject − Object to use as this when executing callback.

let numbers = [1, 4, 9, 16, 36, 81];
let roots = numbers.map(Math.sqrt);
// output will root of the elemnts
console.log(" roots is : " + roots);

var map4 = new Map([
  [
    ["first name", "last name"],
    ["sumit", "ghosh"],
  ],
  [
    ["friend 1", "friend 2"],
    ["sourav", "gourav"],
  ],
]);

console.log(map4);

// 9 pop()
// Removes the last element from an array and returns that element.
// syntax
// array.pop
// 10 push()
// Adds one or more elements to the end of an array and returns the new length of the array.
// syntax
// array.push

let numberPop = [34, 23, 39, 56, 24, 52, 365, 122];

let popNumber = numberPop.pop();
let popNumber1 = numberPop.pop();

let pushNum = numberPop.push(
  111,
  345,
  "apple",
  "mango",
  "graphs",
  "banana",
  "orange"
);

let popNumber2 = numberPop.pop();

console.log(popNumber, popNumber1, popNumber2);
console.log(pushNum);
console.log(numberPop);
