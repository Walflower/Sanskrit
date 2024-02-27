import "./Quiz.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [yogaPose, setYogaPose] = useState([]);
  const [currentPose, setCurrentPose] = useState(0);
  const [guess, setGuess] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [seeAnswer, setSeeAnswer] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

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

  const handleGuess = () => {
    if (guess.trim() == yogaPose[currentPose]?.sanskrit_name) {
      setShowCorrectAnswer(true);
      setCorrectAnswers((prevCount) => prevCount + 1);
      console.log(correctAnswers);
    } else {
      setShowTryAgain(true);
    }
  };

  const handleTryAgain = () => {
    setGuess("");
    setShowTryAgain(false);
  };

  const handleSeeAnswer = () => {
    setSeeAnswer(true);
  };

  //When user clicks the next question button it will take them to the next question for the to guess again.
  const nextQuestion = () => {
    if (currentPose === yogaPose.length - 1) {
      navigate("/score", { state: { correctAnswers: correctAnswers } });
    } else {
      setCurrentPose(currentPose + 1);
      setShowCorrectAnswer(false);
      setShowTryAgain(false);
      setSeeAnswer(false);
      setGuess("");

      setIsOpenOne(false);
      setIsOpenTwo(false);
    }
  };

  //.............................
  const addToGuess = (e) => {
    setGuess(guess.concat("", e.target.value));
  };

  const removeCharacter = () => {
    setGuess(guess.slice(0, -1));
  };

  //if the user clicks the "setSeeAnswer" button it will navigate them here
  if (seeAnswer) {
    return (
      <main className="quiz">
        <p className="quiz__title">{yogaPose[currentPose]?.sanskrit_name}</p>
        <p className="quizBody__paragraph">{yogaPose[currentPose]?.pose}</p>
        <img
          className="quizBody__image"
          src={yogaPose[currentPose]?.photo}
          alt="pose"
        />

        <section className="quizBody">
          <p className="quizBody__paragraph">Description:</p>
          <p className="quizBody__paragraph">
            {yogaPose[currentPose]?.description}
          </p>
          <p className="quizBody__paragraph">Tips:</p>
          <p className="quizBody__paragraph">{yogaPose[currentPose]?.tips}</p>
        </section>

        <button className="sanskrit__button" onClick={nextQuestion}>
          Next Question
        </button>
      </main>
    );
  }

  //if the user gets the answer correct it will navigate them here
  if (showCorrectAnswer) {
    return (
      <main className="quiz">
        <h1 className="quiz__title">You're Correct!</h1>
        <p className="quiz__title">{yogaPose[currentPose]?.sanskrit_name}</p>
        <p className="quizBody__paragraph">{yogaPose[currentPose]?.pose}</p>
        <img
          className="quizBody__image"
          src={yogaPose[currentPose]?.photo}
          alt="pose"
        />

        <section className="quizBody">
          <p className="quizBody__paragraph">Description:</p>
          <p className="quizBody__paragraph">
            {yogaPose[currentPose]?.description}
          </p>
          <p className="quizBody__paragraph">Tips:</p>
          <p className="quizBody__paragraph">{yogaPose[currentPose]?.tips}</p>
        </section>

        <button className="sanskrit__button" onClick={nextQuestion}>
          Next Question
        </button>
      </main>
    );
  }

  //if the user guesses wrong it will navigate them here
  if (showTryAgain) {
    return (
      <main className="wrongAnswer">
        <h1 className="wrongAnswer__title">Better Luck Next Time!</h1>

        <div className="wrongAnswer__container">
          <button className="wrongAnswer__button" onClick={handleTryAgain}>
            Try Again
          </button>
          <button className="wrongAnswer__button" onClick={handleSeeAnswer}>
            See Answer
          </button>
        </div>
      </main>
    );
  }

  //..............................default..............................
  return (
    <main className="quiz">
      <h1 className="quiz__title">{yogaPose[currentPose]?.pose}</h1>
      <img
        className="quizBody__image"
        src={yogaPose[currentPose]?.photo}
        alt="pose"
      />

      <section className="quizBody">
        <p className="quizBody__paragraph">Description:</p>
        <p className="quizBody__paragraph">
          {yogaPose[currentPose]?.description}
        </p>

        <div className="quizBody__container">
          <div onClick={() => setIsOpenOne(!isOpenOne)}>
            {!isOpenOne && (
              <span>
                <button className="quizBody__container-hint">Hint 1</button>
              </span>
            )}

            {isOpenOne && (
              <span>
                <p className="quizBody__paragraph">
                  {yogaPose[currentPose]?.hint_1}
                </p>
              </span>
            )}
          </div>
          <div onClick={() => setIsOpenTwo(!isOpenTwo)}>
            {!isOpenTwo && (
              <span>
                <button className="quizBody__container-hint">Hint 2</button>
              </span>
            )}

            {isOpenTwo && (
              <span>
                <p className="quizBody__paragraph">
                  {yogaPose[currentPose]?.hint_2}
                </p>
              </span>
            )}
          </div>
        </div>

        <label className="quizBody__paragraph">Sanskrit Translation</label>
        <input
          className="quizBody__input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="write your guess"
        />
        <div className="quizBody__divider" />

        <div className="sanskrit">
          <button
            className="sanskrit__characters sanskrit__characters--long"
            onClick={removeCharacter}
          >
            back
          </button>
          {/**TODO add a clear string function */}
          <button
            className="sanskrit__characters sanskrit__characters--long"
            onClick={removeCharacter}
          >
            clear
          </button>
          <button
            className="sanskrit__characters sanskrit__characters--long"
            value=" "
            onClick={addToGuess}
          >
            space
          </button>
          <button
            className="sanskrit__characters"
            value="-"
            onClick={addToGuess}
          >
            -
          </button>
          <button
            className="sanskrit__characters"
            value="a"
            onClick={addToGuess}
          >
            a
          </button>
          <button
            className="sanskrit__characters"
            value="ā"
            onClick={addToGuess}
          >
            ā
          </button>
          <button
            className="sanskrit__characters"
            value="i"
            onClick={addToGuess}
          >
            i
          </button>
          <button
            className="sanskrit__characters"
            value="ī"
            onClick={addToGuess}
          >
            ī
          </button>
          <button
            className="sanskrit__characters"
            value="u"
            onClick={addToGuess}
          >
            u
          </button>
          <button
            className="sanskrit__characters"
            value="ū"
            onClick={addToGuess}
          >
            ū
          </button>
          <button
            className="sanskrit__characters"
            value="ŗ"
            onClick={addToGuess}
          >
            ŗ
          </button>

          <button
            className="sanskrit__characters"
            value="ṝ"
            onClick={addToGuess}
          >
            ṝ
          </button>
          <button
            className="sanskrit__characters"
            value="ḷ"
            onClick={addToGuess}
          >
            ḷ
          </button>
          <button
            className="sanskrit__characters"
            value="ḹ"
            onClick={addToGuess}
          >
            ḹ
          </button>
          <button
            className="sanskrit__characters"
            value="e"
            onClick={addToGuess}
          >
            e
          </button>
          <button
            className="sanskrit__characters"
            value="ai"
            onClick={addToGuess}
          >
            ai
          </button>

          <button
            className="sanskrit__characters"
            value="o"
            onClick={addToGuess}
          >
            o
          </button>
          <button
            className="sanskrit__characters"
            value="au"
            onClick={addToGuess}
          >
            au
          </button>
          <button
            className="sanskrit__characters"
            value="ṁ"
            onClick={addToGuess}
          >
            ṁ
          </button>
          <button
            className="sanskrit__characters"
            value="ṃ"
            onClick={addToGuess}
          >
            ṃ
          </button>
          <button
            className="sanskrit__characters"
            value="ḥ"
            onClick={addToGuess}
          >
            ḥ
          </button>

          <button
            className="sanskrit__characters"
            value="k"
            onClick={addToGuess}
          >
            k
          </button>
          <button
            className="sanskrit__characters"
            value="kh"
            onClick={addToGuess}
          >
            kh
          </button>
          <button
            className="sanskrit__characters"
            value="g"
            onClick={addToGuess}
          >
            g
          </button>

          <button
            className="sanskrit__characters"
            value="ṛ"
            onClick={addToGuess}
          >
            ṛ
          </button>
          <button
            className="sanskrit__characters"
            value="gh"
            onClick={addToGuess}
          >
            gh
          </button>
          <button
            className="sanskrit__characters"
            value="ṅ"
            onClick={addToGuess}
          >
            ṅ
          </button>
          <button
            className="sanskrit__characters"
            value="c"
            onClick={addToGuess}
          >
            c
          </button>
          <button
            className="sanskrit__characters"
            value="ch"
            onClick={addToGuess}
          >
            ch
          </button>
          <button
            className="sanskrit__characters"
            value="j"
            onClick={addToGuess}
          >
            j
          </button>
          <button
            className="sanskrit__characters"
            value="jh"
            onClick={addToGuess}
          >
            jh
          </button>
          <button
            className="sanskrit__characters"
            value="ñ"
            onClick={addToGuess}
          >
            ñ
          </button>
          <button
            className="sanskrit__characters"
            value="ṭ"
            onClick={addToGuess}
          >
            ṭ
          </button>
          <button
            className="sanskrit__characters"
            value="ṭh"
            onClick={addToGuess}
          >
            ṭh
          </button>

          <button
            className="sanskrit__characters"
            value="ḍ"
            onClick={addToGuess}
          >
            ḍ
          </button>
          <button
            className="sanskrit__characters"
            value="ḍh"
            onClick={addToGuess}
          >
            ḍh
          </button>
          <button
            className="sanskrit__characters"
            value="ṇ"
            onClick={addToGuess}
          >
            ṇ
          </button>
          <button
            className="sanskrit__characters"
            value="t"
            onClick={addToGuess}
          >
            t
          </button>
          <button
            className="sanskrit__characters"
            value="th"
            onClick={addToGuess}
          >
            th
          </button>
          <button
            className="sanskrit__characters"
            value="d"
            onClick={addToGuess}
          >
            d
          </button>
          <button
            className="sanskrit__characters"
            value="dh"
            onClick={addToGuess}
          >
            dh
          </button>
          <button
            className="sanskrit__characters"
            value="n"
            onClick={addToGuess}
          >
            n
          </button>
          <button
            className="sanskrit__characters"
            value="p"
            onClick={addToGuess}
          >
            p
          </button>
          <button
            className="sanskrit__characters"
            value="ph"
            onClick={addToGuess}
          >
            ph
          </button>

          <button
            className="sanskrit__characters"
            value="b"
            onClick={addToGuess}
          >
            b
          </button>
          <button
            className="sanskrit__characters"
            value="bh"
            onClick={addToGuess}
          >
            bh
          </button>
          <button
            className="sanskrit__characters"
            value="m"
            onClick={addToGuess}
          >
            m
          </button>
          <button
            className="sanskrit__characters"
            value="y"
            onClick={addToGuess}
          >
            y
          </button>
          <button
            className="sanskrit__characters"
            value="r"
            onClick={addToGuess}
          >
            r
          </button>
          <button
            className="sanskrit__characters"
            value="l"
            onClick={addToGuess}
          >
            l
          </button>
          <button
            className="sanskrit__characters"
            value="v"
            onClick={addToGuess}
          >
            v
          </button>
          <button
            className="sanskrit__characters"
            value="ś"
            onClick={addToGuess}
          >
            ś
          </button>
          <button
            className="sanskrit__characters"
            value="ṣ"
            onClick={addToGuess}
          >
            ṣ
          </button>
          <button
            className="sanskrit__characters"
            value="s"
            onClick={addToGuess}
          >
            s
          </button>
          <button
            className="sanskrit__characters"
            value="h"
            onClick={addToGuess}
          >
            h
          </button>
          <button
            className="sanskrit__characters"
            value="I"
            onClick={addToGuess}
          >
            I
          </button>
          <button
            className="sanskrit__characters"
            value="II"
            onClick={addToGuess}
          >
            II
          </button>
          <button
            className="sanskrit__characters"
            value="III"
            onClick={addToGuess}
          >
            III
          </button>
        </div>

        <button className="sanskrit__button" onClick={handleGuess}>
          Submit Guess
        </button>
      </section>
    </main>
  );
}
export default Quiz;
