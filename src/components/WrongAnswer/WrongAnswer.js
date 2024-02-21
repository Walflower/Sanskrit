import "./WrongAnswer.scss";
import Logo from "../Logo/Logo";

function WrongAnswer() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <h1>Better luck next time!</h1>

      <div>
        <button>Try Again</button>
        <button>Show Answer</button>
      </div>
    </>
  );
}
export default WrongAnswer;
