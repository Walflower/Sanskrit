import "./Quiz.scss";
import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

function Quiz() {
  const BASE_URL = process.env.REACT_APP_API_BASE_PATH;
  const [yogaPose, setYogaPose] = useState([]);
  const [currentPose, setCurrentPose] = useState(0);
  const [guess, setGuess] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);

  //fetching all poses from api
  const getPose = async () => {
    try {
      const poseData = await axios.get(`${BASE_URL}/poses`);
      setYogaPose(poseData.data);
      console.log(poseData.data);
    } catch (error) {
      console.error("Error fetching pose data:", error);
    }
  };

  useEffect(() => {
    getPose();
  }, []);

  // const goForward = () => {
  //   setCurrentPose((clickedPose) => {
  //     return clickedPose + 1;
  //   });
  // };

  if (!yogaPose[0]) {
    return <p>loading...</p>;
  }
  //................................

  const handleGuess = () => {
    if (
      guess.trim().toLowerCase() ===
      yogaPose[currentPose]?.sanskrit_name.toLowerCase()
    ) {
      setShowCorrectAnswer(true);
    } else {
      setShowTryAgain(true);
    }
  };

  const handleTryAgain = () => {
    setGuess("");
    setShowTryAgain(false);
  };

  const handleSeeAnswer = () => {
    setShowCorrectAnswer(true);
  };

  const nextQuestion = () => {
    setCurrentPose(currentPose + 1);
    setShowCorrectAnswer(false);
    setShowTryAgain(false);
    setGuess("");
  };

  if (showCorrectAnswer) {
    return (
      <div>
        <h1>You're Correct!</h1>
        <p>The correct answer is: {yogaPose[currentPose]?.sanskrit_name}</p>
        {/* <Link to="/quiz"> */}
        <button onClick={nextQuestion}>Next Question</button>
        {/* </Link> */}
      </div>
    );
  }

  if (showTryAgain) {
    return (
      <div>
        <h1>Better Luck Next Time!</h1>
        <button onClick={handleTryAgain}>Try Again</button>
        <button onClick={handleSeeAnswer}>See Answer</button>
      </div>
    );
  }

  return (
    <>
      <h1>Input Sanskrit name of pose</h1>

      {/* <div>
        <p>Pose: {yogaPose[currentPose]?.pose}</p>
        <p>Sanskrit Name: {yogaPose[currentPose]?.sanskrit_name}</p>
        <img src={yogaPose[currentPose]?.photo} alt="yoga pose" />
        <p>Description: {yogaPose[currentPose]?.description}</p>

        <button onClick={goForward}>Next Question</button>
      </div> */}

      <div>
        <p>Pose: {yogaPose[currentPose]?.pose}</p>
        <img src={yogaPose[currentPose]?.photo} alt="yoga pose" />
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <p>Description: {yogaPose[currentPose]?.description}</p>
        <button onClick={handleGuess}>Submit Guess</button>
      </div>
    </>
  );
}
export default Quiz;
