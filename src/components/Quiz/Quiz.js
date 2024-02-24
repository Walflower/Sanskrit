import "./Quiz.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SANSKRIT_CHARACTERS = {
  a: "a",
  ā: "ā",
  i: "i",
  ī: "ī",
  u: "u",
  ū: "ū",
  ŗ: "ŗ",
  ṝ: "ṝ",
  ḷ: "ḷ",
  ḹ: "ḹ",
  e: "e",
  ai: "ai",
  o: "o",
  au: "au",
  ṁ: "ṁ",
  ṃ: "ṃ",
  ḥ: "ḥ",

  k: "k",
  kh: "kh",
  g: "g",
  gh: "gh",
  ṅ: "ṅ",
  c: "c",
  ch: "ch",
  j: "j",
  jh: "jh",
  ñ: "ñ",
  ṭ: "ṭ",
  ṭh: "ṭh",

  ḍ: "ḍ",
  ḍh: "ḍh",
  ṇ: "ṇ",
  t: "t",
  th: "th",
  d: "d",
  dh: "dh",
  n: "n",
  p: "p",
  ph: "ph",

  b: "b",
  bh: "bh",
  m: "m",
  y: "y",
  r: "r",
  ṛ: "ṛ",
  l: "l",
  v: "v",
  ś: "ś",
  ṣ: "ṣ",
  s: "s",
  h: "h",
};

const { a } = SANSKRIT_CHARACTERS;
function Quiz() {
  const BASE_URL = process.env.REACT_APP_API_BASE_PATH;
  const [yogaPose, setYogaPose] = useState([]);
  const [currentPose, setCurrentPose] = useState(0);
  const [guess, setGuess] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [capitalizeNext, setCapitalizeNext] = useState(false);

  //fetching all poses from api, randomization of list is on backend
  const getPose = async () => {
    try {
      const poseData = await axios.get(`${BASE_URL}/poses`);
      setYogaPose(poseData.data);
    } catch (error) {
      console.error("Error fetching pose data:", error);
    }
  };

  useEffect(() => {
    getPose();
  }, []);

  if (!yogaPose[0]) {
    return <p>loading...</p>;
  }
  //................................

  //TODO will need to change handle to be able to intake submission from clicked characters
  const handleGuess = () => {
    if (guess.trim() == yogaPose[currentPose]?.sanskrit_name) {
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

  //When user clicks the next question button it will take them to the next question for the to guess again.
  const nextQuestion = () => {
    setCurrentPose(currentPose + 1);
    setShowCorrectAnswer(false);
    setShowTryAgain(false);
    setGuess("");
    setCapitalizeNext(false); // Reset capitalization mode
  };

  //................
  const addToGuess = (e) => {
    console.log(e.target.value);
    //I want to add the (e.target.value) to the setGuess empty sting
    setGuess(guess.concat("", e.target.value));
  };

  // const addToGuess = (value) => {
  //   setGuess(
  //     (prevGuess) => prevGuess + (capitalizeNext ? value.toUpperCase() : value)
  //   );
  //   setCapitalizeNext(false); // Reset capitalization mode after adding character
  // };

  const toggleCapitalizeNext = () => {
    setCapitalizeNext(true); // Activate capitalization mode
  };

  const removeCharacter = () => {
    setGuess(guess.slice(1));
  };

  if (showCorrectAnswer) {
    return (
      <div>
        <h1>You're Correct!</h1>
        <p>The correct answer is: {yogaPose[currentPose]?.sanskrit_name}</p>
        <button onClick={nextQuestion}>Next Question</button>
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

      <div>
        <p>Pose: {yogaPose[currentPose]?.pose}</p>
        <img src={yogaPose[currentPose]?.photo} alt="yoga pose" />
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={removeCharacter}>back</button>
        <p>Description: {yogaPose[currentPose]?.description}</p>

        <div>
          <button onClick={toggleCapitalizeNext}>Caps lock</button>

          <button value=" " onClick={addToGuess}>
            space
          </button>
          <button value="-" onClick={addToGuess}>
            -
          </button>
          <button value="a" onClick={addToGuess}>
            a
          </button>
          <button value="ā" onClick={addToGuess}>
            ā
          </button>
          <button value="i" onClick={addToGuess}>
            i
          </button>
          <button value="ī" onClick={addToGuess}>
            ī
          </button>
          <button value="u" onClick={addToGuess}>
            u
          </button>
          <button value="ū" onClick={addToGuess}>
            ū
          </button>
          <button value="ŗ" onClick={addToGuess}>
            ŗ
          </button>

          <button value="ṝ" onClick={addToGuess}>
            ṝ
          </button>
          <button value="ḷ" onClick={addToGuess}>
            ḷ
          </button>
          <button value="ḹ" onClick={addToGuess}>
            ḹ
          </button>
          <button value="e" onClick={addToGuess}>
            e
          </button>
          <button value="ai" onClick={addToGuess}>
            ai
          </button>

          <button value="o" onClick={addToGuess}>
            o
          </button>
          <button value="au" onClick={addToGuess}>
            au
          </button>
          <button value="ṁ" onClick={addToGuess}>
            ṁ
          </button>
          <button value="ṃ" onClick={addToGuess}>
            ṃ
          </button>
          <button value="ḥ" onClick={addToGuess}>
            ḥ
          </button>

          <button value="k" onClick={addToGuess}>
            k
          </button>
          <button value="kh" onClick={addToGuess}>
            kh
          </button>
          <button value="g" onClick={addToGuess}>
            g
          </button>

          <button value="ṛ" onClick={addToGuess}>
            ṛ
          </button>
          <button value="gh" onClick={addToGuess}>
            gh
          </button>
          <button value="ṅ" onClick={addToGuess}>
            ṅ
          </button>
          <button value="c" onClick={addToGuess}>
            c
          </button>
          <button value="ch" onClick={addToGuess}>
            ch
          </button>
          <button value="j" onClick={addToGuess}>
            j
          </button>
          <button value="jh" onClick={addToGuess}>
            jh
          </button>
          <button value="ñ" onClick={addToGuess}>
            ñ
          </button>
          <button value="ṭ" onClick={addToGuess}>
            ṭ
          </button>
          <button value="ṭh" onClick={addToGuess}>
            ṭh
          </button>

          <button value="ḍ" onClick={addToGuess}>
            ḍ
          </button>
          <button value="ḍh" onClick={addToGuess}>
            ḍh
          </button>
          <button value="ṇ" onClick={addToGuess}>
            ṇ
          </button>
          <button value="t" onClick={addToGuess}>
            t
          </button>
          <button value="th" onClick={addToGuess}>
            th
          </button>
          <button value="d" onClick={addToGuess}>
            d
          </button>
          <button value="dh" onClick={addToGuess}>
            dh
          </button>
          <button value="n" onClick={addToGuess}>
            n
          </button>
          <button value="p" onClick={addToGuess}>
            p
          </button>
          <button value="ph" onClick={addToGuess}>
            ph
          </button>

          <button value="b" onClick={addToGuess}>
            b
          </button>
          <button value="bh" onClick={addToGuess}>
            bh
          </button>
          <button value="m" onClick={addToGuess}>
            m
          </button>
          <button value="y" onClick={addToGuess}>
            y
          </button>
          <button value="r" onClick={addToGuess}>
            r
          </button>
          <button value="l" onClick={addToGuess}>
            l
          </button>
          <button value="v" onClick={addToGuess}>
            v
          </button>
          <button value="ś" onClick={addToGuess}>
            ś
          </button>
          <button value="ṣ" onClick={addToGuess}>
            ṣ
          </button>
          <button value="s" onClick={addToGuess}>
            s
          </button>
          <button value="h" onClick={addToGuess}>
            h
          </button>
        </div>
        <button onClick={handleGuess}>Submit Guess</button>
      </div>
    </>
  );
}
export default Quiz;
