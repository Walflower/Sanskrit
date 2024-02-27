import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeginQuiz from "./components/Begin/BeginQuiz";
import Quiz from "./components/Quiz/Quiz";
import Score from "./components/Score/Score";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/begin" element={<BeginQuiz />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
