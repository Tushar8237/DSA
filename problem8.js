let arr = [198, 23, 45, 12, 4, 56, 7, 98];

let max = 0;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) max = arr[i];
}

console.log(max);
