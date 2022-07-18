// HackeRank Birthday cake candles

function birthdayCakeCandles(candles) {
  let max = 0;
  let count = 0;

  candles.forEach((item) => {
    if (item > max) {
      max = item;
      count = 1;
    } else if (item === max) {
      count++;
    }
  });
  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
