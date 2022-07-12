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

// 11 reduce()
// Javascript array reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
// syntax
// array.reduce(callback[, initialValue]);
// callback − Function to execute on each value in the array.
// initialValue − Object to use as the first argument to the first call of the callback.
// Returns the reduced single value of the array.

var total = [2, 4, 6, 7, 8, 9, 100];

const sum = total.reduce((a, b) => a + b);

console.log(sum);

var totalSum = [34, 45, 54, 5, 65, 87, 69, 90];

var sumTotal = totalSum.reduce((a, b) => a + b);

console.log("sum of array is : " + sumTotal);

// 12 reduceRight()
// Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
// syntax
// array.reduceRight(callback[, initialValue]);
// Returns the reduced right single value of the array.

let reduceRight = [23, 45, 65, 100, 67, 22, 99, 9];

let totalValue = reduceRight.reduceRight((a, b) => a + b);

console.log("sum from right to left : " + totalValue);

// 13 reverse()
// Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
// syntax
// array.reverse();
// Returns the reversed single value of the array.

var number = [4, 5, 6, 7, 90, 34, 23].reverse();

console.log("Reverse array is : " + number);

var string = ["nagpur", "mumbai", "delhi", "banglore"].reverse();
console.log(string);

// 14 shift()
// Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
// syntax
// array.shift();
// Returns the removed single value of the array.

let shiftElement = [34, 45, 67, 78, 97].shift();
console.log("shift element is :" + shiftElement);

// 15 slice()
// Extracts a section of an array and returns a new array.
// syntax
// array.slice
// Returns the extracted array based on the passed parameters.

let slice = [4, 5, 89, 23, 78].slice(2);
console.log("new array is : " + slice);

let strSlice = ["mango", "orange", "apple", "banana"].slice(1);
console.log("new array is : " + strSlice);

// 16 sum()
// Returns true if at least one element in this array satisfies the provided testing function.
// syntax
// array.some(callback[, thisObject]);
// callback − Function to test for each element.
// thisObject − Object to use as this when executing callback.
// If some element pass the test, then it returns true, otherwise false.

function somefunc(element) {
  return element >= 10;
}

// let retval = [2, 5, 2, 8, 4, 10].some(somefunc);
let retval = [2, 5, 2, 8, 4].some(somefunc);

console.log("return value is : " + retval);
