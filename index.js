// two pair sum 0
// [-5, -4, -3, -2, 0, 2, 4, 6, 8]

// function getSumPairZero(array) {
//   for (let number of array) {
//     console.log("outer loop");
//     for (let j = 1; j < array.length; j++) {
//       console.log("inner loop");
//       if (number + array[j] === 0) {
//         return [number, array[j]];
//       }
//     }
//   }
// }

// const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// two pair sum 0
// [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// [? , ?]

//

//  Anagram string

// function isAnagram(string1, string2) {
//   if (string1.lenght !== string2.lenght) {
//     return false;
//   }
//   let counter = {};
//   for (let letter of string1) {
//     counter[letter] = (counter[letter] || 0) + 1;
//     console.log(counter[letter]);
//   }
//   for (let item of string2) {
//     if (!counter[item]) {
//       return false;
//     }
//     counter[item] -= 1;
//   }
//   return true;
// }

// const check = isAnagram("hello", "llheo");
// console.log(check);

// count unique number
//  [1,1,2,2,3,4,4,5,6,7,8,8]

// function countUniqueNumber(array) {
//   if (array.length) {
//     let i = 0;
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         i++;
//         array[i] = array[j];
//       }
//     }
//     return i + 1;
//   } else {
//     throw new Error("Array is empty");
//   }
// }

// const result = countUniqueNumber([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9]);

// console.log(result);

// find largest number of array
// [1,2,3,4,5,6,7,8,]

// function findLargest(array, num) {
//   if (num > array) {
//     throw new Error("num is not greater then arrray");
//   } else {
//     let max = 0;
//     for (let i = 0; i < array.lenght - num + 1; i++) {
//       let tmp = 0;
//       for (let j = 0; j < num; j++) {
//         tmp += array[i + j];
//       }
//       if (tmp > max) {
//         max = tmp;
//       }
//     }
//     return max;
//   }
// }

// const result = findLargest([1, 2, 3, 4, 5, 6, 7, 8], 4);

// console.log(result);

//  Divide & Conquerer Technique
//  Find the index of given no in a arry 7
//  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 ->output

// function searchAlog(array, number) {
//   let min = 0;
//   let max = array.lenght - 1;
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     if (array[midIndex] < number) {
//       min = midIndex + 1;
//     } else if (array[midIndex] > number) {
//       max = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
//   return -1;
// }

// const result = searchAlog(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   7
// );

// console.log(result);

//  Checking square in the another array
//  array1 = [1,2,3,4], array2=[1,9,4,16]

// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.lenght; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.lenght; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.lenght - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);

// console.log(result);

//  checking square of another array
// array1 = [1,2,3,4], array2=[1,9,4,16]

// Calculate the number of days between two dates in Javascript required to use date object

// var date1 = new Date("06/30/2019");

// var date2 = new Date("07/30/2022");

// var DifferenceInTime = date2.getTime() - date1.getTime();

// var DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

// document.write(
//   "Total number of days between dates <br>" +
//     date1 +
//     "<br> and <br>" +
//     date2 +
//     " is: <br>" +
//     DifferenceInDays
// );

//  Compare two dates using javascript

// current date
//  example 1
// This example illustrates the comparison of the dates using the getTime() function.

// var g1 = new Date();
// var g2 = new Date();

// if (g1.getTime() === g2.getTime()) document.write("Both are equal ");
// else document.write("Not equal");

// example 2
// This example illustrates the comparison of the current date with assigned date using the getTime() function.
// var date1 = new Date();

// (yyyy-mm-dd)

// var date2 = new Date(2019 - 08 - 03);
// if (date1.getTime() < date2.getTime())
//   document.write("Date 1 is lesser than date 2");
// else if (date1.getTime() > date2.getTime())
//   document.write("Date 1 is greater than date 2");
// else document.write("Both are equal");

//  Generate Random Whole Numbers

// let randomNumber0and9 = Math.floor(Math.random() * 20);
// function randomWholeNum() {
//   return Math.floor(Math.random() * 5);
// }

// const result = randomWholeNum();

// console.log(result);

// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }

// console.log(rangeOfNumbers(1, 5));

//  count consecutive characters

// const maxNumber = (str) => {
//   let max = 0;
//   let currentMax = 1;
//   for (let i = 0; i < str.lenght; i++) {
//     const current = str[i];
//     const next = str[i + 1];
//     if (current === next) {
//       currentMax++;
//     } else {
//       max = Math.max(max, currentMax);
//       currentMax = 1;
//     }
//   }
//   return max;
// };
// const str = "aabbcccddee";

// console.log(maxNumber(str));

//  Javascript program to find the maximum consecutive repeating character in given string

// let str = "aaaabbbbbbbbbbbbbbbbbbaaccdeeeeeeeeeee";

// function to find out the maximum repeating character in given string
// const maxRepeating = (str) => {
//   let len = str.length;
//   let count = 0;

// Find the maximum repeating character starting from str [i]

// let res = str[0];
// for (let i = 0; i < len; i++) {
//   let currentCount = 1;
//   for (let j = i + 1; j < len; j++) {
//     if (str[i] != str[j]) break;
//     currentCount++;
//   }
//   // Update result if required

//     if (currentCount > count) {
//       count = currentCount;
//       res = str[i];
//     }
//   }
//   return res;
// };

// console.log(maxRepeating(str));

//  Longest Increasing Subsequence

// let max_ref;

// function _lis(arr, n) {
// base case
// if (n == 1) return 1;
// maxEndingHere is the LIS ending with arr [n-1]
// let res,
// max_ending_here = 1;

/* Recursively get all LIS ending with arr[0], arr[1] ...
           arr[n-2]. If   arr[i-1] is smaller than arr[n-1], and
           max ending with arr[n-1] needs to be updated, then
           update it */

// for (let i = 1; i < n; i++) {
//   res = _lis(arr, i);
//   if (arr[i - 1] < arr[n - 1] && res + 1 > max_ending_here)
//     max_ending_here = res + 1;
// }

// Compare max_ending_here with the overall max. And
// update the overall max if needed

// if (max_ref < max_ending_here) max_ref = max_ending_here;

// Return lenght of LIS ending with arr[n_1]
// return max_ending_here;
// }

//  The wrapper function for _lis()

// function lis(arr, n) {
// The max variable holds the result
// max_ref = 1;

// The function _lis() stores its result in max
// _lis(arr, n);

// returns max
// return max_ref;
// }

// driver program to test above functions

// let arr = [10, 22, 9, 33, 21, 50, 41, 60];
// let n = arr.length;

// console.log("Lenght of lis is " + lis(arr, n) + " " + "<br>");

// Check if given string Parentheses expression is balnced or not

/*Input: str = “((()))()()” 
Output: Balanced
Input: str = “())((())” 
Output: Not Balanced  */

// Function to check if parenthesis are balanced

function isBalanced(exp) {
  // initailising variables
  let flag = true;
  let count = 0;

  // traversing the expression
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] == "(") count += 1;
    // it is closing parenthesis
    else count -= 1;

    if (count < 0) {
      // this means there are more closing parenthesis than opening
      flag = false;
      break;
    }
  }

  // if count is not zero it means there are more opening parenthesis
  if (count != 0) flag = false;

  return flag;
}

let exp = "((()))()()";
// let exp1 = "((()))()())";

if (isBalanced(exp)) console.log("Balanced");
else console.log("Not Balanced");

// division
function divisionTask(n) {
  if (n <= 0) {
    console.log("-1");
  } else {
    let x = Math.floor(32 / n);
    if (x === 0) {
      console.log("too low");
    } else {
      console.log(x);
    }
  }
}

let reuslt = divisionTask(8);

console.log(reuslt);

function hello(n) {
  for (let i = 1; i < n; i++) {
    if (i % 5 === 0) {
      console.log("hi");
    } else if (i % 7 === 0) {
      console.log("Hello");
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log("Hello Welcome");
    } else {
      console.log("Hello World!");
    }
  }
}

console.log(hello(35));
