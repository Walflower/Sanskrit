import "./Score.scss";

import { useLocation } from "react-router-dom";

function Score() {
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
