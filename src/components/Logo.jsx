import React from "react";
import DarkLogo from "../assets/static/euka-dark-logo.svg";
import LightLogo from "../assets/static/euka-dark-logo.svg";

import "../styles/components/Logo.scss";

const Logo = ({ color }) => {
  return (
    <div className="logo">
      <a href="/" className="logo__link">
        <img
          className="logo__image"
          src={color == "primary" ? DarkLogo : LightLogo}
          alt="euka logo"
        />
      </a>
    </div>
  );
};

export default Logo;
