//  remove duplicate item from the array
// var array = [1, 1, 2, 3, 4, 5, 2, 3, 6, 7, 8];

// let array = ["tushar", "anil", "pradeep", "tushar", "gaurav", "anil"];

// function duplicate(array) {
//   return array.filter((item, index) => array.indexOf(item) === index);
// }

// console.log(duplicate(array));
// const result = duplicate(array);

// console.log(result);

// array reverse
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let reverse = array.reverse();

// console.log(reverse);

// get value of input

// function getValue() {
//   var string = document.getElementById("searchText").value;
//   console.log(string);
// }

// fatch api in react js

// import { useEffect, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/albums%22).then((result) => {
//       result.json().then((resp) => {
//         // console.warn("result", resp);
//         setData(resp);
//       });
//     });
//   }, []);
//   console.warn(data);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <table border="1">
//         <tr>
//           <td>userId</td>
//           <td>id</td>
//           <td>title</td>
//         </tr>
//         {data.map((item) => (
//           <tr>
//             <td>{item.userId}</td>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// }

let array = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];

function removeDuplicate() {
  return array.filter((item, index) => array.indexOf(item) === index);
}

const result = removeDuplicate(array);

console.log("result", result);
