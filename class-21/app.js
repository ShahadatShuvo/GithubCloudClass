let whosTurn = document.getElementById("whosTurn");
let restart = document.getElementById("Restart");
let one1 = document.getElementById("1-1");
let one2 = document.getElementById("1-2");
let one3 = document.getElementById("1-3");
let two1 = document.getElementById("2-1");
let two2 = document.getElementById("2-2");
let two3 = document.getElementById("2-3");
let three1 = document.getElementById("3-1");
let three2 = document.getElementById("3-2");
let three3 = document.getElementById("3-3");

// initial == Toss

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Toss korlam
let currentTurn = ""; // 1, 0, 1, 0
let trackingArr = [];
let random = randomRange(0, 1);

if (random === 1) {
  currentTurn = "X";
} else {
  currentTurn = "0";
}

console.log(currentTurn); // 0,
whosTurn.innerHTML = `${currentTurn}'s Turn Now!`;
function displayData(current, temp) {
  if (trackingArr.indexOf(temp) === -1) {
    temp.innerHTML = current;
    trackingArr.push(temp); // one3, two2
  }
  console.log(decisionObj);

  if (current === "0") {
    currentTurn = "X";
  } else {
    currentTurn = "0";
  }
  whosTurn.innerHTML = `${currentTurn}'s Turn Now!`;
}

one1.addEventListener("click", () => displayData(currentTurn, one1));
one2.addEventListener("click", () => displayData(currentTurn, one2));
one3.addEventListener("click", () => displayData(currentTurn, one3));
two1.addEventListener("click", () => displayData(currentTurn, two1));
two2.addEventListener("click", () => displayData(currentTurn, two2));
two3.addEventListener("click", () => displayData(currentTurn, two3));
three1.addEventListener("click", () => displayData(currentTurn, three1));
three2.addEventListener("click", () => displayData(currentTurn, three2));
three3.addEventListener("click", () => displayData(currentTurn, three3));
