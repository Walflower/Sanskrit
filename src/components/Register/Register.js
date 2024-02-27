import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="register">
      <h1 className="register__title">Register</h1>

      <form className="register__form">
        <div className="register__container">
          <label className="register__label">First Name:</label>
          <input className="register__input" placeholder="first name"></input>
        </div>

        <div className="register__container">
          <label className="register__label">Last Name:</label>
          <input className="register__input" placeholder="last name"></input>
        </div>
        <div className="register__container">
          <label className="register__label">Email:</label>
          <input className="register__input" placeholder="email"></input>
        </div>

        <div className="register__container">
          <label className="register__label">Password:</label>
          <input className="register__input" placeholder="password"></input>
        </div>

        <div className="register__container">
          <label className="register__label">Re-Enter Password:</label>
          <input
            className="register__input"
            placeholder="re-enter password"
          ></input>
        </div>

        <Link to="/begin">
          <button className="register__button" type="submit">
            SIGN UP
          </button>
        </Link>
      </form>
    </main>
  );
}
export default Register;
