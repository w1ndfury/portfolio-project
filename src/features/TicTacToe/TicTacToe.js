import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import {
  Squares,
  CheckHorizontalWin,
  CheckVerticalWin,
  CheckDiagonallyWin,
} from "./services/SquaresObject";
import { GameStatus } from "./components/GameStatus";

function TicTacToe() {
  const [gameStatus, setGameStatus] = useState("");
  const [playerTurn, setPlayerTurn] = useState(1); // 1 or 2
  const [plays, setPlays] = useState(0); // max 9
  const [squares, setSquares] = useState(Squares);

  const navigate = useNavigate();

  useEffect(() => {
    if (plays < 5) return;
    const checkHorizontalWin = CheckHorizontalWin(squares);
    if (checkHorizontalWin !== "") {
      setGameStatus(checkHorizontalWin);
      return;
    }
    const checkVerticalWin = CheckVerticalWin(squares);
    if (checkVerticalWin !== "") {
      setGameStatus(checkVerticalWin);
      return;
    }
    const checkDiagonallyWin = CheckDiagonallyWin(squares);
    if (checkDiagonallyWin !== "") {
      setGameStatus(checkDiagonallyWin);
      return;
    }
    if (plays === 9) setGameStatus("Tie");
  }, [plays, squares]);

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
    navigate("/playground");
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
        setPlays={setPlays}
        setSquares={setSquares}
      />
    </section>
  );
}

export default TicTacToe;
