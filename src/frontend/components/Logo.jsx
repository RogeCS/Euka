import React from "react";
import DarkLogo from "../assets/static/darkIcon.png";
import LightLogo from "../assets/static/lightIcon.png";

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
