import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdNotifications, MdInbox, MdSearch } from "react-icons/md";

import "../styles/components/Header.scss";

const Header = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__search">
        <MdSearch />
        <input
          className="dashboard-header__search-input"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <nav className="dashboard-navbar">
        <ul className="dashboard-navbar__list">
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
