// return unique array

let arr = ["tomato", "beans", "potato", "carrot", "tomato", "green", "beans"];

let unique = [];
for (let i = 0; i < arr.length; i++) {
  let count = 0;

  for (let j = 0; j < unique.length; j++) {
    if (arr[i] == unique[j]) {
      count++;
    }
  }

  if (count == 0) {
    unique.push(arr[i]);
  }
}

console.log(unique);

// object approch

let array = [1, 2, 3, 7, 8, 4, 5, 6, 2, 5, 1, 4, 8];

let unique1 = {};

for (let i = 0; i < array.length; i++) {
  unique1[array[i]] = "present";
}

console.log(unique1);

// given a string print, the number of times each character appear

let name = "helloh";

let details = {};

for (let i = 0; i < name.length; i++) {
  let char = name[i];
  if (details[char] === undefined) {
    details[char] = 1;
  } else {
    details[char] = details[char] + 1;
  }
}

console.log(details);

for (let key in details) {
  console.log(key, " : ", details[key]);
}
