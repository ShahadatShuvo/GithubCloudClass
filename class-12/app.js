let arrStr = ["Hurry", "spoils", "the", "curry"];

let w1 = "Hurry";
let w2 = "curry";
// output: 3

let idx1;
let idx2;
for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i] === w1) {
    idx1 = i;
  }
  if (arrStr[i] === w2) {
    idx2 = i;
  }
}

console.log(idx2 - idx1);

// Text Repeater...

// Hello world . 50

let str = "my text [580]"; // 580
