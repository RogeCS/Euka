import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions/index.js";
import { AiFillCaretRight } from "react-icons/ai";
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";

import "../styles/containers/Login.scss";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <div className="login-container">
      <div className="login-container__box">
        <Logo color="primary" />
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-form__input"
            type="text"
            placeholder="mail"
            name="email"
            onChange={handleInput}
            required
          />
          <input
            className="login-form__input"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
            required
          />
          <Button color="primary" text="LogIn" link="#" />
        </form>
        <Link to="#" className="login-form__forgot-link">
          <p className="login-form__forgot"> forgot password?</p>
        </Link>
        <Link to="/register" className="login-form__register-link">
          <p className="login-form__register"> Register</p>
          <AiFillCaretRight />
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
