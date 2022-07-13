// 1 charAt()
// Returns the character at the specified index.
// syntax
// string.charAt(index);

var str = new String("this is string");

console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));

// 2 charCodeAt()
// Returns a number indicating the Unicode value of the character at the given index.
// string.charCodeAt(index);

var strUniCode = new String("thish is string");
console.log(strUniCode.charCodeAt(0));
console.log(strUniCode.charCodeAt(1));
console.log(strUniCode.charCodeAt(2));

// 3 concat()
// Combines the text of two strings and returns a new string.
// string.concat(string2, string3[, ..., stringN]);

var str1 = "this is string one ";
var str2 = "this is string two";

var str3 = str1.concat(str2);
console.log("concatenated string : " + str3);

// 4 localeCompare()
// Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
// string.localeCompare( param )

let compareStr1 = "this is beautiful string";
let index1 = compareStr1.localeCompare("XYZ");
let index2 = compareStr1.localeCompare("AbCD");
console.log("localCompare first : " + index1);
console.log("localCompare Second : " + index2);

// 5 length()
// Returns the length of the string.
// string.length
// Returns the number of characters in the string.

let strLength = "this is string";

console.log(strLength.length);

// 6 match()
// Used to match a regular expression against a string.
// string.match( param )

let matchStr = "for more information see chapter 3.4.5.1";
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);
console.log(found);
