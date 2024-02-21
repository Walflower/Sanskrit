import "./App.scss";
import BeginQuiz from "./components/Begin/BeginQuiz";
import Mission from "./components/Mission/Mission";
import Quiz from "./components/Quiz/Quiz";
import Score from "./components/Score/Score";
import Welcome from "./components/Welcome/Welcome";
import WrongAnswer from "./components/WrongAnswer/WrongAnswer";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Mission />
      <BeginQuiz />
      <Quiz />
      <WrongAnswer />
      <Score />
    </div>
  );
}

export default App;
