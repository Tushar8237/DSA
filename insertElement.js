let arr = [34, 45, 67, 78, 32, 24];
let newEl = 70;
let position = 2;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];

    if (i == position) {
      arr[i] = newEl;
    }
  }
}

console.log(arr);

let data = [1, 2, 3, 4, 5, 6, 7, 8];

data.splice(5, 0, 5000);

console.log(data);

let data1 = [34, 37, 23, 76, 79, 31, 12];

let position1 = 5;

for (let i = position; i < data1.length - 1; i++) {
  data1[i] = data1[i + 1];
}

data1.length = data1.length - 1;
console.log(data1);
