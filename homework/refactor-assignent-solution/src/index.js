'use strict';

const PLAYER1 = 1;
const PLAYER2 = 2;

function isWinner(board, player) {
  function checkWin([x1, y1], [x2, y2], [x3, y3]) {
    return board[x1][y1] === player && board[x2][y2] === player && board[x3][y3] === player;
  }
  return (
    checkWin([0, 0], [0, 1], [0, 2]) ||
    checkWin([1, 0], [1, 1], [1, 2]) ||
    checkWin([2, 0], [2, 1], [2, 2]) ||
    checkWin([0, 0], [1, 0], [2, 0]) ||
    checkWin([0, 1], [1, 1], [2, 1]) ||
    checkWin([0, 2], [1, 2], [2, 2]) ||
    checkWin([0, 0], [1, 1], [2, 2]) ||
    checkWin([0, 2], [1, 1], [2, 0])
  );
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
