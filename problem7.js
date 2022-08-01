const newFunc = (newStr) => {
  const letterArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (newStr > 9) {
    return "invalid";
  }
  if (newStr.toLowerCase() === newStr) {
    return "invalid";
  }
  let first = newStr.slice(0.3);
  let second = newStr.slice(3, 6);
  let third = newStr(6, 9);

  let newFirst1 = letterArr.indexOf(first[0]) + 1;
  let newFirst3 = letterArr.indexOf(first[2]) + 1;

  let newFirst = newFirst1 + first[1] + newFirst3;
  let newSecond = second.split("").reverse().join("");

  let lastArr = [];

  let a = third
    .split("")
    .map((item) => {
      let a = letterArr.indexOf(item);
      if (a == 23) {
        return letterArr[0];
      }
      return letterArr[a + 1];
    })
    .join("");

  return a + newFirst + newSecond;
};
let str = "moirarose";
console.log(newFunc(str));
