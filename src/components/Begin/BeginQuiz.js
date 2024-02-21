import "./BeginQuiz.scss";
import { Link } from "react-router-dom";

function BeginQuiz() {
  return (
    <main className="large">
      <div className="begin">
        <h1 className="begin__title">Begin</h1>
        <Link to="/quiz">
          <button className="begin__button">START</button>
        </Link>
      </div>
    </main>
  );
}

export default BeginQuiz;
