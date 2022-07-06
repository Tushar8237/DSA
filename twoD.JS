// given a matrix print it in the form of a snake
// create 2d array
// output should be [1 2 3 7 6 5 9 10 11]

let itmes = [];

let item1 = [1, 2, 3];
let item2 = [5, 6, 7];
let itme3 = [9, 10, 11];

itmes.push(item1);
itmes.push(item2);
itmes.push(itme3);

// console.log(itmes);

let rows = itmes.length;
let cols = itmes[0].length;

let output = [];

for (let i = 0; i < rows; i++) {
  // even row
  if (i % 2 == 0) {
    for (let j = 0; j < cols; j++) {
      output.push(itmes[i][j]);
    }
  } else {
    for (let j = cols - 1; j >= 0; j--) {
      output.push(itmes[i][j]);
    }
  }
}

console.log(output.join(" "));
