let arr = ["geek", "geeks", "geeky", "geekforgeek", "germants"];
// g , ge, gee, geek

// Psudocode
// 1. find the smallest word/string.
// 2. match the characters with the smallest word.
// 3. display the heighest matched characters.

// 1. find the smallest word/string.
let smallestLen = Infinity;
let smallStr = "";

for (let i = 0; i < arr.length; i++) {
  let currentLen = arr[i].length; // 4 2
  if (currentLen < smallestLen) {
    smallestLen = currentLen; // 2
    smallStr = arr[i];
  }
}
console.log(smallestLen);
console.log(smallStr);

// 2. match the characters with the smallest word. 3. display the heighest matched characters.

let output = "";
let temp = 1;
let slice = smallStr.slice(0, temp); // g

while (temp <= smallStr.length) {
  let flag = 0;
  let currentSlice = "";
  for (let i = 0; i < arr.length; i++) {
    currentSlice = arr[i].slice(0, temp); // g
    if (currentSlice === slice) {
      flag = 1;
    } else {
      flag = 0;
      break;
    }
  }
  if (flag === 1) {
    output = slice;
  }
  temp++;
  slice = smallStr.slice(0, temp);
}
console.log(output);
