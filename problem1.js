let array1 = [1, 2, 3];
let array2 = [3, 2, 1];

let a = 0;
let b = 0;

// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] > array2[j]) a[0] = a[0] + 1;
//     else if (array2[j] > array1[i]) a[1] = a[1] + 1;
//   }
// }

// console.log(a, b);

function compare(a, b) {
  let result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0] = result[0] + 1;
    } else if (b[i] > a[i]) {
      result[1] = result[1] + 1;
    }
  }

  return result;
}

let output = compare([1, 2, 3, 10], [3, 4, 1, 9]);

console.log(output);
