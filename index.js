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

function isSquareCheck(array1, array2) {
  for (let i = 0; i < array1.lenght; i++) {
    let isSquare = false;
    for (let j = 0; j < array2.lenght; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        isSquare = true;
      }
      if (j === array2.lenght - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
}

const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);

console.log(result);
