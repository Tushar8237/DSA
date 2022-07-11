// for (let j = 1; j <= 5; j++) {
//   let bag = "";

//   for (let i = 0; i < 5; i++) {
//     bag = bag + " * ";
//   }
// console.log(bag);
// }

for (let i = 1; i <= 5; i++) {
  var bag = "";

  for (let j = 1; j <= i; j++) {
    bag = bag + "  " + j;
  }
  // console.log(bag);
}

for (let i = 1; i <= 5; i++) {
  var bag = "";
  for (let j = 1; j <= i; j++) {
    bag = bag + " * ";
  }
  console.log(bag);
}

// for (let i = 1; i <= 5; i++) {
//   var bag = "";
//   for (let j = 1; j <= i; j++) {
//     bag = bag + "  " + j;
//   }
console.log(bag);
// }

// Right pascal star pattern
// The right pascal star pattern is created using 2 nested loops

for (let i = 1; i <= 5; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag = bag + " * ";
  }
  console.log(bag);
}

for (let i = 0; i < 6; i++) {
  let bag = "";
  for (let j = 0; j < 6 - i; j++) {
    bag = bag + " * ";
  }
  console.log(bag);
}

for (let row = 1; row <= 10; row++) {
  let bag = "";
  for (let col = 1; col <= 10; col++) {
    if (row == 1 || row == 10) {
      bag = bag + " * ";
    } else {
      if (col == 1 || col == 10) {
        bag = bag + " * ";
      } else {
        bag = bag + " ";
      }
    }
  }
  console.log(bag);
}

for (let i = 0; i <= 6; i++) {
  let bag = "";
  // printing space
  for (let j = 0; j <= 6 - i; j++) {
    // bag += " ";
    bag = bag + " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    // bag += "*";
    bag = bag + "*";
  }
  console.log(bag);
}

for (let i = 0; i < 6; i++) {
  let bag = "";
  for (let j = 0; j < 6 - i; j++) {
    bag = bag + "*";
  }
  console.log(bag);
}

for (let i = 1; i <= 6; i++) {
  let bag = "";
  for (let j = 0; j < i; j++) {
    if (i === 6) {
      bag = bag + "*";
    } else {
      if (j == 0 || j == i - 1) {
        bag = bag + "*";
      } else {
        bag = bag + " ";
      }
    }
  }
  console.log(bag);
}

// Hollow diamond pattern
// a hallow diamond pattern is a simple diamond shape with only a boundary as starts. it is a combination of the diamond and the reverse diamond pattern
let n = 5;
let string = "";
// Upside pyramid
// upside diamond
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
// downside diamond
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k >= 1; k--) {
    if (k === 1 || k === (n - i) * 2 - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);

//  Heart star pattern
//  Heart star pattern is a quite complex structure to create.
var num = 6;
var str = "";
for (let i = num / 2; i < num; i += 2) {
  // print first spaces
  for (let j = 1; j < num - i; j += 2) {
    str += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  // print second spaces
  for (let j = 1; j < num - i + 1; j++) {
    str += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let i = num; i > 0; i--) {
  for (let j = 0; j < num - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

let star = 6;
for (let i = 1; i <= star; i++) {
  let bag = " ";
  for (let j = 1; j <= star - i; j++) {
    bag = bag + "*";
  }
  console.log(bag);
}

// console.log(bag);
