// 1 javaScript array concat() method returns a new array comprised of this array joind with two or more array
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

// 2 javascript array every() method tests whether all the elements in an array passews the test implemented by the provided function
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
