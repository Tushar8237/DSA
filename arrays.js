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

// find largest integers in an array

// let arr = [34, 67, 3, 101, 68, 90, 45];
// let temp = [0];

// for (let i = 0; i < arr.length; i++) {
//   if (temp < arr[i]) temp = arr[i];
// }
// console.log(temp);

// Write your code here
// let ar = [1, 2, 3, 4, 10, 11];
// const sum = (ar) => {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum = sum + ar[i];
//   }
//   return sum;
// };

// let result = sum([1, 2, 3, 4, 10, 11, 9]);

// console.log(result);

// const arr = [];

// try {
//   arr.push("try");
//   throw new Error();
// } catch (e) {
//   arr.push("catch");
// } finally {
//   arr.push("finally");
// }

// console.log(arr);

// let green;

// green = false;
// console.log(green);

// const myaar = new aar(2);

// myaaray[1] = 1;
// myarray[3] = 3;

// console.log("lenght", myaar.length);

// console.log("elemnt");
// for (const element of myaar) {
//   console.log("/t", element);
// }

let aar = [34, 45, 56, 86, 75, 104, 34];

let temp = 0;

for (let i = 0; i < aar.length; i++) {
  if (temp < aar[i]) {
    temp = aar[i];
  }
}

// console.log(temp);
// for (let j = 0; j < 3; j++) {
//   for (let i = 0; i < 3; i++) {
//     console.log("hello world");
//   }
//   console.log("\n");
// }

// Find a peak element
// Input array = [5, 10, 20, 15]
// output 20
// The element 20 has neighbour 10 15 both of them are less than 20

function findPeak(arr, n) {
  // first or last element is peak element
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  // check if the neighbour are smaller
  for (let i = 1; i < n - 1; i++) {
    // check if the neighbour are smaller
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}

let arr = [1, 3, 4, 5, 7, 6];
let n = arr.length;

console.log("index of peak point is " + findPeak(arr, n));

// Find the min and max number in array

function findMinMax(arr, n) {
  minmax = new Array();
  let i;
  let min;
  let max;
  // if their is only one element then return it as min and max both
  if (n == 1) {
    minmax.max = arr[0];
    minmax.min = arr[0];
    return minmax;
  }
  // if their are more than one elemnet then initialize min and max
  if (arr[0] > arr[1]) {
    minmax.max = arr[0];
    minmax.min = arr[1];
  } else {
    minmax.min = arr[1];
    minmax.max = arr[0];
  }

  for (let i = 2; i < n; i++) {
    if (arr[i] > minmax.max) {
      minmax.max = arr[i];
    } else if (arr[i] < minmax.min) {
      minmax.min = arr[i];
    }
  }
  return minmax;
}

let arr1 = [1000, 11, 44, 1, 3000, 5000];
let arr1_size = 6;

minmax = findMinMax(arr1, arr1_size);

console.log(minmax.min);
console.log(minmax.max);

// write a proggram to reverse an array
// input [1,2,3,4,5]
// output[5,4,3,2,1]

let reverseArray = [1, 2, 3, 4, 5].reverse();

console.log(reverseArray);

// let sortArray = [2, 4, 7, 1, 3, 80].sort();
// console.log(sortArray);

let numbers = [0, 1, 2, 3, 10, 20, 30, 4, 6, 5];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers);

let sort = [78, 90, 21, 34, 10, 13, 2, 1, 0, 5, -1, -2, 0.0];
sort.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(sort);

// Kth smallest/Largest element in unsorted array

function kth(arr, n, k) {
  // sort the given array
  arr.sort((a, b) => a - b);
  console.log(arr);
  // return kth elemnet in the sorted array
  return arr[k - 1];
}

let sorted = [12, 3, 4, 5, 7];
let kt = sorted.length;
let k = 2;

console.log(kth(sorted, kt, k));

// count number of occurrences in a sorterd array

function findoccurrence(arr, n, x) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (x == arr[i]) count++;
  }
  return count;
}

let occuArray = [1, 2, 2, 2, 2, 2, 3, 4, 7, 8, 8, 8, 8, 8, 8];
let nOccu = occuArray.length;
let x = 8;
console.log(findoccurrence(occuArray, nOccu, x));

let arraySort = [9, 4, 8, 5, 99, 3, 6, 2, 1].sort();
let sortedA = [
  "z",
  "t",
  "s",
  "m",
  "j",
  "k",
  "l",
  "i",
  "h",
  "g",
  "f",
  "e",
  "d",
  "c",
  "b",
  "a",
].sort();

console.log("sorted array is :" + arraySort);
console.log(sortedA);

var arrS = [2, 5, 8, 1, 4];
arrS.sort(function (a, b) {
  return a + 2 * b;
});
console.log(arrS);

function subArraySum(arr, n, sum) {
  let curSum = 0;
  for (let i = 0; i < n; i++) {
    curSum = arr[i];
    // try all subarrays starting with 'i'
    for (let j = i + 1; j < n; j++) {
      if (curSum == sum) {
        console.log("sum found between indexes " + i + " and " + (j - 1));
        return;
      }
      if (curSum > sum || j == n) break;
      curSum = curSum + arr[j];
    }
  }
  console.log("No subArray found");
  return;
}

let subArray = [15, 2, 4, 5, 8, 9, 5, 10, 23];
let nArray = subArray.length;
let sum = 28;
subArraySum(subArray, nArray, sum);

// Move all negative elements to end
/* Given an unsorted array arr[] of both negative and positive integer. the tak is place all negative elements at the end of array without changing the order of positive element and negative element */

// input = [1, -1, 3, 2, -7, -5, 11, 6]
// output = [1, 3, 2, 11, 6, -1, -7, -5]

function segregateElemnets(arr, n) {
  // creat an empty array to store result
  let temp = new Array(n);

  // traversal array and store +ve elements in temp array
  let j = 0; //index of temp
  for (let i = 0; i < n; i++) if (arr[i] >= 0) temp[j++] = arr[i];

  // if array contains all positive or all negative
  if (j == n || j == 0) return;
  // store -ve elements in trmp array
  for (let i = 0; i < n; i++) if (arr[i] < 0) temp[j++] = arr[i];
  for (let i = 0; i < n; i++) arr[i] = temp[i];
}

let segregateArr = [1, -1, -3, -2, 7, 5, 11, 6];
let segregateN = segregateArr.length;

segregateElemnets(segregateArr, segregateN);

for (let i = 0; i < n; i++) console.log(segregateArr[i] + " ");

// Union and intersection of two sorted arrays
// given two sorted arrays, find their union and intersection

function printUnion(unionArray1, unionArray2, m, n) {
  var i = 0;
  var j = 0;
  while (i < m && j < n) {
    if (unionArray1[i] < unionArray2[j]) {
      console.log(unionArray1[i++] + " ");
    } else if (unionArray2[j] < unionArray1[i]) {
      console.log(unionArray2[j++] + " ");
    } else {
      console.log(unionArray2[j++] + " ");
      i++;
    }
  }
  /* print remaining elemets of the larger array */
  while (i < m) console.log(unionArray1[i++] + " ");
  while (j < n) console.log(unionArray2[j++] + " ");
  return 0;
}

var unionArray1 = [1, 2, 4, 5, 6];
var unionArray2 = [2, 3, 5, 7, 8];
var m = unionArray1.length;
var unionN = unionArray2.length;

printUnion(unionArray1, unionArray2, m, unionN);

// to cyclically rotate an array by one

function rotate(arr, n) {
  var x = arr[n - 1],
    i;
  for (i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
  arr[0] = x;
}
var rotateArray = [1, 2, 3, 4, 5];
var rotateN = rotateArray.length;

console.log("Given array is <br>");
for (var i = 0; i < n; i++) console.log(arr[i] + " ");

rotate(rotateArray, rotateN);

// find the missing number

function getmissingOne(missingNo, missingN) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < missingN; i++) {
    total -= missingNo[i];
  }
  return total;
}

let missingNo = [1, 2, 3, 5];
let missingN = missingNo.length;
let missNo = getmissingOne(missingNo, missingN);
console.log(missNo);
