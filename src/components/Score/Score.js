import "./Score.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Score() {
  const navigate = useNavigate();
  const location = useLocation();
  const { correctAnswers } = location.state;

  const handleToStart = () => {
    navigate("/begin");
  };

  return (
    <main className="score">
      <h1 className="score__title"> YOUR SCORE</h1>

      <div className="score__container">
        <p className="score__subtitle">{correctAnswers} out of 10 </p>
        <button className="score__button" onClick={handleToStart}>
          Back to Start
        </button>
      </div>
    </main>
  );
}
export default Score;
