let board = [
  ["x", "0", "0"], // 0 /// 3
  ["X", "0", "0"], // 1
  ["0", "P", "x"], // 2
];
// board[0][0]; // 2D array
// board[0][1];
// board[0][2];

// Row: 0,0; 0,1; 0,2
// Row: 1,0; 1,1; 1,2
// Row: 2,0; 2,1; 2,2

// Row: i same but j change
// column: j same but i change

// check for columns
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
    console.log(`0 winner from column ${i}`);
  }
  if (counterX === 3) {
    console.log();
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
    console.log(`0 winner from row ${i}`);
  }
  if (counterX === 3) {
    console.log(`X winner from row ${i}`);
  }
}

if (board[0][0] === "0" && board[1][1] === "0" && board[2][2] === "0") {
  console.log(`0 winner`);
}
if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
  console.log(`X winner`);
}
if (board[0][2] === "0" && board[1][1] === "0" && board[2][0] === "0") {
  console.log(`0 winner`);
}
if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
  console.log(`X winner`);
}
