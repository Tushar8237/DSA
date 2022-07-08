const pyramid = (n) => {
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      string += "9";
    }
    console.log(string);
  }
};

pyramid(6);

for (let i = 1; i <= 12; i++) {
  let days = 31;
  if (i == 2) {
    days = 28;
  } else if (i == 4 || i == 6 || i == 9 || i == 11) {
    days = 30;
  }
  for (let j = 1; j <= days; j++) {
    console.log("month is " + i + " - " + " date is " + j);
  }
}
