import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import { Squares } from "../services/SquaresObject";

export const GameStatus = (props) => {
  function onPlayAgain() {
    props.setGameStatus("");
    props.setPlayerTurn(1);
    props.setPlays(0);
    props.setSquares(Squares);
  }

  return (
    <div className="players-container">
      {props.gameStatus === "" && (
        <div className="players-turn-container">
          <p className="pp-text-large pp-margin-bottom-0">Player's turn: </p>
          <div
            className={`${
              props.playerTurn === 1
                ? "player-1-turn-container"
                : "player-1-container"
            }`}
          >
            <p className="pp-text-large pp-margin-bottom-0">Player 1</p>
          </div>
          <div
            className={`${
              props.playerTurn === 2
                ? "player-2-turn-container"
                : "player-2-container"
            }`}
          >
            <p className="pp-text-large pp-margin-bottom-0">Player 2</p>
          </div>
        </div>
      )}
      {props.gameStatus !== "" && (
        <div className="players-turn-container">
          <p className="pp-text-large pp-margin-bottom-0">{props.gameStatus}</p>
          <PrimaryButton
            label="Play again"
            onClick={onPlayAgain}
          ></PrimaryButton>
        </div>
      )}
    </div>
  );
};
