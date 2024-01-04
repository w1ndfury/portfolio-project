import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "./Playground.css";

function Playground() {
  const navigate = useNavigate();

  function onPianoClick() {
    navigate("/piano");
  }

  function onTicTacToeClick() {
    navigate("/tic-tac-toe");
  }

  return (
    <section className="intro-wraper">
      <div className="pp-flex-column playground-container">
        <PrimaryButton
          classNames="playground-button"
          label="Piano"
          onClick={onPianoClick}
        ></PrimaryButton>
        <PrimaryButton
          classNames="playground-button"
          label="Tic Tac Toe"
          onClick={onTicTacToeClick}
        ></PrimaryButton>
      </div>
    </section>
  );
}

export default Playground;
