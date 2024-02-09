'use strict';

const PLAYER1 = 1;
const PLAYER2 = 2;

function isWinner(board, player) {
  if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    return true;
  }

  if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    return true;
  }

  if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    return true;
  }

  if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true;
  }

  if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true;
  }

  if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    return true;
  }

  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

console.log(
  isWinner(
    [
      [PLAYER1, PLAYER1, PLAYER1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [PLAYER1, PLAYER1, PLAYER1],
      [0, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [0, 0, 0],
      [PLAYER1, PLAYER1, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER1, 0, 0],
      [PLAYER1, 0, 0],
      [PLAYER1, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [0, PLAYER1, 0],
      [0, PLAYER1, 0],
      [0, PLAYER1, 0],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [0, 0, PLAYER1],
      [0, 0, PLAYER1],
      [0, 0, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER1, 0, 0],
      [0, PLAYER1, 0],
      [0, 0, PLAYER1],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [0, 0, PLAYER1],
      [0, PLAYER1, 0],
      [PLAYER1, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  isWinner(
    [
      [PLAYER2, PLAYER2, PLAYER2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [PLAYER2, PLAYER2, PLAYER2],
      [0, 0, 0],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [0, 0, 0],
      [PLAYER2, PLAYER2, PLAYER2],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [PLAYER2, 0, 0],
      [PLAYER2, 0, 0],
      [PLAYER2, 0, 0],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [0, PLAYER2, 0],
      [0, PLAYER2, 0],
      [0, PLAYER2, 0],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [0, 0, PLAYER2],
      [0, 0, PLAYER2],
      [0, 0, PLAYER2],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [PLAYER2, 0, 0],
      [0, PLAYER2, 0],
      [0, 0, PLAYER2],
    ],
    PLAYER2
  )
);

console.log(
  isWinner(
    [
      [0, 0, PLAYER2],
      [0, PLAYER2, 0],
      [PLAYER2, 0, 0],
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
