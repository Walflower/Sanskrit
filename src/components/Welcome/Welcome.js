import "./Welcome.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log("Email:", email);
      console.log("Password:", password);
      navigate("/begin");
    } catch (error) {
      alert("Invalid email or password");
      console.error("Invalid email or password", error);
    }
  };

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
              onChange={handleEmailChange}
            ></input>
          </div>

          <div className="form__container">
            <label className="form__label">Password:</label>
            <input
              className="form__input"
              placeholder="password"
              type="password"
              onChange={handlePasswordChange}
            ></input>
          </div>

          <button className="form__button" type="submit">
            SIGN IN
          </button>
        </form>

        <Link to="/register">
          <button className="button_register">REGISTER</button>
        </Link>
      </main>
    </div>
  );
}

export default Welcome;
