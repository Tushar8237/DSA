// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits[3];
// console.log(length);

// 10 Javascript array methods

// 1. forEach()
// Description : This method can help you to loop over array's items.

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.forEach((item) => {
//   console.log(item);
// });

//  2. includes()
//  Description : This method check if array includes the item passed in the method.
// const arr = ["tushar", "tom", "peter", "anil"];
// const array = [1, 2, 3, 4, 5, 6, 7];
// let getValuePresent = array.includes(6);
// console.log(getValuePresent);

//  3. filter()
// Description : This method create new array with only elements passed condition inside the provided function

// const array = [1, 2, 3, 4, 5, 6, 7];
// const arrayFilter = array.filter((num) => num > 3);
// console.log(arrayFilter);
// console.log(array);

// 4. map()
// Description : this method create new array by callig the provided function in every element.

// const array = [1, 2, 3, 4, 5, 6, 7];
// const addValue = array.map((num) => num + 2);
// console.log(addValue);
// console.log(array);

//  5. reduce()
// Description : The reduce() method applies a funtion againts an accumulator and each elemnet in the array (from left to right) to reduce it to a single value

// const array = [1, 2, 3, 4, 5, 6, 7];
// const sum = array.reduce((total, values) => total + values, 0);
// console.log(sum);

// 6. some()
// Descriptiion : This method check if least one of the array's item passed the condition. if passed, it return "true" otherwise "false".

// const array = [1, 2, 3, 4, 5, 6, 7];
// const largeNum = array.some((num) => num >= 4);
// console.log(largeNum);

// const smallNum = array.some((num) => num <= 0);
// console.log(smallNum);

// 7. every()
// Description : This method check if all array,s item passed the condition. if passed, it returns "true" otherwise "false".

// const array = [1, 2, 3, 4, 5, 6, 7];
// const greaterFour = array.every((num) => num > 4);
// console.log(greaterFour);

// const lessTen = array.every((num) => num < 10);
// console.log(lessTen);

// 8. sort()
// Description : This method used to arrange/sort array's item either ascending or descending order.

// const alpha = ["e", "a", "c", "d", "u", "y"];
// const array = [1, 2, 3, 4, 5, 6, 7];

// const descending = array.sort((a, b) => (a > b ? -1 : 1));
// const descending = array.sort();
// console.log(descending);

// const ascending = alpha.sort((a, b) => (a > b ? 1 : -1));
// const ascending = alpha.sort();
// console.log(ascending);

// 9. Aaaray.from()
// Description : This change all things that are array-like or iterable into true array especially when working with dom, so that you can use other array method like reduce, map, filter so on.

// const name = "tushar";
// const nameArray = Array.from(name);

// console.log(nameArray);
// console.log(name);

// 10. Array.of()
// Description : This create array from every arguments passed into it.

// const array = Array.of(1, 2, 3, 4, 5, 6, 7);
// console.log(array);