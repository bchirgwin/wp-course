'use strict';

function isWinner(b, c) {
  if (b[0][0] === c && b[0][1] === c && b[0][2] === c) {
    return true;
  }

  if (b[1][0] === c && b[1][1] === c && b[1][2] === c) {
    return true;
  }

  if (b[2][0] === c && b[2][1] === c && b[2][2] === c) {
    return true;
  }

  if (b[0][0] === c && b[1][0] === c && b[2][0] === c) {
    return true;
  }

  if (b[0][1] === c && b[1][1] === c && b[2][1] === c) {
    return true;
  }

  if (b[0][2] === c && b[1][2] === c && b[2][2] === c) {
    return true;
  }

  if (b[0][0] === c && b[1][1] === c && b[2][2] === c) {
    return true;
  }

  if (b[0][2] === c && b[1][1] === c && b[2][0] === c) {
    return true;
  }

  return false;
}

console.log(
  isWinner(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [2, 2, 2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  isWinner(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    1
  )
);

console.log(
  isWinner(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    2
  )
);
