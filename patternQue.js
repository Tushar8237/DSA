// for (let j = 1; j <= 5; j++) {
//   let bag = "";

//   for (let i = 0; i < 5; i++) {
//     bag = bag + " * ";
//   }
//   console.log(bag);
// }

// for (let i = 1; i <= 5; i++) {
//   var bag = "";

//   for (let j = 1; j <= i; j++) {
//     bag = bag + "  " + j;
//   }
//   console.log(bag);
// }

// for (let i = 1; i <= 5; i++) {
//   var bag = "";
//   for (let j = 1; j <= i; j++) {
//     bag = bag + " * ";
//   }
//   console.log(bag);
// }

// for (let i = 1; i <= 5; i++) {
//   var bag = "";
//   for (let j = 1; j <= i; j++) {
//     bag = bag + "  " + j;
//   }
//   console.log(bag);
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
