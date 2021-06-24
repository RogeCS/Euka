import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Button.scss";

const Button = ({ text, color, link, onClick }) => {
  return (
    <button
      className={`button ${color == "secondary" ? "button--secondary" : ""}`}
      onClick={onClick}
    >
      <p className="button__text">{text}</p>
    </button>
  );
};

export default Button;
