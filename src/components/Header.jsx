import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdNotifications, MdInbox } from "react-icons/md";
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
            <p className="dashboard-navbar__message">welcome to euka!</p>
          </li>
          <li className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              <MdInbox />
            </a>
          </li>
          <li className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              <MdNotifications />
            </a>
          </li>
          <li className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              <div className="logout">
                <FiLogOut />
                <p className="logout__text">log out</p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
