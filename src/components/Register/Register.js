import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="register">
      <h1 className="register__title">Register</h1>

      <form className="form">
        <div className="form__container">
          <label>First Name:</label>
          <input></input>
        </div>

        <div className="form__container">
          <label>Last Name:</label>
          <input></input>
        </div>
        <div className="form__container">
          <label>Email:</label>
          <input></input>
        </div>

        <div className="form__container">
          <label>Password:</label>
          <input></input>
        </div>

        <div className="form__container">
          <label>Re-Enter Password:</label>
          <input></input>
        </div>

        <Link to="/begin">
          <button className="form__button" type="submit">
            SIGN UP
          </button>
        </Link>
      </form>
    </main>
  );
}
export default Register;
