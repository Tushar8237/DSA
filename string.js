// Find the maximum occurring character in given string

// input = aabbccddddddeeffwfwkm
// output = d

// function getCharString(str) {
//   const map = {};
//   str.split("").forEach((element) => {
//     map[element] = map[element] ? map[element] + 1 : 1;
//   });

//   let max = 1;
//   char = str[0];
//   for (let k in map) {
//     if (map[k] > max) {
//       max = map[k];
//       char = k;
//     }
//   }
//   return char;
// }
// const result = getCharString("aabbccddddddeeffwfwkm");
// console.log(result);

// string
// var name = "Narutou";

// var output = "";

// var found = 0;

// for (let i = 0; i < name.length; i++) {
//   if (name[i] === "u" && found === 0) {
//     found = 1;
//     continue;
//   }

//   output = output + name[i];
// }

// console.log(output);

// count all those name start with a

let name = ["tushar", "roshan", "rajesh", "ankush", "anil", "pradeep", "Akash"];
let nameWithA = [];
let count = 0;
for (let i = 0; i < name.length; i++) {
  let current_name = name[i];

  if (current_name[0] == "a" || current_name[0] == "A") {
    count++;
    nameWithA.push(current_name);
  }
}
console.log(count);
console.log(nameWithA);
