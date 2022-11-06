let btnChange = document.getElementById("btnChange");
let body = document.getElementById("body");
let calculator = document.getElementById("calculator");
let flag = 0;

function changeMode() {
  if (flag === 0) {
    body.style.backgroundColor = "black";
    calculator.style.backgroundColor = "#38BDF8";
    btnChange.innerHTML = "White Mode";
    flag = 1;
  } else {
    location.reload();
  }
}

//            1+3
//              4
//  1+5-3+4*2+4/2

let display = document.getElementById("display");
let btnPlus = document.getElementById("btn-plus");
let btnMinus = document.getElementById("btn-minus");
let btnMulti = document.getElementById("btn-multi");
let btnDiv = document.getElementById("btn-div");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnDot = document.getElementById("btn-dot");
let btnC = document.getElementById("btnC");
let equal = document.getElementById("equal");
let allButtons = document.getElementsByClassName("btn");

let displayData = "";

function displayValue(value) {
  if (value === 0) {
    displayData += 0;
  } else if (value === 1) {
    displayData += 1;
  } else if (value === 2) {
    displayData += 2;
  } else if (value === 3) {
    displayData += 3;
  } else if (value === 4) {
    displayData += 4;
  } else if (value === 5) {
    displayData += 5;
  } else if (value === 6) {
    displayData += 6;
  } else if (value === 7) {
    displayData += 7;
  } else if (value === 8) {
    displayData += 8;
  } else if (value === 9) {
    displayData += 9;
  } else if (value === "+") {
    displayData += "+";
  } else if (value === "-") {
    displayData += "-";
  } else if (value === "*") {
    displayData += "×";
  } else if (value === "/") {
    displayData += "÷";
  } else if (value === ".") {
    displayData += ".";
  }
  // console.log(displayData);
  display.innerHTML = displayData;
}

function clearScreen() {
  displayData = "";
  display.innerHTML = displayData;
}

function makeResult(arr) {
  let operands = ["÷", "×", "+", "-"];
  for (let i = 0; i < operands.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === operands[i]) {
        let n1 = Number(arr[j - 1]);
        let n2 = Number(arr[j + 1]);
        let res;
        if (i === 0) {
          res = n1 / n2;
        } else if (i === 1) {
          res = n1 * n2;
        } else if (i === 2) {
          res = n1 + n2;
        } else {
          res = n1 - n2;
        }
        arr.splice(j - 1, 3, res);
        j--;
      }
    }
    console.log(arr);
  }
  return arr;
}

function calculation() {
  if (displayData.length === 0) {
    display.innerHTML = displayData;
  } else {
    let arr = [];
    let temp = 0;
    if (
      displayData[0] === "+" ||
      displayData[0] === "-" ||
      displayData[0] === "×" ||
      displayData[0] === "÷"
    ) {
      arr.push(0);
      arr.push(displayData[0]);
      arr[2] = displayData[1];
      temp = 4;
    }
    let value = "";
    console.log(displayData);
    for (let i = temp; i < displayData.length; i++) {
      if (
        displayData[i] === "+" ||
        displayData[i] === "-" ||
        displayData[i] === "×" ||
        displayData[i] === "÷"
      ) {
        if (value.length) {
          arr.push(value);
          value = "";
        }
        arr.push(displayData[i]);
      } else {
        value += displayData[i];
      }
    }
    if (value.length) {
      arr.push(value);
      value = "";
    }
    console.log(arr);
    let result = makeResult(arr);
    displayData = result;
    display.innerHTML = result;
  }
}

btn0.addEventListener("click", () => displayValue(0)); // method
btn1.addEventListener("click", () => displayValue(1));
btn2.addEventListener("click", () => displayValue(2));
btn3.addEventListener("click", () => displayValue(3));
btn4.addEventListener("click", () => displayValue(4));
btn5.addEventListener("click", () => displayValue(5));
btn6.addEventListener("click", () => displayValue(6));
btn7.addEventListener("click", () => displayValue(7));
btn8.addEventListener("click", () => displayValue(8));
btn9.addEventListener("click", () => displayValue(9));
btn9.addEventListener("click", () => displayValue(9));
btnPlus.addEventListener("click", () => displayValue("+"));
btnMinus.addEventListener("click", () => displayValue("-"));
btnMulti.addEventListener("click", () => displayValue("*"));
btnDiv.addEventListener("click", () => displayValue("/"));
btnDot.addEventListener("click", () => displayValue("."));
btnC.addEventListener("click", clearScreen);
equal.addEventListener("click", calculation);
