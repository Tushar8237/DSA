// plus minus hackerrank

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  let n = arr.length;

  arr.forEach((n) => {
    if (n > 0) positive++;
    else if (n < 0) negative++;
    else zero++;
  });

  console.log((positive / n).toFixed(6));
  console.log((negative / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}
let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
