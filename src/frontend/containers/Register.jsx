import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AiFillCaretLeft } from "react-icons/ai";
import { registerRequest } from "../actions";
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";

import "../styles/containers/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <div className="register-container">
      <div className="register-container__box">
        <Logo />
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className="register-form__input"
            type="text"
            placeholder="name"
            name="name"
            onChange={handleInput}
            required
          />
          <input
            className="register-form__input"
            type="text"
            placeholder="mail"
            name="email"
            onChange={handleInput}
            required
          />
          <input
            className="register-form__input"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
            required
          />
          <Button color="secondary" text="register" link="#" />
        </form>
        <Link to="/login" className="register-form__login-link">
          <AiFillCaretLeft />
          <p className="register-form__login"> Log in</p>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
