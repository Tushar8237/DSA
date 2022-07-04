// find largest integers in an array

let arr = [34, 67, 3, 101, 68, 90, 45];
let temp = [0];

for (let i = 0; i < arr.length; i++) {
  if (temp < arr[i]) temp = arr[i];
}
console.log(temp);
