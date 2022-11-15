let win = document.getElementById("win");
let whosTurn = document.getElementById("whosTurn");
let restart = document.getElementById("restart");
let one1 = document.getElementById("1-1");
let one2 = document.getElementById("1-2");
let one3 = document.getElementById("1-3");
let two1 = document.getElementById("2-1");
let two2 = document.getElementById("2-2");
let two3 = document.getElementById("2-3");
let three1 = document.getElementById("3-1");
let three2 = document.getElementById("3-2");
let three3 = document.getElementById("3-3");

let flag = 0;

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

function colorColumn(val) {
  if (val === 0) {
    one1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    two1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    three1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  } else if (val === 1) {
    one2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    two2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    three2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  } else {
    one3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    two3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    three3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  }
}
function colorRow(val) {
  if (val === 0) {
    one1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    one2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    one3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  } else if (val === 1) {
    two1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    two2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    two3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  } else {
    three1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    three2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
    three3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  }
}
function colorDaigonalR() {
  one1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  two2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  three3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
}
function colorDaigonalL() {
  one3.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  two2.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
  three1.classList = `w-1/3 h-[100px] border border-white flex justify-center items-center bg-green-500 active:bg-blue-500 select-none`;
}

function checkResult(board) {
  let res = "";
  for (let i = 0; i < board.length; i++) {
    let counterClmX = 0;
    let counterClm0 = 0;
    let counterRwX = 0;
    let counterRw0 = 0;
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === "X") {
        counterClmX++;
      }
      if (board[j][i] === "0") {
        counterClm0++;
      }
      if (board[i][j] === "X") {
        counterRwX++;
      }
      if (board[i][j] === "0") {
        counterRw0++;
      }
    }
    if (counterClm0 === 3) {
      res = "0";
      colorColumn(i);
    }
    if (counterClmX === 3) {
      res = "X";
      colorColumn(i);
    }
    if (counterRw0 === 3) {
      res = "0";
      colorRow(i);
    }
    if (counterRwX === 3) {
      res = "X";
      colorRow(i);
    }
  }

  if (board[0][0] === "0" && board[1][1] === "0" && board[2][2] === "0") {
    res = "0";
    colorDaigonalR();
  }
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    res = "X";
    colorDaigonalR();
  }
  if (board[0][2] === "0" && board[1][1] === "0" && board[2][0] === "0") {
    res = "0";
    colorDaigonalL();
  }
  if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    res = "X";
    colorDaigonalL();
  }
  return res;
}

function displayData(current, temp) {
  if (trackingArr.indexOf(temp) === -1 && flag === 0) {
    temp.innerHTML = current;
    trackingArr.push(temp); // one3, two2
  }

  if (current === "0") {
    currentTurn = "X";
  } else {
    currentTurn = "0";
  }

  if (flag === 0) {
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
  }

  whosTurn.innerHTML = `${currentTurn}'s Turn Now!`;
  console.log(board);
  let winner = checkResult(board);
  if (winner.length) {
    win.innerHTML = `Winner is ${winner}`;
    whosTurn.innerHTML = ``;
    flag = 1;
  }
}

function resetGame() {
  window.location.reload();
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
restart.addEventListener("click", resetGame);
