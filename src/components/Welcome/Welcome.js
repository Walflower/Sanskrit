import "./Welcome.scss";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1 className="welcome__title">Welcome</h1>

      <main className="main">
        <form className="form">
          <div className="form__container">
            <label className="form__label">Email:</label>
            <input
              className="form__input"
              placeholder="email address"
              type="text"
            ></input>
          </div>

          <div className="form__container">
            <label className="form__label">Password:</label>
            <input
              className="form__input"
              placeholder="password"
              type="text"
            ></input>
          </div>

          <Link to="/begin">
            <button className="form__button" type="submit">
              SIGN IN
            </button>
          </Link>
        </form>

        <Link to="/register">
          <button className="button_register">REGISTER</button>
        </Link>
      </main>
    </div>
  );
}

export default Welcome;
