'use strict';

const EMPTY = ' ';
const PLAYER1 = 'X';
const PLAYER2 = 'O';

function isWinner(board, player) {
  const checkWin = (positions) => positions.every((p) => p === player);

  const rows = [0, 1, 2].map((row) => [...board[row]]);

  const cols = [0, 1, 2].map((col) => board.map((row) => row[col]));

  const diagonalTLBR = [0, 1, 2].map((i) => board[i][i]);
  const diagonalTRBL = [0, 1, 2].map((i) => board[i][2 - i]);

  const diagonalWin = checkWin(diagonalTLBR) || checkWin(diagonalTRBL);

  return rows.some((row) => checkWin(row)) || cols.some((col) => checkWin(col)) || diagonalWin;
}

console.log(
  isWinner(
    [
      [PLAYER1, PLAYER1, PLAYER1],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, EMPTY],
      [PLAYER1, PLAYER1, PLAYER1],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [PLAYER1, PLAYER1, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER1, EMPTY, EMPTY],
      [PLAYER1, EMPTY, EMPTY],
      [PLAYER1, EMPTY, EMPTY],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [EMPTY, PLAYER1, EMPTY],
      [EMPTY, PLAYER1, EMPTY],
      [EMPTY, PLAYER1, EMPTY],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, PLAYER1],
      [EMPTY, EMPTY, PLAYER1],
      [EMPTY, EMPTY, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER1, EMPTY, EMPTY],
      [EMPTY, PLAYER1, EMPTY],
      [EMPTY, EMPTY, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, PLAYER1],
      [EMPTY, PLAYER1, EMPTY],
      [PLAYER1, EMPTY, EMPTY],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER2, PLAYER2, PLAYER2],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, EMPTY],
      [PLAYER2, PLAYER2, PLAYER2],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [PLAYER2, PLAYER2, PLAYER2],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [PLAYER2, EMPTY, EMPTY],
      [PLAYER2, EMPTY, EMPTY],
      [PLAYER2, EMPTY, EMPTY],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [EMPTY, PLAYER2, EMPTY],
      [EMPTY, PLAYER2, EMPTY],
      [EMPTY, PLAYER2, EMPTY],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, PLAYER2],
      [EMPTY, EMPTY, PLAYER2],
      [EMPTY, EMPTY, PLAYER2],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [PLAYER2, EMPTY, EMPTY],
      [EMPTY, PLAYER2, EMPTY],
      [EMPTY, EMPTY, PLAYER2],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [EMPTY, EMPTY, PLAYER2],
      [EMPTY, PLAYER2, EMPTY],
      [PLAYER2, EMPTY, EMPTY],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [PLAYER1, PLAYER2, PLAYER1],
      [PLAYER1, PLAYER2, PLAYER2],
      [PLAYER2, PLAYER1, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER1, PLAYER2, PLAYER1],
      [PLAYER1, PLAYER2, PLAYER2],
      [PLAYER2, PLAYER1, PLAYER1],
    ],
    PLAYER2
  )
);
