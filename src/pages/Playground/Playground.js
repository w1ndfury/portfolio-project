import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "./Playground.css";

function Playground() {
  const navigate = useNavigate();

  function onHomeClick() {
    navigate("/portfolio-project/home");
  }

  function onPianoClick() {
    navigate("/portfolio-project/piano");
  }

  function onTicTacToeClick() {
    navigate("/portfolio-project/tic-tac-toe");
  }

  return (
    <section className="intro-wraper">
      <div className="pp-flex-column playground-container">
        <PrimaryButton
          classNames="playground-button pp-margin-bottom-large"
          label="Back to Home"
          onClick={onHomeClick}
        ></PrimaryButton>
        <PrimaryButton
          classNames="playground-button tablet-disabled"
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
