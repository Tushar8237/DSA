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

// string using split inbuilt function

// const mySplit = (input, char) => {
//   let output = [];
//   let s = "";

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] != char) {
//       s = s + input[i];
//     } else {
//       output.push(s);
//       s = "";
//     }
//   }
//   output.push(s);
//   return output;
// };

// let input = "the lazy brown hello";
// console.log(mySplit(input, " "));
// console.log(input.split(" "));

// let string = "hello";
// let temp = 2;

// for (let i = 0; i < string.length; i++) {
//   if (string[i] == temp) console.log(string[i]);
// }
// console.log();

// function str(a, n) {
//   let str1 = a;
//   str1.char;
// }

// str("hello", 2);

// let string5 = "hello";
// let s = string5.charAt[2];
// console.log(string5[2]);

// we are required to write a javascript function that takes in a string that represent. our function should sort this sentence . each word in the sentence string contains an integers

// const str = "is2 thi1s t4est 3a";

// const sortNumber = (str = "") => {
//   const findNumber = (s = "") =>
//     s.split("").reduce((acc, val) => (+val ? +val : acc), 0);
//   const arr = str.split(" ");
//   const sorter = (a, b) => {
//     return findNumber(a) - findNumber(b);
//   };
//   arr.sort(sorter);
//   return arr.join(" ");
// };

// console.log(sortNumber(str));

// let str = "priyaSharma";
// let string = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   string += str[i];
// }

// console.log(string);

// let str = "tushar";
// let str = [1, 2, 3, 4, 5, 6, 7];
// let string = [];

// for (let i = str.length - 1; i >= 0; i--) {
//   string += str[i];
// }

// console.log(string);
