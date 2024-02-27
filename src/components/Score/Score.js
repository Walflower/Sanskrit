import "./Score.scss";
import Logo from "../Logo/Logo";

import { useLocation } from "react-router-dom";

function Score() {
  //TODO currently there are only 9 questions!
  // const [correctAnswers, setCorrectAnswers] = useState(0); //state variable for correct answers
  // const { correctAnswers } = props;
  const location = useLocation();
  const { correctAnswers } = location.state;

  return (
    <>
      <h1> YOUR SCORE</h1>
      <div>
        <p>Correct Answers: {correctAnswers} of 10 </p>
      </div>
    </>
  );
}
export default Score;
