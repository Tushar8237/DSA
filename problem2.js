let itmes = [];

let item1 = [1, 2, 3];
let item2 = [4, 5, 6];
let itme3 = [9, 8, 9];

itmes.push(item1);
itmes.push(item2);
itmes.push(itme3);

function diagonal(aar) {
  let n = aar.length;
  let left = 0;
  let right = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // finding the sum of primary diagonol
      if (i === j) {
        left += aar[i][j];
      }
      // finding the sum of secondary diagonol
      if (i + j === n - 1) {
        right += aar[i][j];
      }
    }
  }
  return right - left;
}

let aar = [
  [11, 2, 4],
  [4, 5, 9],
  [10, 8, -12],
];
let result = diagonal(aar);

console.log(result);
