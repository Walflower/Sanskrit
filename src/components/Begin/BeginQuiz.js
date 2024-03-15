import "./BeginQuiz.scss";
import { Link, useLocation } from "react-router-dom";
import First from "../../assets/images/first.png";
import One from "../../assets/images/one.png";
import Two from "../../assets/images/two.png";
import Three from "../../assets/images/three.png";
import Four from "../../assets/images/four.png";
import Five from "../../assets/images/five.png";
import Six from "../../assets/images/six.png";
import Seven from "../../assets/images/seven.png";
import Eight from "../../assets/images/eight.png";
import Nine from "../../assets/images/nine.png";
import Ten from "../../assets/images/ten.png";
import Eleven from "../../assets/images/eleven.png";
import Middle from "../../assets/images/middle.png";
import Last from "../../assets/images/last.png";
import User from "../User/User.js";
// import Sound from "../Sound/Sound.js";

function BeginQuiz() {
  return (
    <>
      {/* <Sound /> */}
      <User />
      <main className="begin">
        <h1 className="begin__title">Begin</h1>
        <Link to="/quiz">
          <button className="begin__button" style={{ cursor: "pointer" }}>
            START
          </button>
        </Link>
      </main>

      <div className="scrolling">
        <img className="scrolling__image" src={First} alt="Image 1" />
        <img className="scrolling__image" src={One} alt="Image 2" />
        <img className="scrolling__image" src={Two} alt="Image 3" />

        <img className="scrolling__image" src={Three} alt="Image 4" />
        <img className="scrolling__image" src={Middle} alt="Image 5" />
        <img className="scrolling__image" src={Four} alt="Image 6" />
        <img className="scrolling__image" src={Five} alt="Image 7" />
        <img className="scrolling__image" src={Six} alt="Image 8" />
        <img className="scrolling__image" src={Seven} alt="Image 9" />
        <img className="scrolling__image" src={Eight} alt="Image 10" />
        <img className="scrolling__image" src={Nine} alt="Image 11" />

        <img className="scrolling__image" src={Ten} alt="Image 12" />
        <img className="scrolling__image" src={Eleven} alt="Image 13" />
        <img className="scrolling__image" src={Last} alt="Image 14" />
      </div>
    </>
  );
}

export default BeginQuiz;
