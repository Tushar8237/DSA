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
