import "./App.scss";
import BeginQuiz from "./components/Begin/BeginQuiz";
import Mission from "./components/Mission/Mission";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Mission />
      <BeginQuiz />
    </div>
  );
}

export default App;
