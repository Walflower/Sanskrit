import "./Quiz.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";

function Quiz() {
  const { BASE_URL } = process.env;
  const [yogaPose, setYogaPose] = useState({});

  const getPose = async () => {
    try {
      const poseData = await axios.get(`${BASE_URL}/poses`);
      setYogaPose(poseData.data);
    } catch (error) {
      console.error("Error fetching pose data:", error);
    }
  };

  return (
    <>
      <header>
        <Logo />
      </header>

      <div>
        <div>blank</div>
        <img></img>
        <p>english name</p>
        <p>description</p>

        <div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
        </div>
      </div>
    </>
  );
}
export default Quiz;
