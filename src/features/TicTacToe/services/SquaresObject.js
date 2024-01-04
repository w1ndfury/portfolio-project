// squares.value = X or O
// squares.playedFrom = 1 or 2
export const Squares = [
  { x: 0, y: 0, disabled: false, value: "", playedFrom: 0 },
  { x: 1, y: 0, disabled: false, value: "", playedFrom: 0 },
  { x: 2, y: 0, disabled: false, value: "", playedFrom: 0 },
  { x: 0, y: 1, disabled: false, value: "", playedFrom: 0 },
  { x: 1, y: 1, disabled: false, value: "", playedFrom: 0 },
  { x: 2, y: 1, disabled: false, value: "", playedFrom: 0 },
  { x: 0, y: 2, disabled: false, value: "", playedFrom: 0 },
  { x: 1, y: 2, disabled: false, value: "", playedFrom: 0 },
  { x: 2, y: 2, disabled: false, value: "", playedFrom: 0 },
];

export const CheckVerticalWin = (squares) => {
  const verticalWin1 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.x === 0 && square.playedFrom === 1
    )
  );
  const verticalWin2 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.x === 1 && square.playedFrom === 1
    )
  );
  const verticalWin3 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.x === 2 && square.playedFrom === 1
    )
  );
  if (
    Object.keys(verticalWin1).length === 3 ||
    Object.keys(verticalWin2).length === 3 ||
    Object.keys(verticalWin3).length === 3
  ) {
    return "Player 1 Won";
  }

  const verticalWin4 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.x === 0 && square.playedFrom === 2
    )
  );
  const verticalWin5 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.x === 1 && square.playedFrom === 2
    )
  );
  const verticalWin6 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.x === 2 && square.playedFrom === 2
    )
  );
  if (
    Object.keys(verticalWin4).length === 3 ||
    Object.keys(verticalWin5).length === 3 ||
    Object.keys(verticalWin6).length === 3
  ) {
    return "Player 2 Won";
  }
  return "";
};

export const CheckHorizontalWin = (squares) => {
  const horizontalWin1 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === 0 && square.playedFrom === 1
    )
  );
  const horizontalWin2 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === 1 && square.playedFrom === 1
    )
  );
  const horizontalWin3 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === 2 && square.playedFrom === 1
    )
  );
  if (
    Object.keys(horizontalWin1).length === 3 ||
    Object.keys(horizontalWin2).length === 3 ||
    Object.keys(horizontalWin3).length === 3
  ) {
    return "Player 1 Won";
  }

  const horizontalWin4 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === 0 && square.playedFrom === 2
    )
  );
  const horizontalWin5 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === 1 && square.playedFrom === 2
    )
  );
  const horizontalWin6 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === 2 && square.playedFrom === 2
    )
  );
  if (
    Object.keys(horizontalWin4).length === 3 ||
    Object.keys(horizontalWin5).length === 3 ||
    Object.keys(horizontalWin6).length === 3
  ) {
    return "Player 2 won";
  }
  return "";
};

export const CheckDiagonallyWin = (squares) => {
  const diagonallyWin1 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === square.x && square.playedFrom === 1
    )
  );
  const diagonallyWin2 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) =>
        ((square.y === 1 && square.x === 1) ||
          (square.y === 0 && square.x === 2) ||
          (square.y === 2 && square.x === 0)) &&
        square.playedFrom === 1
    )
  );
  if (
    Object.keys(diagonallyWin1).length === 3 ||
    Object.keys(diagonallyWin2).length === 3
  ) {
    return "Player 1 Won";
  }

  const diagonallyWin3 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) => square.y === square.x && square.playedFrom === 2
    )
  );
  const diagonallyWin4 = Object.fromEntries(
    Object.entries(squares).filter(
      ([key, square]) =>
        ((square.y === 1 && square.x === 1) ||
          (square.y === 0 && square.x === 2) ||
          (square.y === 2 && square.x === 0)) &&
        square.playedFrom === 2
    )
  );
  if (
    Object.keys(diagonallyWin3).length === 3 ||
    Object.keys(diagonallyWin4).length === 3
  ) {
    return "Player 2 won";
  }
  return "";
};
