import React from "react";
import { FaUser } from "react-icons/fa";
import DarkLogo from "../assets/static/euka-dark-logo.svg";

import "../styles/components/Header.scss";

const Header = () => {
  return (
    <div className="dashboard-header">
      <div className="logo">
        <a href="/" className="logo__link">
          <img className="logo__image" src={DarkLogo} alt="euka logo" />
        </a>
      </div>
      <nav className="dashboard-navbar">
        <ul className="dashboard-navbar__list">
          <li className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              link 1
            </a>
          </li>
          <li className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              link 2
            </a>
          </li>
          <li className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              link 3
            </a>
          </li>
        </ul>
        <div className="dashboard-navbar__profile">
          <FaUser />
        </div>
      </nav>
    </div>
  );
};

export default Header;
