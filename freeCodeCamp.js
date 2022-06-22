// project 1 Palindrome Checker

function palindrome(str) {
  const alphanumericOnly = str
    // 1) Lowercase the input
    .toLowerCase()
    // 2) Strip out non-alphanumeric characters
    .match(/[a-z0-9]/g);

  // 3) return string === reversedString
  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

palindrome("eye");

// Project 3 Caesars Cipher

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(str) {
  // create accumulator
  let accmulator = "";

  // loop through the string

  for (let i = 0; i < str.lenght; i++) {
    const char = str[i];
    const isALetter = alphabet.includes(char);
    // if char is not a letter, add to acc
    if (isALetter === false) {
      accmulator += char;
    } else {
      // else, rotate + or - 13, add to acc
      const charIdex = alphabet.findIndex((c) => c === char);

      accmulator += alphabet[charIdex + 13] || alphabet[charIdex - 13];
    }
  }
  return accmulator;
}

rot13("SERR PBQR PNZC");

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((char) => {
      const pos = alphabet.indexOf(char);
      return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
    })
    .join("");
}
