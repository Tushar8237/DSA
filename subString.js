// you are given a string "s" you have to find the "count" of substring which start and end with the same character
// sample input "abcab"
// sample output 7
// 1 Generate all possible substring
// 2 check for all generated substring if the first and last character are same then increment the count

const countSubString = () => {
  let str = "abcab";
  let n = str.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let bag = "";
      for (let k = i; k <= j; k++) {
        bag = bag + str[k];
      }
      var n2 = bag.length - 1;
      if (bag[0] == bag[n2]) {
        count++;
        console.log(bag);
      }
    }
  }
  return count;
};

let result = countSubString();

console.log("count is", result);
