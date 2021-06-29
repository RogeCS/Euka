import React from "react";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import { MdNotifications, MdInbox, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { logoutRequest } from "../actions";
import userIcon from "../assets/static/icons8-usuario-90.png";

import "../styles/components/Header.scss";

const Header = (props) => {
  const { sidebar, user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = "email=";
    document.cookie = "name=";
    document.cookie = "id=";
    document.cookie = "token=";
    props.logoutRequest({});
    window.location.href = "/login";
  };

  return (
    <div
      className={`dashboard-header ${
        sidebar ? "dashboard-header--margin" : ""
      }`}
    >
      <div className="dashboard-header__search">
        <MdSearch />
        <input
          className="dashboard-header__search-input"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <nav className="dashboard-navbar">
        <div className="dashboard-navbar__list">
          <div className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              <MdInbox />
            </a>
          </div>
          <div className="dashboard-navbar__bullet">
            <a href="/" className="dashboard-navbar__link">
              <MdNotifications />
            </a>
          </div>
        </div>
        <div className="header__menu">
          <div className="header__menu--profile">
            {hasUser ? (
              <img src={gravatar(user.email)} alt={user.email} />
            ) : (
              <img src={userIcon} alt="User icon" />
            )}
          </div>
          <ul className="header__menu-list">
            {hasUser ? (
              <>
                <li className="header__menu-bullet">
                  <a href="/">{user.name}</a>
                </li>
                <li className="header__menu-bullet">
                  <a href="#logout" onClick={handleLogout}>
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="header__menu-bullet">
                  <Link to="/login">Log in</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
