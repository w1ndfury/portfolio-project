import React, { useState } from "react";
import "./TicTacToe.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import {
  Squares,
  CheckHorizontalWin,
  CheckVerticalWin,
  CheckDiagonallyWin,
  disableSquares,
} from "./services/SquaresObject";
import { GameStatus } from "./components/GameStatus";

function TicTacToe() {
  const [gameStatus, setGameStatus] = useState("");
  const [playerTurn, setPlayerTurn] = useState(1); // 1 or 2
  const [squares, setSquares] = useState(Squares);
  const [plays, setPlays] = useState(0);

  const navigate = useNavigate();

  const firstRow = Object.fromEntries(
    Object.entries(squares).filter(([key]) => key <= 2)
  );
  const secondRow = Object.fromEntries(
    Object.entries(squares).filter(([key]) => key > 2 && key <= 5)
  );
  const thirdRow = Object.fromEntries(
    Object.entries(squares).filter(([key]) => key > 5 && key <= 8)
  );

  function navigateToPlayground() {
    navigate("/portfolio-project/playground");
  }

  function playTriggered(squareKey) {
    const newArray = [...squares];
    if (playerTurn === 1) {
      const updatedValues = { value: "X", disabled: true, playedFrom: 1 };
      newArray[squareKey] = { ...newArray[squareKey], ...updatedValues };
      setSquares(newArray);
      setPlayerTurn(2);
    }
    if (playerTurn === 2) {
      const updatedValues = { value: "O", disabled: true, playedFrom: 2 };
      newArray[squareKey] = { ...newArray[squareKey], ...updatedValues };
      setSquares(newArray);
      setPlayerTurn(1);
    }

    setPlays((plays) => plays + 1);
    checkGameStatus(plays + 1, newArray);
  }

  function checkGameStatus(curPlays, curSquares) {
    if (curPlays < 5) return;
    const checkHorizontalWin = CheckHorizontalWin(curSquares);
    if (checkHorizontalWin !== "") {
      setGameStatus(checkHorizontalWin);
      setSquares(disableSquares(curSquares));
      return;
    }
    const checkVerticalWin = CheckVerticalWin(curSquares);
    if (checkVerticalWin !== "") {
      setGameStatus(checkVerticalWin);
      setSquares(disableSquares(curSquares));
      return;
    }
    const checkDiagonallyWin = CheckDiagonallyWin(curSquares);
    if (checkDiagonallyWin !== "") {
      setGameStatus(checkDiagonallyWin);
      setSquares(disableSquares(curSquares));
      return;
    }
    if (curPlays === 9) setGameStatus("Tie");
    return;
  }

  return (
    <section className="tic-tac-toe-page">
      <PrimaryButton
        classNames="piano-back-button"
        label="Back to Playground"
        onClick={navigateToPlayground}
      ></PrimaryButton>
      <div className="tic-tac-toe-container">
        <div className="tic-tac-toe-row">
          {Object.entries(firstRow).map(([key, square]) => (
            <button
              key={key}
              className={`tic-tac-toe-button ${
                square.playedFrom === 1 ? "player-1-play" : "player-2-play"
              } ${playerTurn === 1 ? "player-1-plays" : "player-2-plays"}`}
              disabled={square.disabled}
              onClick={() => {
                playTriggered(key);
              }}
            >
              {square.value}
            </button>
          ))}
        </div>
        <div className="tic-tac-toe-row">
          {Object.entries(secondRow).map(([key, square]) => (
            <button
              key={key}
              className={`tic-tac-toe-button ${
                square.playedFrom === 1 ? "player-1-play" : "player-2-play"
              } ${playerTurn === 1 ? "player-1-plays" : "player-2-plays"}`}
              disabled={square.disabled}
              onClick={() => {
                playTriggered(key);
              }}
            >
              {square.value}
            </button>
          ))}
        </div>
        <div className="tic-tac-toe-row">
          {Object.entries(thirdRow).map(([key, square]) => (
            <button
              key={key}
              className={`tic-tac-toe-button ${
                square.playedFrom === 1 ? "player-1-play" : "player-2-play"
              } ${playerTurn === 1 ? "player-1-plays" : "player-2-plays"}`}
              disabled={square.disabled}
              onClick={() => {
                playTriggered(key);
              }}
            >
              {square.value}
            </button>
          ))}
        </div>
      </div>
      <GameStatus
        playerTurn={playerTurn}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setPlayerTurn={setPlayerTurn}
        setSquares={setSquares}
        setPlays={setPlays}
      />
    </section>
  );
}

export default TicTacToe;
