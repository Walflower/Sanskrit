import "./Quiz.scss";
import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";

function Quiz() {
  const BASE_URL = process.env.REACT_APP_API_BASE_PATH;
  const [yogaPose, setYogaPose] = useState([]);
  const [randomSelections, setRandomSelections] = useState([]);
  const [currentPose, setCurrentPose] = useState(0);

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

  const goForward = () => {
    setCurrentPose((clickedPose) => {
      return clickedPose + 1;
    });
  };

  if (!yogaPose[0]) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>Input Sanskrit name of pose</h1>

      <div>
        <p>Pose: {yogaPose[currentPose]?.pose}</p>
        <p>Sanskrit Name: {yogaPose[currentPose]?.sanskrit_name}</p>
        <img src={yogaPose[currentPose]?.photo} alt="yoga pose" />
        <p>Description: {yogaPose[currentPose]?.description}</p>

        <button onClick={goForward}>Next Question</button>
      </div>
    </>
  );
}
export default Quiz;
