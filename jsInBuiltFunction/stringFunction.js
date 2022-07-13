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

// 7 replace()
// Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
// string.replace(regexp/substr, newSubStr/function[, flags]);
var re = /apples/gi;
let replaceStr = "Apples are found, and apple are juicy";
let newStr = replaceStr.replace(re, "orange");
console.log(newStr);

// 8 search()
// Executes the search for a match between a regular expression and a specified string.
// string.search(regexp);

let reStr = /apples/gi;
let searchStr = "Apples are round, and apples are juicy.";
if (searchStr.search(reStr) == -1) {
  console.log("does not contain apples");
} else {
  console.log("containS apples");
}

// 9 split()
// Splits a String object into an array of strings by separating the string into substrings.
// string.split([separator][, limit]);

var str = "apples are round, and apples are juicy";
var splitted = str.split(" ", 4);
console.log(splitted);

// 10 	substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.

var strSub = "Apples are round, and apples are juicy.";
console.log(str.substr(0, 2));
console.log(strSub.substr(-2, 2));
console.log(strSub.substr(1));
console.log(strSub.substr(-20, 2));
console.log(strSub.substr(20, 2));

// 11 toLocaleLowerCase() & 12 toLocalUpperCase
// The characters within a string are converted to lower case while respecting the current locale.
// string.toLocaleLowerCase( )
// string.toLocaleUpperCase( )

let toLocalLowerCase = "THIS IS STRING";
let toLocalUpperCase = "this is string";

console.log(toLocalLowerCase.toLocaleLowerCase());
console.log(toLocalUpperCase.toLocaleUpperCase());

// 13 toLowerCase() and 14 toUpperCase
// Returns the calling string value converted to lower case.
// string.toLowerCase( )
// string.toUpperCase( )

let lowerStr = "THIS IS STRING";
let upperStr = "this is string";
console.log(lowerStr.toLowerCase());
console.log(lowerStr.toUpperCase());

// 15 toString()
// Returns a string representing the specified object.
// string.toString( )

let toStr = "apple are round and apple are juicy";
console.log(toStr.toString());

// 16 valueof()
// Returns the primitive value of the specified object.
// string.valueOf( )

let valueStr = "This method returns the primitive value of a String object.";
console.log(valueStr.valueOf());
