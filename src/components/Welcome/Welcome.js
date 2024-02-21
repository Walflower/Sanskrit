import "./Welcome.scss";
import { Link } from "react-router-dom";

//would be nice to fluid switch from portrait to landscape mod.
//maybe with and orientation button

//TODO great a component where the user routes to when the register button is clicked
//TODO make header component
function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>

      <main className="main">
        <form className="form">
          <h2>Login</h2>

          <div className="form__container">
            <label>Email:</label>
            <input></input>
          </div>

          <div className="form__container">
            <label>Password:</label>
            <input></input>
          </div>

          <Link to="/begin">
            <button className="form__button" type="submit">
              LOGIN
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
