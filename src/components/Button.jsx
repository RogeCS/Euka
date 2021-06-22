import React from "react";
import "../styles/components/Button.scss";

const Button = ({ title, type, onClick }) => {
  return (
    <div
      className={`button ${type == "secondary" ? "button--secondary" : ""}`}
      onClick={onClick}
    >
      <p className="button__text">{title}</p>
    </div>
  );
};

export default Button;
