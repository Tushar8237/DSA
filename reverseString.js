let stringToArray = "tushar".split("");
console.log(stringToArray);

let arrayReverse = ["t", "u", "s", "h", "a", "r"].reverse();
console.log(arrayReverse);

let joinArray = ["r", "a", "h", "s", "u", "t"].join("");
console.log(joinArray);

let str = "suryawanshi";
let newString = "";

for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
console.log(str);
console.log(newString);
