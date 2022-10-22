// // Psudocode
// // 2. match the characters with the first word.
// // 3. display the heighest matched characters.

// // 2. match the characters with the smallest word. 3. display the heighest matched characters.

// let arr = ["geeksforgeeks", "geeky", "geek", "geeksfor"];
// // g , ge, gee, geek
// let output = "";

// if (arr.length === 0) {
//   console.log(output);
// } else {
//   let temp = 1;
//   let slice = arr[0].slice(0, temp); // g
//   while (temp <= arr[0].length) {
//     let flag = 0;
//     let currentSlice = "";
//     for (let i = 0; i < arr.length; i++) {
//       currentSlice = arr[i].slice(0, temp); // g
//       if (currentSlice === slice) {
//         flag = 1;
//       } else {
//         flag = 0;
//         break;
//       }
//     }
//     if (flag === 1) {
//       output = slice;
//     }
//     temp++;
//     slice = arr[0].slice(0, temp);
//   }
//   console.log(output);
// }

// let str = "I love Nuri (60)she is sexy"; // [50]

// let resStr = "";
// let flag = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "[" || str[i] === "(") {
//     flag = 1;
//     i++;
//   }
//   if (str[i] === "]" || str[i] === ")") {
//     flag = 0;
//   }
//   console.log(str[i], flag);
//   if (flag === 1) {
//     resStr += str[i];
//   }
// }
// console.log(resStr);

// let str = "Nuri[266], she is sexy lady";

// let idx1;
// let idx2;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "[" || str[i] === "(") {
//     idx1 = i;
//   }
//   if (str[i] === "]" || str[i] === ")") {
//     idx2 = i;
//   }
// }
// console.log(idx1, idx2);
// let resStr = "";
// for (let i = 0; i < idx1; i++) {
//   resStr += str[i];
// }
// for (let i = idx2 + 1; i < str.length; i++) {
//   resStr += str[i];
// }
// console.log(resStr);

let str = "yo yo";
let num = 100;

for (let i = 0; i < num; i++) {
  console.log(str);
}
