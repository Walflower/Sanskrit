import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      alert("Please enter a valid email and matching passwords.");
      return;
    }

    //TODO
    try {
      // Send form data to the API
      const response = await axios.post("your_api_endpoint", formData);
      console.log("Registration successful:", response.data);

      //axios post request.

      navigate("/begin");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <main className="register">
      <h1 className="register__title">Register</h1>

      <form className="register__form">
        <section className="register__box">
          <div className="register__container">
            <label className="register__label">First Name:</label>
            <input
              className="register__input"
              placeholder="first name"
              type="text"
            ></input>
          </div>

          <div className="register__container">
            <label className="register__label">Last Name:</label>
            <input
              className="register__input"
              placeholder="last name"
              type="text"
            ></input>
          </div>
          <div className="register__container">
            <label className="register__label">Email:</label>
            <input
              className="register__input"
              placeholder="email"
              type="email"
            ></input>
          </div>

          <div className="register__container">
            <label className="register__label">Password:</label>
            <input
              className="register__input"
              placeholder="password"
              type="password"
            ></input>
          </div>

          <div className="register__container">
            <label className="register__label">Re-Enter Password:</label>
            <input
              className="register__input"
              placeholder="re-enter password"
              type="password"
            ></input>
          </div>
        </section>

        <button className="register__button" type="submit">
          SIGN UP
        </button>
      </form>
    </main>
  );
}
export default Register;
