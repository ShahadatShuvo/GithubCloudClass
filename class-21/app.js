let win = document.getElementById("win");
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

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

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

function checkResult(board) {
  let res = "";
  for (let i = 0; i < board.length; i++) {
    let counterX = 0;
    let counter0 = 0;
    for (let j = 0; j < board.length; j++) {
      // column: j same but i change
      //        (row, column)
      // column : 0, 0    0, 1   0, 2
      // column : 1, 0    1, 1   1, 2
      // column : 2, 0    2, 1   2, 3
      if (board[j][i] === "X") {
        counterX++;
      }
      if (board[j][i] === "0") {
        counter0++;
      }
    }
    if (counter0 === 3) {
      res = "0";
    }
    if (counterX === 3) {
      res = "X";
    }
  }
  // check for rows
  for (let i = 0; i < board.length; i++) {
    let counterX = 0;
    let counter0 = 0;
    for (let j = 0; j < board.length; j++) {
      // row: x same but y change
      //        (row, column)
      // Row: 0,0; 0,1; 0,2
      // Row: 1,0; 1,1; 1,2
      // Row: 2,0; 2,1; 2,2
      if (board[i][j] === "X") {
        counterX++;
      }
      if (board[i][j] === "0") {
        counter0++;
      }
    }
    if (counter0 === 3) {
      res = "0";
    }
    if (counterX === 3) {
      res = "X";
    }
  }

  if (board[0][0] === "0" && board[1][1] === "0" && board[2][2] === "0") {
    res = "0";
  }
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    res = "X";
  }
  if (board[0][2] === "0" && board[1][1] === "0" && board[2][0] === "0") {
    res = "0";
  }
  if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    res = "X";
  }
  return res;
}

function displayData(current, temp) {
  if (temp === one1) {
    board[0][0] = current;
  }
  if (temp === one2) {
    board[0][1] = current;
  }
  if (temp === one3) {
    board[0][2] = current;
  }
  if (temp === two1) {
    board[1][0] = current;
  }
  if (temp === two2) {
    board[1][1] = current;
  }
  if (temp === two3) {
    board[1][2] = current;
  }
  if (temp === three1) {
    board[2][0] = current;
  }
  if (temp === three2) {
    board[2][1] = current;
  }
  if (temp === three3) {
    board[2][2] = current;
  }
  if (trackingArr.indexOf(temp) === -1) {
    temp.innerHTML = current;
    trackingArr.push(temp); // one3, two2
  }

  if (current === "0") {
    currentTurn = "X";
  } else {
    currentTurn = "0";
  }
  whosTurn.innerHTML = `${currentTurn}'s Turn Now!`;
  console.log(board);
  let winner = checkResult(board);
  if (winner.length) {
    win.innerHTML = `Winner is ${winner}`;
    whosTurn.innerHTML = ``;
  }
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
