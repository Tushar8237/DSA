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

// let name = ["tushar", "roshan", "rajesh", "ankush", "anil", "pradeep", "Akash"];
// let nameWithA = [];
// let count = 0;
// for (let i = 0; i < name.length; i++) {
//   let current_name = name[i];

//   if (current_name[0] == "a" || current_name[0] == "A") {
//     count++;
//     nameWithA.push(current_name);
//   }
// }
// console.log(count);
// console.log(nameWithA);

// count all those name which have a in them

// let name = ["tushar", "roshan", "rajesh", "ankush", "anil", "pradeep", "Akash"];
// let count = [];
// for (let i = 0; i < name.length; i++) {
//   let current_name = name[i];

//   for (let j = 0; j < current_name.length; j++) {
//     if (current_name[j] == "a" || current_name[j] == "A") {
//       count++;
//       break;
//     }
//   }
// }

// console.log(count);

// given string count the number of words

// "there is a need development in the aducation system"

// let str = "there is a need development in the aducation system";
// // let str = "";

// let count = 0;

// if (str.length > 0) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       count++;
//     }
//   }
//   count = count + 1;
// } else {
//   console.log("no words in the string");
// }

// console.log(count);
