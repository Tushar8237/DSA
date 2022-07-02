// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits[3];
// console.log(length);

// 10 Javascript array methods

// 1. forEach()
// Description : This method can help you to loop over array's items.

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.forEach((item) => {
//   console.log(item);
// });

//  2. includes()
//  Description : This method check if array includes the item passed in the method.
// const arr = ["tushar", "tom", "peter", "anil"];
// const array = [1, 2, 3, 4, 5, 6, 7];
// let getValuePresent = array.includes(6);
// console.log(getValuePresent);

//  3. filter()
// Description : This method create new array with only elements passed condition inside the provided function

// const array = [1, 2, 3, 4, 5, 6, 7];
// const arrayFilter = array.filter((num) => num > 3);
// console.log(arrayFilter);
// console.log(array);

// 4. map()
// Description : this method create new array by callig the provided function in every element.

// const array = [1, 2, 3, 4, 5, 6, 7];
// const addValue = array.map((num) => num + 2);
// console.log(addValue);
// console.log(array);

//  5. reduce()
// Description : The reduce() method applies a funtion againts an accumulator and each elemnet in the array (from left to right) to reduce it to a single value

// const array = [1, 2, 3, 4, 5, 6, 7];
// const sum = array.reduce((total, values) => total + values, 0);
// console.log(sum);

// 6. some()
// Descriptiion : This method check if least one of the array's item passed the condition. if passed, it return "true" otherwise "false".

// const array = [1, 2, 3, 4, 5, 6, 7];
// const largeNum = array.some((num) => num >= 4);
// console.log(largeNum);

// const smallNum = array.some((num) => num <= 0);
// console.log(smallNum);

// 7. every()
// Description : This method check if all array,s item passed the condition. if passed, it returns "true" otherwise "false".

// const array = [1, 2, 3, 4, 5, 6, 7];
// const greaterFour = array.every((num) => num > 4);
// console.log(greaterFour);

// const lessTen = array.every((num) => num < 10);
// console.log(lessTen);

// 8. sort()
// Description : This method used to arrange/sort array's item either ascending or descending order.

// const alpha = ["e", "a", "c", "d", "u", "y"];
// const array = [1, 2, 3, 4, 5, 6, 7];

// const descending = array.sort((a, b) => (a > b ? -1 : 1));
// const descending = array.sort();
// console.log(descending);

// const ascending = alpha.sort((a, b) => (a > b ? 1 : -1));
// const ascending = alpha.sort();
// console.log(ascending);

// 9. Aaaray.from()
// Description : This change all things that are array-like or iterable into true array especially when working with dom, so that you can use other array method like reduce, map, filter so on.

// const name = "tushar";
// const nameArray = Array.from(name);

// console.log(nameArray);
// console.log(name);

// 10. Array.of()
// Description : This create array from every arguments passed into it.

// const array = Array.of(1, 2, 3, 4, 5, 6, 7);
// console.log(array);

//  Create an 2D array

// var arr = new Array(2);

// console.log("Creating 2D arraty <br>");

// loop to create 2D array using 1D array

// for (var i = 0; i < arr.length; i++) {
//   arr[i] = new Array(2);
// }

// var h = 0;

// loop to initialize 2D array elements.

// for (var i = 0; i < 2; i++) {
//   for (var j = 0; j < 2; j++) {
//     arr[i][j] = h++;
//   }
// }

//  loop to display the elements of 2D array.

// for (var i = 0; i < 2; i++) {
//   for (var j = 0; j < 2; j++) {
//     console.log(arr[i][j] + " ");
//   }

//   console.log("<br>");
// }

// Find the minimum number in array

// function findMinmum(array) {
//   if (!array.length) {
//     throw new Error("array should not be empty");
//   } else if (array.length === 1) {
//     return array[0];
//   } else {
//     let currentMin = array[0];
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < currentMin) {
//         currentMin = array[i];
//       }
//     }
//     return currentMin;
//   }
// }

// const result = findMinmum([2, 3, 4, 5, 6, 8]);

// console.log(result);

// function checkIfSquareExits(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array1.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// const result = checkIfSquareExits([1, 2, 3, 4], [1, 4, 9, 16]);

// console.log(result);

// anagram problem

// function isAnagram(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }

//   let counter = {};
//   for (let letter of string1) {
//     counter[letter] = (counter[letter] || 0) + 1;
//   }

//   for (let item of string2) {
//     if (!counter[item]) {
//       return false;
//     }
//     counter[item] -= 1;
//   }

//   return true;
// }

// const result = isAnagram("hello", "leloht");

// console.log(result);

// checking sum zero
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] input
//  [-4,4] output
// all other elemnet to check it sum is zero or not

// function findSumZeroPair(array) {
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     let sum = array[left] + array[right];
//     if (sum === 0) {
//       return [array[left], array[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// const result = findSumZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

// console.log(result);

//  find the missing number
// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
// Output: 5
// Approch: the lenght of the array is n-1. so the sum of all n lements i.e sum of number from 1 to n can be calulated using the formula n*(n+1)/2.

// function to get the missing number
// function getMissingNo(a, n) {
//   let total = Math.floor(((n + 1) * (n + 2)) / 2);
//   for (let i = 0; i < n; i++) total -= a[i];
//   return total;
// }
// let arr = [1, 2, 3, 4, 5, 6, 8];
// let n = arr.length;
// const result = getMissingNo(arr, n);

// console.log(result);

// Recursive Approach

// const recursiveFactorial = (number) => {
//   if (number == 2) {
//     return 2;
//   }
//   return number * recursiveFactorial(number - 1);
// };

// const result = recursiveFactorial(3);

// console.log(result);

// Normaol Approach
// function for sum of two number

// function claculateTotal(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(claculateTotal(3));

// recursive approach

// function calulatedTotalRecursion(n, total = 0) {
//   if (n === 0) {
//     return total;
//   }
//   return calulatedTotalRecursion(n - 1, (total += n));
// }

// console.log(calulatedTotalRecursion(3));

// const teamStructure = {
//   name: "Kunal",
//   teams: [
//     {
//       name: "Harish",
//       teams: [
//         {
//           name: "tushar",
//           teams: [
//             {
//               name: "pradeep",
//               teams: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Anurag",
//       teams: [
//         {
//           name: "anil",
//           teams: [],
//         },
//       ],
//     },
//   ],
// };

// function getTeamDetsils(t) {
//     console.log("team....", t);
//   if (t.teams.length === 0) return;

//   t.teams.forEach((team) => {
//     console.log(team);
//     getTeamDetsils(team);
//   });
// }

// getTeamDetsils(teamStructure);

// sum of even number
// let numStr = [1, 2, 3, 4, 5, 6];

// const sumEvens = (numStr) => {
//   let sum = 0;
//   for (let i = 0; i < numStr.length; i++) {
//     if (i % 2 === 0) {
//       sum = sum + numStr[i];
//     }
//   }
//   return sum;
// };

// console.log(sumEvens(numStr));

// sum of prime numbers

// let numStr = [1, 2, 3, 4, 5, 6];

// const sumEvens = (numStr) => {
//   let sum = 0;
//   for (let i = 0; i < numStr.length; i++) {
//     if (i % 2 !== 0) {
//       sum = sum + numStr[i];
//     }
//   }
//   return sum;
// };

// console.log(sumEvens(numStr));

// find max number in array

// let array = [5, 10, 30, 56, 9, 15, 6, 96];

// let max = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }

// console.log(max);

// given an array of numbers find the average of all even numbers

// let numbers = [6, 7, 45, 68, 74, 4, 6];
// let even = [];
// let sum = 0;
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     sum = sum + numbers[i];
//     count++;

//     even.push(numbers[i]);
//   }
// }

// console.log("Average of even numbers", sum / count);
// console.log(even);

// find the last elemnet after deleting every second element in array of n integers
// input 5
// output 3
// function removeAlternate(n) {
//   if (n == 1) return 1;
//   if (n % 2 == 0) return 2 * removeAlternate(n / 2) - 1;
//   else return 2 * removeAlternate((n - 1) / 2) + 1;
// }

// let n = 5;
// console.log(removeAlternate(n));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(0, 2);
// arr.push(1, 2);

// console.log(arr);
